import librosa, numpy as np, re, json
SRC="/root/.claude/uploads/07820a2a-ddd4-58bb-a8c0-de460646819b/f1a5c0b3-velariomusic-lofi-hip-hop-582182.mp3"
y, sr = librosa.load(SRC, sr=22050, mono=True)
_, beats = librosa.beat.beat_track(y=y, sr=sr, units='time')
DROP_TRACK = beats[16]           # kick enters on this downbeat
OFFSET = DROP_TRACK - 5.0        # track time at video t=0
vb = beats - OFFSET              # beat times in video time
vb = vb[(vb > -1) & (vb < 60)]
i0 = int(np.argmin(abs(vb - 5.0)))
down = [float(vb[i]) for i in range(i0 % 4, len(vb), 4)]  # downbeats
halfs = sorted(set(np.round(np.concatenate([vb, (vb[:-1] + vb[1:]) / 2]), 3)))
def D(x): return min(down, key=lambda d: abs(d - x))
def snap(x): return float(min(halfs, key=lambda h: abs(h - x)))
old = [(0, 5), (5, 11), (11, 20.5), (20.5, 31), (31, 37.5), (37.5, 44.5), (44.5, 60)]
bounds = [0, 5.0, D(10.4), D(21.2), D(32.0), D(37.3), D(45.4)]
new = [(bounds[i], bounds[i + 1] if i + 1 < len(bounds) else 60) for i in range(len(bounds))]
print("offset", round(OFFSET, 3), "bounds", [round(b, 2) for b in bounds])
def remap(x, si):
    (a0, b0), (a1, b1) = old[si], new[si]
    if si in (0, 6): return a1 + (x - a0)
    return a1 + (x - a0) * (b1 - a1) / (b0 - a0)
b = open('body.html').read()
parts = re.split(r'(<section class="sc[^>]*>)', b)
out = parts[0]; si = -1
for p in parts[1:]:
    if p.startswith('<section class="sc'):
        si += 1
        a1, b1 = new[si]
        p = re.sub(r'data-a="[^"]*"', 'data-a="%.3f"' % a1, p)
        p = re.sub(r'data-b="[^"]*"', 'data-b="%.3f"' % (b1 if si < 6 else 60), p)
        out += p; continue
    def rep(m):
        k, v = m.group(1), float(m.group(2))
        x = remap(v, si)
        if k in ('t', 'hl', 'c'): x = snap(x)
        return 'data-%s="%.3f"' % (k, x)
    out += re.sub(r'data-(t|draw|hl|c)="([\d.]+)"', rep, p)
open('body_beat.html', 'w').write(out)
json.dump({"offset": OFFSET, "beats": [round(float(v), 3) for v in vb if v > -0.7], "bounds": bounds,
           "map": {"crown1": snap(remap(7.0, 1)), "crown2": snap(remap(32.4, 4)),
                   "g1a": remap(11.4, 2), "g1b": remap(12.2, 2), "g2a": remap(20.2, 2), "g2b": remap(20.7, 2),
                   "g3a": remap(44.8, 6), "g3b": remap(45.6, 6)}}, open('beat.json', 'w'))

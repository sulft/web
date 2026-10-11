
  REAL = 52;
  // Beat grid of the soundtrack in video time (lofi, ~89 BPM; the kick drops at 5 s)
  var BEATS = [-0.433, 0.263, 0.937, 1.61, 2.306, 3.003, 3.653, 4.327, 5.0, 5.697, 6.37, 7.067, 7.74, 8.437, 9.11, 9.783, 10.457, 11.153, 11.827, 12.523, 13.197, 13.893, 14.567, 15.24, 15.913, 16.61, 17.283, 17.98, 18.653, 19.35, 20.023, 20.697, 21.37, 22.067, 22.74, 23.413, 24.11, 24.807, 25.48, 26.153, 26.827, 27.523, 28.197, 28.893, 29.567, 30.263, 30.937, 31.61, 32.283, 32.98, 33.653, 34.35, 35.023, 35.697, 36.37, 37.067, 37.74, 38.437, 39.11, 39.807, 40.48, 41.177, 41.827, 42.523, 43.197, 43.893, 44.567, 45.263, 45.937, 46.61, 47.284, 47.98, 48.654, 49.35, 50.023, 50.697, 51.37, 52.067, 52.74, 53.437, 54.11, 54.807, 55.48, 56.154, 56.827, 57.524, 58.197, 58.894, 59.567];
  function beatAt(t) {
    var n = -1;
    for (var i = 0; i < BEATS.length && BEATS[i] <= t; i++) n = i;
    if (n < 0) return 0;
    var ibi = (BEATS[n + 1] || BEATS[n] + 0.673) - BEATS[n], fr = (t - BEATS[n]) / ibi;
    return n + (fr < 0.18 ? back(fr / 0.18) : 1);
  }
  var $ = function (id) { return document.getElementById(id); };
  $("bgdial").innerHTML = dialSvg(620, 1080, 1250, false);
  $("dkdial").innerHTML = dialSvg(420, 900, 1120, true);
  $("dkdial2").innerHTML = dialSvg(380, 940, 1100, true);
  var gearList = train([
    { id: "a", x: 1000, y: 1180, n: 36, r: 150 },
    { id: "b", mesh: "a", angle: 290, n: 12, accent: true },
    { id: "c", mesh: "b", angle: 330, n: 24 }
  ]);
  $("gears").innerHTML = gearList.map(function (gr, k) {
    var c1 = gr.accent ? ' class="acg"' : "", c2 = gr.accent ? ' class="acg"' : ' class="st"';
    return '<g transform="translate(' + gr.x + " " + gr.y + ')"><g id="gear' + k + '"><path' + c1 + ' d="' + gr.thin + '"/><path' + c2 + ' d="' + gr.strong + '"/></g></g>';
  }).join("");
  function rots(svg) {
    var o = {};
    Array.prototype.forEach.call(svg.querySelectorAll("[data-rot]"), function (g) { o[g.getAttribute("data-rot")] = g; });
    return o;
  }
  // Fallback hook art (used when hook.mp4 is absent): a dial over a meshing gear train, lit in teal
  var hkTrain = train([
    { id: "a", x: 300, y: 430, n: 40, r: 260 },
    { id: "b", mesh: "a", angle: 120, n: 14, accent: true },
    { id: "c", mesh: "b", angle: 70, n: 30 },
    { id: "d", mesh: "c", angle: 160, n: 12, accent: true }
  ]);
  $("hookart").innerHTML = dialSvg(330, 690, 600, true) + hkTrain.map(function (gr, k) {
    var c1 = gr.accent ? ' class="acg"' : "", c2 = gr.accent ? ' class="acg"' : ' class="st"';
    return '<g transform="translate(' + gr.x + " " + gr.y + ')"><g id="hkg' + k + '"><path' + c1 + ' d="' + gr.thin + '"/><path' + c2 + ' d="' + gr.strong + '"/></g></g>';
  }).join("");
  var hkEls = hkTrain.map(function (g, k) { return $("hkg" + k); }), hk = rots($("hookart"));
  var bg = rots($("bgdial")), dk = rots($("dkdial")), dk2 = rots($("dkdial2"));

  // Scenes are declared in the markup: data-t (entry time), data-fx (entry style), data-draw, data-hl, data-count
  var scenes = all(document, ".sc").map(function (el) {
    return {
      el: el, a: +el.dataset.a, b: +el.dataset.b, dark: el.classList.contains("dark"),
      items: all(el, "[data-t]").map(function (n) {
        return { el: n, t: +n.dataset.t, fx: n.dataset.fx || "up", words: n.dataset.fx === "words" ? all(n, ".w") : null };
      }),
      draws: all(el, "[data-draw]").map(function (n) { n.style.strokeDasharray = "1"; return { el: n, t: +n.dataset.draw, d: +(n.dataset.d || 0.5) }; }),
      hls: all(el, "[data-hl]").map(function (n) { return { el: n, t: +n.dataset.hl, h: n.classList.contains("sk") ? ".08em" : ".2em" }; }),
      counts: all(el, "[data-count]").map(function (n) { return { el: n, v: +n.dataset.count, t: +n.dataset.c }; })
    };
  });
  function renderItem(it, t) {
    var p = P(t, it.t, it.t + 0.5), e = eo(p);
    if (it.words) {
      it.words.forEach(function (w, i) {
        var q = eo(P(t, it.t + i * 0.07, it.t + i * 0.07 + 0.5));
        css(w, q, "translateY(" + r2((1 - q) * 46) + "px)");
      });
      return;
    }
    if (it.fx === "pop") css(it.el, P(t, it.t, it.t + 0.15), "scale(" + r2(0.7 + 0.3 * back(P(t, it.t, it.t + 0.45))) + ")");
    else if (it.fx === "right") css(it.el, e, "translateX(" + r2((1 - e) * 90) + "px)");
    else if (it.fx === "left") css(it.el, e, "translateX(" + r2((e - 1) * 90) + "px)");
    else if (it.fx === "fade") css(it.el, e);
    else css(it.el, e, "translateY(" + r2((1 - e) * 40) + "px)");
  }

  var wm = $("wm"), flash = $("flash"), hook = $("hook"), hookOk = true;
  hook.addEventListener("error", function () { hookOk = false; hook.classList.add("off"); });
  hook.addEventListener("loadeddata", function () { $("hookart").style.display = "none"; });
  var gearsSvg = $("gears"), gearEls = gearList.map(function (g, k) { return $("gear" + k); });
  var HOOK_END = 5.3;

  function render(t) {
    bg.sec.setAttribute("transform", "rotate(" + r2(beatAt(t) * 6) + ")");
    bg.minute.setAttribute("transform", "rotate(" + r2(320 + t * 0.8) + ")");
    bg.hour.setAttribute("transform", "rotate(" + r2(250 + t * 0.07) + ")");
    bg.body.setAttribute("transform", "rotate(" + r2(-t * 0.4) + ")");
    // Gears turn under the checklist and the end card
    gearsSvg.style.opacity = Math.max(P(t, 10.92, 11.84) * (1 - P(t, 21.03, 21.60)), P(t, 46.24, 47.04));
    gearList.forEach(function (g, k) { gearEls[k].setAttribute("transform", "rotate(" + r2(g.phase + g.dir * (216 / g.n) * t) + ")"); });

    scenes.forEach(function (s) {
      var on = t >= s.a - 0.31 && t < s.b + 0.45;
      if (!s.dark) on = t >= s.a - 0.01 && t < s.b + 0.45;
      vis(s.el, on);
      if (!on) return;
      if (s.dark) {
        var wIn = eio(P(t, s.a - 0.3, s.a + 0.3)), wOut = eio(P(t, s.b, s.b + 0.45));
        s.el.style.clipPath = "inset(" + r2((1 - wIn) * 100) + "% 0 " + r2(wOut * 100) + "% 0)";
      } else if (!s.el.classList.contains("vid")) {
        var out = eio(P(t, s.b, s.b + 0.4));
        css(s.el, 1 - out, "translateY(" + r2(-36 * out) + "px)");
      }
      s.items.forEach(function (it) { renderItem(it, t); });
      s.draws.forEach(function (d) { d.el.style.strokeDashoffset = r2(1 - eo(P(t, d.t, d.t + d.d))); });
      s.hls.forEach(function (h) { band(h.el, P(t, h.t, h.t + 0.55), h.h); });
      s.counts.forEach(function (c) { c.el.textContent = money(Math.round(c.v * eo(P(t, c.t, c.t + 0.9)))); });
    });

    // Hook: slow push-in on the footage, then a white tick-flash into the plum wipe
    hook.style.transform = "scale(" + r2(1.04 + 0.08 * P(t, 0, 5)) + ")";
    if (t < 5.6) {
      $("hookart").style.transform = "scale(" + r2(1.25 + 0.25 * eio(P(t, 0, 5))) + ") rotate(" + r2(-6 + 3 * P(t, 0, 5)) + "deg)";
      hkTrain.forEach(function (g, k) { hkEls[k].setAttribute("transform", "rotate(" + r2(g.phase + g.dir * (360 / g.n) * t * 1.2) + ")"); });
      // The seconds hand ticks once per second, with a small overshoot
      hk.sec.setAttribute("transform", "rotate(" + r2(beatAt(t) * 6 + 180) + ")");
      hk.minute.setAttribute("transform", "rotate(52)");
      hk.hour.setAttribute("transform", "rotate(318)");
    }
    flash.style.opacity = r2(0.85 * P(t, 4.82, 5.0) * (1 - P(t, 5.0, 5.4)));
    // Dark dials
    dk.sec.setAttribute("transform", "rotate(" + r2(200 + beatAt(t) * 6) + ")");
    dk.minute.setAttribute("transform", "rotate(" + r2(130 + t * 1.5) + ")");
    dk.hour.setAttribute("transform", "rotate(305)");
    dk.crown.setAttribute("transform", "translate(" + r2(-26 * (1 - eo(P(t, 6.72, 7.22)))) + " 0)");
    dk2.sec.setAttribute("transform", "rotate(" + r2(40 + beatAt(t) * 6) + ")");
    dk2.minute.setAttribute("transform", "rotate(" + r2(10 + t * 1.5) + ")");
    dk2.hour.setAttribute("transform", "rotate(70)");
    dk2.crown.setAttribute("transform", "translate(" + r2(-26 * (1 - eo(P(t, 33.32, 33.82)))) + " 0)");
    var light = t < 10.66 || (t >= 32.18 && t < 37.94);
    wm.classList.toggle("lt", light);
  }

  // Player
  var root = $("root"), stage = $("stage"), wrap = $("wrap");
  var playBtn = $("play"), scrub = $("scrub"), timeEl = $("time"), ov = $("playov"), ovLab = $("playlab");
  var t = 0, playing = false, last = null, started = false;
  var music = null;
  try { music = new Audio("musique-lofi.mp3"); music.preload = "auto"; } catch (err) { music = null; }
  var soundBtn = $("sound");
  function audioReady() { return music && !music.paused && music.readyState >= 2 && !music.seeking; }
  function audioPlay() {
    if (!music) return;
    try { music.currentTime = Math.min(t, REAL); var pr = music.play(); if (pr && pr.catch) pr.catch(function () {}); } catch (err) {}
  }
  function audioPause() { if (music) { try { music.pause(); } catch (err) {} } }
  function hookSync() {
    if (playing && t < HOOK_END) {
      if (Math.abs(hook.currentTime - t) > 0.25) { try { hook.currentTime = Math.min(t, (hook.duration || 5) - 0.05); } catch (err) {} }
      if (hook.paused) { var pr = hook.play(); if (pr && pr.catch) pr.catch(function () {}); }
    } else if (!hook.paused) hook.pause();
  }
  soundBtn.addEventListener("click", function () {
    if (!music) return;
    music.muted = !music.muted;
    soundBtn.textContent = music.muted ? "Remettre le son" : "Couper le son";
    soundBtn.setAttribute("aria-pressed", music.muted ? "true" : "false");
  });
  function fit() { var w = wrap.clientWidth; if (w) stage.style.setProperty("--s", (w / 1080).toFixed(4)); }
  fit();
  if (window.ResizeObserver) new ResizeObserver(fit).observe(wrap); else window.addEventListener("resize", fit);
  function fmt(x) { var s = Math.floor(x + 0.0001), m = Math.floor(s / 60); s -= m * 60; return m + ":" + (s < 10 ? "0" : "") + s; }
  function sync() {
    render(t);
    hookSync();
    scrub.value = t.toFixed(2);
    timeEl.textContent = fmt(t) + " / 0:52";
    playBtn.textContent = playing ? "Pause" : (t >= REAL ? "Revoir" : "Lecture");
    ov.hidden = playing;
    ovLab.textContent = !started ? "Lire la vidéo · 52 s" : (t >= REAL ? "Revoir" : "Reprendre");
    ov.setAttribute("aria-label", ovLab.textContent);
  }
  function play() { if (t >= REAL) t = 0; started = true; playing = true; last = null; audioPlay(); sync(); }
  function pause() { playing = false; audioPause(); sync(); }
  function toggle() { if (playing) pause(); else play(); }
  function seek(x) {
    t = Math.max(0, Math.min(REAL, x));
    if (music) { try { music.currentTime = t; } catch (err) {} }
    if (t < HOOK_END) { try { hook.currentTime = Math.min(t, (hook.duration || 5) - 0.05); } catch (err) {} }
    sync();
  }
  function tick(now) {
    if (playing) {
      if (last !== null) {
        if (audioReady() && Math.abs(music.currentTime - t) < 1) t = music.currentTime;
        else t += Math.min(0.1, (now - last) / 1000);
        if (t >= REAL) { t = REAL; playing = false; audioPause(); }
        sync();
      }
      last = now;
    }
    requestAnimationFrame(tick);
  }
  playBtn.addEventListener("click", toggle);
  ov.addEventListener("click", play);
  stage.addEventListener("click", toggle);
  scrub.addEventListener("input", function () { started = true; playing = false; audioPause(); seek(parseFloat(scrub.value) || 0); });
  document.addEventListener("keydown", function (e) {
    var tg = (e.target && e.target.tagName) || "";
    if ((e.key === " " || e.key === "k") && tg !== "BUTTON" && tg !== "INPUT") { e.preventDefault(); toggle(); }
  });

  // Hooks used to export the same animation as an MP4 (returns a promise while the hook footage seeks)
  window.__render = function (x) {
    render(x);
    if (x >= HOOK_END || !hookOk || hook.readyState < 1) return Promise.resolve();
    return new Promise(function (res) {
      var target = Math.min(x, (hook.duration || 5) - 0.04);
      if (Math.abs(hook.currentTime - target) < 0.001 && hook.readyState >= 2) return res();
      var done = function () { hook.removeEventListener("seeked", done); res(); };
      hook.addEventListener("seeked", done);
      hook.currentTime = target;
    });
  };
  window.__capture = function () { root.classList.add("capture"); stage.style.setProperty("--s", "1"); ov.hidden = true; };

  // At rest, show the hook frame with its full line so the thumbnail reads
  t = 4.2; render(t); t = 0;
  try { hook.currentTime = 2.5; } catch (err) {}
  scrub.value = "0";
  ov.hidden = false;
  requestAnimationFrame(tick);
})();
</script>

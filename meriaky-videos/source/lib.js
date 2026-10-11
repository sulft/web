  var TAU = Math.PI * 2, REAL = 90;
  function r2(n) { return Math.round(n * 100) / 100; }
  function pt(r, a) { return [r2(r * Math.sin(a)), r2(-r * Math.cos(a))]; }
  function seg(a, b) { return "M" + a[0] + " " + a[1] + "L" + b[0] + " " + b[1]; }
  function circ(r, c) {
    var x = c ? c[0] : 0, y = c ? c[1] : 0, R = r2(r);
    return "M" + r2(x - R) + " " + y + "a" + R + " " + R + " 0 1 0 " + r2(2 * R) + " 0a" + R + " " + R + " 0 1 0 " + r2(-2 * R) + " 0";
  }
  function dial(r) {
    var thin = circ(r) + circ(r * 0.955), strong = "";
    for (var i = 0; i < 60; i++) {
      var a = (i * TAU) / 60;
      if (i % 5 === 0) {
        var off = r * 0.012, v = [Math.cos(a) * off, Math.sin(a) * off], A = pt(r * 0.93, a), B = pt(r * 0.8, a);
        strong += seg([r2(A[0] - v[0]), r2(A[1] - v[1])], [r2(B[0] - v[0]), r2(B[1] - v[1])]);
        strong += seg([r2(A[0] + v[0]), r2(A[1] + v[1])], [r2(B[0] + v[0]), r2(B[1] + v[1])]);
      } else {
        thin += seg(pt(r * 0.93, a), pt(r * 0.895, a));
      }
    }
    var w = Math.max(r * 0.03, 4), q = r2;
    var hour = "M" + q(-w) + " " + q(r * 0.1) + "L" + q(-w * 0.8) + " " + q(-r * 0.42) + "L0 " + q(-r * 0.5) + "L" + q(w * 0.8) + " " + q(-r * 0.42) + "L" + q(w) + " " + q(r * 0.1) + "Z";
    var minute = "M" + q(-w * 0.7) + " " + q(r * 0.12) + "L" + q(-w * 0.55) + " " + q(-r * 0.74) + "L0 " + q(-r * 0.8) + "L" + q(w * 0.55) + " " + q(-r * 0.74) + "L" + q(w * 0.7) + " " + q(r * 0.12) + "Z";
    return { thin: thin, strong: strong, hour: hour, minute: minute, secLine: seg([0, q(r * 0.2)], [0, q(-r * 0.9)]), secDot: circ(r * 0.028, [0, q(r * 0.14)]), hub: circ(r * 0.022) };
  }
  function crown(r) {
    var x1 = r + 34, cw = 46, h = 32, rr = 7;
    var body = "M" + (x1 + rr) + " " + -h + "H" + (x1 + cw - rr) + "Q" + (x1 + cw) + " " + -h + " " + (x1 + cw) + " " + (-h + rr) + "V" + (h - rr) + "Q" + (x1 + cw) + " " + h + " " + (x1 + cw - rr) + " " + h + "H" + (x1 + rr) + "Q" + x1 + " " + h + " " + x1 + " " + (h - rr) + "V" + (-h + rr) + "Q" + x1 + " " + -h + " " + (x1 + rr) + " " + -h + "Z";
    var knurl = "";
    for (var k = 1; k <= 4; k++) { var x = x1 + (cw * k) / 5; knurl += "M" + r2(x) + " " + (-h + 7) + "L" + r2(x) + " " + (h - 7); }
    return { body: body, knurl: knurl, stem: "M" + (r - 2) + " -7H" + x1 + "M" + (r - 2) + " 7H" + x1 + "M" + (r - 2) + " -16V16" };
  }
  function gearPath(n, r, d) {
    var rr = r - d, p = TAU / n, s = "";
    for (var i = 0; i < n; i++) {
      var a = i * p;
      var P0 = pt(rr, a - 0.26 * p), P1 = pt(r, a - 0.13 * p), P2 = pt(r, a + 0.13 * p), P3 = pt(rr, a + 0.26 * p), P4 = pt(rr, a + 0.74 * p);
      s += (i ? "L" : "M") + P0[0] + " " + P0[1] + "L" + P1[0] + " " + P1[1] + "A" + r2(r) + " " + r2(r) + " 0 0 1 " + P2[0] + " " + P2[1] + "L" + P3[0] + " " + P3[1] + "A" + r2(rr) + " " + r2(rr) + " 0 0 1 " + P4[0] + " " + P4[1];
    }
    return s + "Z";
  }
  function gearParts(n, r, d) {
    var rim = r * 0.1, hub = Math.max(r * 0.14, 8), sp = n >= 20 ? 5 : 0, ri = r - d - rim, thin = gearPath(n, r, d);
    if (sp && ri > hub * 2) {
      thin += circ(ri);
      var w = Math.max(r * 0.045, 4);
      for (var i = 0; i < sp; i++) {
        var a = i * (TAU / sp) + TAU / (sp * 4), u = [Math.sin(a), -Math.cos(a)], v = [Math.cos(a), Math.sin(a)];
        [-1, 1].forEach(function (s) {
          var o = (s * w) / 2;
          thin += seg([r2(u[0] * hub * 1.5 + v[0] * o), r2(u[1] * hub * 1.5 + v[1] * o)], [r2(u[0] * ri + v[0] * o), r2(u[1] * ri + v[1] * o)]);
        });
      }
    } else if (ri > hub * 1.6) thin += circ(ri);
    thin += circ(hub * 1.5);
    return { thin: thin, strong: circ(hub * 0.55) };
  }
  function train(specs) {
    var rad = function (x) { return (x * Math.PI) / 180; }, g = {}, out = [];
    specs.forEach(function (s) {
      var x = s.x || 0, y = s.y || 0, r = s.r || 120, n = s.n, d = 0, phase = s.phase || 0, dir = 1, m = s.mesh && g[s.mesh];
      if (m) {
        d = m.d;
        var rp = ((m.r - d / 2) * n) / m.n, th = rad(s.angle), dist = m.r - d / 2 + rp;
        r = rp + d / 2; x = r2(m.x + dist * Math.sin(th)); y = r2(m.y - dist * Math.cos(th));
        var pA = TAU / m.n, pB = TAU / n, uA = ((((th - rad(m.phase)) / pA) % 1) + 1) % 1;
        phase = ((th + Math.PI - pB * (0.5 - uA)) * 180) / Math.PI; dir = -m.dir;
      }
      if (!d) d = Math.max(r * 0.1, 6);
      g[s.id] = { x: x, y: y, r: r, d: d, n: n, phase: phase, dir: dir };
      var parts = gearParts(n, r, d);
      out.push({ x: x, y: y, n: n, phase: phase, dir: dir, thin: parts.thin, strong: parts.strong, accent: !!s.accent });
    });
    return out;
  }
  function dialSvg(R, cx, cy, withCrown) {
    var d = dial(R), s = '<g transform="translate(' + cx + " " + cy + ')"><g data-rot="body"><path d="' + d.thin + '"/><path class="st" d="' + d.strong + '"/></g>';
    s += '<g data-rot="hour"><path class="st" d="' + d.hour + '"/></g><g data-rot="minute"><path class="st" d="' + d.minute + '"/></g>';
    s += '<g data-rot="sec"><path d="' + d.secLine + '"/><path d="' + d.secDot + '"/></g><path class="st" d="' + d.hub + '"/>';
    if (withCrown) { var c = crown(R); s += '<g data-rot="crown"><path class="st" d="' + c.stem + '"/><path class="ac" d="' + c.body + '"/><path class="ac" style="stroke-width:2.4" d="' + c.knurl + '"/></g>'; }
    return s + "</g>";
  }

  var $ = function (id) { return document.getElementById(id); };
  $("bgdial").innerHTML = dialSvg(620, 1080, 1250, false);
  $("dkdial").innerHTML = dialSvg(380, 600, 1080, true);
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
  var bg = rots($("bgdial")), dk = rots($("dkdial"));

  // Timeline helpers
  function cl(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function P(t, a, b) { return cl((t - a) / (b - a)); }
  function eo(x) { return 1 - Math.pow(1 - x, 3); }
  function eio(x) { return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }
  function back(x) { var c1 = 1.70158, c3 = c1 + 1; return x <= 0 ? 0 : 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); }
  function css(el, op, tf) { el.style.opacity = op; if (tf !== undefined) el.style.transform = tf; }
  function band(el, p, h) { el.style.backgroundSize = (eo(p) * 100).toFixed(1) + "% " + (h || ".2em"); }
  function vis(el, on) { el.style.visibility = on ? "visible" : "hidden"; }
  function money(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " "); }
  function all(root, sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }

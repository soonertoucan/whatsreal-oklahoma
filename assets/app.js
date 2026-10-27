/* What's Real — page logic. No framework, no build step.
 * Renders the fact ledger, the priority picker, the ballot, charts and the
 * election countdown from the data files. Edit data/*.js, not this file, to
 * change content.
 */
(function () {
  "use strict";

  /* ---------- Config ---------- */
  var CONTACT = "";                                   // e.g. "corrections@whatsrealok.org". Empty hides the line.
  var SITE_URL = "https://whatsreal-oklahoma.vercel.app";   // copied snippets link back here
  var TZ_CDT = "-05:00", TZ_CST = "-06:00";           // Oklahoma: DST ends Nov 1, 2026
  var EARLY_START = new Date("2026-10-28T08:00:00" + TZ_CDT);
  var EARLY_END   = new Date("2026-10-31T14:00:00" + TZ_CDT);
  var ABSENTEE_HAND = new Date("2026-11-02T17:00:00" + TZ_CST);
  var POLLS_OPEN  = new Date("2026-11-03T07:00:00" + TZ_CST);
  var POLLS_CLOSE = new Date("2026-11-03T19:00:00" + TZ_CST);

  var FACTS = window.WR_FACTS || [], TOPICS = window.WR_TOPICS || {}, TIERS = window.WR_TIERS || {};
  var PRIORITIES = window.WR_PRIORITIES || {}, RACES = window.WR_RACES || [], QUESTIONS = window.WR_QUESTIONS || [];
  var HR1 = window.WR_HR1 || null;
  var RECORD = window.WR_RECORD || [], OUTCOMES = window.WR_OUTCOMES || [], DIRECT = window.WR_DIRECT || [];
  var PARTY = { R: "Republican", D: "Democrat", I: "Independent", L: "Libertarian" };
  var KIND = { vote: "Recorded vote", statement: "Campaign statement", none: "No verified position" };
  var STATUS = { convicted: "Convicted", pleaded: "Pleaded guilty", charged: "Charged, trial pending", audited: "Audit finding", ruled: "Court ruling", voted: "Recorded vote", cleared: "Investigated, no action", pending: "Investigation open", enacted: "Signed into law" };

  /* ---------- Helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else if (k === "html") n.innerHTML = attrs[k];
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function store(key, val) { try { if (val === undefined) return JSON.parse(localStorage.getItem(key)); localStorage.setItem(key, JSON.stringify(val)); } catch (e) { return null; } }
  var toastTimer;
  function toast(msg) {
    var t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }
  function copyText(text, btn) {
    var done = function () { toast("Copied, with its source."); if (btn) { btn.classList.add("done"); var old = btn.textContent; btn.textContent = "Copied"; setTimeout(function () { btn.classList.remove("done"); btn.textContent = old; }, 1800); } };
    var fallback = function () {
      var ta = el("textarea", { style: "position:fixed;opacity:0;left:0;top:0" }); ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { toast("Could not copy. Select the text and copy it by hand."); }
      document.body.removeChild(ta);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback); else fallback();
  }
  function factText(f) {
    return f.headline + " Source: " + f.source.name + ", " + f.source.date + ". " + f.source.url + (SITE_URL ? " (via " + SITE_URL + ")" : "");
  }
  function factById(id) { for (var i = 0; i < FACTS.length; i++) if (FACTS[i].id === id) return FACTS[i]; return null; }

  document.querySelectorAll("[data-checked]").forEach(function (n) { n.textContent = window.WR_CHECKED || ""; });
  if (CONTACT) { var cl = $("#contact-line"); cl.textContent = "Corrections and questions: " + CONTACT; cl.hidden = false; }

  /* ---------- Live election line ---------- */
  function fmtDays(n) { return n === 1 ? "1 day" : n + " days"; }
  function renderLive() {
    var now = new Date(), live = $("#live"), msg;
    var days = function (d) { return Math.max(1, Math.round((d - now) / 86400000)); };
    if (now < EARLY_START) msg = ["Early voting in Oklahoma starts in ", el("strong", { text: fmtDays(days(EARLY_START)) }), ", Wednesday, October 28."];
    else if (now < EARLY_END) msg = ["Early voting is ", el("strong", { text: "open now" }), " at your county election board. Through Saturday, October 31 at 2 p.m."];
    else if (now < POLLS_OPEN) msg = ["Election Day is ", el("strong", { text: days(POLLS_OPEN) <= 1 ? "tomorrow" : "in " + fmtDays(days(POLLS_OPEN)) }), ", Tuesday, November 3. Polls open 7 a.m. to 7 p.m."];
    else if (now < POLLS_CLOSE) msg = ["Polls are ", el("strong", { text: "open now" }), " until 7 p.m. If you are in line at 7, you can vote."];
    else msg = ["The November 3 election is over. ", el("strong", { text: "The next one is not." }), " Check your registration and come back."];
    live.innerHTML = ""; live.appendChild(el("span", { class: "pip", "aria-hidden": "true" }));
    var span = el("span"); msg.forEach(function (m) { span.appendChild(typeof m === "string" ? document.createTextNode(m) : m); }); live.appendChild(span);
  }
  renderLive(); setInterval(renderLive, 60000);

  /* ---------- Vote dates ---------- */
  (function renderDates() {
    var now = new Date(), wrap = $("#dates");
    var rows = [
      { when: "Closed Oct 9", what: "Voter registration deadline for this election. Register now for the next one at the OK Voter Portal.", end: new Date("2026-10-09T23:59:59" + TZ_CDT) },
      { when: "Closed Oct 19", what: "Deadline to request a mail absentee ballot.", end: new Date("2026-10-19T17:00:00" + TZ_CDT) },
      { when: "Wed Oct 28 to Fri Oct 30", what: "Early in-person voting, 8 a.m. to 6 p.m., at your county election board. No excuse needed.", start: EARLY_START, end: new Date("2026-10-30T18:00:00" + TZ_CDT) },
      { when: "Sat Oct 31", what: "Early in-person voting, 8 a.m. to 2 p.m.", start: new Date("2026-10-31T08:00:00" + TZ_CDT), end: EARLY_END },
      { when: "Mon Nov 2", what: "Last day to hand-deliver an absentee ballot to your county election board, by close of business.", start: new Date("2026-11-02T08:00:00" + TZ_CST), end: ABSENTEE_HAND },
      { when: "Tue Nov 3", what: "Election Day. Polls open 7 a.m. to 7 p.m. Mailed absentee ballots must arrive by 7 p.m.", start: POLLS_OPEN, end: POLLS_CLOSE }
    ];
    rows.forEach(function (r) {
      var cls = "date" + (now > r.end ? " past" : (r.start && now >= r.start ? " now" : ""));
      wrap.appendChild(el("div", { class: cls }, [el("div", { class: "when", text: r.when }), el("div", { class: "what", text: r.what })]));
    });
  })();

  /* ---------- Roll calls: who voted for it ---------- */
  var BILLS = window.WR_BILLS || [], HOUSE = window.WR_HOUSE || [], SENATE = window.WR_SENATE || [];
  var HOUSE_VACANT = window.WR_HOUSE_VACANT || {}, SENATE_VACANT = window.WR_SENATE_VACANT || {};
  var SENATE_UP = window.WR_SENATE_UP || function () { return false; };
  function billById(id) { for (var i = 0; i < BILLS.length; i++) if (BILLS[i].id === id) return BILLS[i]; return null; }
  function roster(chamber) { return chamber === "house" ? HOUSE : SENATE; }
  function aliasMatches(alias, name, year) {
    if (typeof alias === "string") return alias === name;
    return alias.n === name && year >= (alias.from || 0);
  }
  function resolveName(chamber, name, year) {
    var r = roster(chamber);
    for (var i = 0; i < r.length; i++) {
      var m = r[i]; if (!m[1]) continue;
      for (var j = 0; j < m[3].length; j++) if (aliasMatches(m[3][j], name, year)) return { district: m[0], name: m[1], party: m[2] };
    }
    return null;
  }
  function memberVote(chamber, member, bill) {
    var roll = bill.rolls.filter(function (r) { return r.chamber === chamber; })[0];
    if (!roll) return null;
    var hit = function (list) { return list.some(function (n) { return member[3].some(function (a) { return aliasMatches(a, n, bill.year); }); }); };
    if (hit(roll.yea)) return "yes";
    if (hit(roll.nay)) return "no";
    if (hit(roll.exc || [])) return "excused";
    if (hit(roll.cp || [])) return "excused";
    return "absent";
  }
  function nameSpan(chamber, n, year) {
    var m = resolveName(chamber, n, year);
    if (m) return el("span", { class: "cur " + m.party, text: m.name + " (" + (chamber === "house" ? "HD" : "SD") + " " + m.district + ")" });
    return el("span", { class: "gone", text: n });
  }
  function namesLine(label, chamber, list, year) {
    if (!list || !list.length) return null;
    var p = el("p", { class: "names" }, [el("b", { text: label + " (" + list.length + "): " })]);
    list.forEach(function (n, i) { p.appendChild(nameSpan(chamber, n, year)); if (i < list.length - 1) p.appendChild(document.createTextNode(", ")); });
    return p;
  }
  function billVotesDetails(ids) {
    var bills = ids.map(billById).filter(Boolean); if (!bills.length) return null;
    var summary = bills.map(function (b) { return b.num + ": " + b.rolls.map(function (r) { return (r.chamber === "house" ? "House " : "Senate ") + r.motion.replace(/^.*passed /, ""); }).join(", "); }).join(" · ");
    var inner = el("div", { class: "inner" });
    bills.forEach(function (b) {
      inner.appendChild(el("p", null, [el("b", { text: b.num + " (" + b.year + "). " }), b.title + ". " + (b.what || ""), " ", el("a", { href: b.url, target: "_blank", rel: "noopener", text: "Bill page" })]));
      b.rolls.forEach(function (r) {
        var chamberName = r.chamber === "house" ? "House" : "Senate";
        inner.appendChild(el("div", { class: "roll" }, [
          el("div", { class: "roll-head" }, [el("b", { text: chamberName + ", " + r.date + ": " + r.motion }), el("a", { href: r.source, target: "_blank", rel: "noopener", text: "Official roll call" })]),
          namesLine("Voted yes", r.chamber, r.yea, b.year),
          namesLine("Voted no", r.chamber, r.nay, b.year),
          namesLine("Excused or not voting", r.chamber, (r.exc || []).concat(r.cp || []), b.year)
        ]));
      });
    });
    inner.appendChild(el("p", { class: "minor", style: "font-size:.82rem", text: "Names are as the Legislature records them. † marks members no longer serving. \"Mr. Speaker\" is the House Speaker's recorded vote." }));
    return el("details", null, [el("summary", { text: "Who voted for it. " + summary }), inner]);
  }

  /* ---------- Candidate tags: who is running on this ---------- */
  function candidatesDetails(priorities) {
    var issues = (priorities || []).map(function (k) { return PRIORITIES[k] && PRIORITIES[k].issue; }).filter(Boolean);
    if (!issues.length) return null;
    var rows = [];
    RACES.forEach(function (r) {
      var cands = r.candidates;
      if (r.districts) { var dsel = $("#district"); var d = r.districts.filter(function (x) { return dsel && x.id === dsel.value; })[0] || r.districts[0]; cands = d.candidates; }
      cands.forEach(function (c) {
        (c.positions || []).forEach(function (p) {
          if (issues.indexOf(p.issue) >= 0) rows.push({ c: c, r: r, p: p });
        });
      });
    });
    if (!rows.length) return null;
    var byCand = {}; var order = [];
    rows.forEach(function (x) { var key = x.c.name; if (!byCand[key]) { byCand[key] = { c: x.c, r: x.r, ps: [] }; order.push(key); } byCand[key].ps.push(x.p); });
    var list = el("div", { class: "cands" });
    order.forEach(function (key) {
      var g = byCand[key];
      var best = g.ps.filter(function (p) { return p.kind === "vote"; })[0] || g.ps.filter(function (p) { return p.kind === "statement"; })[0] || g.ps[0];
      list.appendChild(el("div", null, [
        el("div", { class: "cn" }, [g.c.name, el("small", { text: (PARTY[g.c.party] || g.c.party) + ", " + g.r.office })]),
        el("div", { class: "ck" }, [el("span", { class: "kind-" + best.kind, text: KIND[best.kind] + ". " }), best.text])
      ]));
    });
    var n = order.length;
    return el("details", null, [el("summary", { text: "Who is running on this: " + n + (n === 1 ? " candidate" : " candidates") + " on your ballot" }), el("div", { class: "inner" }, [list, el("p", { class: "minor", style: "font-size:.82rem" }, [el("a", { href: "#ballot", text: "Full ballot with sources" })])])]);
  }

  /* ---------- Fact entry ---------- */
  function renderFact(f) {
    var body = el("div", { class: "body" }, [
      el("p", { class: "claim", text: f.headline }),
      f.detail ? el("p", { class: "detail", text: f.detail }) : null,
      f.response ? el("p", { class: "response" }, [el("b", { text: "Their answer: " }), f.response]) : null,
      el("div", { class: "srcline" }, [
        el("span", { class: "tier tier-" + f.tier, text: TIERS[f.tier] || f.tier }),
        el("a", { href: f.source.url, target: "_blank", rel: "noopener", text: f.source.name }),
        el("span", { text: f.source.date })
      ]),
      f.bills ? billVotesDetails(f.bills) : null,
      candidatesDetails(f.priorities),
      el("div", { class: "tools" }, [
        el("button", { class: "btn small copy-btn", type: "button", text: "Copy with source", onclick: function (e) { copyText(factText(f), e.currentTarget); } })
      ])
    ]);
    return el("article", { class: "entry", id: "fact-" + f.id }, [el("div", { class: "stat", text: f.stat }), body]);
  }

  /* ---------- Record entry ---------- */
  function recordText(r) {
    return r.headline + " Source: " + r.source.name + ", " + r.source.date + ". " + r.source.url + (SITE_URL ? " (via " + SITE_URL + ")" : "");
  }
  function renderRecord(r) {
    var body = el("div", { class: "body" }, [
      el("div", { class: "who" }, [el("span", { class: "status status-" + r.status, text: STATUS[r.status] || r.status }), el("span", { text: r.who })]),
      el("p", { class: "claim", text: r.headline }),
      r.detail ? el("p", { class: "detail", text: r.detail }) : null,
      r.why ? el("p", { class: "why", text: r.why }) : null,
      el("div", { class: "srcline" }, [
        el("span", { class: "tier tier-" + r.tier, text: TIERS[r.tier] || r.tier }),
        el("a", { href: r.source.url, target: "_blank", rel: "noopener", text: r.source.name }),
        el("span", { text: r.source.date })
      ]),
      r.bills ? billVotesDetails(r.bills) : null,
      candidatesDetails(r.priorities),
      el("div", { class: "tools" }, [
        el("button", { class: "btn small copy-btn", type: "button", text: "Copy with source", onclick: function (e) { copyText(recordText(r), e.currentTarget); } })
      ])
    ]);
    return el("article", { class: "entry", id: "rec-" + r.id }, [el("div", { class: "stat", text: r.stat }), body]);
  }
  (function renderRecordList() {
    var wrap = $("#recordlist"); if (!wrap) return;
    RECORD.forEach(function (r) { wrap.appendChild(renderRecord(r)); });
  })();

  /* ---------- What Oklahoma gets ---------- */
  (function renderGap() {
    var o = $("#outcomes"), d = $("#direct"); if (!o || !d) return;
    OUTCOMES.forEach(function (x) {
      o.appendChild(el("div", { class: "outcome" }, [
        el("div", { class: "stat", text: x.stat }),
        el("div", { class: "label", text: x.label }),
        el("div", { class: "src" }, [el("a", { href: x.source.url, target: "_blank", rel: "noopener", text: x.source.name })])
      ]));
    });
    DIRECT.forEach(function (x) {
      d.appendChild(el("div", { class: "direct-row" }, [
        el("div", { class: "yr", text: x.year }),
        el("div", null, [el("div", { text: x.q }), el("div", { class: "res", text: x.result })]),
        el("div", { class: "then", text: x.then })
      ]));
    });
  })();

  /* ---------- Ledger with topic tabs ---------- */
  (function renderLedger() {
    var tabs = $("#tabs"), ledger = $("#ledger");
    var current = store("wr-topic") || "health";
    if (!TOPICS[current]) current = Object.keys(TOPICS)[0];
    function show(topic) {
      current = topic; store("wr-topic", topic);
      tabs.querySelectorAll(".tab").forEach(function (t) { t.setAttribute("aria-selected", t.dataset.topic === topic ? "true" : "false"); });
      ledger.innerHTML = "";
      FACTS.filter(function (f) { return f.topic === topic; }).forEach(function (f) { ledger.appendChild(renderFact(f)); });
    }
    Object.keys(TOPICS).forEach(function (k) {
      tabs.appendChild(el("button", { class: "tab", role: "tab", type: "button", "data-topic": k, text: TOPICS[k], onclick: function () { show(k); } }));
    });
    show(current);
  })();

  /* ---------- Charts (inline SVG, drawn to scale) ---------- */
  (function renderFigures() {
    var wrap = $("#figures");

    // Gas: Jan vs Oct 2026. One hue; the older value lighter.
    (function () {
      var data = [{ l: "January 2026", v: 2.78 }, { l: "Week of Oct 19", v: 4.28 }];
      var W = 320, H = 150, pad = { l: 8, r: 8, t: 10, b: 28 }, max = 5;
      var plotW = W - pad.l - pad.r, plotH = H - pad.t - pad.b, barW = 110, gap = (plotW - barW * 2) / 3;
      var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Regular gasoline, national average: $2.78 in January 2026, $4.28 the week of October 19, 2026">';
      [1, 2, 3, 4].forEach(function (g) { var y = pad.t + plotH - (g / max) * plotH; s += '<line class="grid" x1="' + pad.l + '" x2="' + (W - pad.r) + '" y1="' + y + '" y2="' + y + '"/>'; });
      data.forEach(function (d, i) {
        var x = pad.l + gap + i * (barW + gap), h = (d.v / max) * plotH, y = pad.t + plotH - h;
        s += '<path class="bar' + (i === 0 ? " light" : "") + '" d="M' + x + ' ' + (pad.t + plotH) + ' V' + (y + 4) + ' q0 -4 4 -4 H' + (x + barW - 4) + ' q4 0 4 4 V' + (pad.t + plotH) + ' Z"/>';
        s += '<text class="val" x="' + (x + barW / 2) + '" y="' + (y - 6) + '" text-anchor="middle">$' + d.v.toFixed(2) + '</text>';
        s += '<text x="' + (x + barW / 2) + '" y="' + (H - 8) + '" text-anchor="middle">' + d.l + '</text>';
      });
      s += "</svg>";
      wrap.appendChild(el("div", { class: "figure" }, [el("h4", { text: "What a gallon of regular costs" }), el("div", { html: s }), el("p", { class: "cap", text: "National average, dollars per gallon. Source: U.S. Energy Information Administration via FactCheck.org." })]));
    })();

    // Rural hospitals: 73 total, stacked by risk.
    (function () {
      var segs = [{ l: "Immediate risk", v: 18, c: "seg1" }, { l: "At risk", v: 45, c: "seg2" }, { l: "Not flagged", v: 10, c: "seg3" }];
      var W = 320, H = 70, total = 73, x = 0, s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Oklahoma rural hospitals: 18 at immediate risk of closing, 45 at risk, 10 not flagged, of 73">';
      segs.forEach(function (g, i) {
        var w = (g.v / total) * W - (i < segs.length - 1 ? 2 : 0);
        s += '<rect class="' + g.c + '" x="' + x + '" y="14" width="' + w + '" height="28" rx="3"/>';
        s += '<text class="val" x="' + (x + w / 2) + '" y="60" text-anchor="middle">' + g.v + '</text>';
        x += w + 2;
      });
      s += "</svg>";
      var legend = el("div", { class: "legend" }, segs.map(function (g) { var sp = el("span", { text: g.l }); sp.style.setProperty("--sw", "var(--chart-" + (g.c.slice(-1)) + ")"); return sp; }));
      wrap.appendChild(el("div", { class: "figure" }, [el("h4", { text: "Oklahoma's 73 rural hospitals" }), el("div", { html: s }), legend, el("p", { class: "cap", text: "Source: Center for Healthcare Quality and Payment Reform, 2026 analysis, reported by KFOR." })]));
    })();

    // Private school tax credit: who was already in private school.
    (function () {
      var segs = [{ l: "Came from a public school", v: 7.8, c: "seg1" }, { l: "Already outside public schools", v: 92.2, c: "seg3" }];
      var W = 320, H = 70, x = 0, s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Of students receiving Oklahoma private-school tax credits for 2026-27, 7.8 percent came from a public school and 92.2 percent did not">';
      segs.forEach(function (g, i) {
        var w = (g.v / 100) * W - (i < segs.length - 1 ? 2 : 0);
        s += '<rect class="' + g.c + '" x="' + x + '" y="14" width="' + w + '" height="28" rx="3"/>';
        s += '<text class="val" x="' + (x + w / 2) + '" y="60" text-anchor="middle">' + g.v + '%</text>';
        x += w + 2;
      });
      s += "</svg>";
      var legend = el("div", { class: "legend" }, segs.map(function (g) { var sp = el("span", { text: g.l }); sp.style.setProperty("--sw", "var(--chart-" + (g.c.slice(-1)) + ")"); return sp; }));
      wrap.appendChild(el("div", { class: "figure" }, [el("h4", { text: "$252 million in private-school tax credits, 2026–27" }), el("div", { html: s }), legend, el("p", { class: "cap", text: "Source: Oklahoma Tax Commission Parental Choice Tax Credit report, July 2, 2026." })]));
    })();

    // Turnout waffle: 100 eligible Oklahomans, 53 voted in 2024.
    (function () {
      var cols = 20, rows = 5, r = 5.5, step = 16, W = cols * step, H = rows * step;
      var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Of every 100 eligible Oklahomans, 53 voted in 2024 and 47 did not">';
      for (var i = 0; i < 100; i++) {
        var cx = (i % cols) * step + step / 2, cy = Math.floor(i / cols) * step + step / 2;
        s += '<circle class="dot' + (i >= 53 ? " off" : "") + '" cx="' + cx + '" cy="' + cy + '" r="' + r + '"/>';
      }
      s += "</svg>";
      var legend = el("div", { class: "legend" }, [(function () { var a = el("span", { text: "53 voted" }); a.style.setProperty("--sw", "var(--chart-1)"); return a; })(), (function () { var b = el("span", { text: "47 stayed home" }); b.style.setProperty("--sw", "var(--chart-3)"); return b; })()]);
      wrap.appendChild(el("div", { class: "figure" }, [el("h4", { text: "Of every 100 eligible Oklahomans in 2024" }), el("div", { html: s }), legend, el("p", { class: "cap", text: "Lowest turnout of any state. Source: University of Florida Election Lab; Oklahoma State Election Board." })]));
    })();
  })();

  /* ---------- Ballot ---------- */
  function renderPosition(p) {
    var label = el("div", { class: "label" }, [
      el("span", { text: issueLabel(p.issue) }),
      el("span", { class: "kind-" + p.kind, text: KIND[p.kind] })
    ]);
    var kids = [label, el("p", { text: p.text })];
    if (p.source) kids.push(el("div", { class: "src" }, ["Source: ", el("a", { href: p.source.url, target: "_blank", rel: "noopener", text: p.source.name })]));
    return el("div", { class: "pos " + p.kind }, kids);
  }
  function issueLabel(issue) {
    for (var k in PRIORITIES) if (PRIORITIES[k].issue === issue) return PRIORITIES[k].label;
    return issue;
  }
  function renderCandidate(c) {
    var head = el("header", null, [
      el("div", { class: "name" }, [c.name, el("span", { class: "party", text: PARTY[c.party] || c.party })]),
      el("p", { class: "bio" }, [c.bio, c.site ? " " : null, c.site ? el("a", { href: c.site, target: "_blank", rel: "noopener", text: "Campaign site" }) : null])
    ]);
    var kids = [head];
    if (c.positions && c.positions.length) kids.push(el("div", { class: "positions" }, c.positions.map(renderPosition)));
    return el("div", { class: "cand" }, kids);
  }
  function renderRace(race, districtId) {
    var head = el("div", { class: "race-head" }, [el("h3", { text: race.office }), race.note ? el("p", { class: "note", text: race.note }) : null]);
    var kids = [head], cands = race.candidates;
    if (race.districts) {
      var d = race.districts.filter(function (x) { return x.id === districtId; })[0] || race.districts[0];
      kids.push(el("p", { class: "minor", text: d.label + ". " + d.area + "." }));
      cands = d.candidates;
    }
    var majors = cands.filter(function (c) { return c.positions && c.positions.length; });
    var minors = cands.filter(function (c) { return !c.positions || !c.positions.length; });
    kids.push(el("div", { class: "compare" }, majors.map(renderCandidate)));
    if (minors.length) kids.push(el("p", { class: "minor", text: "Also on the ballot: " + minors.map(function (c) { return c.name + " (" + (PARTY[c.party] || c.party) + ")"; }).join(", ") + ". We found no published positions to verify. Their names appear on your sample ballot at the OK Voter Portal." }));
    return el("div", { class: "race", id: "race-" + race.id }, kids);
  }
  function renderQuestions() {
    var wrap = el("div", { class: "race" }, [el("div", { class: "race-head" }, [el("h3", { text: "State questions" }), el("p", { class: "note", text: "Two changes to the Oklahoma Constitution. A yes vote adopts the change." })])]);
    QUESTIONS.forEach(function (q) {
      wrap.appendChild(el("div", { class: "question", id: "q-" + q.id }, [
        el("h4", { text: q.title + ": " + q.short }),
        el("p", { text: q.what }),
        el("div", { class: "yesno" }, [el("div", null, [el("b", { text: "For a yes" }), q.yes]), el("div", null, [el("b", { text: "For a no" }), q.no])]),
        el("div", { class: "src", style: "font-size:.85rem;color:var(--ink-3)" }, ["Source: ", el("a", { href: q.source.url, target: "_blank", rel: "noopener", text: q.source.name })])
      ]));
    });
    return wrap;
  }
  var districtSel = $("#district");
  var houseRace = RACES.filter(function (r) { return r.districts; })[0];
  if (houseRace) {
    houseRace.districts.forEach(function (d) { districtSel.appendChild(el("option", { value: d.id, text: d.label })); });
    districtSel.value = store("wr-district") || houseRace.districts[0].id;
  }
  function renderBallot() {
    var root = $("#races"); root.innerHTML = "";
    RACES.forEach(function (r) { root.appendChild(renderRace(r, districtSel.value)); });
    root.appendChild(renderQuestions());
  }
  districtSel.addEventListener("change", function () { store("wr-district", districtSel.value); renderBallot(); renderResults(); });
  renderBallot();

  /* ---------- H.R. 1 panel ---------- */
  if (HR1) {
    var panel = $("#hr1panel");
    panel.appendChild(el("div", { class: "effects" }, HR1.effects.map(function (e) {
      return el("div", { class: "effect" }, [el("b", { text: e.label }), el("span", { text: e.text }), el("span", { class: "fx-src", text: "Source: " + e.source })]);
    })));
    panel.appendChild(el("div", { class: "who-voted" }, [
      el("h3", { text: "Who from Oklahoma voted yes" }),
      el("p", { class: "minor", text: HR1.passed }),
      el("ul", null, HR1.oklahoma_yes.map(function (n) { return el("li", { text: n }); })),
      el("p", { class: "minor", text: "No member of Oklahoma's delegation voted no." }),
      el("p", { class: "src", style: "font-size:.85rem;color:var(--ink-3)" }, ["Source: ", el("a", { href: HR1.source.url, target: "_blank", rel: "noopener", text: HR1.source.name })])
    ]));
  }

  /* ---------- Priority picker ---------- */
  var chipsWrap = $("#chips"), resultsWrap = $("#results");
  var picked = store("wr-picked") || [];
  function renderChips() {
    chipsWrap.innerHTML = "";
    Object.keys(PRIORITIES).forEach(function (k) {
      var on = picked.indexOf(k) >= 0;
      chipsWrap.appendChild(el("button", { class: "chip", type: "button", "aria-pressed": on ? "true" : "false", text: PRIORITIES[k].label, onclick: function () {
        if (on) picked = picked.filter(function (x) { return x !== k; });
        else { if (picked.length >= 3) { toast("Three is the limit. Unpick one to add another."); return; } picked.push(k); }
        store("wr-picked", picked); renderChips(); renderResults();
      } }));
    });
  }
  function candidatesOnBallot() {
    var list = [];
    RACES.forEach(function (r) {
      var cands = r.candidates;
      if (r.districts) { var d = r.districts.filter(function (x) { return x.id === districtSel.value; })[0] || r.districts[0]; cands = d.candidates; }
      cands.forEach(function (c) { if (c.positions && c.positions.length) list.push({ race: r.office, cand: c }); });
    });
    return list;
  }
  function renderResults() {
    resultsWrap.innerHTML = "";
    if (!picked.length) return;
    var onBallot = candidatesOnBallot();
    picked.forEach(function (k) {
      var pr = PRIORITIES[k];
      var facts = FACTS.filter(function (f) { return (f.priorities || []).indexOf(k) >= 0; });
      var block = el("section", { class: "result" }, [el("h3", { text: pr.label })]);
      block.appendChild(el("p", { class: "sub", text: "What the numbers say" }));
      var ledger = el("div", { class: "ledger" }); facts.forEach(function (f) { ledger.appendChild(renderFact(f)); }); block.appendChild(ledger);
      var recs = RECORD.filter(function (r) { return (r.priorities || []).indexOf(k) >= 0; });
      if (recs.length) {
        block.appendChild(el("p", { class: "sub", text: "What the people in charge did about it" }));
        var rl = el("div", { class: "ledger" }); recs.forEach(function (r) { rl.appendChild(renderRecord(r)); }); block.appendChild(rl);
      }
      block.appendChild(el("p", { class: "sub", text: "Where the people on your ballot stand" }));
      var grid = el("div", { class: "stance-grid" });
      onBallot.forEach(function (o) {
        var p = (o.cand.positions || []).filter(function (x) { return x.issue === pr.issue; })[0] || { kind: "none", text: "No verified position found." };
        grid.appendChild(el("div", { class: "stance " + p.kind }, [
          el("div", { class: "who" }, [o.cand.name, el("small", { text: (PARTY[o.cand.party] || o.cand.party) + ", " + o.race })]),
          el("div", { class: "kind", text: KIND[p.kind] }),
          el("p", { text: p.text }),
          p.source ? el("div", { class: "src" }, ["Source: ", el("a", { href: p.source.url, target: "_blank", rel: "noopener", text: p.source.name })]) : null
        ]));
      });
      block.appendChild(grid);
      resultsWrap.appendChild(block);
    });
    QUESTIONS.forEach(function (q) {
      var hit = picked.some(function (k) { return PRIORITIES[k].issue === q.issue; });
      if (hit) resultsWrap.appendChild(el("section", { class: "result" }, [el("h3", { text: q.title + " touches this too" }), el("p", { text: q.what }), el("p", { class: "sub" }, [el("a", { href: "#q-" + q.id, text: "Read the case for yes and for no" })])]));
    });
    var share = el("div", { class: "hero-actions" }, [
      el("button", { class: "btn", type: "button", text: "Copy my fact sheet to share", onclick: function (e) {
        var lines = ["What's real in Oklahoma, checked " + window.WR_CHECKED + ":", ""];
        picked.forEach(function (k) {
          lines.push(PRIORITIES[k].label.toUpperCase());
          FACTS.filter(function (f) { return (f.priorities || []).indexOf(k) >= 0; }).slice(0, 3).forEach(function (f) { lines.push("- " + factText(f)); });
          RECORD.filter(function (r) { return (r.priorities || []).indexOf(k) >= 0; }).slice(0, 2).forEach(function (r) { lines.push("- " + recordText(r)); });
          lines.push("");
        });
        lines.push("Early voting Oct 28–31 at your county election board. Election Day Nov 3, 7 a.m. to 7 p.m. Check your registration: https://okvoterportal.okelections.us/");
        copyText(lines.join("\n"), e.currentTarget);
      } }),
      el("a", { class: "btn ghost", href: "#ballot", text: "See the full ballot" })
    ]);
    resultsWrap.appendChild(share);
  }
  renderChips(); renderResults();

  /* ---------- Your legislators ---------- */
  (function renderLegislators() {
    var hd = $("#hd"), sd = $("#sd"), grid = $("#legis"); if (!hd || !sd || !grid) return;
    HOUSE.forEach(function (m) { hd.appendChild(el("option", { value: m[0], text: "HD " + m[0] + (m[1] ? ": " + m[1] : ": vacant") })); });
    SENATE.forEach(function (m) { sd.appendChild(el("option", { value: m[0], text: "SD " + m[0] + (m[1] ? ": " + m[1] : ": vacant") })); });
    hd.value = store("wr-hd") || "1"; sd.value = store("wr-sd") || "1";
    var bl = $("#bill-links"); if (bl) BILLS.forEach(function (b, i) { bl.appendChild(el("a", { href: b.url, target: "_blank", rel: "noopener", text: b.num })); if (i < BILLS.length - 1) bl.appendChild(document.createTextNode(", ")); });
    function card(chamber, m) {
      var label = chamber === "house" ? "House District " + m[0] : "Senate District " + m[0];
      var up = chamber === "house" ? true : SENATE_UP(m[0]);
      if (!m[1]) {
        var vac = (chamber === "house" ? HOUSE_VACANT : SENATE_VACANT)[m[0]] || "Vacant";
        return el("div", { class: "legis" }, [el("header", null, [el("div", { class: "lname", text: label }), el("div", { class: "lsub", text: vac }), up ? el("div", { class: "onballot", text: "Seat on the November 3 ballot" }) : null])]);
      }
      var votes = el("div", { class: "lvotes" });
      BILLS.forEach(function (b) {
        var v = memberVote(chamber, m, b); if (v === null) return;
        var cls = v === "yes" ? "yes" : v === "no" ? "no" : "na";
        var txt = v === "yes" ? "Voted yes" : v === "no" ? "Voted no" : v === "excused" ? "Excused" : "Not yet in office";
        votes.appendChild(el("div", { class: "lvote" }, [el("div", { class: "v " + cls, text: txt }), el("div", { class: "bt" }, [el("b", { text: b.num + " (" + b.year + "). " }), b.title])]));
      });
      return el("div", { class: "legis" }, [
        el("header", null, [
          el("div", { class: "lname" }, [m[1], el("span", { class: "party", text: PARTY[m[2]] || m[2] })]),
          el("div", { class: "lsub", text: label }),
          up ? el("div", { class: "onballot", text: "This seat is on the November 3 ballot" }) : el("div", { class: "lsub", text: "Next election 2028" })
        ]),
        votes
      ]);
    }
    function render() {
      grid.innerHTML = "";
      var h = HOUSE.filter(function (m) { return String(m[0]) === hd.value; })[0];
      var s = SENATE.filter(function (m) { return String(m[0]) === sd.value; })[0];
      if (h) grid.appendChild(card("house", h));
      if (s) grid.appendChild(card("senate", s));
    }
    hd.addEventListener("change", function () { store("wr-hd", hd.value); render(); });
    sd.addEventListener("change", function () { store("wr-sd", sd.value); render(); });
    render();
  })();

  /* ---------- Voting plan ---------- */
  (function plan() {
    var form = $("#plan"), status = $("#plan-status");
    var saved = store("wr-plan") || {};
    ["day", "where", "who"].forEach(function (k) { if (saved[k]) $("#plan-" + k).value = saved[k]; });
    if (saved.day || saved.where || saved.who) { status.textContent = "Saved on this device."; status.className = "saved"; }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var p = { day: $("#plan-day").value.trim(), where: $("#plan-where").value.trim(), who: $("#plan-who").value.trim() };
      store("wr-plan", p); status.textContent = "Saved on this device."; status.className = "saved"; toast("Plan saved.");
    });
    $("#plan-copy").addEventListener("click", function (e) {
      var p = { day: $("#plan-day").value.trim() || "(day)", where: $("#plan-where").value.trim() || "(place)", who: $("#plan-who").value.trim() || "(who)" };
      copyText("My voting plan: " + p.day + ", at " + p.where + ", with " + p.who + ". Want to come? Early voting is Oct 28–31 at the county election board, Election Day is Nov 3. Check your polling place: https://okvoterportal.okelections.us/", e.currentTarget);
    });
  })();
  /* ---------- In your best interest: 20-question alignment survey ---------- */
  (function renderSurvey() {
    var S = window.WR_SURVEY, STANCES = window.WR_STANCES || {}, AXES = window.WR_AXES || {};
    var box = $("#survey-box"), lede = $("#survey-lede");
    if (!S || !box) return;
    lede.textContent = S.intro.lede;
    var QS = S.questions, N = QS.length;
    var state = store("wr-survey") || { i: -1, a: {} };   // i: -1 intro, 0..N-1 question, N results
    function save() { store("wr-survey", state); }
    function answered(q) { return state.a[q.id]; }
    function isnt() { return el("p", { class: "isnt" }, [el("strong", { text: "What this is not. " }), S.intro.isnt]); }

    function show() {
      box.innerHTML = "";
      if (state.i < 0) return showIntro();
      if (state.i >= N) return showResults();
      showQuestion(QS[state.i]);
    }

    function showIntro() {
      var done = Object.keys(state.a).length;
      box.appendChild(el("div", { class: "s-intro" }, [
        el("p", { class: "s-how" }, ["Twenty questions. The first five are about your life and decide which issues count more for you. The rest ask you to choose between two real positions held by people on your ballot, or to say you are not sure. Nothing you answer leaves this device."]),
        isnt(),
        el("div", { class: "s-actions" }, [
          el("button", { class: "btn", type: "button", text: done ? "Continue (" + done + " of " + N + " answered)" : "Start the 20 questions", onclick: function () { state.i = done ? firstUnanswered() : 0; save(); show(); } }),
          done ? el("button", { class: "btn ghost", type: "button", text: "See results so far", onclick: function () { state.i = N; save(); show(); } }) : null,
          done ? el("button", { class: "btn ghost", type: "button", text: "Start over", onclick: reset }) : null
        ])
      ]));
    }
    function firstUnanswered() { for (var i = 0; i < N; i++) if (!answered(QS[i])) return i; return N; }
    function reset() { state = { i: 0, a: {} }; save(); show(); }
    function scrollToBox() { window.scrollTo({ top: box.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" }); }

    function showQuestion(q) {
      var idx = state.i, cur = answered(q);
      var head = el("div", { class: "s-head" }, [
        el("div", { class: "s-progress" }, [el("span", { text: "Question " + (idx + 1) + " of " + N }), el("span", { class: "s-topic", text: q.type === "about" ? "About you" : q.topic })]),
        el("div", { class: "s-bar", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": String(N), "aria-valuenow": String(idx) }, [el("span", { style: "width:" + Math.round((idx / N) * 100) + "%" })])
      ]);
      var kids = [head, el("p", { class: "s-q", text: q.text })];
      if (q.fact) kids.push(el("p", { class: "s-fact", text: q.fact }));
      var opts = el("div", { class: "s-opts", role: "group", "aria-label": "Answers" });
      q.options.forEach(function (o, oi) {
        opts.appendChild(el("button", { class: "s-opt", type: "button", "aria-pressed": cur && cur.o === oi ? "true" : "false", text: o.t, onclick: function () {
          state.a[q.id] = { o: oi, v: o.v || 0, w: o.w || null, vote: o.vote || null };
          state.i = idx + 1; save(); show(); scrollToBox();
        } }));
      });
      kids.push(opts);
      kids.push(el("div", { class: "s-nav" }, [
        el("button", { class: "btn ghost small", type: "button", text: idx === 0 ? "Back to intro" : "Back", onclick: function () { state.i = idx - 1; save(); show(); } }),
        el("button", { class: "btn ghost small", type: "button", text: "Skip this one", onclick: function () { delete state.a[q.id]; state.i = idx + 1; save(); show(); scrollToBox(); } })
      ]));
      box.appendChild(el("div", { class: "s-card" }, kids));
    }

    /* ---- Scoring ---- */
    function weights() {
      var w = {}, notes = [];
      Object.keys(AXES).forEach(function (k) { w[k] = 1; });
      QS.filter(function (q) { return q.type === "about"; }).forEach(function (q) {
        var a = answered(q); if (!a || !a.w || !S.weights[a.w]) return;
        var rule = S.weights[a.w]; notes.push(rule.label);
        rule.axes.forEach(function (k) { w[k] = (w[k] || 1) * rule.mult; });
      });
      return { w: w, notes: notes };
    }
    function userAxes() {
      var u = {};
      QS.filter(function (q) { return q.type === "issue"; }).forEach(function (q) { var a = answered(q); if (a && a.v) u[q.axis] = { v: a.v, q: q, a: a }; });
      return u;
    }
    function scoreCandidate(c, u, w) {
      var st = STANCES[c.name] || {}, rows = [], agreeW = 0, totalW = 0, agreeN = 0, compN = 0, none = [];
      Object.keys(u).forEach(function (k) {
        var s = st[k];
        if (!s) { none.push(AXES[k] || k); return; }
        var agree = (s.v > 0) === (u[k].v > 0); compN++; totalW += w[k];
        if (agree) { agreeN++; agreeW += w[k]; }
        rows.push({ axis: k, agree: agree, s: s, you: u[k].q.options[u[k].a.o].t });
      });
      return { c: c, rows: rows, none: none, agreeN: agreeN, compN: compN, pct: totalW ? Math.round((agreeW / totalW) * 100) : null, hasAny: !!(c.positions && c.positions.length) };
    }
    function racesOnBallot() {
      var out = [], dsel = $("#district");
      RACES.forEach(function (r) {
        var cands = r.candidates, label = r.office;
        if (r.districts) { var d = r.districts.filter(function (x) { return dsel && x.id === dsel.value; })[0] || r.districts[0]; cands = d.candidates; label = r.office + ", " + d.label; }
        out.push({ id: r.id, label: label, cands: cands });
      });
      return out;
    }
    function rank(a, b) { return (b.pct === null ? -1 : b.pct) - (a.pct === null ? -1 : a.pct) || b.compN - a.compN; }

    function showResults() {
      var u = userAxes(), W = weights(), w = W.w, nIssues = Object.keys(u).length;
      var kids = [el("div", { class: "s-head" }, [el("div", { class: "s-progress" }, [el("span", { text: "Your results" }), el("span", { class: "s-topic", text: nIssues + " issue answers counted" })])])];
      kids.push(isnt());
      if (!nIssues) {
        kids.push(el("p", { class: "s-fact", text: "You answered \"not sure\" or skipped every issue question, so there is nothing to compare. Go back and pick a side on a few." }));
      } else {
        if (W.notes.length) kids.push(el("ul", { class: "s-notes" }, W.notes.map(function (n) { return el("li", { text: n }); })));
        kids.push(el("p", { class: "s-fact" }, ["Showing the U.S. House district you picked in ", el("a", { href: "#ballot", text: "Who is on your ballot" }), ". Candidates are ordered by how often their documented position matched yours, weighted by your first five answers. The number of issues compared matters as much as the percentage."]));
        racesOnBallot().forEach(function (r) {
          var scored = r.cands.map(function (c) { return scoreCandidate(c, u, w); }).sort(rank);
          var block = el("div", { class: "s-race" }, [el("h3", { text: r.label })]);
          scored.forEach(function (x) { block.appendChild(renderResult(x)); });
          kids.push(block);
        });
      }
      var sqs = QS.filter(function (q) { return q.type === "sq"; }).map(function (q) {
        var a = answered(q); if (!a || !a.v) return el("p", { class: "s-sq" }, [el("b", { text: q.topic + ": " }), "you were not sure, so we have nothing to report."]);
        return el("p", { class: "s-sq" }, [el("b", { text: q.topic + ": " }), "your answer (“" + q.options[a.o].t + "”) lines up with a ", el("strong", { text: a.vote }), " vote. ", el("a", { href: "#ballot", text: "Read both sides" }), "."]);
      });
      kids.push(el("div", { class: "s-race" }, [el("h3", { text: "State questions" })].concat(sqs)));
      kids.push(el("div", { class: "s-actions" }, [
        el("button", { class: "btn", type: "button", text: "Copy my results to share", onclick: function (e) { copyText(resultsText(u, w), e.currentTarget); } }),
        el("button", { class: "btn ghost", type: "button", text: "Change my answers", onclick: function () { state.i = 0; save(); show(); } }),
        el("button", { class: "btn ghost", type: "button", text: "Start over", onclick: reset })
      ]));
      kids.push(el("p", { class: "s-foot", text: "Positions come from recorded votes and the candidates' own published statements, each linked above. If we have a position wrong, or you can source one we marked missing, the footer says how to tell us." }));
      box.appendChild(el("div", { class: "s-card s-results" }, kids));
    }

    function renderResult(x) {
      var c = x.c, head = el("div", { class: "s-rhead" }, [
        el("div", { class: "name" }, [c.name, el("span", { class: "party", text: PARTY[c.party] || c.party })]),
        el("div", { class: "s-score" }, x.pct === null
          ? [el("span", { class: "s-pct none", text: x.hasAny ? "Not comparable" : "No record" })]
          : [el("span", { class: "s-pct", text: x.pct + "%" }), el("span", { class: "s-of", text: "agrees on " + x.agreeN + " of " + x.compN + " issues compared" })])
      ]);
      var bar = el("div", { class: "s-meter", "aria-hidden": "true" }, [el("span", { style: "width:" + (x.pct || 0) + "%" })]);
      var kids = [head, bar];
      if (x.pct === null) {
        kids.push(el("p", { class: "s-none", text: x.hasAny ? "We have positions for this candidate, but none on the issues you answered. That is a gap in the record, not a disagreement." : "We found no published positions to verify for this candidate." }));
      } else {
        if (x.compN < 2) kids.push(el("p", { class: "s-none", text: "Only one issue compared. Treat this as thin." }));
        var det = el("details", null, [el("summary", { text: "Why, issue by issue" })]);
        x.rows.forEach(function (r) {
          det.appendChild(el("div", { class: "s-row " + (r.agree ? "agree" : "differ") }, [
            el("div", { class: "s-ax" }, [el("b", { text: AXES[r.axis] || r.axis }), el("span", { class: "s-tag", text: r.agree ? "Matches you" : "Differs" })]),
            el("div", { class: "s-you", text: "You chose: " + r.you }),
            el("div", { class: "s-them" }, [el("span", { class: "kind-" + r.s.kind, text: KIND[r.s.kind] + ". " }), r.s.why, " ", el("a", { href: r.s.src, target: "_blank", rel: "noopener", text: "Source" })])
          ]));
        });
        if (x.none.length) det.appendChild(el("p", { class: "s-none", text: "No position on record for: " + x.none.join("; ") + ". Not counted for or against." }));
        kids.push(det);
      }
      return el("div", { class: "s-result" }, kids);
    }

    function resultsText(u, w) {
      var lines = ["My results from the In Your Best Interest survey at " + SITE_URL + " (alignment with recorded votes and statements, not a recommendation):"];
      racesOnBallot().forEach(function (r) {
        var scored = r.cands.map(function (c) { return scoreCandidate(c, u, w); }).filter(function (x) { return x.pct !== null; }).sort(rank);
        if (scored.length) lines.push(r.label + ": " + scored.map(function (x) { return x.c.name + " " + x.pct + "% (" + x.agreeN + " of " + x.compN + " issues)"; }).join("; "));
      });
      lines.push("Take it yourself: " + SITE_URL + "/#survey");
      return lines.join("\n");
    }

    var districtSel2 = $("#district");
    if (districtSel2) districtSel2.addEventListener("change", function () { if (state.i >= N) show(); });
    show();
  })();
})();

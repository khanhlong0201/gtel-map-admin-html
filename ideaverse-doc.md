<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ideaverse — Những ý tưởng lớn giản lược</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,600;1,400;1,600&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
/* ═══ TOKENS ═══ */
:root{
  --paper:#F5F2E9; --paper-2:#EBE5D6; --paper-3:#DFD7C3;
  --ink:#15140E; --ink-2:#514D42; --ink-3:#8A8474; --rule:#C9C1AC;
  --coral:#D2431C; --navy:#1B3A63; --teal:#0F7C7A;
  --plum:#6A3B8C; --mustard:#C8860B; --moss:#4C7736;
  --accent:var(--teal);
  --f-display:"Archivo Black",Impact,sans-serif;
  --f-body:"Archivo",system-ui,sans-serif;
  --f-serif:"Source Serif 4",Georgia,serif;
  --f-mono:"IBM Plex Mono",ui-monospace,monospace;
  --stage-bg:#2A2721; --ease:cubic-bezier(.16,.84,.28,1);
}
*{margin:0;padding:0;box-sizing:border-box;}
html,body{width:100%;height:100%;overflow:hidden;background:var(--stage-bg);}
.deck-viewport{position:fixed;inset:0;overflow:hidden;background:var(--stage-bg);}
.deck-stage{position:absolute;left:0;top:0;width:1920px;height:1080px;overflow:hidden;transform-origin:0 0;background:var(--paper);}
.slide{position:absolute;inset:0;width:1920px;height:1080px;overflow:hidden;visibility:hidden;opacity:0;pointer-events:none;background:var(--paper);}
.slide.active{visibility:visible;opacity:1;pointer-events:auto;z-index:1;}
svg{display:block;}
@media print{
  html,body{width:1920px;height:auto;overflow:visible;background:#fff;}
  .deck-viewport{position:static;overflow:visible;}
  .deck-stage{position:static;width:auto;height:auto;transform:none!important;}
  .slide{position:relative;visibility:visible!important;opacity:1!important;width:1920px;height:1080px;break-after:page;}
  .deck-controls,.edit-toggle,#progress{display:none!important;}
}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.15s!important;}}

/* ═══ TRANG ĐÔI ═══ */
.spread{position:absolute;inset:0;display:grid;grid-template-columns:960px 960px;background:var(--paper);}
.page{position:relative;padding:56px 64px 70px;display:flex;flex-direction:column;overflow:hidden;}
.page.lf{padding-right:82px;}
.page.rt{padding-left:82px;padding-right:96px;background:linear-gradient(90deg,var(--paper-2) 0%,var(--paper) 7%);}
.gutter{position:absolute;left:960px;top:0;bottom:0;width:0;z-index:5;pointer-events:none;}
.gutter::before{content:"";position:absolute;left:0;top:0;bottom:0;width:46px;background:linear-gradient(90deg,rgba(21,20,14,0),rgba(21,20,14,.08));}
.gutter::after{content:"";position:absolute;left:0;top:0;bottom:0;width:46px;transform:translateX(-46px);background:linear-gradient(90deg,rgba(21,20,14,.08),rgba(21,20,14,0));}
.fold{position:absolute;left:959px;top:0;bottom:0;width:2px;background:rgba(21,20,14,.15);z-index:6;pointer-events:none;}

/* mã màu mép trang — định vị chương tức thì */
.tabs{position:absolute;right:0;top:150px;display:flex;flex-direction:column;gap:7px;z-index:7;}
.tabs i{display:block;width:20px;height:62px;background:var(--paper-3);transition:width .3s var(--ease);}
.tabs i.on{width:38px;}
.tabs i.c1{background:var(--coral);} .tabs i.c2{background:var(--navy);}
.tabs i.c3{background:var(--teal);}  .tabs i.c4{background:var(--plum);}
.tabs i.c5{background:var(--mustard);} .tabs i.c6{background:var(--moss);}
.tabs i.off{opacity:.26;}

.runhead{display:flex;align-items:baseline;gap:13px;font-family:var(--f-mono);font-size:13.5px;
  letter-spacing:.16em;text-transform:uppercase;color:var(--ink-3);
  padding-bottom:13px;border-bottom:2px solid var(--ink);margin-bottom:26px;flex:none;}
.runhead b{font-weight:600;color:var(--accent);}
.runhead .sp{margin-left:auto;letter-spacing:.2em;}
.folio{position:absolute;bottom:30px;font-family:var(--f-mono);font-size:14px;font-weight:500;
  color:var(--ink-2);letter-spacing:.1em;font-variant-numeric:tabular-nums;}
.page.lf .folio{left:64px;} .page.rt .folio{right:96px;}
.folio i{font-style:normal;color:var(--ink-3);letter-spacing:.16em;margin-left:12px;text-transform:uppercase;font-size:12px;}

/* ═══ CHỮ ═══ */
.kick{font-family:var(--f-mono);font-size:14px;font-weight:600;letter-spacing:.2em;
  text-transform:uppercase;color:var(--accent);margin-bottom:14px;}
h1{font-family:var(--f-display);font-size:92px;line-height:.94;letter-spacing:-.022em;color:var(--ink);}
h2{font-family:var(--f-display);font-size:54px;line-height:1;letter-spacing:-.018em;color:var(--ink);}
h3{font-family:var(--f-body);font-weight:700;font-size:26px;line-height:1.14;color:var(--ink);}
p{font-family:var(--f-body);font-size:22px;line-height:1.47;color:var(--ink-2);}
p strong{color:var(--ink);font-weight:700;}
p+p{margin-top:14px;}
.lede{font-size:27px;line-height:1.38;color:var(--ink);font-weight:500;}
.small{font-size:18.5px;line-height:1.44;color:var(--ink-2);}
.mono{font-family:var(--f-mono);font-size:.88em;}
em.hl{font-style:normal;background:linear-gradient(180deg,transparent 60%,var(--paper-3) 60%);padding:0 3px;}

/* ═══ KHỐI 2 · HỘP BỐI CẢNH ═══ */
.incontext{background:var(--accent);color:#fff;padding:24px 26px 26px;flex:none;}
.incontext .ttl{font-family:var(--f-mono);font-size:13px;font-weight:600;letter-spacing:.24em;
  text-transform:uppercase;color:rgba(255,255,255,.6);padding-bottom:10px;margin-bottom:16px;
  border-bottom:1px solid rgba(255,255,255,.3);}
.icrow{margin-bottom:13px;}
.icrow:last-of-type{margin-bottom:0;}
.icrow .lb,.ictime .lb{font-family:var(--f-mono);font-size:11.5px;font-weight:600;letter-spacing:.18em;
  text-transform:uppercase;color:rgba(255,255,255,.66);display:block;margin-bottom:3px;}
.icrow .vl{font-family:var(--f-body);font-size:19.5px;line-height:1.3;font-weight:600;color:#fff;}
.incontext em.hl{background:linear-gradient(180deg,transparent 56%,rgba(255,255,255,.32) 56%);}
.ictime{display:grid;grid-template-columns:22px 1fr;gap:0 13px;margin-top:18px;padding-top:16px;
  border-top:1px solid rgba(255,255,255,.3);}
.ictime .rail{grid-row:1/span 2;position:relative;}
.ictime .rail::before{content:"";position:absolute;left:9px;top:10px;bottom:10px;width:2px;background:rgba(255,255,255,.42);}
.ictime .rail i{position:absolute;left:3px;width:14px;height:14px;border-radius:50%;background:#fff;}
.ictime .rail i.a{top:3px;}
.ictime .rail i.b{bottom:3px;background:var(--accent);border:3px solid #fff;}
.ictime .seg{padding-bottom:14px;}
.ictime .seg:last-child{padding-bottom:0;}
.ictime .vl{font-size:18.5px;line-height:1.32;color:#fff;font-weight:500;font-family:var(--f-body);}

/* ═══ KHỐI 3 · SƠ ĐỒ DÒNG CHẢY LOGIC ═══ */
.flow{display:flex;align-items:stretch;flex:none;}
.flow .fb{flex:1;background:var(--paper-2);border:2px solid var(--ink);padding:13px 15px;display:flex;flex-direction:column;}
.flow .fb .fn{font-family:var(--f-mono);font-size:11px;font-weight:600;letter-spacing:.16em;color:var(--accent);margin-bottom:5px;}
.flow .fb .ft{font-family:var(--f-body);font-size:17.5px;line-height:1.3;color:var(--ink);font-weight:600;}
.flow .fb.end{background:var(--accent);border-color:var(--accent);}
.flow .fb.end .fn{color:rgba(255,255,255,.7);} .flow .fb.end .ft{color:#fff;}
.flow .fa{width:30px;flex:none;display:flex;align-items:center;justify-content:center;}
.flow .fa::after{content:"";border-left:12px solid var(--ink);border-top:8px solid transparent;border-bottom:8px solid transparent;}
.flowlbl{font-family:var(--f-mono);font-size:12.5px;letter-spacing:.18em;text-transform:uppercase;
  color:var(--ink-3);margin-bottom:10px;}

/* ═══ KHỐI 5 · TRÍCH DẪN ═══ */
.pull{background:var(--ink);color:var(--paper);padding:26px 28px;}
.pull q{font-family:var(--f-serif);font-style:italic;font-size:27px;line-height:1.33;display:block;}
.pull .src{font-family:var(--f-mono);font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;
  color:rgba(245,242,233,.55);margin-top:14px;display:block;}
.pull.tint{background:var(--accent);color:#fff;}
.pull.tint .src{color:rgba(255,255,255,.62);}
.pull.sm{padding:20px 22px;}
.pull.sm q{font-size:23px;line-height:1.34;}
.pull.sm .src{margin-top:11px;}
.pull.plain{background:transparent;color:var(--ink);border-left:6px solid var(--accent);padding:4px 0 4px 24px;}
.pull.plain q{color:var(--ink);} .pull.plain .src{color:var(--ink-3);}

/* ═══ KHỐI 6 · KHUNG BÊN LỀ (tiểu sử · hiện vật · thử ngay) ═══ */
.side{border:2px solid var(--ink);background:var(--paper-2);padding:18px 20px;flex:none;}
.side .sh{display:flex;align-items:center;gap:13px;margin-bottom:12px;}
.side .av{width:46px;height:46px;flex:none;background:var(--accent);border-radius:50%;
  display:flex;align-items:center;justify-content:center;color:#fff;font-family:var(--f-display);font-size:19px;}
.side .av.sq{border-radius:0;}
.side .nm{font-family:var(--f-body);font-weight:700;font-size:21px;color:var(--ink);line-height:1.1;}
.side .rl{font-family:var(--f-mono);font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-3);display:block;margin-top:4px;}
.side p{font-size:18px;line-height:1.4;}
.side .lst{margin-top:4px;}

/* ═══ HÌNH ═══ */
figure{margin:0;} figure svg{width:100%;height:auto;}
figure.sm svg{width:86%;}
figcaption{font-family:var(--f-mono);font-size:13px;line-height:1.5;color:var(--ink-3);
  margin-top:10px;padding-top:9px;border-top:1px solid var(--rule);}
figcaption b{color:var(--ink);font-weight:600;letter-spacing:.12em;text-transform:uppercase;font-size:12px;}
.plate{background:var(--paper-2);border:2px solid var(--ink);}

.steps{display:grid;gap:18px;}
.steps.s3{grid-template-columns:repeat(3,1fr);} .steps.s4{grid-template-columns:repeat(4,1fr);}
.step .n{font-family:var(--f-display);font-size:28px;line-height:1;color:var(--accent);display:block;margin-bottom:7px;}
.step .hd{font-family:var(--f-body);font-weight:700;font-size:21px;color:var(--ink);margin-bottom:5px;}
.step p{font-size:17.5px;line-height:1.36;}
.step svg{border:2px solid var(--ink);background:var(--paper-2);margin-bottom:10px;}

.cards{display:grid;gap:17px;}
.cards.c2{grid-template-columns:repeat(2,1fr);} .cards.c3{grid-template-columns:repeat(3,1fr);}
.cards.c4{grid-template-columns:repeat(4,1fr);}
.card{border-top:5px solid var(--accent);padding-top:14px;}
.card .tg{font-family:var(--f-mono);font-size:11.5px;font-weight:600;letter-spacing:.16em;
  text-transform:uppercase;color:var(--accent);display:block;margin-bottom:6px;}
.card h3{margin-bottom:6px;font-size:24px;}
.card p{font-size:18.5px;line-height:1.38;}
.card.co{border-color:var(--coral);} .card.co .tg{color:var(--coral);}
.card.te{border-color:var(--teal);} .card.te .tg{color:var(--teal);}
.card.mu{border-color:var(--mustard);} .card.mu .tg{color:var(--mustard);}
.card.na{border-color:var(--navy);} .card.na .tg{color:var(--navy);}
.card.mo{border-color:var(--moss);} .card.mo .tg{color:var(--moss);}
.card.pl{border-color:var(--plum);} .card.pl .tg{color:var(--plum);}

.rows{border-top:2px solid var(--ink);}
.row{display:flex;align-items:baseline;gap:16px;padding:12px 0;border-bottom:1px solid var(--rule);}
.row .k{font-family:var(--f-mono);font-size:14px;font-weight:600;letter-spacing:.09em;
  text-transform:uppercase;color:var(--accent);width:108px;flex:none;}
.row .v{font-family:var(--f-body);font-size:19.5px;line-height:1.33;color:var(--ink-2);flex:1;}
.row .v b{color:var(--ink);font-weight:700;}
.row .n{font-family:var(--f-mono);font-size:14px;color:var(--ink-3);letter-spacing:.08em;flex:none;font-variant-numeric:tabular-nums;}

.lst{list-style:none;}
.lst li{position:relative;padding-left:30px;font-family:var(--f-body);font-size:19px;
  line-height:1.36;color:var(--ink-2);margin-bottom:10px;}
.lst li::before{position:absolute;left:0;top:0;font-family:var(--f-mono);font-weight:600;font-size:17px;}
.lst.yes li::before{content:"✓";color:var(--moss);}
.lst.no li::before{content:"✕";color:var(--coral);}
.lst.dot li::before{content:"•";color:var(--accent);}
.lst li b{color:var(--ink);font-weight:700;}

.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:15px;border-top:2px solid var(--ink);padding-top:16px;}
.stats div b{font-family:var(--f-display);font-size:44px;line-height:.9;color:var(--ink);display:block;}
.stats div span{font-family:var(--f-mono);font-size:12px;letter-spacing:.1em;text-transform:uppercase;
  color:var(--ink-3);display:block;margin-top:6px;line-height:1.35;}

.tree{font-family:var(--f-mono);font-size:17px;line-height:1.78;color:var(--ink-2);white-space:pre;}
.tree b{font-weight:600;} .tree .d{color:var(--ink-3);font-size:14.5px;}
.tree .i{color:var(--teal);} .tree .s{color:var(--moss);} .tree .c{color:var(--coral);} .tree .g{color:var(--ink-3);}

/* ═══ MỞ CHƯƠNG ═══ */
.chapo{position:absolute;inset:0;display:grid;grid-template-columns:960px 960px;}
.chapo .cl{background:var(--accent);color:#fff;padding:70px 64px;display:flex;flex-direction:column;justify-content:space-between;}
.chapo .cl .num{font-family:var(--f-mono);font-size:15px;letter-spacing:.28em;color:rgba(255,255,255,.65);}
.chapo .cl h1{color:#fff;font-size:104px;}
.chapo .cl .sub{font-family:var(--f-body);font-size:26px;line-height:1.36;color:rgba(255,255,255,.9);max-width:740px;margin-top:26px;}
.chapo .cr{padding:70px 96px 70px 82px;background:var(--paper);position:relative;display:flex;flex-direction:column;}

/* ═══ TỪ ĐIỂN · CHỈ MỤC · CÂU HỎI ═══ */
.gloss{columns:2;column-gap:44px;}
.gterm{break-inside:avoid;margin-bottom:15px;}
.gterm b{font-family:var(--f-body);font-weight:700;font-size:19px;color:var(--ink);display:block;}
.gterm span{font-family:var(--f-body);font-size:17px;line-height:1.35;color:var(--ink-2);display:block;margin-top:2px;}
.qcard{border-left:5px solid var(--accent);padding:2px 0 2px 18px;margin-bottom:17px;}
.qcard .qn{font-family:var(--f-mono);font-size:12px;font-weight:600;letter-spacing:.16em;color:var(--accent);}
.qcard .qq{font-family:var(--f-body);font-weight:700;font-size:20px;line-height:1.28;color:var(--ink);margin:3px 0 4px;}
.qcard .qw{font-family:var(--f-body);font-size:16.5px;line-height:1.34;color:var(--ink-3);}
.qcard .qw b{color:var(--ink-2);font-weight:600;}

/* ═══ BÌA · MỤC LỤC ═══ */
.cover{position:absolute;inset:0;display:grid;grid-template-columns:1120px 800px;background:var(--paper);}
.cvl{padding:80px 72px;display:flex;flex-direction:column;justify-content:space-between;}
.cvr{background:var(--navy);position:relative;overflow:hidden;}
.cover h1{font-size:138px;letter-spacing:-.032em;}
.bar{height:14px;background:var(--coral);width:320px;margin:30px 0 26px;}
.toc .it{display:flex;align-items:baseline;gap:13px;padding:10px 0;border-bottom:1px solid var(--rule);}
.toc .it .sw{width:12px;height:12px;flex:none;align-self:center;}
.toc .it .no{font-family:var(--f-mono);font-size:13.5px;font-weight:600;color:var(--ink-3);width:26px;flex:none;}
.toc .it .tt{font-family:var(--f-body);font-size:19.5px;font-weight:600;color:var(--ink);flex:1;line-height:1.2;}
.toc .it .ds{font-family:var(--f-body);font-size:16px;color:var(--ink-3);flex:none;}
.toc .it .pg{font-family:var(--f-mono);font-size:13.5px;color:var(--ink-3);flex:none;width:34px;text-align:right;}

/* ═══ HIỆN LÊN ═══ */
.rv{opacity:0;transform:translateY(14px);}
.slide.active .rv{animation:rise .58s var(--ease) forwards;}
@keyframes rise{to{opacity:1;transform:none;}}
.slide.active .d1{animation-delay:.04s} .slide.active .d2{animation-delay:.12s}
.slide.active .d3{animation-delay:.2s}  .slide.active .d4{animation-delay:.28s}
.slide.active .d5{animation-delay:.36s} .slide.active .d6{animation-delay:.44s}
.dash{stroke-dasharray:1200;stroke-dashoffset:1200;}
.slide.active .dash{animation:draw 1.5s var(--ease) .35s forwards;}
@keyframes draw{to{stroke-dashoffset:0;}}

/* ═══ ĐIỀU KHIỂN ═══ */
.deck-controls{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:1000;
  display:flex;align-items:center;gap:12px;background:rgba(21,20,14,.82);padding:7px 15px;}
.deck-controls button{background:none;border:none;color:var(--paper);font-size:18px;cursor:pointer;padding:2px 7px;font-family:var(--f-mono);}
.deck-controls button:hover{color:#E8A21C;}
#counter{font-family:var(--f-mono);font-size:12.5px;letter-spacing:.14em;color:rgba(245,242,233,.72);font-variant-numeric:tabular-nums;}
#progress{position:fixed;left:0;top:0;height:3px;width:0;background:var(--coral);z-index:1001;transition:width .35s var(--ease);}
.edit-toggle{position:fixed;left:12px;top:12px;z-index:1002;background:rgba(21,20,14,.8);border:none;color:var(--paper);width:32px;height:32px;cursor:pointer;opacity:0;transition:opacity .25s;}
.edit-toggle:hover,.edit-toggle.show,.edit-toggle.active{opacity:1;}
.edit-toggle.active{background:var(--coral);}
.edit-hotzone{position:fixed;left:0;top:0;width:86px;height:86px;z-index:1001;}
[contenteditable="true"]{outline:1px dashed var(--coral);outline-offset:3px;}
</style>
</head>
<body>
<div id="progress"></div>
<div class="deck-viewport">
<main class="deck-stage" id="deckStage">

<!-- ═════ 01 · BÌA ═════ -->
<section class="slide active">
  <div class="cover">
    <div class="cvl">
      <div>
        <div class="kick rv d1" style="color:var(--coral);">Những ý tưởng lớn · giản lược</div>
        <h1 class="rv d2">IDEA<br>VERSE</h1>
        <div class="bar rv d3"></div>
        <p class="lede rv d4" style="max-width:840px;">Bộ vault của Nick Milo, mổ ra từ đầu: nó chạy bằng cơ chế gì, dùng thế nào cho người mới, và những câu hỏi nó <strong>chưa</strong> trả lời.</p>
      </div>
      <div>
        <div class="rv d5" style="display:flex;gap:8px;margin-bottom:22px;">
          <i style="display:block;width:60px;height:12px;background:var(--coral)"></i>
          <i style="display:block;width:60px;height:12px;background:var(--navy)"></i>
          <i style="display:block;width:60px;height:12px;background:var(--teal)"></i>
          <i style="display:block;width:60px;height:12px;background:var(--plum)"></i>
          <i style="display:block;width:60px;height:12px;background:var(--mustard)"></i>
          <i style="display:block;width:60px;height:12px;background:var(--moss)"></i>
        </div>
        <div class="stats rv d6">
          <div><b>6</b><span>chương</span></div>
          <div><b>14</b><span>ý tưởng lớn</span></div>
          <div><b>904</b><span>note đã mổ</span></div>
          <div><b>9</b><span>câu hỏi để ngỏ</span></div>
        </div>
      </div>
    </div>
    <div class="cvr">
      <svg viewBox="0 0 800 1080" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="800" height="1080" fill="#1B3A63"/>
        <circle cx="400" cy="320" r="146" fill="#0F7C7A"/>
        <rect x="152" y="548" width="232" height="232" fill="#C8860B"/>
        <path d="M468 548 L706 548 L587 780 Z" fill="#D2431C"/>
        <g stroke="#F5F2E9" stroke-width="2" fill="none" opacity=".55">
          <path class="dash" d="M400 466 L268 548 M400 466 L587 548 M268 780 L587 780"/>
        </g>
        <g fill="#F5F2E9"><circle cx="400" cy="466" r="9"/><circle cx="268" cy="548" r="9"/>
          <circle cx="587" cy="548" r="9"/><circle cx="268" cy="780" r="9"/><circle cx="587" cy="780" r="9"/></g>
        <text x="400" y="334" text-anchor="middle" fill="#F5F2E9" font-family="Archivo Black, sans-serif" font-size="44">ATLAS</text>
        <text x="268" y="676" text-anchor="middle" fill="#15140E" font-family="Archivo Black, sans-serif" font-size="29">CALENDAR</text>
        <text x="587" y="682" text-anchor="middle" fill="#F5F2E9" font-family="Archivo Black, sans-serif" font-size="31">EFFORTS</text>
        <text x="58" y="1004" fill="rgba(245,242,233,.5)" font-family="IBM Plex Mono, monospace" font-size="16" letter-spacing="4">LINKING YOUR THINKING · NICK MILO · v2.5</text>
      </svg>
    </div>
  </div>
</section>

<!-- ═════ 02 · LỜI GIỚI THIỆU ═════ -->
<section class="slide" style="--accent:var(--coral);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Khởi đầu</b><span>·</span><span>Lời giới thiệu</span><span class="sp">Buổi chia sẻ nội bộ</span></div>
      <div class="kick rv d1">Vì sao buổi này</div>
      <h2 class="rv d1" style="margin-bottom:22px;">Ai cũng lưu.<br>Gần như không ai dùng lại.</h2>
      <p class="rv d2">Ideaverse là một <strong>vault mẫu</strong> — một thư mục Obsidian đã dựng sẵn, do Nick Milo phát hành. Nó không phải phần mềm. Nó là một <strong>lập luận về cách sắp xếp suy nghĩ</strong>, gói dưới dạng 904 file văn bản thuần.</p>
      <p class="rv d2">Buổi này mổ nó ra làm ba câu hỏi: bộ này <strong>chạy bằng cơ chế gì</strong>, người mới <strong>bắt đầu ở đâu</strong>, và chỗ nào nó <strong>chưa chứng minh được</strong> nên bạn phải tự đi tìm.</p>
      <p class="rv d3">Ba ý cốt lõi áp được cho Google Drive, Notion, hay thư mục thường trên máy bạn. Không cần cài gì để hiểu.</p>
      <div class="pull plain rv d4" style="margin-top:26px;">
        <q>Bộ này sinh ra để chữa một cảm giác, không phải để sắp xếp file: cảm giác quá tải khi kiến thức dồn lên mà chưa ai sắp.</q>
        <span class="src">Luận điểm trung tâm của cả cuốn</span>
      </div>
      <div class="folio">04<i>Lời giới thiệu</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Bối cảnh</b><span class="sp">Ba tầng của một buổi 45 phút</span></div>
      <figure class="rv d3">
        <svg viewBox="0 0 760 300" class="plate">
          <text x="28" y="38" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2.5" fill="#8A8474">BA CÂU HỎI, BA TẦNG SÂU</text>
          <rect x="28" y="58" width="704" height="66" fill="#D2431C"/>
          <text x="46" y="90" font-family="Archivo Black, sans-serif" font-size="21" fill="#F5F2E9">1 · CƠ CHẾ</text>
          <text x="240" y="90" font-family="Archivo, sans-serif" font-size="18" fill="rgba(245,242,233,.9)">Bộ này chạy bằng gì? — chương 1 tới 5</text>
          <text x="240" y="112" font-family="IBM Plex Mono, monospace" font-size="13" fill="rgba(245,242,233,.6)">HIỂU ĐƯỢC MÀ KHÔNG CẦN CÀI</text>
          <rect x="28" y="134" width="704" height="66" fill="#4C7736"/>
          <text x="46" y="166" font-family="Archivo Black, sans-serif" font-size="21" fill="#F5F2E9">2 · THỰC HÀNH</text>
          <text x="240" y="166" font-family="Archivo, sans-serif" font-size="18" fill="rgba(245,242,233,.9)">Người mới làm gì ngày đầu? — chương 6</text>
          <text x="240" y="188" font-family="IBM Plex Mono, monospace" font-size="13" fill="rgba(245,242,233,.6)">LÀM ĐƯỢC NGAY TỐI NAY</text>
          <rect x="28" y="210" width="704" height="66" fill="#1B3A63"/>
          <text x="46" y="242" font-family="Archivo Black, sans-serif" font-size="21" fill="#F5F2E9">3 · ĐỂ NGỎ</text>
          <text x="240" y="242" font-family="Archivo, sans-serif" font-size="18" fill="rgba(245,242,233,.9)">Chỗ nào chưa ai trả lời? — phần tra cứu</text>
          <text x="240" y="264" font-family="IBM Plex Mono, monospace" font-size="13" fill="rgba(245,242,233,.6)">VIỆC CỦA BẠN SAU BUỔI NÀY</text>
        </svg>
        <figcaption><b>Hình 1</b> — Tầng 3 không có đáp án trong bộ slide này. Đó là chủ ý.</figcaption>
      </figure>
      <div class="side rv d5" style="margin-top:24px;">
        <div class="sh"><span class="av">NM</span><span><span class="nm">Nick Milo</span><span class="rl">Tác giả · Linking Your Thinking</span></span></div>
        <p>Người dạy viết và tổ chức ý tưởng, đặt ra khái niệm <strong>Map of Content</strong> và <strong>Mental Squeeze Point</strong>. Ideaverse là vault mẫu ông phát hành kèm khoá học LYT, bản 2.5 phát hành dưới giấy phép CC BY-NC-ND 4.0.</p>
      </div>
      <div class="side rv d6" style="margin-top:18px;background:var(--paper);border-style:dashed;">
        <div class="sh"><span class="av sq" style="background:var(--ink);">?</span><span><span class="nm">Trước khi nghe tiếp</span><span class="rl">Câu hỏi tự trả lời trong đầu</span></span></div>
        <p>Lần gần nhất bạn <strong>mở lại</strong> một ghi chép cũ để dùng thật là khi nào? Nếu không nhớ nổi, phần còn lại của buổi này nói đúng vấn đề của bạn.</p>
      </div>
      <div class="folio">05<i>Bối cảnh</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
</section>

<!-- ═════ 03 · PHƯƠNG PHÁP ĐỌC + KHUÔN MẪU TRANG ĐÔI ═════ -->
<section class="slide" style="--accent:var(--navy);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Khởi đầu</b><span>·</span><span>Phương pháp</span><span class="sp">Cách dùng bộ này</span></div>
      <div class="kick rv d1">Đọc hai tốc độ</div>
      <h2 class="rv d1" style="margin-bottom:22px;">Ba mươi giây,<br>hoặc mười phút</h2>
      <p class="rv d2">Mọi trang đôi từ đây trở đi đều theo <strong>một khuôn duy nhất, sáu khối</strong>. Khuôn cố định nên bạn học cách đọc một lần, dùng cho cả cuốn.</p>
      <div class="cards c2 rv d3" style="margin-top:24px;">
        <div class="card na"><span class="tg">Đọc lướt · 30 giây</span><h3>Tiêu đề + Hộp bối cảnh + Sơ đồ</h3><p>Ba khối này đủ để nắm trọn ý tưởng. Bỏ qua phần còn lại vẫn không mất gì cốt lõi.</p></div>
        <div class="card mo"><span class="tg">Đọc sâu · 10 phút</span><h3>Thêm bài viết + trích dẫn + khung lề</h3><p>Cội nguồn, ví dụ đời thường, và người đã nghĩ ra nó.</p></div>
      </div>
      <div class="flowlbl rv d4" style="margin-top:26px;">MÃ MÀU MÉP TRANG · ĐỊNH VỊ CHƯƠNG KHÔNG CẦN MỤC LỤC</div>
      <div class="rv d4" style="display:flex;gap:10px;">
        <span style="flex:1;background:var(--coral);color:#fff;font-family:var(--f-mono);font-size:12px;letter-spacing:.1em;padding:11px 8px;text-align:center;">1 BẾ TẮC</span>
        <span style="flex:1;background:var(--navy);color:#fff;font-family:var(--f-mono);font-size:12px;letter-spacing:.1em;padding:11px 8px;text-align:center;">2 VẬT LIỆU</span>
        <span style="flex:1;background:var(--teal);color:#fff;font-family:var(--f-mono);font-size:12px;letter-spacing:.1em;padding:11px 8px;text-align:center;">3 ACE</span>
        <span style="flex:1;background:var(--plum);color:#fff;font-family:var(--f-mono);font-size:12px;letter-spacing:.1em;padding:11px 8px;text-align:center;">4 LIÊN KẾT</span>
        <span style="flex:1;background:var(--mustard);color:#fff;font-family:var(--f-mono);font-size:12px;letter-spacing:.1em;padding:11px 8px;text-align:center;">5 HÀNH ĐỘNG</span>
        <span style="flex:1;background:var(--moss);color:#fff;font-family:var(--f-mono);font-size:12px;letter-spacing:.1em;padding:11px 8px;text-align:center;">6 THỰC HÀNH</span>
      </div>
      <p class="small rv d5" style="margin-top:16px;">Dải màu này lặp ở mép phải mỗi trang đôi. Ô nào dài hơn là chương bạn đang đứng.</p>
      <div class="folio">06<i>Phương pháp</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Khuôn mẫu</b><span class="sp">Sáu khối, cố định</span></div>
      <figure class="rv d3">
        <svg viewBox="0 0 760 620" class="plate">
          <!-- khối 1 tiêu đề -->
          <rect x="24" y="24" width="712" height="76" fill="#1B3A63"/>
          <text x="42" y="60" font-family="Archivo Black, sans-serif" font-size="22" fill="#F5F2E9">1 · TIÊU ĐỀ ĐINH</text>
          <text x="42" y="84" font-family="Archivo, sans-serif" font-size="16" fill="rgba(245,242,233,.82)">Một câu tuyên ngôn, không phải tên thuật ngữ khô khan</text>
          <!-- khối 2 hộp bối cảnh -->
          <rect x="24" y="112" width="342" height="176" fill="#0F7C7A"/>
          <text x="42" y="146" font-family="Archivo Black, sans-serif" font-size="19" fill="#F5F2E9">2 · HỘP BỐI CẢNH</text>
          <text x="42" y="176" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2" fill="rgba(245,242,233,.7)">TRỌNG TÂM</text>
          <text x="42" y="204" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2" fill="rgba(245,242,233,.7)">LĨNH VỰC</text>
          <line x1="42" y1="220" x2="348" y2="220" stroke="rgba(245,242,233,.35)"/>
          <text x="42" y="248" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2" fill="rgba(245,242,233,.7)">TRƯỚC · thế giới tin gì</text>
          <text x="42" y="274" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2" fill="rgba(245,242,233,.7)">SAU · mở ra cái gì</text>
          <!-- khối 3 flowchart -->
          <rect x="378" y="112" width="358" height="176" fill="#EBE5D6" stroke="#15140E" stroke-width="2"/>
          <text x="396" y="146" font-family="Archivo Black, sans-serif" font-size="19" fill="#15140E">3 · SƠ ĐỒ LOGIC</text>
          <g fill="#F5F2E9" stroke="#15140E" stroke-width="1.6">
            <rect x="396" y="176" width="86" height="46"/><rect x="508" y="176" width="86" height="46"/><rect x="620" y="176" width="86" height="46"/>
          </g>
          <g fill="#15140E"><path d="M486 194 L502 199 L486 204 Z"/><path d="M598 194 L614 199 L598 204 Z"/></g>
          <text x="396" y="252" font-family="Archivo, sans-serif" font-size="15" fill="#514D42">Chuỗi suy luận, ba tới bốn ô.</text>
          <text x="396" y="274" font-family="Archivo, sans-serif" font-size="15" fill="#514D42">Vì sao người ta nghĩ ra được điều đó.</text>
          <!-- khối 4 bài viết -->
          <rect x="24" y="300" width="440" height="296" fill="#F5F2E9" stroke="#15140E" stroke-width="2"/>
          <text x="42" y="334" font-family="Archivo Black, sans-serif" font-size="19" fill="#15140E">4 · BÀI VIẾT CHÍNH</text>
          <g fill="#C9C1AC"><rect x="42" y="352" width="400" height="8"/><rect x="42" y="372" width="378" height="8"/>
            <rect x="42" y="392" width="404" height="8"/><rect x="42" y="412" width="330" height="8"/></g>
          <text x="42" y="446" font-family="Archivo, sans-serif" font-size="15" fill="#8A8474">Ví dụ đời thường · không thuật ngữ nặng</text>
          <rect x="42" y="466" width="404" height="106" fill="#15140E"/>
          <text x="60" y="500" font-family="Archivo Black, sans-serif" font-size="17" fill="#F5F2E9">5 · TRÍCH DẪN</text>
          <text x="60" y="528" font-family="Source Serif 4, Georgia, serif" font-style="italic" font-size="17" fill="rgba(245,242,233,.85)">Câu nguyên văn của tác giả,</text>
          <text x="60" y="552" font-family="Source Serif 4, Georgia, serif" font-style="italic" font-size="17" fill="rgba(245,242,233,.85)">kèm đường dẫn tới file gốc.</text>
          <!-- khối 6 hình + khung lề -->
          <rect x="476" y="300" width="260" height="150" fill="#EBE5D6" stroke="#15140E" stroke-width="2"/>
          <text x="494" y="334" font-family="Archivo Black, sans-serif" font-size="18" fill="#15140E">6a · HÌNH</text>
          <g stroke="#0F7C7A" stroke-width="2.4" fill="none"><path d="M500 400 L548 366 L600 404 L660 356"/></g>
          <g fill="#0F7C7A"><circle cx="500" cy="400" r="6"/><circle cx="548" cy="366" r="6"/><circle cx="600" cy="404" r="6"/><circle cx="660" cy="356" r="6"/></g>
          <text x="494" y="434" font-family="Archivo, sans-serif" font-size="14" fill="#8A8474">Infographic, không phải công thức</text>
          <rect x="476" y="462" width="260" height="134" fill="#EBE5D6" stroke="#15140E" stroke-width="2" stroke-dasharray="6 5"/>
          <text x="494" y="496" font-family="Archivo Black, sans-serif" font-size="18" fill="#15140E">6b · KHUNG LỀ</text>
          <circle cx="512" cy="534" r="17" fill="#1B3A63"/>
          <text x="540" y="530" font-family="Archivo, sans-serif" font-size="15" fill="#514D42">Tiểu sử người nghĩ ra,</text>
          <text x="540" y="552" font-family="Archivo, sans-serif" font-size="15" fill="#514D42">hiện vật, hoặc việc thử ngay.</text>
          <text x="494" y="580" font-family="IBM Plex Mono, monospace" font-size="12" letter-spacing="1.6" fill="#8A8474">ĐỌC LƯỚT THÌ BỎ QUA ĐƯỢC</text>
        </svg>
        <figcaption><b>Hình 2</b> — Khuôn mẫu áp cho toàn bộ 14 trang đôi phía sau. Khối 1, 2, 3 là phần đọc lướt; khối 4, 5, 6 là phần đọc sâu.</figcaption>
      </figure>
      <div class="folio">07<i>Khuôn mẫu</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
</section>

<!-- ═════ 04 · MỤC LỤC ═════ -->
<section class="slide" style="--accent:var(--ink);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Khởi đầu</b><span>·</span><span>Mục lục</span><span class="sp">Ba phần · sáu chương</span></div>
      <div class="kick rv d1" style="color:var(--coral);">Bố cục toàn cuốn</div>
      <h2 class="rv d1" style="margin-bottom:24px;">Từ bế tắc<br>tới ngày đầu tiên</h2>
      <figure class="rv d2">
        <svg viewBox="0 0 760 340" class="plate">
          <text x="26" y="36" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2.5" fill="#8A8474">DÒNG CHẢY CỦA CẢ CUỐN</text>
          <rect x="26" y="56" width="150" height="52" fill="#DFD7C3"/>
          <text x="101" y="80" text-anchor="middle" font-family="Archivo, sans-serif" font-weight="700" font-size="16" fill="#15140E">I · KHỞI ĐẦU</text>
          <text x="101" y="98" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" fill="#8A8474">3 trang đôi</text>
          <rect x="200" y="56" width="352" height="52" fill="#15140E"/>
          <text x="376" y="80" text-anchor="middle" font-family="Archivo, sans-serif" font-weight="700" font-size="16" fill="#F5F2E9">II · THÂN · 6 CHƯƠNG</text>
          <text x="376" y="98" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" fill="rgba(245,242,233,.6)">14 trang đôi</text>
          <rect x="576" y="56" width="158" height="52" fill="#DFD7C3"/>
          <text x="655" y="80" text-anchor="middle" font-family="Archivo, sans-serif" font-weight="700" font-size="16" fill="#15140E">III · TRA CỨU</text>
          <text x="655" y="98" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" fill="#8A8474">4 trang đôi</text>
          <g fill="#15140E"><path d="M180 76 L196 82 L180 88 Z"/><path d="M556 76 L572 82 L556 88 Z"/></g>
          <!-- 6 chuong -->
          <g>
            <rect x="26" y="148" width="112" height="112" fill="#D2431C"/>
            <rect x="146" y="148" width="112" height="112" fill="#1B3A63"/>
            <rect x="266" y="148" width="112" height="112" fill="#0F7C7A"/>
            <rect x="386" y="148" width="112" height="112" fill="#6A3B8C"/>
            <rect x="506" y="148" width="112" height="112" fill="#C8860B"/>
            <rect x="626" y="148" width="112" height="112" fill="#4C7736"/>
          </g>
          <g font-family="Archivo Black, sans-serif" font-size="30" fill="rgba(255,255,255,.42)">
            <text x="42" y="196">1</text><text x="162" y="196">2</text><text x="282" y="196">3</text>
            <text x="402" y="196">4</text><text x="522" y="196">5</text><text x="642" y="196">6</text>
          </g>
          <g font-family="Archivo, sans-serif" font-weight="700" font-size="16" fill="#F5F2E9">
            <text x="42" y="232">BẾ TẮC</text><text x="162" y="232">VẬT LIỆU</text><text x="282" y="232">ACE</text>
            <text x="402" y="232">LIÊN KẾT</text><text x="522" y="232">HÀNH</text><text x="642" y="232">THỰC</text>
            <text x="522" y="250">ĐỘNG</text><text x="642" y="250">HÀNH</text>
          </g>
          <text x="26" y="300" font-family="Archivo, sans-serif" font-size="17" fill="#514D42">Sáu chương xếp theo <tspan font-weight="700" fill="#15140E">thứ tự người mới gặp vấn đề</tspan>, không theo</text>
          <text x="26" y="324" font-family="Archivo, sans-serif" font-size="17" fill="#514D42">thứ tự thư mục. Chương sau chỉ hiểu được khi đã qua chương trước.</text>
        </svg>
        <figcaption><b>Hình 3</b> — Ba phần, sáu chương, 21 trang đôi. Mỗi chương một màu, lặp ở mép phải mọi trang.</figcaption>
      </figure>
      <div class="folio">08<i>Mục lục</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Mục lục</b><span class="sp">21 trang đôi</span></div>
      <div class="toc rv d3" style="flex:1;">
        <div class="it"><i class="sw" style="background:var(--coral)"></i><span class="no">1</span><span class="tt">BẾ TẮC</span><span class="ds">vì sao đống ghi chép chết</span><span class="pg">10</span></div>
        <div class="it" style="padding-left:52px;"><span class="tt" style="font-weight:400;font-size:18px;color:var(--ink-2);">Lưu nhiều không làm bạn hiểu thêm</span><span class="pg">12</span></div>
        <div class="it"><i class="sw" style="background:var(--navy)"></i><span class="no">2</span><span class="tt">VẬT LIỆU</span><span class="ds">bộ phận nhỏ nhất của hệ</span><span class="pg">14</span></div>
        <div class="it" style="padding-left:52px;"><span class="tt" style="font-weight:400;font-size:18px;color:var(--ink-2);">Một ghi chép là một file text, không hơn</span><span class="pg">16</span></div>
        <div class="it" style="padding-left:52px;"><span class="tt" style="font-weight:400;font-size:18px;color:var(--ink-2);">Liên kết làm được việc thư mục không làm nổi</span><span class="pg">18</span></div>
        <div class="it"><i class="sw" style="background:var(--teal)"></i><span class="no">3</span><span class="tt">ACE</span><span class="ds">kiến trúc năm thư mục</span><span class="pg">20</span></div>
        <div class="it" style="padding-left:52px;"><span class="tt" style="font-weight:400;font-size:18px;color:var(--ink-2);">Chia theo ý định, không theo chủ đề</span><span class="pg">22</span></div>
        <div class="it" style="padding-left:52px;"><span class="tt" style="font-weight:400;font-size:18px;color:var(--ink-2);">Chỗ để một ý nghĩ nguội đi</span><span class="pg">24</span></div>
        <div class="it" style="padding-left:52px;"><span class="tt" style="font-weight:400;font-size:18px;color:var(--ink-2);">Toàn bộ vault trên một màn hình</span><span class="pg">26</span></div>
        <div class="it"><i class="sw" style="background:var(--plum)"></i><span class="no">4</span><span class="tt">LIÊN KẾT</span><span class="ds">nơi tư duy thật sự xảy ra</span><span class="pg">28</span></div>
        <div class="it" style="padding-left:52px;"><span class="tt" style="font-weight:400;font-size:18px;color:var(--ink-2);">Sự vật đỡ được ý kiến, ngược lại thì không</span><span class="pg">30</span></div>
        <div class="it" style="padding-left:52px;"><span class="tt" style="font-weight:400;font-size:18px;color:var(--ink-2);">Bản đồ là lớp phủ, không phải cái hộp</span><span class="pg">32</span></div>
        <div class="it" style="padding-left:52px;"><span class="tt" style="font-weight:400;font-size:18px;color:var(--ink-2);">Ý tưởng chỉ sống khi chạy hết vòng</span><span class="pg">34</span></div>
        <div class="it"><i class="sw" style="background:var(--mustard)"></i><span class="no">5</span><span class="tt">HÀNH ĐỘNG</span><span class="ds">việc chưa rõ hình thù</span><span class="pg">36</span></div>
        <div class="it" style="padding-left:52px;"><span class="tt" style="font-weight:400;font-size:18px;color:var(--ink-2);">Effort không phải project</span><span class="pg">38</span></div>
        <div class="it" style="padding-left:52px;"><span class="tt" style="font-weight:400;font-size:18px;color:var(--ink-2);">Không có ô &#8220;Done&#8221;</span><span class="pg">40</span></div>
        <div class="it"><i class="sw" style="background:var(--moss)"></i><span class="no">6</span><span class="tt">THỰC HÀNH</span><span class="ds">ngày đầu và ba mươi ngày</span><span class="pg">42</span></div>
        <div class="it" style="padding-left:52px;"><span class="tt" style="font-weight:400;font-size:18px;color:var(--ink-2);">Cấu trúc phải kiếm ra mới có</span><span class="pg">44</span></div>
        <div class="it" style="padding-left:52px;"><span class="tt" style="font-weight:400;font-size:18px;color:var(--ink-2);">Ngày đầu tiên: làm gì, tránh gì</span><span class="pg">46</span></div>
        <div class="it" style="padding-left:52px;"><span class="tt" style="font-weight:400;font-size:18px;color:var(--ink-2);">Ba mươi ngày đầu</span><span class="pg">48</span></div>
        <div class="it" style="border-bottom:2px solid var(--ink);"><i class="sw" style="background:var(--ink)"></i><span class="no">III</span><span class="tt">TRA CỨU MỞ RỘNG</span><span class="ds">danh bạ · thuật ngữ · chỉ mục · câu hỏi</span><span class="pg">50</span></div>
      </div>
      <div class="folio">09<i>Mục lục</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
</section>

<!-- ═════ 05 · MỞ CHƯƠNG 1 ═════ -->
<section class="slide" style="--accent:var(--coral);">
  <div class="chapo">
    <div class="cl">
      <div>
        <div class="num rv d1">CHƯƠNG MỘT</div>
        <h1 class="rv d2" style="margin-top:18px;">BẾ<br>TẮC</h1>
        <p class="sub rv d3">Trước khi nói tới thư mục hay phần mềm, phải biết bộ này sinh ra để chữa cái gì.</p>
      </div>
      <div class="rv d5" style="font-family:var(--f-mono);font-size:14px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.7);border-top:1px solid rgba(255,255,255,.4);padding-top:16px;">
        1 trang đôi · 4 phút
      </div>
    </div>
    <div class="cr">
      <div class="runhead"><b>Chương 1</b><span class="sp">Bế tắc</span></div>
      <div class="kick rv d2">Câu hỏi của chương</div>
      <h2 class="rv d2" style="font-size:44px;margin-bottom:26px;">Vì sao người chăm ghi chép nhất<br>lại là người nhớ ít nhất?</h2>
      <div class="flowlbl rv d3">TRONG CHƯƠNG NÀY</div>
      <ul class="lst dot rv d3">
        <li>Hai căn bệnh có tên: <b>Mental Squeeze Point</b> và <b>Collector&#39;s Fallacy</b></li>
        <li>Vì sao đổi phần mềm không chữa được cái nào trong hai</li>
        <li>Điểm nghẹt là <b>cảm xúc</b>, không phải vấn đề sắp xếp</li>
      </ul>
      <div class="side rv d5" style="margin-top:auto;">
        <div class="sh"><span class="av sq" style="background:var(--coral);">!</span><span><span class="nm">Nếu bạn chỉ nhớ một điều</span><span class="rl">Từ chương này</span></span></div>
        <p>Lưu thêm không bao giờ chữa được cảm giác quá tải. Chỉ có <strong>viết lại bằng lời mình</strong> mới chữa.</p>
      </div>
      <div class="folio">11<i>Mở chương</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 on"></i><i class="c2 off"></i><i class="c3 off"></i><i class="c4 off"></i><i class="c5 off"></i><i class="c6 off"></i></div>
</section>

<!-- ═════ 06 · CH1 · HAI CĂN BỆNH ═════ -->
<section class="slide" style="--accent:var(--coral);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Chương 1</b><span>Bế tắc</span><span class="sp">Ý tưởng lớn 01</span></div>
      <h2 class="rv d1" style="margin-bottom:20px;">Lưu nhiều hơn<br>không làm bạn<br>hiểu thêm</h2>
      <div class="incontext rv d2">
        <div class="ttl">Trong bối cảnh</div>
        <div class="icrow"><span class="lb">Trọng tâm</span><span class="vl">Hai kiểu hỏng của một hệ ghi chép, và tên gọi của chúng</span></div>
        <div class="icrow"><span class="lb">Lĩnh vực</span><span class="vl">Quản trị tri thức cá nhân</span></div>
        <div class="ictime">
          <div class="rail"><i class="a"></i><i class="b"></i></div>
          <div class="seg"><span class="lb">Trước</span><span class="vl">Nghĩ vấn đề nằm ở phần mềm. Đổi app là xong</span></div>
          <div class="seg"><span class="lb">Sau</span><span class="vl">Gọi được tên hai căn bệnh, nên biết phải chữa cái gì</span></div>
        </div>
      </div>
      <p class="rv d4" style="margin-top:22px;">Điểm nghẹt <strong>không phải vấn đề sắp xếp. Nó là cảm xúc chưa được xử lý.</strong> Bạn thấy nản, thấy quá tải, thấy thất vọng với chính mình. Đó chính là nó.</p>
      <p class="rv d4">Ví dụ đời thường: một tủ quần áo nhồi 200 món. Vấn đề không phải thiếu móc treo, mà là bạn chưa từng mặc lại món nào.</p>
      <div class="pull sm rv d5" style="margin-top:18px;">
        <q>Những người tích trữ thông tin không giải thích nổi ý tưởng họ gặp. Họ nhắc lại được. Và ngày nay việc đó còn được thưởng bằng người theo dõi.</q>
        <span class="src">Atlas / Dots / Things / What is a note.md</span>
      </div>
      <div class="folio">12<i>Bế tắc</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Sơ đồ &amp; hình</b><span class="sp">Chuỗi dẫn tới bế tắc</span></div>
      <div class="flowlbl rv d2">SƠ ĐỒ LOGIC · VÌ SAO NÓ HỎNG</div>
      <div class="flow rv d2">
        <div class="fb"><span class="fn">01</span><span class="ft">Gặp thứ hay</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">02</span><span class="ft">Lưu lại, chưa đọc kỹ</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">03</span><span class="ft">Không viết lại bằng lời mình</span></div>
        <div class="fa"></div>
        <div class="fb end"><span class="fn">04</span><span class="ft">Không nhớ, không dùng được</span></div>
      </div>
      <figure class="rv d3" style="margin-top:24px;">
        <svg viewBox="0 0 760 300" class="plate">
          <text x="28" y="38" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2.5" fill="#8A8474">BỆNH 1 · MENTAL SQUEEZE POINT</text>
          <path class="dash" d="M36 130 C130 130 176 88 234 88 C292 88 310 140 336 140" stroke="#15140E" stroke-width="3" fill="none"/>
          <path d="M336 140 L378 196" stroke="#D2431C" stroke-width="3" stroke-dasharray="7 7" fill="none"/>
          <circle cx="336" cy="140" r="10" fill="#D2431C"/>
          <text x="36" y="172" font-family="Archivo, sans-serif" font-size="16" fill="#514D42">kiến thức dồn lên, chưa ai sắp</text>
          <text x="180" y="224" font-family="Archivo, sans-serif" font-weight="700" font-size="17" fill="#D2431C">bỏ dở, đi tìm app mới</text>
          <line x1="446" y1="26" x2="446" y2="278" stroke="#C9C1AC"/>
          <text x="474" y="38" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2.5" fill="#8A8474">BỆNH 2 · COLLECTOR&#39;S FALLACY</text>
          <g fill="#DFD7C3" stroke="#C9C1AC">
            <rect x="474" y="62" width="42" height="52"/><rect x="526" y="62" width="42" height="52"/>
            <rect x="578" y="62" width="42" height="52"/><rect x="630" y="62" width="42" height="52"/>
            <rect x="682" y="62" width="42" height="52"/>
            <rect x="474" y="124" width="42" height="52"/><rect x="526" y="124" width="42" height="52"/>
            <rect x="578" y="124" width="42" height="52"/><rect x="630" y="124" width="42" height="52"/>
            <rect x="682" y="124" width="42" height="52"/>
            <rect x="474" y="186" width="42" height="52"/><rect x="526" y="186" width="42" height="52"/>
            <rect x="578" y="186" width="42" height="52"/><rect x="630" y="186" width="42" height="52"/>
            <rect x="682" y="186" width="42" height="52"/></g>
          <rect x="526" y="124" width="42" height="52" fill="#D2431C"/>
          <text x="474" y="268" font-family="Archivo, sans-serif" font-size="16" fill="#514D42">15 note lưu · 1 note mở lại</text>
        </svg>
        <figcaption><b>Hình 4</b> — Trái: đường tích luỹ gãy tại điểm nghẹt. Phải: ô đỏ là note duy nhất được mở lại.</figcaption>
      </figure>
      <div class="cards c2 rv d5" style="margin-top:22px;">
        <div class="card co"><span class="tg">Bệnh 1</span><h3>Mental Squeeze Point</h3><p>Điểm nghẹt tinh thần. Kiến thức chưa sắp xếp bừa tới mức bạn nản rồi bỏ dở.</p></div>
        <div class="card co"><span class="tg">Bệnh 2</span><h3>Collector&#39;s Fallacy</h3><p>Ngộ nhận của kẻ sưu tầm. Lưu rất nhiều, đọc lại rất ít. Note thành tiếng ồn.</p></div>
      </div>
      <div class="folio">13<i>Sơ đồ</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 on"></i><i class="c2 off"></i><i class="c3 off"></i><i class="c4 off"></i><i class="c5 off"></i><i class="c6 off"></i></div>
</section>

<!-- ═════ 07 · MỞ CHƯƠNG 2 ═════ -->
<section class="slide" style="--accent:var(--navy);">
  <div class="chapo">
    <div class="cl">
      <div>
        <div class="num rv d1">CHƯƠNG HAI</div>
        <h1 class="rv d2" style="margin-top:18px;">VẬT<br>LIỆU</h1>
        <p class="sub rv d3">Bộ phận nhỏ nhất của cả hệ: một file văn bản thuần, và hai dấu ngoặc vuông.</p>
      </div>
      <div class="rv d5" style="font-family:var(--f-mono);font-size:14px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.7);border-top:1px solid rgba(255,255,255,.4);padding-top:16px;">
        2 trang đôi · 7 phút
      </div>
    </div>
    <div class="cr">
      <div class="runhead"><b>Chương 2</b><span class="sp">Vật liệu</span></div>
      <div class="kick rv d2">Câu hỏi của chương</div>
      <h2 class="rv d2" style="font-size:44px;margin-bottom:26px;">Cái gì làm cho hai ghi chép<br>&#8220;biết&#8221; về nhau?</h2>
      <div class="flowlbl rv d3">TRONG CHƯƠNG NÀY</div>
      <ul class="lst dot rv d3">
        <li>Sáu khái niệm Obsidian, rồi hết: vault, note, link, backlink, property, plugin</li>
        <li>Giải phẫu một note thật, chú thích từng bộ phận</li>
        <li>Vì sao liên kết mạnh hơn thư mục, và mạnh hơn cả thẻ</li>
      </ul>
      <div class="side rv d5" style="margin-top:auto;">
        <div class="sh"><span class="av sq" style="background:var(--navy);">!</span><span><span class="nm">Nếu bạn chỉ nhớ một điều</span><span class="rl">Từ chương này</span></span></div>
        <p>Toàn bộ hệ thống chỉ là <strong>file .md nối nhau bằng ngoặc vuông</strong>. Mở bằng Notepad vẫn đọc được sau hai mươi năm.</p>
      </div>
      <div class="folio">15<i>Mở chương</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 off"></i><i class="c2 on"></i><i class="c3 off"></i><i class="c4 off"></i><i class="c5 off"></i><i class="c6 off"></i></div>
</section>

<!-- ═════ 08 · CH2 · MỘT NOTE LÀ MỘT FILE TEXT ═════ -->
<section class="slide" style="--accent:var(--navy);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Chương 2</b><span>Vật liệu</span><span class="sp">Ý tưởng lớn 02</span></div>
      <h2 class="rv d1" style="margin-bottom:20px;">Một ghi chép là<br>một file text,<br>không hơn</h2>
      <div class="incontext rv d2">
        <div class="ttl">Trong bối cảnh</div>
        <div class="icrow"><span class="lb">Trọng tâm</span><span class="vl">Sáu khái niệm Obsidian, đủ để hiểu cả bộ</span></div>
        <div class="icrow"><span class="lb">Lĩnh vực</span><span class="vl">Công cụ · định dạng dữ liệu</span></div>
        <div class="ictime">
          <div class="rail"><i class="a"></i><i class="b"></i></div>
          <div class="seg"><span class="lb">Trước</span><span class="vl">Ghi chép nằm trong cơ sở dữ liệu của một công ty. Công ty đóng cửa là mất</span></div>
          <div class="seg"><span class="lb">Sau</span><span class="vl">Ghi chép là file <span class="mono">.md</span> trên ổ đĩa bạn. Notepad mở vẫn đọc được</span></div>
        </div>
      </div>
      <div class="rows rv d4" style="margin-top:22px;">
        <div class="row"><span class="k">01 Vault</span><span class="v">Một thư mục thường trên ổ đĩa. Không server, không tài khoản.</span></div>
        <div class="row"><span class="k">02 Note</span><span class="v">Một file <b>.md</b> — văn bản thuần, không định dạng ẩn.</span></div>
        <div class="row"><span class="k">03 Link</span><span class="v">Hai ngoặc vuông quanh tên note khác. <b>Toàn bộ cơ chế nằm ở đây.</b></span></div>
        <div class="row"><span class="k">04 Backlink</span><span class="v">Danh sách note trỏ tới note này. Tự động, không tốn công.</span></div>
        <div class="row"><span class="k">05 Property</span><span class="v">Vài dòng dữ liệu ở đầu file. Nhờ nó mới lọc và thống kê được.</span></div>
        <div class="row"><span class="k">06 Plugin</span><span class="v">Tiện ích cộng đồng. Vault này bật <b>31</b> cái.</span></div>
      </div>
      <div class="folio">16<i>Vật liệu</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Hiện vật</b><span class="sp">Một note mổ ra</span></div>
      <div class="flowlbl rv d2">SƠ ĐỒ LOGIC · Ý TRONG ĐẦU THÀNH FILE</div>
      <div class="flow rv d2">
        <div class="fb"><span class="fn">01</span><span class="ft">Ý trong đầu</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">02</span><span class="ft">Gõ ra file .md</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">03</span><span class="ft">File nằm trên ổ đĩa bạn</span></div>
        <div class="fa"></div>
        <div class="fb end"><span class="fn">04</span><span class="ft">Đọc được sau 20 năm</span></div>
      </div>
      <figure class="sm rv d3" style="margin-top:20px;">
        <svg viewBox="0 0 760 560" class="plate">
          <rect x="178" y="30" width="404" height="500" fill="#F5F2E9" stroke="#15140E" stroke-width="2"/>
          <rect x="178" y="30" width="404" height="104" fill="#EBE5D6"/>
          <line x1="178" y1="134" x2="582" y2="134" stroke="#15140E" stroke-width="2" stroke-dasharray="6 5"/>
          <text x="200" y="62" font-family="IBM Plex Mono, monospace" font-size="15" fill="#514D42">up:: [[Atlas]]</text>
          <text x="200" y="88" font-family="IBM Plex Mono, monospace" font-size="15" fill="#514D42">created:: 2026-03-11</text>
          <text x="200" y="114" font-family="IBM Plex Mono, monospace" font-size="15" fill="#514D42">tags:: —</text>
          <text x="200" y="184" font-family="Archivo Black, sans-serif" font-size="25" fill="#15140E">Antifragility</text>
          <g fill="#C9C1AC"><rect x="200" y="214" width="344" height="8"/><rect x="200" y="234" width="316" height="8"/><rect x="200" y="254" width="336" height="8"/></g>
          <text x="200" y="302" font-family="IBM Plex Mono, monospace" font-size="16" fill="#1B3A63">[[Nassim Taleb]]</text>
          <g fill="#C9C1AC"><rect x="200" y="322" width="326" height="8"/><rect x="200" y="342" width="288" height="8"/></g>
          <text x="200" y="390" font-family="IBM Plex Mono, monospace" font-size="16" fill="#1B3A63">[[Stress makes systems stronger]]</text>
          <g fill="#C9C1AC"><rect x="200" y="410" width="340" height="8"/><rect x="200" y="430" width="268" height="8"/></g>
          <rect x="200" y="460" width="356" height="54" fill="#EBE5D6" stroke="#C9C1AC"/>
          <text x="214" y="483" font-family="IBM Plex Mono, monospace" font-size="12" letter-spacing="2" fill="#8A8474">LIÊN KẾT NGƯỢC · 7</text>
          <text x="214" y="504" font-family="IBM Plex Mono, monospace" font-size="13" fill="#514D42">Barbell strategy · Via negativa · …</text>
          <g stroke="#D2431C" stroke-width="1.6" fill="none">
            <path d="M178 84 L96 84"/><path d="M178 184 L96 184"/>
            <path d="M582 302 L664 302"/><path d="M582 390 L664 390"/><path d="M582 486 L664 486"/></g>
          <g fill="#D2431C"><circle cx="96" cy="84" r="5"/><circle cx="96" cy="184" r="5"/>
            <circle cx="664" cy="302" r="5"/><circle cx="664" cy="390" r="5"/><circle cx="664" cy="486" r="5"/></g>
          <g font-family="IBM Plex Mono, monospace" font-size="12.5" fill="#15140E">
            <text x="16" y="70">PROPERTY</text><text x="16" y="170">TIÊU ĐỀ</text>
            <text x="676" y="290">LINK</text><text x="676" y="378">LINK</text><text x="676" y="474">BACKLINK</text></g>
          <g font-family="Archivo, sans-serif" font-size="12.5" fill="#8A8474">
            <text x="16" y="106">dữ liệu để lọc</text><text x="16" y="206">chính là tên file</text>
            <text x="676" y="326">tới một sự vật</text><text x="676" y="414">tới một ý kiến</text><text x="676" y="510">tự sinh ra</text></g>
        </svg>
        <figcaption><b>Hình 5</b> — <b style="text-transform:none;letter-spacing:0;">Atlas / Dots / Things / Antifragility.md</b>. Cả vault chỉ gồm những file như thế này.</figcaption>
      </figure>
      <div class="folio">17<i>Hiện vật</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 off"></i><i class="c2 on"></i><i class="c3 off"></i><i class="c4 off"></i><i class="c5 off"></i><i class="c6 off"></i></div>
</section>

<!-- ═════ 09 · CH2 · LIÊN KẾT ═════ -->
<section class="slide" style="--accent:var(--navy);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Chương 2</b><span>Vật liệu</span><span class="sp">Ý tưởng lớn 03</span></div>
      <h2 class="rv d1" style="margin-bottom:20px;">Liên kết làm được<br>việc mà thư mục<br>không làm nổi</h2>
      <div class="incontext rv d2">
        <div class="ttl">Trong bối cảnh</div>
        <div class="icrow"><span class="lb">Trọng tâm</span><span class="vl">Backlink: nối một chiều, được trả về hai chiều</span></div>
        <div class="icrow"><span class="lb">Lĩnh vực</span><span class="vl">Cấu trúc dữ liệu · điều hướng</span></div>
        <div class="ictime">
          <div class="rail"><i class="a"></i><i class="b"></i></div>
          <div class="seg"><span class="lb">Trước</span><span class="vl">Muốn nối hai chủ đề thì phải chọn: bỏ vào thư mục nào, gắn thẻ gì</span></div>
          <div class="seg"><span class="lb">Sau</span><span class="vl">Gõ hai ngoặc vuông. Không phải chọn, không phá cấu trúc nào</span></div>
        </div>
      </div>
      <p class="rv d4" style="margin-top:22px;">Thư mục là quan hệ <strong>cha con</strong>: một note một chỗ. Thẻ là quan hệ <strong>nhóm</strong>: phải nghĩ ra tên nhóm trước khi có nhóm. Liên kết là quan hệ <strong>ngang hàng</strong>: chỉ cần biết note kia tên gì.</p>
      <p class="rv d4">Ví dụ đời thường: thư mục giống ngăn tủ hồ sơ, thẻ giống nhãn dán, còn liên kết giống việc bạn viết vào lề trang &#8220;xem thêm trang 84&#8221;. Chỉ cách thứ ba không bắt bạn dọn tủ trước.</p>
      <div class="pull plain rv d5" style="margin-top:22px;">
        <q>Trong vault này, chỉ 3,4% note có gắn thẻ. Điều hướng gần như hoàn toàn bằng liên kết và bản đồ.</q>
        <span class="src">Đo trên 904 note của Ideaverse 2.5</span>
      </div>
      <div class="folio">18<i>Vật liệu</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Sơ đồ &amp; hình</b><span class="sp">Cây so với mạng</span></div>
      <div class="flowlbl rv d2">SƠ ĐỒ LOGIC · MỘT LIÊN KẾT SINH RA HAI ĐƯỜNG</div>
      <div class="flow rv d2">
        <div class="fb"><span class="fn">01</span><span class="ft">Viết note A</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">02</span><span class="ft">Gõ [[B]] trong A</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">03</span><span class="ft">B tự có backlink về A</span></div>
        <div class="fa"></div>
        <div class="fb end"><span class="fn">04</span><span class="ft">Mạng lớn mà không ai sắp</span></div>
      </div>
      <figure class="rv d3" style="margin-top:22px;">
        <svg viewBox="0 0 760 380" class="plate">
          <text x="28" y="36" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2.5" fill="#8A8474">CÂY THƯ MỤC</text>
          <g stroke="#C9C1AC" stroke-width="2" fill="none">
            <path d="M170 70 L170 110 M80 110 L260 110 M80 110 L80 150 M170 110 L170 150 M260 110 L260 150
                     M80 150 L80 190 M40 190 L120 190 M40 190 L40 226 M120 190 L120 226"/>
          </g>
          <g fill="#8A8474"><circle cx="170" cy="70" r="8"/><circle cx="80" cy="150" r="7"/><circle cx="170" cy="150" r="7"/>
            <circle cx="260" cy="150" r="7"/><circle cx="40" cy="226" r="6"/><circle cx="120" cy="226" r="6"/></g>
          <text x="28" y="288" font-family="Archivo, sans-serif" font-size="16" fill="#514D42">Muốn nối hai lá ở hai nhánh khác nhau,</text>
          <text x="28" y="310" font-family="Archivo, sans-serif" font-size="16" fill="#514D42">bạn phải leo lên gốc rồi đi xuống lại.</text>
          <text x="28" y="344" font-family="IBM Plex Mono, monospace" font-size="13" fill="#D2431C">MỘT NOTE · MỘT CHỖ</text>
          <line x1="392" y1="24" x2="392" y2="356" stroke="#C9C1AC"/>
          <text x="420" y="36" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2.5" fill="#8A8474">MẠNG LIÊN KẾT</text>
          <g stroke="#1B3A63" stroke-width="2" fill="none" opacity=".8">
            <path class="dash" d="M470 100 L560 78 L648 118 M470 100 L520 176 M560 78 L620 190 M520 176 L620 190
                                   M520 176 L466 232 M648 118 L700 196 M620 190 L700 196 M466 232 L560 246 M560 246 L620 190"/>
          </g>
          <g fill="#1B3A63"><circle cx="470" cy="100" r="8"/><circle cx="560" cy="78" r="8"/><circle cx="648" cy="118" r="8"/>
            <circle cx="520" cy="176" r="8"/><circle cx="620" cy="190" r="8"/><circle cx="466" cy="232" r="8"/>
            <circle cx="700" cy="196" r="8"/><circle cx="560" cy="246" r="8"/></g>
          <text x="420" y="288" font-family="Archivo, sans-serif" font-size="16" fill="#514D42">Nối thẳng, bất kể hai note nằm thư mục nào.</text>
          <text x="420" y="310" font-family="Archivo, sans-serif" font-size="16" fill="#514D42">Không phá cây, chỉ phủ thêm một lớp lên trên.</text>
          <text x="420" y="344" font-family="IBM Plex Mono, monospace" font-size="13" fill="#0F7C7A">MỘT NOTE · BAO NHIÊU QUAN HỆ TUỲ Ý</text>
        </svg>
        <figcaption><b>Hình 6</b> — Cùng một tập note. Trái: quan hệ do thư mục quy định. Phải: quan hệ do bạn gõ ra.</figcaption>
      </figure>
      <div class="side rv d5" style="margin-top:22px;">
        <div class="sh"><span class="av" style="background:var(--navy);">WC</span><span><span class="nm">Ward Cunningham</span><span class="rl">1995 · WikiWikiWeb</span></span></div>
        <p>Lập trình viên người Mỹ, dựng cái wiki đầu tiên trên thế giới. Ý tưởng &#8220;gõ tên trang là tự tạo liên kết tới trang đó&#8221; ra đời ở đây, và là thứ Obsidian mượn lại nguyên vẹn sau hai mươi lăm năm.</p>
      </div>
      <div class="folio">19<i>Sơ đồ</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 off"></i><i class="c2 on"></i><i class="c3 off"></i><i class="c4 off"></i><i class="c5 off"></i><i class="c6 off"></i></div>
</section>

<!-- ═════ 10 · MỞ CHƯƠNG 3 ═════ -->
<section class="slide" style="--accent:var(--teal);">
  <div class="chapo">
    <div class="cl">
      <div>
        <div class="num rv d1">CHƯƠNG BA</div>
        <h1 class="rv d2" style="margin-top:18px;">ACE</h1>
        <p class="sub rv d3">Atlas · Calendar · Efforts. Cộng hai thư mục nữa mà nhìn qua ai cũng tưởng thừa.</p>
      </div>
      <div class="rv d5" style="font-family:var(--f-mono);font-size:14px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.7);border-top:1px solid rgba(255,255,255,.4);padding-top:16px;">
        3 trang đôi · 11 phút
      </div>
    </div>
    <div class="cr">
      <div class="runhead"><b>Chương 3</b><span class="sp">ACE</span></div>
      <div class="kick rv d2">Câu hỏi của chương</div>
      <h2 class="rv d2" style="font-size:44px;margin-bottom:26px;">Nếu chia theo chủ đề là sai,<br>thì chia theo cái gì?</h2>
      <div class="flowlbl rv d3">TRONG CHƯƠNG NÀY</div>
      <ul class="lst dot rv d3">
        <li>Ba trạng thái đầu óc: <b>để biết · để ngẫm · để làm</b></li>
        <li>Thư mục <b>+</b> làm chỗ cho ý nghĩ nguội đi trước khi bị phân loại</li>
        <li>Thư mục <b>x</b> lặp ở mọi tầng, làm van xả cho nỗi lo sắp xếp</li>
        <li>Số liệu thật: 904 note nằm ở đâu</li>
      </ul>
      <div class="side rv d5" style="margin-top:auto;">
        <div class="sh"><span class="av sq" style="background:var(--teal);">!</span><span><span class="nm">Nếu bạn chỉ nhớ một điều</span><span class="rl">Từ chương này</span></span></div>
        <p>Một note thuộc <strong>nhiều chủ đề</strong> cùng lúc, nhưng chỉ có <strong>một ý định</strong> lúc bạn tạo ra nó. Chia theo cái duy nhất đó.</p>
      </div>
      <div class="folio">21<i>Mở chương</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 off"></i><i class="c2 off"></i><i class="c3 on"></i><i class="c4 off"></i><i class="c5 off"></i><i class="c6 off"></i></div>
</section>

<!-- ═════ 11 · CH3 · CHIA THEO Ý ĐỊNH ═════ -->
<section class="slide" style="--accent:var(--teal);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Chương 3</b><span>ACE</span><span class="sp">Ý tưởng lớn 04</span></div>
      <h2 class="rv d1" style="margin-bottom:20px;">Chia theo ý định,<br>không theo<br>chủ đề</h2>
      <div class="incontext rv d2">
        <div class="ttl">Trong bối cảnh</div>
        <div class="icrow"><span class="lb">Trọng tâm</span><span class="vl">Ba thư mục gốc, mỗi cái ứng một trạng thái đầu óc</span></div>
        <div class="icrow"><span class="lb">Lĩnh vực</span><span class="vl">Kiến trúc thông tin</span></div>
        <div class="ictime">
          <div class="rail"><i class="a"></i><i class="b"></i></div>
          <div class="seg"><span class="lb">Trước</span><span class="vl">Chia theo chủ đề. Mà một note thuộc nhiều chủ đề cùng lúc, nên chia kiểu đó là chia vỡ</span></div>
          <div class="seg"><span class="lb">Sau</span><span class="vl">Chia theo ý định lúc tạo note. Mỗi note chỉ có <em class="hl">một</em> ý định</span></div>
        </div>
      </div>
      <div class="cards c3 rv d4" style="margin-top:22px;">
        <div class="card te"><span class="tg">Atlas · 458</span><h3>Để biết</h3><p>Kiến thức. Phi thời gian. Bạn ở đây khi đang tò mò.</p></div>
        <div class="card mo"><span class="tg">Calendar · 95</span><h3>Để ngẫm</h3><p>Thời gian. Note đóng băng khi ngày trôi qua.</p></div>
        <div class="card co"><span class="tg">Efforts · 226</span><h3>Để làm</h3><p>Hành động. Có hạn, xong là chết.</p></div>
      </div>
      <p class="rv d5" style="margin-top:20px;">Ví dụ đời thường: cùng một buổi họp về AI sinh ra ba note khác nhau — một cái tóm khái niệm mới học (Atlas), một cái ghi ai nói gì hôm nay (Calendar), một cái là việc phải làm trước thứ sáu (Efforts). Cùng chủ đề, ba ý định.</p>
      <div class="folio">22<i>ACE</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Sơ đồ &amp; hình</b><span class="sp">Một câu hỏi, ba ngả</span></div>
      <div class="flowlbl rv d2">SƠ ĐỒ LOGIC · CHẠY TRONG ĐẦU CHƯA TỚI MỘT GIÂY</div>
      <div class="flow rv d2">
        <div class="fb"><span class="fn">01</span><span class="ft">Có ý mới</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">02</span><span class="ft">Hỏi: để biết, ngẫm, hay làm?</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">03</span><span class="ft">Rơi vào một trong ba</span></div>
        <div class="fa"></div>
        <div class="fb end"><span class="fn">04</span><span class="ft">Không phải nghĩ về chủ đề</span></div>
      </div>
      <figure class="rv d3" style="margin-top:22px;">
        <svg viewBox="0 0 760 420" class="plate">
          <text x="380" y="44" text-anchor="middle" font-family="Archivo Black, sans-serif" font-size="21" fill="#15140E">Vừa nảy ra một ý. Nó là gì?</text>
          <path class="dash" d="M380 62 L380 96 M144 96 L616 96 M144 96 L144 128 M380 96 L380 128 M616 96 L616 128"
                stroke="#15140E" stroke-width="2.5" fill="none"/>
          <g><rect x="34" y="128" width="220" height="106" fill="#0F7C7A"/>
            <text x="144" y="166" text-anchor="middle" font-family="Archivo Black, sans-serif" font-size="21" fill="#F5F2E9">ATLAS</text>
            <text x="144" y="194" text-anchor="middle" font-family="Archivo, sans-serif" font-size="16" fill="rgba(245,242,233,.86)">Thứ bạn muốn hiểu</text>
            <text x="144" y="218" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="13" fill="rgba(245,242,233,.7)">ĐỂ BIẾT</text></g>
          <g><rect x="270" y="128" width="220" height="106" fill="#4C7736"/>
            <text x="380" y="166" text-anchor="middle" font-family="Archivo Black, sans-serif" font-size="21" fill="#F5F2E9">CALENDAR</text>
            <text x="380" y="194" text-anchor="middle" font-family="Archivo, sans-serif" font-size="16" fill="rgba(245,242,233,.86)">Thứ vừa xảy ra</text>
            <text x="380" y="218" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="13" fill="rgba(245,242,233,.7)">ĐỂ NGẪM</text></g>
          <g><rect x="506" y="128" width="220" height="106" fill="#D2431C"/>
            <text x="616" y="166" text-anchor="middle" font-family="Archivo Black, sans-serif" font-size="21" fill="#F5F2E9">EFFORTS</text>
            <text x="616" y="194" text-anchor="middle" font-family="Archivo, sans-serif" font-size="16" fill="rgba(245,242,233,.86)">Thứ bạn phải làm</text>
            <text x="616" y="218" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="13" fill="rgba(245,242,233,.7)">ĐỂ LÀM</text></g>
          <text x="34" y="288" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2.5" fill="#8A8474">TUỔI THỌ CỦA NOTE</text>
          <line x1="34" y1="304" x2="726" y2="304" stroke="#C9C1AC"/>
          <rect x="34" y="318" width="692" height="24" fill="#0F7C7A"/>
          <text x="46" y="336" font-family="Archivo, sans-serif" font-size="15" fill="#F5F2E9">Atlas · không hết hạn</text>
          <rect x="34" y="350" width="296" height="24" fill="#4C7736"/>
          <text x="46" y="368" font-family="Archivo, sans-serif" font-size="15" fill="#F5F2E9">Calendar · đóng băng theo ngày</text>
          <rect x="34" y="382" width="166" height="24" fill="#D2431C"/>
          <text x="46" y="400" font-family="Archivo, sans-serif" font-size="15" fill="#F5F2E9">Efforts · xong là chết</text>
        </svg>
        <figcaption><b>Hình 7</b> — Cây quyết định ba nhánh. Thanh dưới: tuổi thọ điển hình của note mỗi loại.</figcaption>
      </figure>
      <div class="pull tint rv d5" style="margin-top:22px;">
        <q>Cắm mãi một thư mục là tín hiệu phải đảo đầu óc sang thư mục khác.</q>
        <span class="src">Nguyên tắc dùng ACE hằng ngày</span>
      </div>
      <div class="folio">23<i>Sơ đồ</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 off"></i><i class="c2 off"></i><i class="c3 on"></i><i class="c4 off"></i><i class="c5 off"></i><i class="c6 off"></i></div>
</section>

<!-- ═════ 12 · CH3 · + VÀ x ═════ -->
<section class="slide" style="--accent:var(--teal);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Chương 3</b><span>ACE</span><span class="sp">Ý tưởng lớn 05</span></div>
      <h2 class="rv d1" style="margin-bottom:20px;">Chỗ để một<br>ý nghĩ nguội đi</h2>
      <div class="incontext rv d2">
        <div class="ttl">Trong bối cảnh</div>
        <div class="icrow"><span class="lb">Trọng tâm</span><span class="vl">Hai thư mục <span class="mono">+</span> và <span class="mono">x</span>, nơi hệ giấu phần khó nhất</span></div>
        <div class="icrow"><span class="lb">Lĩnh vực</span><span class="vl">Ma sát · thói quen</span></div>
        <div class="ictime">
          <div class="rail"><i class="a"></i><i class="b"></i></div>
          <div class="seg"><span class="lb">Trước</span><span class="vl">Phải quyết định note đi đâu ngay lúc đang có ý. Nghĩ chậm lại, ý bay mất</span></div>
          <div class="seg"><span class="lb">Sau</span><span class="vl">Note mới rơi vào <span class="mono">+</span> mà không tốn quyết định nào; nguội rồi mới xử</span></div>
        </div>
      </div>
      <div class="cards c2 rv d4" style="margin-top:22px;">
        <div class="card te"><span class="tg">+ · 20 note</span><h3>Tấm làm nguội</h3><p>Không phải hộp thư đến. Trong cấu hình, <strong>mọi note mới tự động rơi vào đây</strong>.</p></div>
        <div class="card na"><span class="tg">x · 102 note</span><h3>Van xả áp</h3><p>&#8220;x&#8221; là extras. Chữ x gần cuối bảng chữ cái nên tự chìm xuống đáy danh sách.</p></div>
      </div>
      <p class="rv d5" style="margin-top:18px;">Và <span class="mono">x</span> <strong>lặp ở mọi tầng.</strong> Thư mục nào rối thì tạo một <span class="mono">x</span> ngay tại đó. Tác giả gọi nó là <em>van xả cho nỗi lo sắp xếp</em>.</p>
      <div class="pull plain rv d5" style="margin-top:18px;">
        <q>Ý nghĩ vào lúc còn nóng. Vài ngày sau nguội đi thì mới xử được tỉnh táo.</q>
        <span class="src">x / Packs / ACE Pack / How x works.md</span>
      </div>
      <div class="folio">24<i>ACE</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Quy trình</b><span class="sp">Vòng đời một ý nghĩ</span></div>
      <div class="flowlbl rv d2">SƠ ĐỒ LOGIC · BỐN BƯỚC, TỪ LOÉ LÊN TỚI YÊN VỊ</div>
      <div class="steps s4 rv d3">
        <div class="step">
          <span class="n">1</span>
          <svg viewBox="0 0 170 110"><circle cx="85" cy="55" r="18" fill="#C8860B"/>
            <g stroke="#C8860B" stroke-width="3"><path d="M85 19 L85 6 M85 104 L85 91 M47 55 L34 55 M136 55 L123 55 M59 29 L50 20 M111 81 L120 90 M111 29 L120 20 M59 81 L50 90"/></g></svg>
          <div class="hd">Loé lên</div><p>Ý còn nóng. Không phân loại gì cả.</p>
        </div>
        <div class="step">
          <span class="n">2</span>
          <svg viewBox="0 0 170 110"><rect x="30" y="30" width="110" height="62" fill="#EBE5D6" stroke="#15140E" stroke-width="2"/>
            <text x="85" y="72" text-anchor="middle" font-family="Archivo Black, sans-serif" font-size="28" fill="#15140E">+</text>
            <path d="M85 4 L85 24" stroke="#15140E" stroke-width="2.5"/><path d="M78 17 L85 27 L92 17" fill="#15140E"/></svg>
          <div class="hd">Rơi vào +</div><p>Mặc định của cấu hình. Không phải nghĩ.</p>
        </div>
        <div class="step">
          <span class="n">3</span>
          <svg viewBox="0 0 170 110"><rect x="30" y="30" width="110" height="62" fill="#F5F2E9" stroke="#C9C1AC" stroke-width="2"/>
            <path d="M46 74 C60 38 110 38 124 74" stroke="#0F7C7A" stroke-width="3" fill="none"/>
            <text x="85" y="22" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="13" fill="#8A8474">VÀI NGÀY</text></svg>
          <div class="hd">Nguội đi</div><p>Hết hưng phấn thì mới thấy nó đáng hay không.</p>
        </div>
        <div class="step">
          <span class="n">4</span>
          <svg viewBox="0 0 170 110"><rect x="14" y="48" width="44" height="44" fill="#0F7C7A"/>
            <rect x="63" y="48" width="44" height="44" fill="#4C7736"/><rect x="112" y="48" width="44" height="44" fill="#D2431C"/>
            <path d="M85 6 L85 34" stroke="#15140E" stroke-width="2.5"/>
            <path d="M85 34 L36 34 M85 34 L134 34 M36 34 L36 46 M85 34 L85 46 M134 34 L134 46" stroke="#15140E" stroke-width="2.5" fill="none"/></svg>
          <div class="hd">Xếp vào ACE</div><p>Lúc này mới hỏi: để biết, để ngẫm, hay để làm?</p>
        </div>
      </div>
      <figure class="rv d5" style="margin-top:26px;">
        <svg viewBox="0 0 760 230" class="plate">
          <text x="28" y="36" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2.5" fill="#8A8474">x LẶP Ở MỌI TẦNG</text>
          <g font-family="IBM Plex Mono, monospace" font-size="18" fill="#514D42">
            <text x="28" y="80">Atlas/</text><text x="68" y="112">Maps/</text><text x="108" y="144">x/</text>
            <text x="68" y="176">Sources/</text><text x="108" y="208">x/</text></g>
          <g stroke="#C9C1AC" stroke-width="1.5" fill="none">
            <path d="M40 90 L40 172 M40 106 L62 106 M40 138 L102 138 M40 172 L62 172
                     M80 122 L80 138 M80 186 L80 202 M80 202 L102 202"/></g>
          <g fill="#1B3A63" opacity=".14"><rect x="102" y="130" width="32" height="20"/><rect x="102" y="194" width="32" height="20"/></g>
          <text x="400" y="96" font-family="Archivo, sans-serif" font-size="17" fill="#514D42">Bất cứ thư mục nào bắt đầu rối,</text>
          <text x="400" y="122" font-family="Archivo, sans-serif" font-size="17" fill="#514D42">tạo một <tspan font-family="IBM Plex Mono, monospace" fill="#15140E">x/</tspan> ngay bên trong nó.</text>
          <text x="400" y="160" font-family="Archivo, sans-serif" font-size="17" fill="#514D42">Không phải dọn ngay. Chỉ cần có chỗ</text>
          <text x="400" y="186" font-family="Archivo, sans-serif" font-size="17" fill="#514D42">để nhét cái chưa quyết được.</text>
        </svg>
        <figcaption><b>Hình 8</b> — Cùng một chữ <b style="text-transform:none;letter-spacing:0;">x</b> dùng lại ở mọi độ sâu, nên không phải học quy tắc mới.</figcaption>
      </figure>
      <div class="folio">25<i>Quy trình</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 off"></i><i class="c2 off"></i><i class="c3 on"></i><i class="c4 off"></i><i class="c5 off"></i><i class="c6 off"></i></div>
</section>

<!-- ═════ 13 · CH3 · TOÀN CẢNH VAULT ═════ -->
<section class="slide" style="--accent:var(--teal);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Chương 3</b><span>ACE</span><span class="sp">Ý tưởng lớn 06</span></div>
      <h2 class="rv d1" style="margin-bottom:18px;">Toàn bộ vault<br>trên một màn hình</h2>
      <div class="incontext rv d2">
        <div class="ttl">Trong bối cảnh</div>
        <div class="icrow"><span class="lb">Trọng tâm</span><span class="vl">904 note, 5 thư mục gốc, không quá 2 tầng con</span></div>
        <div class="icrow"><span class="lb">Lĩnh vực</span><span class="vl">Đo đạc · vault thật</span></div>
        <div class="ictime">
          <div class="rail"><i class="a"></i><i class="b"></i></div>
          <div class="seg"><span class="lb">Trước</span><span class="vl">Cây thư mục sâu tới mức phải nhớ đường đi</span></div>
          <div class="seg"><span class="lb">Sau</span><span class="vl">Nông và rộng, nhìn một lượt là thuộc</span></div>
        </div>
      </div>
      <div class="tree rv d4" style="margin-top:20px;"><b class="g">+/</b>              <span class="d">20 · note mới tự rơi vào đây</span>
<b class="i">Atlas/</b>          <span class="d">458 · để biết</span>
  Dots/         <span class="d">254 · Things 120 · Statements 74 · Quotes 29</span>
  Maps/          <span class="d">88 · bản đồ điều hướng + 19 file .base</span>
  Sources/      <span class="d">116 · phim 71 · sách 26 · TV 11</span>
<b class="s">Calendar/</b>       <span class="d">95 · để ngẫm</span>
  Days/          <span class="d">58 · nhật ký, tên file YYYY-MM-DD</span>
  Records/       <span class="d">23 · họp, sự kiện, ý tưởng</span>
  Reviews/       <span class="d">14 · tổng kết quý</span>
<b class="c">Efforts/</b>        <span class="d">226 · để làm</span>
  Areas/         <span class="d">34 · mảng trách nhiệm chạy mãi</span>
  Projects/      <span class="d">19 · Active 4 · Simmering 6 · Sleeping 9</span>
  Works/        <span class="d">173 · video 129 · newsletter 43</span>
<b class="g">x/</b>             <span class="d">102 · Packs 27 · Templates 60 · Visuals 71 ảnh</span></div>
      <div class="folio">26<i>ACE</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Biểu đồ</b><span class="sp">904 note phân bố ra sao</span></div>
      <div class="flowlbl rv d2">SƠ ĐỒ LOGIC · ĐỌC RA ĐƯỢC GÌ TỪ SỐ LIỆU</div>
      <div class="flow rv d2">
        <div class="fb"><span class="fn">01</span><span class="ft">Đếm note từng thư mục</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">02</span><span class="ft">Atlas chiếm nửa</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">03</span><span class="ft">Thẻ gần bằng không</span></div>
        <div class="fa"></div>
        <div class="fb end"><span class="fn">04</span><span class="ft">Điều hướng bằng liên kết</span></div>
      </div>
      <figure class="rv d3" style="margin-top:22px;">
        <svg viewBox="0 0 760 400" class="plate">
          <text x="28" y="38" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2.5" fill="#8A8474">TỈ TRỌNG NOTE THEO THƯ MỤC GỐC</text>
          <rect x="28" y="58" width="352" height="60" fill="#0F7C7A"/>
          <rect x="380" y="58" width="174" height="60" fill="#D2431C"/>
          <rect x="554" y="58" width="79" height="60" fill="#4C7736"/>
          <rect x="633" y="58" width="84" height="60" fill="#1B3A63"/>
          <rect x="717" y="58" width="17" height="60" fill="#C8860B"/>
          <g font-family="Archivo, sans-serif" font-size="15" fill="#F5F2E9">
            <text x="44" y="94">Atlas 458</text><text x="394" y="94">Efforts 226</text>
            <text x="564" y="94">Cal 95</text><text x="645" y="94">x 102</text></g>
          <text x="694" y="140" font-family="IBM Plex Mono, monospace" font-size="12" fill="#C8860B">+ 20</text>
          <text x="28" y="188" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2.5" fill="#8A8474">BÊN TRONG ATLAS · 458</text>
          <g font-family="Archivo, sans-serif" font-size="16" fill="#514D42">
            <text x="28" y="222">Dots</text><rect x="134" y="206" width="330" height="21" fill="#0F7C7A"/><text x="476" y="223" font-family="IBM Plex Mono, monospace" font-size="13" fill="#8A8474">254</text>
            <text x="28" y="258">Sources</text><rect x="134" y="242" width="151" height="21" fill="#0F7C7A" opacity=".72"/><text x="297" y="259" font-family="IBM Plex Mono, monospace" font-size="13" fill="#8A8474">116</text>
            <text x="28" y="294">Maps</text><rect x="134" y="278" width="114" height="21" fill="#0F7C7A" opacity=".5"/><text x="260" y="295" font-family="IBM Plex Mono, monospace" font-size="13" fill="#8A8474">88</text></g>
          <line x1="28" y1="322" x2="734" y2="322" stroke="#C9C1AC"/>
          <text x="28" y="356" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2.5" fill="#8A8474">DẤU HIỆU ĐÁNG CHÚ Ý</text>
          <text x="28" y="386" font-family="Archivo, sans-serif" font-size="17" fill="#514D42">Chỉ <tspan font-weight="700" fill="#D2431C">3,4%</tspan> note có gắn thẻ. Điều hướng dựa vào liên kết và bản đồ.</text>
        </svg>
        <figcaption><b>Hình 9</b> — Đo trên vault thật. Atlas chiếm nửa số note; thẻ gần như không được dùng.</figcaption>
      </figure>
      <div class="stats rv d5" style="margin-top:22px;">
        <div><b>904</b><span>note</span></div>
        <div><b>5</b><span>thư mục gốc</span></div>
        <div><b>31</b><span>plugin bật</span></div>
        <div><b>60</b><span>template dựng sẵn</span></div>
      </div>
      <div class="folio">27<i>Biểu đồ</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 off"></i><i class="c2 off"></i><i class="c3 on"></i><i class="c4 off"></i><i class="c5 off"></i><i class="c6 off"></i></div>
</section>

<!-- ═════ 14 · MỞ CHƯƠNG 4 ═════ -->
<section class="slide" style="--accent:var(--plum);">
  <div class="chapo">
    <div class="cl">
      <div>
        <div class="num rv d1">CHƯƠNG BỐN</div>
        <h1 class="rv d2" style="margin-top:18px;">LIÊN<br>KẾT</h1>
        <p class="sub rv d3">Thư mục nói note nằm đâu. Liên kết nói note nghĩa là gì. Đây là chỗ tư duy thật sự xảy ra.</p>
      </div>
      <div class="rv d5" style="font-family:var(--f-mono);font-size:14px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.7);border-top:1px solid rgba(255,255,255,.4);padding-top:16px;">
        3 trang đôi · 11 phút
      </div>
    </div>
    <div class="cr">
      <div class="runhead"><b>Chương 4</b><span class="sp">Liên kết</span></div>
      <div class="kick rv d2">Câu hỏi của chương</div>
      <h2 class="rv d2" style="font-size:44px;margin-bottom:26px;">Khi nào một đống note<br>bắt đầu thành một ý tưởng?</h2>
      <div class="flowlbl rv d3">TRONG CHƯƠNG NÀY</div>
      <ul class="lst dot rv d3">
        <li><b>Things</b> và <b>Statements</b>: đặt tên bằng danh từ hay bằng cả câu</li>
        <li><b>MOC</b> — bản đồ nội dung, lớn lên qua ba nhịp</li>
        <li><b>ARC</b> — Add · Relate · Communicate, vòng chảy của một ý tưởng</li>
      </ul>
      <div class="side rv d5" style="margin-top:auto;">
        <div class="sh"><span class="av sq" style="background:var(--plum);">!</span><span><span class="nm">Nếu bạn chỉ nhớ một điều</span><span class="rl">Từ chương này</span></span></div>
        <p>Một note chỉ nằm được trong <strong>một</strong> thư mục, nhưng vào được <strong>bao nhiêu</strong> bản đồ tuỳ ý. Bản đồ là lớp phủ, không phải cái hộp.</p>
      </div>
      <div class="folio">29<i>Mở chương</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 off"></i><i class="c2 off"></i><i class="c3 off"></i><i class="c4 on"></i><i class="c5 off"></i><i class="c6 off"></i></div>
</section>

<!-- ═════ 15 · CH4 · THINGS vs STATEMENTS ═════ -->
<section class="slide" style="--accent:var(--plum);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Chương 4</b><span>Liên kết</span><span class="sp">Ý tưởng lớn 07</span></div>
      <h2 class="rv d1" style="margin-bottom:20px;">Sự vật đỡ được<br>ý kiến. Ngược lại<br>thì không.</h2>
      <div class="incontext rv d2">
        <div class="ttl">Trong bối cảnh</div>
        <div class="icrow"><span class="lb">Trọng tâm</span><span class="vl">Đặt tên note: một danh từ, hay cả một câu</span></div>
        <div class="icrow"><span class="lb">Lĩnh vực</span><span class="vl">Nhận thức luận · Atlas / Dots</span></div>
        <div class="ictime">
          <div class="rail"><i class="a"></i><i class="b"></i></div>
          <div class="seg"><span class="lb">Trước</span><span class="vl">Note nào cũng đặt tên bằng danh từ. Ý kiến chìm trong thân bài, không ai tìm lại</span></div>
          <div class="seg"><span class="lb">Sau</span><span class="vl">Ý kiến được nâng lên thành tên file, nên tìm lại và nối lại được</span></div>
        </div>
      </div>
      <div class="cards c2 rv d4" style="margin-top:22px;">
        <div class="card na"><span class="tg">Things · 120 note</span><h3>Cột trụ</h3><p>Khách quan. Tự đứng được. Tên là một <strong>danh từ</strong>.</p><p class="mono" style="color:var(--ink-3);margin-top:8px;">Antifragility<br>Magna Carta<br>Chunking</p></div>
        <div class="card mo"><span class="tg">Statements · 74 note</span><h3>Thứ treo lên trụ</h3><p>Chủ quan, có lập trường. Tên là <strong>cả câu</strong>.</p><p class="mono" style="color:var(--ink-3);margin-top:8px;">No one is above the law<br>Changing a habit is really<br>about replacing a routine</p></div>
      </div>
      <div class="pull plain rv d5" style="margin-top:20px;">
        <q>Sự vật thì tra Wikipedia cũng có. Ý kiến mới là chỗ tư duy của bạn sống.</q>
        <span class="src">Vì sao Statements đáng có thư mục riêng</span>
      </div>
      <div class="folio">30<i>Liên kết</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Sơ đồ &amp; hình</b><span class="sp">Trụ và cành</span></div>
      <div class="flowlbl rv d2">SƠ ĐỒ LOGIC · MỘT Ý ĐỌC ĐƯỢC, ĐẶT TÊN THẾ NÀO</div>
      <div class="flow rv d2">
        <div class="fb"><span class="fn">01</span><span class="ft">Đọc được một ý</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">02</span><span class="ft">Danh từ hay cả câu?</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">03</span><span class="ft">Things hoặc Statements</span></div>
        <div class="fa"></div>
        <div class="fb end"><span class="fn">04</span><span class="ft">Ý kiến tìm lại được</span></div>
      </div>
      <figure class="rv d3" style="margin-top:22px;">
        <svg viewBox="0 0 760 420" class="plate">
          <rect x="292" y="318" width="176" height="64" fill="#1B3A63"/>
          <text x="380" y="358" text-anchor="middle" font-family="Archivo Black, sans-serif" font-size="22" fill="#F5F2E9">Chunking</text>
          <text x="380" y="404" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2" fill="#8A8474">THING · DANH TỪ</text>
          <g><rect x="34" y="118" width="222" height="80" fill="#4C7736"/>
            <text x="50" y="150" font-family="Archivo, sans-serif" font-size="16" fill="#F5F2E9">Người mới học chậm vì</text>
            <text x="50" y="174" font-family="Archivo, sans-serif" font-size="16" fill="#F5F2E9">chưa biết gói thành chunk</text></g>
          <g><rect x="284" y="72" width="192" height="80" fill="#4C7736"/>
            <text x="300" y="104" font-family="Archivo, sans-serif" font-size="16" fill="#F5F2E9">Slide nên gói đúng</text>
            <text x="300" y="128" font-family="Archivo, sans-serif" font-size="16" fill="#F5F2E9">một chunk mỗi trang</text></g>
          <g><rect x="504" y="118" width="222" height="80" fill="#4C7736"/>
            <text x="520" y="150" font-family="Archivo, sans-serif" font-size="16" fill="#F5F2E9">Tên thư mục dài quá</text>
            <text x="520" y="174" font-family="Archivo, sans-serif" font-size="16" fill="#F5F2E9">là chunk hỏng</text></g>
          <path class="dash" d="M380 318 L145 198 M380 318 L380 152 M380 318 L615 198" stroke="#15140E" stroke-width="2.5" fill="none"/>
          <g fill="#15140E"><circle cx="380" cy="318" r="7"/><circle cx="145" cy="198" r="6"/><circle cx="380" cy="152" r="6"/><circle cx="615" cy="198" r="6"/></g>
          <text x="34" y="42" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2.5" fill="#8A8474">STATEMENTS · CẢ CÂU · CHỖ TƯ DUY CỦA BẠN SỐNG</text>
        </svg>
        <figcaption><b>Hình 10</b> — Khối sẫm phía dưới là một Thing. Ba khối lục treo lên nó là Statements.</figcaption>
      </figure>
      <div class="side rv d5" style="margin-top:22px;">
        <div class="sh"><span class="av" style="background:var(--plum);">NL</span><span><span class="nm">Niklas Luhmann</span><span class="rl">1927–1998 · Zettelkasten</span></span></div>
        <p>Nhà xã hội học người Đức, để lại khoảng <strong>90.000 phiếu ghi</strong> viết tay nối nhau bằng mã số. Ông xuất bản hơn 70 cuốn sách và nói phần lớn công việc là do hộp phiếu làm. Ideaverse giữ ý &#8220;note nguyên tử nối nhau&#8221;, bỏ hệ đánh số.</p>
      </div>
      <div class="folio">31<i>Sơ đồ</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 off"></i><i class="c2 off"></i><i class="c3 off"></i><i class="c4 on"></i><i class="c5 off"></i><i class="c6 off"></i></div>
</section>

<!-- ═════ 16 · CH4 · MOC ═════ -->
<section class="slide" style="--accent:var(--plum);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Chương 4</b><span>Liên kết</span><span class="sp">Ý tưởng lớn 08</span></div>
      <h2 class="rv d1" style="margin-bottom:20px;">Bản đồ là lớp phủ,<br>không phải cái hộp</h2>
      <div class="incontext rv d2">
        <div class="ttl">Trong bối cảnh</div>
        <div class="icrow"><span class="lb">Trọng tâm</span><span class="vl">MOC — một note chỉ chứa link tới note khác</span></div>
        <div class="icrow"><span class="lb">Lĩnh vực</span><span class="vl">Điều hướng · tổng hợp</span></div>
        <div class="ictime">
          <div class="rail"><i class="a"></i><i class="b"></i></div>
          <div class="seg"><span class="lb">Trước</span><span class="vl">Muốn xem một chủ đề thì phải tìm kiếm lại từ đầu mỗi lần</span></div>
          <div class="seg"><span class="lb">Sau</span><span class="vl">Có một trang cửa ngõ cho chủ đề đó, và <em class="hl">bài viết đã xong 80%</em></span></div>
        </div>
      </div>
      <p class="rv d4" style="margin-top:22px;">Nghe tầm thường: một note toàn link. Nhưng nó chữa đúng cái điểm nghẹt ở chương một. Lúc bạn thấy nhoi nhói <strong>&#8220;mình sắp lạc mất đống này&#8221;</strong> thì dựng một bản đồ. Không sớm hơn.</p>
      <p class="rv d4">Ví dụ đời thường: mục lục của một cuốn sách không di chuyển trang nào. Nó chỉ nói bạn nên đọc theo thứ tự nào. Và cùng một cuốn sách có thể có nhiều mục lục khác nhau cho nhiều người đọc khác nhau.</p>
      <div class="pull plain rv d5" style="margin-top:20px;">
        <q>Ba nhịp chồng lấn, không tuyến tính. Đừng làm cho nó cứng.</q>
        <span class="src">Ghi chú của tác giả về quy trình</span>
      </div>
      <div class="folio">32<i>Liên kết</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Quy trình</b><span class="sp">Ba nhịp của một bản đồ</span></div>
      <div class="flowlbl rv d2">SƠ ĐỒ LOGIC · KHI NÀO THÌ DỰNG BẢN ĐỒ</div>
      <div class="flow rv d2">
        <div class="fb"><span class="fn">01</span><span class="ft">Một chủ đề phình ra</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">02</span><span class="ft">Thấy nhoi nhói sắp lạc</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">03</span><span class="ft">Tạo note toàn link</span></div>
        <div class="fa"></div>
        <div class="fb end"><span class="fn">04</span><span class="ft">Bản đồ có tầng</span></div>
      </div>
      <div class="steps s3 rv d3" style="margin-top:24px;">
        <div class="step">
          <span class="n">1</span>
          <svg viewBox="0 0 250 150"><g fill="#6A3B8C"><circle cx="52" cy="54" r="8"/><circle cx="116" cy="92" r="8"/>
            <circle cx="180" cy="46" r="8"/><circle cx="84" cy="120" r="8"/><circle cx="200" cy="106" r="8"/><circle cx="142" cy="28" r="8"/></g></svg>
          <div class="hd">Gom</div><p>Ném hết link lên một bàn. Chưa sắp xếp gì cả.</p>
        </div>
        <div class="step">
          <span class="n">2</span>
          <svg viewBox="0 0 250 150"><path class="dash" d="M52 54 L116 92 L180 46 M52 54 L84 120 M180 46 L200 106 M142 28 L180 46" stroke="#6A3B8C" stroke-width="2.2" fill="none"/>
            <g fill="#6A3B8C"><circle cx="52" cy="54" r="8"/><circle cx="116" cy="92" r="8"/><circle cx="180" cy="46" r="8"/>
              <circle cx="84" cy="120" r="8"/><circle cx="200" cy="106" r="8"/><circle cx="142" cy="28" r="8"/></g></svg>
          <div class="hd">Va</div><p>Ý tưởng đánh nhau giành chỗ. Tách, gộp, đặt lại tên.</p>
        </div>
        <div class="step">
          <span class="n">3</span>
          <svg viewBox="0 0 250 150"><path d="M54 38 L134 38 M54 76 L134 76 M54 114 L134 114 M134 38 L190 76 M134 76 L190 76 M134 114 L190 76"
                stroke="#6A3B8C" stroke-width="2.2" fill="none"/>
            <g fill="#6A3B8C"><circle cx="54" cy="38" r="7"/><circle cx="54" cy="76" r="7"/><circle cx="54" cy="114" r="7"/>
              <circle cx="134" cy="38" r="7"/><circle cx="134" cy="76" r="7"/><circle cx="134" cy="114" r="7"/><circle cx="190" cy="76" r="12"/></g></svg>
          <div class="hd">Điều hướng</div><p>Thành bản đồ có tầng. Bài viết của bạn đã xong 80%.</p>
        </div>
      </div>
      <figure class="rv d5" style="margin-top:26px;">
        <svg viewBox="0 0 760 240" class="plate">
          <text x="28" y="36" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2.5" fill="#8A8474">HỘP LOẠI TRỪ NHAU · LỚP PHỦ THÌ KHÔNG</text>
          <text x="28" y="74" font-family="Archivo, sans-serif" font-weight="700" font-size="17" fill="#15140E">Thư mục</text>
          <rect x="28" y="88" width="126" height="62" fill="#EBE5D6" stroke="#C9C1AC" stroke-width="2"/>
          <rect x="170" y="88" width="126" height="62" fill="#EBE5D6" stroke="#C9C1AC" stroke-width="2"/>
          <circle cx="91" cy="119" r="10" fill="#15140E"/>
          <text x="28" y="184" font-family="Archivo, sans-serif" font-size="16" fill="#514D42">Một note nằm trong đúng một hộp.</text>
          <line x1="350" y1="52" x2="350" y2="212" stroke="#C9C1AC"/>
          <text x="392" y="74" font-family="Archivo, sans-serif" font-weight="700" font-size="17" fill="#15140E">Bản đồ</text>
          <g fill="none" stroke="#6A3B8C" stroke-width="2.5"><ellipse cx="490" cy="120" rx="86" ry="48"/><ellipse cx="600" cy="120" rx="86" ry="48"/></g>
          <circle cx="545" cy="120" r="10" fill="#15140E"/>
          <text x="392" y="196" font-family="Archivo, sans-serif" font-size="16" fill="#514D42">Cùng note đó nằm trong hai bản đồ, và bao nhiêu bản đồ nữa tuỳ ý.</text>
        </svg>
        <figcaption><b>Hình 11</b> — Trái: một note nằm trong đúng một hộp. Phải: cùng note đó nằm trong hai bản đồ.</figcaption>
      </figure>
      <div class="folio">33<i>Quy trình</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 off"></i><i class="c2 off"></i><i class="c3 off"></i><i class="c4 on"></i><i class="c5 off"></i><i class="c6 off"></i></div>
</section>

<!-- ═════ 17 · CH4 · ARC ═════ -->
<section class="slide" style="--accent:var(--plum);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Chương 4</b><span>Liên kết</span><span class="sp">Ý tưởng lớn 09</span></div>
      <h2 class="rv d1" style="margin-bottom:20px;">Ý tưởng chỉ sống<br>khi chạy hết vòng</h2>
      <div class="incontext rv d2">
        <div class="ttl">Trong bối cảnh</div>
        <div class="icrow"><span class="lb">Trọng tâm</span><span class="vl">ARC — Add · Relate · Communicate</span></div>
        <div class="icrow"><span class="lb">Lĩnh vực</span><span class="vl">Động lực · sản xuất</span></div>
        <div class="ictime">
          <div class="rail"><i class="a"></i><i class="b"></i></div>
          <div class="seg"><span class="lb">Trước</span><span class="vl">Thu thập mãi, chẳng có gì đi ra ngoài, nên mất động lực</span></div>
          <div class="seg"><span class="lb">Sau</span><span class="vl">Cuối chuỗi luôn có một thứ kéo ý tưởng đi tới</span></div>
        </div>
      </div>
      <div class="rows rv d4" style="margin-top:22px;">
        <div class="row"><span class="k">Add</span><span class="v">Thêm vào. Thư mục <b>+</b> lo việc này, tự động.</span><span class="n">nhịp 1</span></div>
        <div class="row"><span class="k">Relate</span><span class="v">Nối lại. Viết bằng lời mình rồi link. Đây là <b>Atlas</b> và MOC.</span><span class="n">nhịp 2</span></div>
        <div class="row"><span class="k">Communicate</span><span class="v">Đưa ra ngoài. Đây là <b>Efforts / Works</b>.</span><span class="n">nhịp 3</span></div>
      </div>
      <p class="rv d5" style="margin-top:20px;">ACE nói note <strong>nằm đâu</strong>. ARC nói note <strong>đi thế nào</strong>. Không cần xuất bản gì to tát: thử thách tối thiểu là gửi cho chính mình một bản nháp chia sẻ được.</p>
      <div class="folio">34<i>Liên kết</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Sơ đồ</b><span class="sp">Vòng, không phải đường thẳng</span></div>
      <div class="flowlbl rv d2">SƠ ĐỒ LOGIC · MỖI VÒNG LÀM NHỊP HAI DÀY THÊM</div>
      <div class="flow rv d2">
        <div class="fb"><span class="fn">01</span><span class="ft">Add · ném vào +</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">02</span><span class="ft">Relate · viết lại và link</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">03</span><span class="ft">Communicate · đưa ra ngoài</span></div>
        <div class="fa"></div>
        <div class="fb end"><span class="fn">04</span><span class="ft">Quay lại Add, dày hơn</span></div>
      </div>
      <figure class="sm rv d3" style="margin-top:20px;">
        <svg viewBox="0 0 760 520" class="plate">
          <circle cx="380" cy="256" r="170" fill="none" stroke="#C9C1AC" stroke-width="2" stroke-dasharray="6 8"/>
          <g><circle cx="380" cy="86" r="62" fill="#C8860B"/>
            <text x="380" y="80" text-anchor="middle" font-family="Archivo Black, sans-serif" font-size="21" fill="#15140E">ADD</text>
            <text x="380" y="106" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="13" fill="rgba(21,20,14,.7)">thư mục +</text></g>
          <g><circle cx="527" cy="341" r="62" fill="#6A3B8C"/>
            <text x="527" y="335" text-anchor="middle" font-family="Archivo Black, sans-serif" font-size="19" fill="#F5F2E9">RELATE</text>
            <text x="527" y="361" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="13" fill="rgba(245,242,233,.75)">Atlas · MOC</text></g>
          <g><circle cx="233" cy="341" r="62" fill="#D2431C"/>
            <text x="233" y="330" text-anchor="middle" font-family="Archivo Black, sans-serif" font-size="15" fill="#F5F2E9">COMMUNI-</text>
            <text x="233" y="349" text-anchor="middle" font-family="Archivo Black, sans-serif" font-size="15" fill="#F5F2E9">CATE</text>
            <text x="233" y="372" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" fill="rgba(245,242,233,.8)">Efforts/Works</text></g>
          <g stroke="#15140E" stroke-width="3" fill="none">
            <path class="dash" d="M438 130 A 170 170 0 0 1 480 284"/>
            <path class="dash" d="M462 374 A 170 170 0 0 1 298 374"/>
            <path class="dash" d="M280 284 A 170 170 0 0 1 322 130"/></g>
          <g fill="#15140E"><path d="M472 272 L486 290 L466 292 Z"/><path d="M308 382 L288 374 L304 362 Z"/><path d="M326 140 L312 122 L332 120 Z"/></g>
          <text x="380" y="250" text-anchor="middle" font-family="Archivo, sans-serif" font-weight="700" font-size="19" fill="#15140E">Ý tưởng chỉ sống</text>
          <text x="380" y="276" text-anchor="middle" font-family="Archivo, sans-serif" font-weight="700" font-size="19" fill="#15140E">khi nó chạy hết vòng</text>
          <line x1="28" y1="450" x2="732" y2="450" stroke="#C9C1AC"/>
          <text x="28" y="486" font-family="Archivo, sans-serif" font-size="17" fill="#514D42">Đứt ở nhịp ba là triệu chứng phổ biến nhất: kho note phình to, nhưng</text>
          <text x="28" y="510" font-family="Archivo, sans-serif" font-size="17" fill="#514D42">không có gì buộc bạn phải diễn đạt lại cho người khác đọc.</text>
        </svg>
        <figcaption><b>Hình 12</b> — Ba nhịp khép vòng. Mỗi lần chạy hết vòng, note ở nhịp hai lại dày thêm.</figcaption>
      </figure>
      <div class="folio">35<i>Sơ đồ</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 off"></i><i class="c2 off"></i><i class="c3 off"></i><i class="c4 on"></i><i class="c5 off"></i><i class="c6 off"></i></div>
</section>

<!-- ═════ 18 · MỞ CHƯƠNG 5 ═════ -->
<section class="slide" style="--accent:var(--mustard);">
  <div class="chapo">
    <div class="cl">
      <div>
        <div class="num rv d1">CHƯƠNG NĂM</div>
        <h1 class="rv d2" style="margin-top:18px;">HÀNH<br>ĐỘNG</h1>
        <p class="sub rv d3">Chỗ này động thẳng tới cách chúng ta đang chia task. Và tới cái ô &#8220;Done&#8221; mà ai cũng tưởng là bắt buộc.</p>
      </div>
      <div class="rv d5" style="font-family:var(--f-mono);font-size:14px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.7);border-top:1px solid rgba(255,255,255,.4);padding-top:16px;">
        2 trang đôi · 7 phút
      </div>
    </div>
    <div class="cr">
      <div class="runhead"><b>Chương 5</b><span class="sp">Hành động</span></div>
      <div class="kick rv d2">Câu hỏi của chương</div>
      <h2 class="rv d2" style="font-size:44px;margin-bottom:26px;">Việc chưa rõ hình thù<br>thì bỏ vào đâu?</h2>
      <div class="flowlbl rv d3">TRONG CHƯƠNG NÀY</div>
      <ul class="lst dot rv d3">
        <li><b>Effort</b> so với <b>project</b>: mềm và co giãn, hay cứng và hẹp</li>
        <li>Ba nhiệt độ <b>Active · Simmering · Sleeping</b>, và vì sao bỏ ô &#8220;Done&#8221;</li>
        <li>Điều chỉnh ưu tiên bằng kéo thả thư mục, không bằng đổi nhãn</li>
      </ul>
      <div class="side rv d5" style="margin-top:auto;">
        <div class="sh"><span class="av sq" style="background:var(--mustard);">!</span><span><span class="nm">Nếu bạn chỉ nhớ một điều</span><span class="rl">Từ chương này</span></span></div>
        <p>Khi đơn vị quản lý <strong>nhỏ hơn</strong> đơn vị ý định, danh sách việc phình ra mà tiến độ thật không rõ hơn chút nào.</p>
      </div>
      <div class="folio">37<i>Mở chương</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 off"></i><i class="c2 off"></i><i class="c3 off"></i><i class="c4 off"></i><i class="c5 on"></i><i class="c6 off"></i></div>
</section>

<!-- ═════ 19 · CH5 · EFFORT ≠ PROJECT ═════ -->
<section class="slide" style="--accent:var(--mustard);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Chương 5</b><span>Hành động</span><span class="sp">Ý tưởng lớn 10</span></div>
      <h2 class="rv d1" style="margin-bottom:20px;">Cứng và hẹp,<br>hay mềm và<br>co giãn</h2>
      <div class="incontext rv d2">
        <div class="ttl">Trong bối cảnh</div>
        <div class="icrow"><span class="lb">Trọng tâm</span><span class="vl">Vì sao gọi là <em class="hl">efforts</em> chứ không phải projects</span></div>
        <div class="icrow"><span class="lb">Lĩnh vực</span><span class="vl">Quản trị công việc</span></div>
        <div class="ictime">
          <div class="rail"><i class="a"></i><i class="b"></i></div>
          <div class="seg"><span class="lb">Trước</span><span class="vl">Mọi việc phải ép thành project có deadline. Việc mềm thì không vào nổi hệ</span></div>
          <div class="seg"><span class="lb">Sau</span><span class="vl">Một đơn vị lớn hơn, chứa được cả việc chưa rõ hình thù</span></div>
        </div>
      </div>
      <div class="cards c2 rv d4" style="margin-top:22px;">
        <div class="card na"><span class="tg">Project</span><h3>Cứng và hẹp</h3><p>Chuỗi việc phải xong trong mốc đã định, để đạt kết quả đã định.</p>
          <ul class="lst no" style="margin-top:10px;"><li>Từ trên xuống</li><li>Bắt buộc có deadline</li><li>Kích thước rõ ràng</li></ul></div>
        <div class="card mu"><span class="tg">Effort</span><h3>Mềm và co giãn</h3><p>Sự bỏ sức để làm một điều gì đó — các bước, hạn chót và kết quả <strong>có thể rõ, có thể không</strong>.</p>
          <ul class="lst yes" style="margin-top:10px;"><li>Từ dưới lên</li><li>Không cần deadline</li><li>Không rõ kích thước</li></ul></div>
      </div>
      <div class="folio">38<i>Hành động</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Sơ đồ &amp; hình</b><span class="sp">Một effort chứa bao nhiêu project</span></div>
      <div class="flowlbl rv d2">SƠ ĐỒ LOGIC · VÌ SAO PHẢI ĐỔI TÊN ĐƠN VỊ</div>
      <div class="flow rv d2">
        <div class="fb"><span class="fn">01</span><span class="ft">Việc chưa rõ hình thù</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">02</span><span class="ft">Ép thành project thì hỏng</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">03</span><span class="ft">Gọi nó là effort</span></div>
        <div class="fa"></div>
        <div class="fb end"><span class="fn">04</span><span class="ft">Chứa được cả việc mềm</span></div>
      </div>
      <figure class="rv d3" style="margin-top:22px;">
        <svg viewBox="0 0 760 380" class="plate">
          <text x="28" y="38" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2.5" fill="#8A8474">EFFORT &#8220;VIẾT MỘT CUỐN SÁCH&#8221;</text>
          <rect x="28" y="56" width="706" height="270" fill="none" stroke="#C8860B" stroke-width="3"/>
          <text x="44" y="86" font-family="Archivo Black, sans-serif" font-size="20" fill="#15140E">1 effort</text>
          <g fill="#EBE5D6" stroke="#C9C1AC">
            <rect x="44" y="104" width="80" height="38"/><rect x="136" y="104" width="80" height="38"/><rect x="228" y="104" width="80" height="38"/>
            <rect x="320" y="104" width="80" height="38"/><rect x="412" y="104" width="80" height="38"/><rect x="504" y="104" width="80" height="38"/>
            <rect x="596" y="104" width="80" height="38"/>
            <rect x="44" y="152" width="80" height="38"/><rect x="136" y="152" width="80" height="38"/><rect x="228" y="152" width="80" height="38"/>
            <rect x="320" y="152" width="80" height="38"/><rect x="412" y="152" width="80" height="38"/><rect x="504" y="152" width="80" height="38"/>
            <rect x="596" y="152" width="80" height="38"/>
            <rect x="44" y="200" width="80" height="38"/><rect x="136" y="200" width="80" height="38"/><rect x="228" y="200" width="80" height="38"/>
            <rect x="320" y="200" width="80" height="38"/><rect x="412" y="200" width="80" height="38"/><rect x="504" y="200" width="80" height="38"/>
            <rect x="596" y="200" width="80" height="38"/>
            <rect x="44" y="248" width="80" height="38"/><rect x="136" y="248" width="80" height="38"/><rect x="228" y="248" width="80" height="38"/>
            <rect x="320" y="248" width="80" height="38"/><rect x="412" y="248" width="80" height="38"/><rect x="504" y="248" width="80" height="38"/></g>
          <text x="600" y="274" font-family="IBM Plex Mono, monospace" font-size="16" fill="#8A8474">… 100+</text>
          <text x="28" y="360" font-family="Archivo, sans-serif" font-size="17" fill="#514D42">Mỗi ô nhỏ là một project đúng nghĩa. Bạn có định theo dõi từng ô không?</text>
        </svg>
        <figcaption><b>Hình 13</b> — Đơn vị quản lý nhỏ hơn đơn vị ý định thì danh sách phình ra mà tiến độ không rõ hơn.</figcaption>
      </figure>
      <div class="pull tint rv d5" style="margin-top:22px;">
        <q>Tôi đang viết một cuốn sách. Đó là một effort chứa chắc hơn 100 project. Tôi có định biến nó thành 100 project để theo dõi không?</q>
        <span class="src">Nick Milo · vì sao đổi tên đơn vị</span>
      </div>
      <div class="folio">39<i>Sơ đồ</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 off"></i><i class="c2 off"></i><i class="c3 off"></i><i class="c4 off"></i><i class="c5 on"></i><i class="c6 off"></i></div>
</section>

<!-- ═════ 20 · CH5 · BA NHIỆT ĐỘ ═════ -->
<section class="slide" style="--accent:var(--mustard);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Chương 5</b><span>Hành động</span><span class="sp">Ý tưởng lớn 11</span></div>
      <h2 class="rv d1" style="margin-bottom:20px;">Không có ô<br>&#8220;Done&#8221;</h2>
      <div class="incontext rv d2">
        <div class="ttl">Trong bối cảnh</div>
        <div class="icrow"><span class="lb">Trọng tâm</span><span class="vl">Dự án xếp theo nhiệt độ, không theo trạng thái</span></div>
        <div class="icrow"><span class="lb">Lĩnh vực</span><span class="vl">Ưu tiên · sức chứa</span></div>
        <div class="ictime">
          <div class="rail"><i class="a"></i><i class="b"></i></div>
          <div class="seg"><span class="lb">Trước</span><span class="vl">Đổi trạng thái trong một cái bảng. Dễ tự lừa mình rằng vẫn đang chạy</span></div>
          <div class="seg"><span class="lb">Sau</span><span class="vl">Kéo thả thư mục. Vật lý hơn, nên khó tự lừa hơn</span></div>
        </div>
      </div>
      <div class="cards c3 rv d4" style="margin-top:22px;">
        <div class="card co"><span class="tg">4 dự án</span><h3>Active</h3><p>Đang cháy. Mở thư mục ra là biết ngay đang ôm bao nhiêu.</p></div>
        <div class="card mu"><span class="tg">6 dự án</span><h3>Simmering</h3><p>Để sau gáy. Quá tải thì kéo bớt từ Active sang đây.</p></div>
        <div class="card na"><span class="tg">9 dự án</span><h3>Sleeping</h3><p>Nguội. Gộp cả &#8220;đã xong&#8221; lẫn &#8220;bỏ dở&#8221;.</p></div>
      </div>
      <p class="rv d5" style="margin-top:20px;">Bỏ ô &#8220;Done&#8221; là bỏ luôn ảo giác rằng ý tưởng có điểm kết thúc. Cái đã xong vẫn đánh thức lại được, và thường là thế thật.</p>
      <div class="pull plain rv d5" style="margin-top:18px;">
        <q>Với ý tưởng, &#8220;đã xong&#8221; và &#8220;bỏ dở&#8221; là cùng một trạng thái: đang ngủ.</q>
        <span class="src">Vì sao Sleeping gộp cả hai</span>
      </div>
      <div class="folio">40<i>Hành động</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Hình</b><span class="sp">Nhiệt kế của cả danh mục</span></div>
      <div class="flowlbl rv d2">SƠ ĐỒ LOGIC · KHI QUÁ TẢI THÌ LÀM GÌ</div>
      <div class="flow rv d2">
        <div class="fb"><span class="fn">01</span><span class="ft">Thấy quá tải</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">02</span><span class="ft">Không đổi nhãn trạng thái</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">03</span><span class="ft">Kéo thư mục sang Simmering</span></div>
        <div class="fa"></div>
        <div class="fb end"><span class="fn">04</span><span class="ft">Active còn đúng sức chứa</span></div>
      </div>
      <figure class="rv d3" style="margin-top:22px;">
        <svg viewBox="0 0 760 430" class="plate">
          <text x="28" y="38" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2.5" fill="#8A8474">19 DỰ ÁN, XẾP THEO ĐỘ NÓNG</text>
          <defs><linearGradient id="heat2" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stop-color="#1B3A63"/><stop offset=".5" stop-color="#C8860B"/><stop offset="1" stop-color="#D2431C"/>
          </linearGradient></defs>
          <rect x="46" y="60" width="30" height="310" fill="url(#heat2)"/>
          <g><text x="106" y="94" font-family="Archivo Black, sans-serif" font-size="22" fill="#D2431C">ACTIVE</text>
            <text x="106" y="120" font-family="Archivo, sans-serif" font-size="16" fill="#514D42">đang cháy · sức chứa thật của bạn</text>
            <g fill="#D2431C"><rect x="106" y="134" width="44" height="28"/><rect x="158" y="134" width="44" height="28"/>
              <rect x="210" y="134" width="44" height="28"/><rect x="262" y="134" width="44" height="28"/></g>
            <text x="322" y="155" font-family="IBM Plex Mono, monospace" font-size="16" fill="#8A8474">4</text></g>
          <g><text x="106" y="212" font-family="Archivo Black, sans-serif" font-size="22" fill="#C8860B">SIMMERING</text>
            <text x="106" y="238" font-family="Archivo, sans-serif" font-size="16" fill="#514D42">để sau gáy · vùng đệm khi quá tải</text>
            <g fill="#C8860B"><rect x="106" y="252" width="44" height="28"/><rect x="158" y="252" width="44" height="28"/>
              <rect x="210" y="252" width="44" height="28"/><rect x="262" y="252" width="44" height="28"/>
              <rect x="314" y="252" width="44" height="28"/><rect x="366" y="252" width="44" height="28"/></g>
            <text x="426" y="273" font-family="IBM Plex Mono, monospace" font-size="16" fill="#8A8474">6</text></g>
          <g><text x="106" y="330" font-family="Archivo Black, sans-serif" font-size="22" fill="#1B3A63">SLEEPING</text>
            <text x="106" y="356" font-family="Archivo, sans-serif" font-size="16" fill="#514D42">nguội · xong và bỏ dở nằm chung</text>
            <g fill="#1B3A63"><rect x="106" y="370" width="44" height="28"/><rect x="158" y="370" width="44" height="28"/>
              <rect x="210" y="370" width="44" height="28"/><rect x="262" y="370" width="44" height="28"/>
              <rect x="314" y="370" width="44" height="28"/><rect x="366" y="370" width="44" height="28"/>
              <rect x="418" y="370" width="44" height="28"/><rect x="470" y="370" width="44" height="28"/>
              <rect x="522" y="370" width="44" height="28"/></g>
            <text x="582" y="391" font-family="IBM Plex Mono, monospace" font-size="16" fill="#8A8474">9</text></g>
          <g stroke="#15140E" stroke-width="2.5" fill="none">
            <path d="M636 152 C692 152 692 262 640 266"/><path d="M636 272 C692 278 692 380 640 384"/></g>
          <g fill="#15140E"><path d="M648 258 L632 266 L648 274 Z"/><path d="M648 376 L632 384 L648 392 Z"/></g>
          <text x="590" y="134" font-family="IBM Plex Mono, monospace" font-size="12" fill="#8A8474">KÉO THẢ</text>
        </svg>
        <figcaption><b>Hình 14</b> — Điều chỉnh ưu tiên bằng kéo thư mục xuống tầng nguội hơn, không phải bằng đổi nhãn.</figcaption>
      </figure>
      <div class="side rv d5" style="margin-top:22px;">
        <div class="sh"><span class="av" style="background:var(--mustard);">TF</span><span><span class="nm">Tiago Forte</span><span class="rl">PARA · Building a Second Brain</span></span></div>
        <p>Người phổ biến khung <strong>PARA</strong> (Projects · Areas · Resources · Archives), chia thư mục theo mức độ hành động. Ideaverse giữ ý &#8220;chia theo tính hành động&#8221; nhưng bỏ ô lưu trữ cuối cùng, thay bằng ba nhiệt độ.</p>
      </div>
      <div class="folio">41<i>Hình</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 off"></i><i class="c2 off"></i><i class="c3 off"></i><i class="c4 off"></i><i class="c5 on"></i><i class="c6 off"></i></div>
</section>

<!-- ═════ 21 · MỞ CHƯƠNG 6 ═════ -->
<section class="slide" style="--accent:var(--moss);">
  <div class="chapo">
    <div class="cl">
      <div>
        <div class="num rv d1">CHƯƠNG SÁU</div>
        <h1 class="rv d2" style="margin-top:18px;">THỰC<br>HÀNH</h1>
        <p class="sub rv d3">Từ đây trở đi là việc của bạn. Ngày đầu tiên, và ba mươi ngày sau đó.</p>
      </div>
      <div class="rv d5" style="font-family:var(--f-mono);font-size:14px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.7);border-top:1px solid rgba(255,255,255,.4);padding-top:16px;">
        3 trang đôi · 9 phút
      </div>
    </div>
    <div class="cr">
      <div class="runhead"><b>Chương 6</b><span class="sp">Thực hành</span></div>
      <div class="kick rv d2">Câu hỏi của chương</div>
      <h2 class="rv d2" style="font-size:44px;margin-bottom:26px;">Tối nay mở máy lên<br>thì làm gì trước?</h2>
      <div class="flowlbl rv d3">TRONG CHƯƠNG NÀY</div>
      <ul class="lst dot rv d3">
        <li>Thang bốn mức: bắt đầu ở đâu, và khi nào mới lên mức tiếp</li>
        <li>Ngày đầu tiên: bốn việc nên, bốn việc đừng</li>
        <li>Bốn kiểu người dùng, cùng một hệ thư mục</li>
        <li>Lịch ba mươi ngày đầu, chia theo tuần</li>
      </ul>
      <div class="side rv d5" style="margin-top:auto;">
        <div class="sh"><span class="av sq" style="background:var(--moss);">!</span><span><span class="nm">Nếu bạn chỉ nhớ một điều</span><span class="rl">Từ chương này</span></span></div>
        <p>Không dựng thư mục trước khi có đồ để bỏ vào. <strong>Cấu trúc phải kiếm ra mới có.</strong></p>
      </div>
      <div class="folio">43<i>Mở chương</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 off"></i><i class="c2 off"></i><i class="c3 off"></i><i class="c4 off"></i><i class="c5 off"></i><i class="c6 on"></i></div>
</section>

<!-- ═════ 22 · CH6 · CẤU TRÚC PHẢI KIẾM RA ═════ -->
<section class="slide" style="--accent:var(--moss);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Chương 6</b><span>Thực hành</span><span class="sp">Ý tưởng lớn 12</span></div>
      <h2 class="rv d1" style="margin-bottom:20px;">Cấu trúc phải<br>kiếm ra mới có</h2>
      <div class="incontext rv d2">
        <div class="ttl">Trong bối cảnh</div>
        <div class="icrow"><span class="lb">Trọng tâm</span><span class="vl">Chỉ dựng cấu trúc khi đã có đồ để bỏ vào</span></div>
        <div class="icrow"><span class="lb">Lĩnh vực</span><span class="vl">Triển khai · ngày đầu tiên</span></div>
        <div class="ictime">
          <div class="rail"><i class="a"></i><i class="b"></i></div>
          <div class="seg"><span class="lb">Trước</span><span class="vl">Dựng sẵn 40 thư mục con &#8220;cho chắc&#8221;, khi chưa có note nào</span></div>
          <div class="seg"><span class="lb">Sau</span><span class="vl">Năm thư mục rỗng, rồi để yên cho tới khi chật thật</span></div>
        </div>
      </div>
      <div class="rows rv d4" style="margin-top:22px;">
        <div class="row"><span class="k">Mức 1</span><span class="v">Chỉ dùng <b>5 thư mục gốc</b>. Ném note vào. Hết.</span><span class="n">tháng đầu</span></div>
        <div class="row"><span class="k">Mức 2</span><span class="v">Dần dùng thư mục con, khi một thư mục gốc chật thật.</span><span class="n">tháng 2–3</span></div>
        <div class="row"><span class="k">Mức 3</span><span class="v">Dùng template, khi bạn gõ lặp cùng một cấu trúc <b>lần thứ ba</b>.</span><span class="n">sau đó</span></div>
        <div class="row"><span class="k">Mức 4</span><span class="v">Bảng biểu động, truy vấn, bộ lọc, khi đã có đủ note để mà lọc.</span><span class="n">rất sau</span></div>
      </div>
      <div class="pull rv d5" style="margin-top:20px;">
        <q>Làm ít lại đi. Dựng sẵn cấu trúc cho cả một ngày trời chỉ tạo ra một toà nhà mong manh, tuần sau là gãy.</q>
        <span class="src">Tài liệu chuẩn của tác giả</span>
      </div>
      <div class="folio">44<i>Thực hành</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Sơ đồ &amp; hình</b><span class="sp">Thang bốn mức</span></div>
      <div class="flowlbl rv d2">SƠ ĐỒ LOGIC · VÌ SAO DỰNG SỚM THÌ GÃY</div>
      <div class="flow rv d2">
        <div class="fb"><span class="fn">01</span><span class="ft">Dựng 40 thư mục trước</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">02</span><span class="ft">Không có đồ để bỏ vào</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">03</span><span class="ft">Thư mục rỗng gây nản</span></div>
        <div class="fa"></div>
        <div class="fb end"><span class="fn">04</span><span class="ft">Chỉ dựng khi chật thật</span></div>
      </div>
      <figure class="rv d3" style="margin-top:22px;">
        <svg viewBox="0 0 760 340" class="plate">
          <text x="28" y="38" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2.5" fill="#8A8474">LÊN MỨC KHI NÀO — KHÔNG PHẢI THEO LỊCH</text>
          <g>
            <rect x="28" y="238" width="166" height="66" fill="#4C7736"/>
            <text x="44" y="266" font-family="Archivo Black, sans-serif" font-size="17" fill="#F5F2E9">MỨC 1</text>
            <text x="44" y="290" font-family="Archivo, sans-serif" font-size="14" fill="rgba(245,242,233,.86)">5 thư mục gốc</text>
            <rect x="206" y="186" width="166" height="118" fill="#4C7736" opacity=".8"/>
            <text x="222" y="214" font-family="Archivo Black, sans-serif" font-size="17" fill="#F5F2E9">MỨC 2</text>
            <text x="222" y="238" font-family="Archivo, sans-serif" font-size="14" fill="rgba(245,242,233,.86)">thư mục con</text>
            <rect x="384" y="134" width="166" height="170" fill="#4C7736" opacity=".62"/>
            <text x="400" y="162" font-family="Archivo Black, sans-serif" font-size="17" fill="#F5F2E9">MỨC 3</text>
            <text x="400" y="186" font-family="Archivo, sans-serif" font-size="14" fill="rgba(245,242,233,.86)">template</text>
            <rect x="562" y="82" width="170" height="222" fill="#4C7736" opacity=".44"/>
            <text x="578" y="110" font-family="Archivo Black, sans-serif" font-size="17" fill="#F5F2E9">MỨC 4</text>
            <text x="578" y="134" font-family="Archivo, sans-serif" font-size="14" fill="rgba(245,242,233,.9)">truy vấn, bộ lọc</text>
          </g>
          <g font-family="IBM Plex Mono, monospace" font-size="12" fill="#15140E">
            <text x="206" y="176">KHI GỐC CHẬT</text><text x="384" y="124">KHI GÕ LẶP LẦN 3</text><text x="562" y="72">KHI ĐỦ NOTE ĐỂ LỌC</text></g>
          <line x1="28" y1="304" x2="732" y2="304" stroke="#15140E" stroke-width="2"/>
          <text x="28" y="330" font-family="Archivo, sans-serif" font-size="16" fill="#514D42">Điều kiện lên mức là <tspan font-weight="700" fill="#15140E">một cơn đau cụ thể</tspan>, không phải số ngày đã dùng.</text>
        </svg>
        <figcaption><b>Hình 15</b> — Bậc thang chỉ leo khi bậc dưới thật sự chật. Nhảy cóc là cách nhanh nhất để bỏ cuộc.</figcaption>
      </figure>
      <div class="side rv d5" style="margin-top:22px;">
        <div class="sh"><span class="av" style="background:var(--moss);">SA</span><span><span class="nm">Sönke Ahrens</span><span class="rl">2017 · How to Take Smart Notes</span></span></div>
        <p>Người đưa Zettelkasten của Luhmann tới độc giả tiếng Anh. Luận điểm gần nhất với chương này: <strong>viết là công cụ để nghĩ</strong>, nên đừng tối ưu việc lưu trữ trước khi tối ưu việc viết.</p>
      </div>
      <div class="folio">45<i>Sơ đồ</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 off"></i><i class="c2 off"></i><i class="c3 off"></i><i class="c4 off"></i><i class="c5 off"></i><i class="c6 on"></i></div>
</section>

<!-- ═════ 23 · CH6 · NGÀY ĐẦU TIÊN ═════ -->
<section class="slide" style="--accent:var(--moss);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Chương 6</b><span>Thực hành</span><span class="sp">Ý tưởng lớn 13</span></div>
      <h2 class="rv d1" style="margin-bottom:20px;">Ngày đầu tiên:<br>làm gì, tránh gì</h2>
      <div class="incontext rv d2">
        <div class="ttl">Trong bối cảnh</div>
        <div class="icrow"><span class="lb">Trọng tâm</span><span class="vl">Bốn việc nên và bốn việc đừng, cho buổi tối đầu tiên</span></div>
        <div class="icrow"><span class="lb">Lĩnh vực</span><span class="vl">Thói quen · người mới</span></div>
        <div class="ictime">
          <div class="rail"><i class="a"></i><i class="b"></i></div>
          <div class="seg"><span class="lb">Trước</span><span class="vl">Ngày đầu dành cả buổi chép template và dựng thư mục</span></div>
          <div class="seg"><span class="lb">Sau</span><span class="vl">Ngày đầu tốn mười phút, rồi dừng lại có chủ ý</span></div>
        </div>
      </div>
      <div class="cards c2 rv d4" style="margin-top:22px;">
        <div class="card mo"><span class="tg">Nên</span>
          <ul class="lst yes" style="margin-top:10px;">
            <li>Tạo 5 thư mục rỗng: <b class="mono">+ Atlas Calendar Efforts x</b></li>
            <li>Đặt note mới mặc định rơi vào <b class="mono">+</b></li>
            <li>Có gì loé lên: viết vài dòng <b>bằng lời mình</b>, rồi link tới một note khác</li>
            <li>Tuần một lần dọn <b class="mono">+</b></li>
          </ul>
        </div>
        <div class="card co"><span class="tg">Đừng</span>
          <ul class="lst no" style="margin-top:10px;">
            <li>Dựng sẵn 40 thư mục con &#8220;cho chắc&#8221;</li>
            <li>Chép nguyên 60 template về dùng</li>
            <li>Phân loại ý tưởng bằng metadata</li>
            <li>Sưu tầm mà không viết lại bằng lời mình</li>
          </ul>
        </div>
      </div>
      <div class="pull rv d5" style="margin-top:20px;">
        <q>Gần như mọi nỗ lực phân loại ý tưởng đều phản tác dụng.</q>
        <span class="src">Chính tác giả, trong tài liệu chuẩn</span>
      </div>
      <div class="folio">46<i>Thực hành</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Sơ đồ &amp; hình</b><span class="sp">Bạn là kiểu người dùng nào</span></div>
      <div class="flowlbl rv d2">SƠ ĐỒ LOGIC · MƯỜI PHÚT ĐẦU TIÊN</div>
      <div class="flow rv d2">
        <div class="fb"><span class="fn">01</span><span class="ft">Cài Obsidian</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">02</span><span class="ft">Tạo 5 thư mục rỗng</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">03</span><span class="ft">Đặt note mới về +</span></div>
        <div class="fa"></div>
        <div class="fb end"><span class="fn">04</span><span class="ft">Dừng lại</span></div>
      </div>
      <figure class="rv d3" style="margin-top:22px;">
        <svg viewBox="0 0 760 250" class="plate">
          <text x="28" y="36" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2.5" fill="#8A8474">BỐN KIỂU NGƯỜI DÙNG · CÙNG MỘT HỆ THƯ MỤC</text>
          <g><rect x="28" y="58" width="166" height="122" fill="#0F7C7A"/>
            <text x="44" y="92" font-family="Archivo Black, sans-serif" font-size="18" fill="#F5F2E9">Inner Guide</text>
            <text x="44" y="122" font-family="Archivo, sans-serif" font-size="15" fill="rgba(245,242,233,.86)">…để hiểu chính mình</text>
            <text x="44" y="158" font-family="IBM Plex Mono, monospace" font-size="13" fill="rgba(245,242,233,.7)">nghiêng Atlas</text></g>
          <g><rect x="206" y="58" width="166" height="122" fill="#1B3A63"/>
            <text x="222" y="92" font-family="Archivo Black, sans-serif" font-size="18" fill="#F5F2E9">Synthesizer</text>
            <text x="222" y="122" font-family="Archivo, sans-serif" font-size="15" fill="rgba(245,242,233,.86)">…để thấu hiểu</text>
            <text x="222" y="158" font-family="IBM Plex Mono, monospace" font-size="13" fill="rgba(245,242,233,.7)">dựng bản đồ</text></g>
          <g><rect x="384" y="58" width="166" height="122" fill="#D2431C"/>
            <text x="400" y="92" font-family="Archivo Black, sans-serif" font-size="18" fill="#F5F2E9">Producer</text>
            <text x="400" y="122" font-family="Archivo, sans-serif" font-size="15" fill="rgba(245,242,233,.86)">…để đạt được</text>
            <text x="400" y="158" font-family="IBM Plex Mono, monospace" font-size="13" fill="rgba(245,242,233,.7)">quanh Efforts</text></g>
          <g><rect x="562" y="58" width="170" height="122" fill="#4C7736"/>
            <text x="578" y="92" font-family="Archivo Black, sans-serif" font-size="18" fill="#F5F2E9">Creative</text>
            <text x="578" y="122" font-family="Archivo, sans-serif" font-size="15" fill="rgba(245,242,233,.86)">…để sáng tạo</text>
            <text x="578" y="158" font-family="IBM Plex Mono, monospace" font-size="13" fill="rgba(245,242,233,.7)">làm vườn</text></g>
          <text x="28" y="220" font-family="Archivo, sans-serif" font-size="17" fill="#514D42">Vault hỏi thẳng ở note đầu tiên: bạn tới đây để làm gì?</text>
          <text x="28" y="242" font-family="Archivo, sans-serif" font-size="17" fill="#514D42">Bốn câu trả lời, một hệ thư mục.</text>
        </svg>
        <figcaption><b>Hình 16</b> — Mỗi người trong nhóm nhiều khả năng rơi vào một kiểu khác nhau. Năm thư mục phục vụ được cả bốn.</figcaption>
      </figure>
      <div class="side rv d5" style="margin-top:22px;">
        <div class="sh"><span class="av sq" style="background:var(--moss);">✓</span><span><span class="nm">Thử ngay tối nay</span><span class="rl">Mười phút, không hơn</span></span></div>
        <p>Tạo năm thư mục rỗng. Mở <span class="mono">Settings › Files and links › Default location for new notes</span> rồi trỏ về <span class="mono">+</span>. Viết đúng <strong>một</strong> note về thứ hôm nay bạn thấy thú vị. Rồi tắt máy.</p>
      </div>
      <div class="folio">47<i>Sơ đồ</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 off"></i><i class="c2 off"></i><i class="c3 off"></i><i class="c4 off"></i><i class="c5 off"></i><i class="c6 on"></i></div>
</section>

<!-- ═════ 24 · CH6 · BA MƯƠI NGÀY ĐẦU ═════ -->
<section class="slide" style="--accent:var(--moss);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Chương 6</b><span>Thực hành</span><span class="sp">Ý tưởng lớn 14</span></div>
      <h2 class="rv d1" style="margin-bottom:20px;">Ba mươi ngày đầu,<br>chia theo tuần</h2>
      <div class="incontext rv d2">
        <div class="ttl">Trong bối cảnh</div>
        <div class="icrow"><span class="lb">Trọng tâm</span><span class="vl">Mỗi tuần thêm đúng một thói quen mới, không thêm hai</span></div>
        <div class="icrow"><span class="lb">Lĩnh vực</span><span class="vl">Lộ trình người mới</span></div>
        <div class="ictime">
          <div class="rail"><i class="a"></i><i class="b"></i></div>
          <div class="seg"><span class="lb">Trước</span><span class="vl">Học hết mọi tính năng trong tuần đầu, rồi bỏ ở tuần thứ ba</span></div>
          <div class="seg"><span class="lb">Sau</span><span class="vl">Bốn thói quen, mỗi tuần một cái, và cái sau dựa trên cái trước</span></div>
        </div>
      </div>
      <div class="rows rv d4" style="margin-top:22px;">
        <div class="row"><span class="k">Tuần 1</span><span class="v"><b>Ghi.</b> Mỗi ngày một note bằng lời mình. Chưa link, chưa phân loại.</span><span class="n">thói quen</span></div>
        <div class="row"><span class="k">Tuần 2</span><span class="v"><b>Nối.</b> Mỗi note mới phải link tới ít nhất một note cũ.</span><span class="n">+ liên kết</span></div>
        <div class="row"><span class="k">Tuần 3</span><span class="v"><b>Dọn.</b> Lần đầu dọn <span class="mono">+</span>, xếp vào ACE. Chủ đề nào đã có 7 note thì dựng MOC.</span><span class="n">+ bản đồ</span></div>
        <div class="row"><span class="k">Tuần 4</span><span class="v"><b>Đưa ra ngoài.</b> Chọn một effort, viết một bản nháp chia sẻ được.</span><span class="n">+ vòng ARC</span></div>
      </div>
      <p class="rv d5" style="margin-top:20px;">Nếu tuần nào trượt, <strong>lặp lại tuần đó</strong> thay vì đi tiếp. Thứ tự này không nhảy cóc được: tuần 3 vô nghĩa nếu tuần 2 chưa thành phản xạ.</p>
      <div class="folio">48<i>Thực hành</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Hình</b><span class="sp">Lịch bốn tuần</span></div>
      <div class="flowlbl rv d2">SƠ ĐỒ LOGIC · MỖI TUẦN MỘT THÓI QUEN</div>
      <div class="flow rv d2">
        <div class="fb"><span class="fn">T1</span><span class="ft">Ghi bằng lời mình</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">T2</span><span class="ft">Nối vào note cũ</span></div>
        <div class="fa"></div>
        <div class="fb"><span class="fn">T3</span><span class="ft">Dọn + và dựng MOC</span></div>
        <div class="fa"></div>
        <div class="fb end"><span class="fn">T4</span><span class="ft">Đưa một bản nháp ra ngoài</span></div>
      </div>
      <figure class="rv d3" style="margin-top:22px;">
        <svg viewBox="0 0 760 400" class="plate">
          <text x="28" y="36" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="2.5" fill="#8A8474">BA MƯƠI NGÀY · MỖI Ô LÀ MỘT NGÀY</text>
          <!-- tuan 1 -->
          <text x="28" y="76" font-family="Archivo Black, sans-serif" font-size="16" fill="#4C7736">TUẦN 1 · GHI</text>
          <g fill="#4C7736"><rect x="200" y="58" width="60" height="26"/><rect x="268" y="58" width="60" height="26"/>
            <rect x="336" y="58" width="60" height="26"/><rect x="404" y="58" width="60" height="26"/>
            <rect x="472" y="58" width="60" height="26"/><rect x="540" y="58" width="60" height="26"/><rect x="608" y="58" width="60" height="26"/></g>
          <text x="684" y="78" font-family="IBM Plex Mono, monospace" font-size="14" fill="#8A8474">7</text>
          <!-- tuan 2 -->
          <text x="28" y="146" font-family="Archivo Black, sans-serif" font-size="16" fill="#0F7C7A">TUẦN 2 · NỐI</text>
          <g fill="#4C7736" opacity=".45"><rect x="200" y="128" width="60" height="26"/><rect x="268" y="128" width="60" height="26"/>
            <rect x="336" y="128" width="60" height="26"/><rect x="404" y="128" width="60" height="26"/>
            <rect x="472" y="128" width="60" height="26"/><rect x="540" y="128" width="60" height="26"/><rect x="608" y="128" width="60" height="26"/></g>
          <g fill="#0F7C7A"><rect x="200" y="160" width="60" height="12"/><rect x="268" y="160" width="60" height="12"/>
            <rect x="336" y="160" width="60" height="12"/><rect x="404" y="160" width="60" height="12"/>
            <rect x="472" y="160" width="60" height="12"/><rect x="540" y="160" width="60" height="12"/><rect x="608" y="160" width="60" height="12"/></g>
          <text x="684" y="148" font-family="IBM Plex Mono, monospace" font-size="14" fill="#8A8474">14</text>
          <!-- tuan 3 -->
          <text x="28" y="230" font-family="Archivo Black, sans-serif" font-size="16" fill="#6A3B8C">TUẦN 3 · DỌN</text>
          <g fill="#4C7736" opacity=".45"><rect x="200" y="212" width="60" height="26"/><rect x="268" y="212" width="60" height="26"/>
            <rect x="336" y="212" width="60" height="26"/><rect x="404" y="212" width="60" height="26"/>
            <rect x="472" y="212" width="60" height="26"/><rect x="540" y="212" width="60" height="26"/><rect x="608" y="212" width="60" height="26"/></g>
          <g fill="#0F7C7A" opacity=".5"><rect x="200" y="244" width="60" height="12"/><rect x="268" y="244" width="60" height="12"/>
            <rect x="336" y="244" width="60" height="12"/><rect x="404" y="244" width="60" height="12"/>
            <rect x="472" y="244" width="60" height="12"/><rect x="540" y="244" width="60" height="12"/><rect x="608" y="244" width="60" height="12"/></g>
          <rect x="608" y="212" width="60" height="44" fill="#6A3B8C"/>
          <text x="684" y="232" font-family="IBM Plex Mono, monospace" font-size="14" fill="#8A8474">21</text>
          <!-- tuan 4 -->
          <text x="28" y="314" font-family="Archivo Black, sans-serif" font-size="16" fill="#D2431C">TUẦN 4 · ĐƯA RA</text>
          <g fill="#4C7736" opacity=".45"><rect x="200" y="296" width="60" height="26"/><rect x="268" y="296" width="60" height="26"/>
            <rect x="336" y="296" width="60" height="26"/><rect x="404" y="296" width="60" height="26"/>
            <rect x="472" y="296" width="60" height="26"/><rect x="540" y="296" width="60" height="26"/><rect x="608" y="296" width="60" height="26"/></g>
          <g fill="#0F7C7A" opacity=".5"><rect x="200" y="328" width="60" height="12"/><rect x="268" y="328" width="60" height="12"/>
            <rect x="336" y="328" width="60" height="12"/><rect x="404" y="328" width="60" height="12"/>
            <rect x="472" y="328" width="60" height="12"/><rect x="540" y="328" width="60" height="12"/><rect x="608" y="328" width="60" height="12"/></g>
          <rect x="540" y="296" width="128" height="44" fill="#D2431C"/>
          <text x="684" y="316" font-family="IBM Plex Mono, monospace" font-size="14" fill="#8A8474">30</text>
          <line x1="28" y1="362" x2="732" y2="362" stroke="#C9C1AC"/>
          <text x="28" y="390" font-family="Archivo, sans-serif" font-size="16" fill="#514D42">Thói quen cũ không mất đi khi thêm thói quen mới. Nó xuống làm nền.</text>
        </svg>
        <figcaption><b>Hình 17</b> — Bốn tuần chồng lớp. Ô đậm là việc mới của tuần đó; ô nhạt là việc đã thành nền.</figcaption>
      </figure>
      <div class="side rv d5" style="margin-top:22px;">
        <div class="sh"><span class="av sq" style="background:var(--ink);">?</span><span><span class="nm">Dấu hiệu bạn đang đi đúng</span><span class="rl">Cuối tuần thứ tư</span></span></div>
        <p>Bạn <strong>mở lại</strong> một note cũ vì cần nó, chứ không phải để dọn dẹp. Nếu chưa lần nào như vậy, quay lại tuần 2: khả năng cao là note chưa đủ nối vào nhau.</p>
      </div>
      <div class="folio">49<i>Hình</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
  <div class="tabs"><i class="c1 off"></i><i class="c2 off"></i><i class="c3 off"></i><i class="c4 off"></i><i class="c5 off"></i><i class="c6 on"></i></div>
</section>

<!-- ═════ 25 · TRA CỨU · DANH BẠ + PHẢ HỆ ═════ -->
<section class="slide" style="--accent:var(--navy);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Phần III</b><span>Tra cứu</span><span class="sp">Danh bạ</span></div>
      <div class="kick rv d1">Ideaverse tới từ đâu</div>
      <h2 class="rv d1" style="margin-bottom:22px;">Tám mươi năm<br>dẫn tới năm thư mục</h2>
      <div class="rows rv d2">
        <div class="row"><span class="k">1945</span><span class="v"><b>Vannevar Bush</b> — bài <i>As We May Think</i>, hình dung máy Memex nối tài liệu bằng &#8220;đường mòn liên tưởng&#8221;.</span></div>
        <div class="row"><span class="k">1962</span><span class="v"><b>Douglas Engelbart</b> — <i>Augmenting Human Intellect</i>, đặt nền cho ý &#8220;máy tính khuếch đại tư duy&#8221;.</span></div>
        <div class="row"><span class="k">1950s–98</span><span class="v"><b>Niklas Luhmann</b> — Zettelkasten, khoảng 90.000 phiếu ghi nối nhau bằng mã số.</span></div>
        <div class="row"><span class="k">1995</span><span class="v"><b>Ward Cunningham</b> — WikiWikiWeb, cái wiki đầu tiên. Gõ tên trang là tự tạo liên kết.</span></div>
        <div class="row"><span class="k">2017</span><span class="v"><b>Sönke Ahrens</b> — <i>How to Take Smart Notes</i>, đưa Zettelkasten tới độc giả tiếng Anh.</span></div>
        <div class="row"><span class="k">2017</span><span class="v"><b>Tiago Forte</b> — khung PARA, chia thư mục theo mức độ hành động.</span></div>
        <div class="row"><span class="k">2020</span><span class="v"><b>Shida Li &amp; Erica Xu</b> — phát hành Obsidian: file markdown cục bộ, liên kết hai chiều.</span></div>
        <div class="row"><span class="k">2020–</span><span class="v"><b>Nick Milo</b> — Linking Your Thinking, đặt ra MOC và Mental Squeeze Point. Ideaverse là vault mẫu.</span></div>
      </div>
      <div class="folio">50<i>Danh bạ</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Cây phả hệ</b><span class="sp">Giữ gì · bỏ gì</span></div>
      <figure class="rv d3">
        <svg viewBox="0 0 760 560" class="plate">
          <line x1="84" y1="40" x2="84" y2="524" stroke="#C9C1AC" stroke-width="2"/>
          <g font-family="IBM Plex Mono, monospace" font-size="13" fill="#8A8474">
            <text x="24" y="74">1945</text><text x="24" y="164">1950s</text><text x="24" y="254">1995</text>
            <text x="24" y="344">2017</text><text x="24" y="434">2020</text><text x="24" y="514">2023</text></g>
          <g stroke="#15140E" stroke-width="2.5" fill="none">
            <path class="dash" d="M84 68 L146 68 M146 68 L146 158 L146 248 L146 338 L146 428 L146 508"/>
            <path class="dash" d="M84 158 L146 158 M84 248 L146 248 M84 338 L146 338 M84 428 L146 428 M84 508 L146 508"/></g>
          <g fill="#15140E"><circle cx="146" cy="68" r="7"/><circle cx="146" cy="158" r="7"/><circle cx="146" cy="248" r="7"/>
            <circle cx="146" cy="338" r="7"/><circle cx="146" cy="428" r="7"/></g>
          <circle cx="146" cy="508" r="12" fill="#1B3A63"/>
          <g font-family="Archivo Black, sans-serif" font-size="19" fill="#15140E">
            <text x="178" y="62">Memex</text><text x="178" y="152">Zettelkasten</text><text x="178" y="242">Wiki &amp; backlink</text>
            <text x="178" y="332">PARA</text><text x="178" y="422">LYT</text></g>
          <text x="178" y="502" font-family="Archivo Black, sans-serif" font-size="22" fill="#1B3A63">ACE / Ideaverse</text>
          <g font-family="Archivo, sans-serif" font-size="15.5" fill="#514D42">
            <text x="178" y="88">Vannevar Bush · đường mòn liên tưởng</text>
            <text x="178" y="178">Niklas Luhmann · note nguyên tử, nối tay</text>
            <text x="178" y="268">Ward Cunningham · liên kết hai chiều thành hạ tầng</text>
            <text x="178" y="358">Tiago Forte · chia theo tính hành động</text>
            <text x="178" y="448">Nick Milo · bản đồ nội dung, chống phân loại sớm</text>
            <text x="178" y="528">Chia theo trạng thái đầu óc · 5 thư mục · 3 nhiệt độ</text></g>
          <g stroke="#D2431C" stroke-width="2" stroke-dasharray="5 5" fill="none">
            <path d="M146 158 C620 158 640 210 700 210"/><path d="M146 338 C620 338 640 390 700 390"/></g>
          <text x="536" y="200" font-family="IBM Plex Mono, monospace" font-size="12" fill="#D2431C">BỎ: ĐÁNH SỐ 21/3a1</text>
          <text x="528" y="380" font-family="IBM Plex Mono, monospace" font-size="12" fill="#D2431C">BỎ: PHÂN LOẠI TRƯỚC</text>
        </svg>
        <figcaption><b>Hình 18</b> — Trục dọc là năm. Nhánh đỏ đứt nét là thứ mỗi thế hệ bỏ lại.</figcaption>
      </figure>
      <div class="rows rv d5" style="margin-top:22px;">
        <div class="row"><span class="k">Giữ lại</span><span class="v">Liên kết hai chiều · viết bằng lời mình · ghi chép nguyên tử</span></div>
        <div class="row"><span class="k">Bỏ đi</span><span class="v">Đánh số phức tạp · phân loại trước · phần mềm độc quyền</span></div>
        <div class="row"><span class="k">Thêm vào</span><span class="v">Chia theo trạng thái đầu óc · bản đồ nội dung · ba nhiệt độ dự án</span></div>
      </div>
      <div class="folio">51<i>Phả hệ</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
</section>

<!-- ═════ 26 · TRA CỨU · TỪ ĐIỂN THUẬT NGỮ ═════ -->
<section class="slide" style="--accent:var(--teal);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Phần III</b><span>Tra cứu</span><span class="sp">Thuật ngữ A–M</span></div>
      <div class="kick rv d1">Từ điển</div>
      <h2 class="rv d1" style="margin-bottom:24px;">Mười tám chữ<br>cần biết</h2>
      <div class="gloss rv d2">
        <div class="gterm"><b>ACE</b><span>Atlas · Calendar · Efforts. Ba thư mục gốc chia theo trạng thái đầu óc: để biết, để ngẫm, để làm.</span></div>
        <div class="gterm"><b>ARC</b><span>Add · Relate · Communicate. Vòng chảy của một ý tưởng, từ lúc ném vào tới lúc đưa ra ngoài.</span></div>
        <div class="gterm"><b>Atomic note</b><span>Ghi chép nguyên tử: mỗi note chỉ chứa một ý, để nối lại được nhiều cách.</span></div>
        <div class="gterm"><b>Backlink</b><span>Liên kết ngược. Danh sách note đang trỏ tới note này, do phần mềm tự dựng.</span></div>
        <div class="gterm"><b>Collector&#39;s Fallacy</b><span>Ngộ nhận của kẻ sưu tầm: tưởng lưu lại là đã hiểu.</span></div>
        <div class="gterm"><b>Dots</b><span>Thư mục con của Atlas, chứa các mảnh kiến thức rời: Things, Statements, Quotes, People.</span></div>
        <div class="gterm"><b>Effort</b><span>Sự bỏ sức để làm một điều gì đó, mà bước, hạn chót và kết quả có thể rõ hoặc không.</span></div>
        <div class="gterm"><b>Fluid framework</b><span>Khung mềm: cấu trúc được phép đổi khi nội dung đổi, thay vì cố định từ đầu.</span></div>
        <div class="gterm"><b>Home note</b><span>Note cửa ngõ của cả vault. Chỗ bắt đầu mỗi phiên làm việc.</span></div>
        <div class="gterm"><b>Idea Emergence</b><span>Ba nhịp một bản đồ lớn lên: gom, va, điều hướng.</span></div>
        <div class="gterm"><b>Map of Content · MOC</b><span>Bản đồ nội dung. Một note chỉ chứa liên kết tới note khác, làm lớp phủ chứ không phải cái hộp.</span></div>
        <div class="gterm"><b>Mental Squeeze Point</b><span>Điểm nghẹt tinh thần. Ngưỡng mà kiến thức chưa sắp xếp làm bạn nản và bỏ dở.</span></div>
      </div>
      <div class="folio">52<i>Thuật ngữ</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Từ điển</b><span class="sp">Thuật ngữ P–Z</span></div>
      <div class="gloss rv d3">
        <div class="gterm"><b>Property</b><span>Vài dòng dữ liệu ở đầu file, dạng <span class="mono">khoá:: giá trị</span>. Nhờ nó mới lọc và thống kê được.</span></div>
        <div class="gterm"><b>Sleeping</b><span>Nhiệt độ nguội nhất của một dự án. Gộp cả &#8220;đã xong&#8221; lẫn &#8220;bỏ dở&#8221;.</span></div>
        <div class="gterm"><b>Simmering</b><span>Nhiệt độ giữa. Dự án để sau gáy, chưa bỏ nhưng chưa làm.</span></div>
        <div class="gterm"><b>Statement</b><span>Note đặt tên bằng cả một câu, mang lập trường. Chỗ tư duy riêng của bạn sống.</span></div>
        <div class="gterm"><b>Thing</b><span>Note đặt tên bằng một danh từ, khách quan, tự đứng được. Làm cột trụ cho các Statement.</span></div>
        <div class="gterm"><b>Vault</b><span>Một thư mục thường trên ổ đĩa, được Obsidian mở ra. Không server, không tài khoản.</span></div>
        <div class="gterm"><b>Zettelkasten</b><span>Hộp phiếu ghi của Luhmann. Tổ tiên trực tiếp của mọi hệ ghi chép nối bằng liên kết.</span></div>
        <div class="gterm"><b>+ (thư mục)</b><span>Tấm làm nguội. Mọi note mới rơi vào đây trước, để không phải quyết định lúc đang có ý.</span></div>
        <div class="gterm"><b>x (thư mục)</b><span>Extras. Van xả cho nỗi lo sắp xếp, lặp lại được ở mọi tầng thư mục.</span></div>
      </div>
      <div class="side rv d5" style="margin-top:24px;">
        <div class="sh"><span class="av sq" style="background:var(--teal);">i</span><span><span class="nm">Ba chữ đáng nhớ nhất</span><span class="rl">Nếu phải bỏ hết chỉ giữ ba</span></span></div>
        <p><strong>Mental Squeeze Point</strong> để biết mình đang ốm ở đâu. <strong>MOC</strong> để chữa. <strong>Effort</strong> để không phải ép việc mềm thành việc cứng.</p>
      </div>
      <div class="folio">53<i>Thuật ngữ</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
</section>

<!-- ═════ 27 · TRA CỨU · CHỈ MỤC TRA NHANH ═════ -->
<section class="slide" style="--accent:var(--mustard);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Phần III</b><span>Tra cứu</span><span class="sp">Chỉ mục</span></div>
      <div class="kick rv d1">Muốn làm gì thì mở đâu</div>
      <h2 class="rv d1" style="margin-bottom:24px;">Chỉ mục<br>tra nhanh</h2>
      <div class="rows rv d2">
        <div class="row"><span class="k">Ghi nhanh</span><span class="v">Một ý vừa loé lên, chưa biết để đâu</span><span class="n">+/</span></div>
        <div class="row"><span class="k">Học</span><span class="v">Khái niệm mới đọc được, muốn hiểu sâu hơn</span><span class="n">Atlas/Dots/Things</span></div>
        <div class="row"><span class="k">Lập luận</span><span class="v">Một ý kiến riêng, có lập trường</span><span class="n">Atlas/Dots/Statements</span></div>
        <div class="row"><span class="k">Điều hướng</span><span class="v">Một chủ đề đã phình, cần trang cửa ngõ</span><span class="n">Atlas/Maps</span></div>
        <div class="row"><span class="k">Nguồn</span><span class="v">Sách, phim, video vừa xem</span><span class="n">Atlas/Sources</span></div>
        <div class="row"><span class="k">Nhật ký</span><span class="v">Hôm nay xảy ra gì</span><span class="n">Calendar/Days</span></div>
        <div class="row"><span class="k">Biên bản</span><span class="v">Họp, sự kiện, buổi trao đổi</span><span class="n">Calendar/Records</span></div>
        <div class="row"><span class="k">Nhìn lại</span><span class="v">Tổng kết tháng, quý</span><span class="n">Calendar/Reviews</span></div>
        <div class="row"><span class="k">Trách nhiệm</span><span class="v">Mảng việc chạy mãi, không có điểm kết</span><span class="n">Efforts/Areas</span></div>
        <div class="row"><span class="k">Dự án</span><span class="v">Việc có hình thù, xếp theo nhiệt độ</span><span class="n">Efforts/Projects</span></div>
        <div class="row"><span class="k">Sản phẩm</span><span class="v">Thứ sẽ đi ra ngoài cho người khác đọc</span><span class="n">Efforts/Works</span></div>
        <div class="row"><span class="k">Chưa quyết</span><span class="v">Rác, bản nháp, đồ phụ trợ ở bất kỳ tầng nào</span><span class="n">x/</span></div>
      </div>
      <div class="folio">54<i>Chỉ mục</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Chỉ mục</b><span class="sp">Triệu chứng và thuốc</span></div>
      <div class="kick rv d2">Khi thấy khó chịu ở đâu thì mở trang nào</div>
      <div class="rows rv d3" style="margin-top:6px;">
        <div class="row"><span class="k">Trang 12</span><span class="v">&#8220;Tôi lưu nhiều mà chẳng nhớ gì.&#8221;</span><span class="n">ch.1</span></div>
        <div class="row"><span class="k">Trang 18</span><span class="v">&#8220;Tôi không biết nên bỏ note này vào thư mục nào.&#8221;</span><span class="n">ch.2</span></div>
        <div class="row"><span class="k">Trang 22</span><span class="v">&#8220;Chủ đề nào cũng dính vào chủ đề khác.&#8221;</span><span class="n">ch.3</span></div>
        <div class="row"><span class="k">Trang 24</span><span class="v">&#8220;Cứ ghi xong là quên mất mình đã ghi.&#8221;</span><span class="n">ch.3</span></div>
        <div class="row"><span class="k">Trang 32</span><span class="v">&#8220;Tôi sắp lạc mất đống note về chủ đề này.&#8221;</span><span class="n">ch.4</span></div>
        <div class="row"><span class="k">Trang 34</span><span class="v">&#8220;Ghi mãi mà chẳng thấy được gì, nên hết hứng.&#8221;</span><span class="n">ch.4</span></div>
        <div class="row"><span class="k">Trang 38</span><span class="v">&#8220;Việc này chưa rõ hình thù, ép thành task thì kỳ.&#8221;</span><span class="n">ch.5</span></div>
        <div class="row"><span class="k">Trang 40</span><span class="v">&#8220;Danh sách dự án của tôi dài mà chẳng cái nào nhúc nhích.&#8221;</span><span class="n">ch.5</span></div>
        <div class="row"><span class="k">Trang 44</span><span class="v">&#8220;Tôi dựng cấu trúc xong rồi bỏ, ba lần rồi.&#8221;</span><span class="n">ch.6</span></div>
        <div class="row"><span class="k">Trang 46</span><span class="v">&#8220;Tối nay bắt đầu thì làm gì trước?&#8221;</span><span class="n">ch.6</span></div>
      </div>
      <div class="side rv d5" style="margin-top:24px;">
        <div class="sh"><span class="av sq" style="background:var(--mustard);">↺</span><span><span class="nm">Cách dùng bảng này</span><span class="rl">Sau buổi chia sẻ</span></span></div>
        <p>Đừng đọc lại cả cuốn. Chờ tới lúc bạn <strong>thật sự</strong> thốt ra một trong mười câu trên, rồi mở đúng trang đó. Đó cũng chính là nguyên tắc &#8220;cấu trúc phải kiếm ra mới có&#8221;, áp cho việc học.</p>
      </div>
      <div class="folio">55<i>Chỉ mục</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
</section>

<!-- ═════ 28 · TRA CỨU · CÂU HỎI ĐỂ NGỎ ═════ -->
<section class="slide" style="--accent:var(--coral);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Phần III</b><span>Tra cứu</span><span class="sp">Để ngỏ</span></div>
      <div class="kick rv d1">Bộ slide này không trả lời</div>
      <h2 class="rv d1" style="margin-bottom:14px;">Chín câu hỏi<br>chưa ai chốt</h2>
      <p class="small rv d1" style="margin-bottom:20px;">Ideaverse là <strong>một lập luận</strong>, không phải kết quả nghiên cứu. Dưới đây là chỗ nó chưa chứng minh được, kèm hướng để bạn tự đi tìm.</p>
      <div class="rv d3">
        <div class="qcard"><span class="qn">CÂU 01</span><div class="qq">Bao nhiêu note thì vault bắt đầu cần MOC?</div>
          <div class="qw">Tác giả nói &#8220;khi thấy nhoi nhói&#8221;. <b>Tìm ở:</b> tự đo vault mình, ghi lại ngưỡng thật.</div></div>
        <div class="qcard"><span class="qn">CÂU 02</span><div class="qq">ACE có chịu nổi vault dùng chung nhiều người không?</div>
          <div class="qw">Cả bộ thiết kế cho một cái đầu. <b>Tìm ở:</b> diễn đàn Obsidian, chủ đề team vault.</div></div>
        <div class="qcard"><span class="qn">CÂU 03</span><div class="qq">Thẻ chỉ được dùng 3,4%. Vậy còn giữ thẻ làm gì?</div>
          <div class="qw"><b>Tìm ở:</b> so sánh với vault của người khác, xem tỉ lệ có giống không.</div></div>
        <div class="qcard"><span class="qn">CÂU 04</span><div class="qq">Ranh giới Things / Statements có ổn định khi note lớn lên?</div>
          <div class="qw"><b>Tìm ở:</b> chính vault của bạn sau ba tháng, đếm số note phải đổi loại.</div></div>
        <div class="qcard"><span class="qn">CÂU 05</span><div class="qq">Bỏ ô &#8220;Done&#8221; giúp hay hại khi phải báo cáo cho người khác?</div>
          <div class="qw"><b>Tìm ở:</b> thử một quý với dự án thật, đối chiếu với công cụ quản lý của công ty.</div></div>
      </div>
      <div class="folio">56<i>Để ngỏ</i></div>
    </div>
    <div class="page rt">
      <div class="runhead"><b>Để ngỏ</b><span class="sp">Việc của bạn sau buổi này</span></div>
      <div class="rv d3">
        <div class="qcard"><span class="qn">CÂU 06</span><div class="qq">Dữ liệu công việc (Jira, Confluence) ánh xạ vào ACE thế nào?</div>
          <div class="qw"><b>Tìm ở:</b> thử ánh xạ một epic thật thành một effort, xem chỗ nào vỡ.</div></div>
        <div class="qcard"><span class="qn">CÂU 07</span><div class="qq">Tìm kiếm ngữ nghĩa bằng AI có làm nguyên tắc &#8220;chống phân loại sớm&#8221; lỗi thời không?</div>
          <div class="qw">Nếu máy tìm được mọi thứ, cấu trúc còn để làm gì? <b>Tìm ở:</b> các plugin AI cho Obsidian, và tranh luận quanh chúng.</div></div>
        <div class="qcard"><span class="qn">CÂU 08</span><div class="qq">Chi phí duy trì thật là bao nhiêu? Mỗi tuần tốn bao lâu để dọn <span class="mono">+</span>?</div>
          <div class="qw">Không tài liệu nào của LYT nói con số này. <b>Tìm ở:</b> bấm giờ chính bạn trong bốn tuần.</div></div>
        <div class="qcard"><span class="qn">CÂU 09</span><div class="qq">Cái gì làm người ta bỏ vault sau ba tháng?</div>
          <div class="qw">Ta chỉ nghe được người còn dùng. <b>Tìm ở:</b> hỏi thẳng người đã bỏ, không hỏi người đang dạy.</div></div>
      </div>
      <div class="pull sm rv d5" style="margin-top:18px;">
        <q>Bộ này chưa từng được kiểm chứng bằng thực nghiệm. Nó là kinh nghiệm của một người, được trình bày mạch lạc. Dùng nó như giả thuyết, không phải như kết luận.</q>
        <span class="src">Ranh giới trung thực của cả buổi chia sẻ</span>
      </div>
      <div class="side rv d6" style="margin-top:20px;">
        <div class="sh"><span class="av sq" style="background:var(--coral);">→</span><span><span class="nm">Chia việc ra</span><span class="rl">Mỗi người một câu</span></span></div>
        <p>Chín câu, nhóm mình đủ người. Ai nhận câu nào thì <strong>một tháng sau kể lại</strong> — đó vừa là nghiên cứu, vừa là một effort đúng nghĩa để chạy thử vòng ARC.</p>
      </div>
      <div class="folio">57<i>Để ngỏ</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
</section>

<!-- ═════ 29 · KẾT ═════ -->
<section class="slide" style="--accent:var(--moss);">
  <div class="spread">
    <div class="page lf">
      <div class="runhead"><b>Kết</b><span>Mang về gì</span><span class="sp">Không cần phần mềm nào</span></div>
      <div class="kick rv d1">Tóm lại một trang</div>
      <h2 class="rv d1" style="margin-bottom:24px;">Ba ý áp được cho<br>Drive, Notion,<br>thư mục thường</h2>
      <div class="cards c3 rv d3">
        <div class="card te"><span class="tg">01</span><h3>Chia theo ý định</h3><p>Ba thư mục: để biết, để ngẫm, để làm. Cộng một chỗ ném đồ mới và một chỗ chứa đồ phụ.</p></div>
        <div class="card mu"><span class="tg">02</span><h3>Ba nhiệt độ dự án</h3><p>Đang cháy · để sau gáy · ngủ. Bỏ hẳn ô &#8220;Done&#8221;. Nhìn thư mục đầu là biết đang ôm bao nhiêu.</p></div>
        <div class="card mo"><span class="tg">03</span><h3>Cấu trúc phải kiếm ra</h3><p>Không dựng thư mục trước khi có đồ để bỏ vào. Chờ tới lúc chật thật rồi mới chia.</p></div>
      </div>
      <div class="pull rv d5" style="margin-top:26px;">
        <q>Khi có gì loé lên — nghĩa là thấy thú vị hoặc quan trọng — thì ghi lại một nhận xét. Nghĩa là viết về nó, chủ yếu bằng lời của bạn. Rồi link nó tới một note khác.</q>
        <span class="src">Atlas / Maps / How do I start.md · toàn bộ phương pháp</span>
      </div>
      <div class="folio">58<i>Kết</i></div>
    </div>
    <div class="page rt" style="background:var(--moss);">
      <div class="runhead" style="border-color:rgba(255,255,255,.4);color:rgba(255,255,255,.7);"><b style="color:#fff;">Việc duy nhất</b><span class="sp">cho tuần này</span></div>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:center;">
        <div class="kick rv d2" style="color:rgba(255,255,255,.72);">Không cài gì thêm</div>
        <h1 class="rv d3" style="color:#fff;font-size:100px;margin-bottom:30px;">Tạo năm<br>thư mục<br>rỗng.</h1>
        <div class="rv d4" style="display:flex;gap:10px;margin-bottom:30px;flex-wrap:wrap;">
          <span style="background:rgba(255,255,255,.16);color:#fff;font-family:var(--f-mono);font-size:21px;padding:11px 18px;">+</span>
          <span style="background:rgba(255,255,255,.16);color:#fff;font-family:var(--f-mono);font-size:21px;padding:11px 18px;">Atlas</span>
          <span style="background:rgba(255,255,255,.16);color:#fff;font-family:var(--f-mono);font-size:21px;padding:11px 18px;">Calendar</span>
          <span style="background:rgba(255,255,255,.16);color:#fff;font-family:var(--f-mono);font-size:21px;padding:11px 18px;">Efforts</span>
          <span style="background:rgba(255,255,255,.16);color:#fff;font-family:var(--f-mono);font-size:21px;padding:11px 18px;">x</span>
        </div>
        <p class="rv d5" style="color:rgba(255,255,255,.9);font-size:26px;max-width:640px;">Rồi để yên đó. Đừng làm gì thêm cho tới khi có note thật để bỏ vào.</p>
        <p class="rv d6" style="color:rgba(255,255,255,.72);font-size:20px;max-width:640px;margin-top:18px;">Và chọn lấy một câu ở trang 56. Một tháng nữa kể lại.</p>
      </div>
      <div class="rv d6" style="border-top:1px solid rgba(255,255,255,.35);padding-top:16px;font-family:var(--f-mono);font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.65);">
        Ideaverse Pro 2.5 · CC BY-NC-ND 4.0 · Linking Your Thinking
      </div>
      <div class="folio" style="color:rgba(255,255,255,.75);">59<i style="color:rgba(255,255,255,.55);">Hết</i></div>
    </div>
  </div>
  <div class="gutter"></div><div class="fold"></div>
</section>

</main>
</div>

<div class="deck-controls">
  <button id="prevBtn" aria-label="Trang trước">←</button>
  <span id="counter">01 / 29</span>
  <button id="nextBtn" aria-label="Trang sau">→</button>
</div>

<div class="edit-hotzone" title="Chế độ sửa chữ (E)"></div>
<button class="edit-toggle" id="editToggle" title="Chế độ sửa chữ (E)">✎</button>

<script>
/* Điều khiển trang: mũi tên · Space · PageUp/Down · vuốt · lăn chuột */
class Deck{
  constructor(){
    this.slides=document.querySelectorAll('.slide');
    this.i=0;
    this.stage=document.getElementById('deckStage');
    this.counter=document.getElementById('counter');
    this.bar=document.getElementById('progress');
    this.scale(); window.addEventListener('resize',()=>this.scale());
    this.keys(); this.touch(); this.wheel();
    document.getElementById('prevBtn').addEventListener('click',()=>this.show(this.i-1));
    document.getElementById('nextBtn').addEventListener('click',()=>this.show(this.i+1));
    this.show(0);
  }
  scale(){
    const f=Math.min(window.innerWidth/1920, window.innerHeight/1080);
    const x=(window.innerWidth-1920*f)/2, y=(window.innerHeight-1080*f)/2;
    this.stage.style.transform='translate('+x+'px,'+y+'px) scale('+f+')';
  }
  keys(){
    document.addEventListener('keydown',e=>{
      if(e.target.getAttribute && e.target.getAttribute('contenteditable')==='true') return;
      if(['ArrowRight','ArrowDown',' ','PageDown'].includes(e.key)){e.preventDefault();this.show(this.i+1);}
      if(['ArrowLeft','ArrowUp','PageUp'].includes(e.key)){e.preventDefault();this.show(this.i-1);}
      if(e.key==='Home'){e.preventDefault();this.show(0);}
      if(e.key==='End'){e.preventDefault();this.show(this.slides.length-1);}
    });
  }
  touch(){
    let sx=0,sy=0;
    document.addEventListener('touchstart',e=>{sx=e.changedTouches[0].clientX;sy=e.changedTouches[0].clientY;},{passive:true});
    document.addEventListener('touchend',e=>{
      const dx=e.changedTouches[0].clientX-sx, dy=e.changedTouches[0].clientY-sy;
      if(Math.abs(dx)>52 && Math.abs(dx)>Math.abs(dy)) this.show(dx<0?this.i+1:this.i-1);
    },{passive:true});
  }
  wheel(){
    let lock=false;
    document.addEventListener('wheel',e=>{
      if(lock || Math.abs(e.deltaY)<24) return;
      lock=true; this.show(e.deltaY>0?this.i+1:this.i-1);
      setTimeout(()=>lock=false,650);
    },{passive:true});
  }
  show(n){
    this.i=Math.max(0,Math.min(n,this.slides.length-1));
    this.slides.forEach((s,k)=>s.classList.toggle('active',k===this.i));
    const pad=v=>String(v).padStart(2,'0');
    this.counter.textContent=pad(this.i+1)+' / '+pad(this.slides.length);
    this.bar.style.width=((this.i+1)/this.slides.length*100)+'%';
  }
}
const deck=new Deck();

/* Sửa chữ tại chỗ — hover góc trên trái hoặc bấm E. Ctrl+S tải file đã sửa. */
const editor={
  on:false,
  sel:'h1,h2,h3,p,li,q,.vl,.lb,.tt,.hd,.tg,.kick,.src,figcaption,.v,.k,.n,.ft,.qq,.qw,.gterm b,.gterm span,.nm,.rl,.sub',
  toggle(){
    this.on=!this.on;
    document.querySelectorAll(this.sel).forEach(el=>el.setAttribute('contenteditable',this.on?'true':'false'));
    document.getElementById('editToggle').classList.toggle('active',this.on);
    if(!this.on) this.save();
  },
  save(){ try{ localStorage.setItem('ideaverse-book', document.getElementById('deckStage').innerHTML); }catch(e){} },
  download(){
    const blob=new Blob(['<!DOCTYPE html>\n'+document.documentElement.outerHTML],{type:'text/html'});
    const a=document.createElement('a');
    a.href=URL.createObjectURL(blob); a.download='deck-ideaverse-book.html'; a.click();
    URL.revokeObjectURL(a.href);
  }
};
const hz=document.querySelector('.edit-hotzone'), et=document.getElementById('editToggle');
let ht=null;
hz.addEventListener('mouseenter',()=>{clearTimeout(ht);et.classList.add('show');});
hz.addEventListener('mouseleave',()=>{ht=setTimeout(()=>{if(!editor.on)et.classList.remove('show');},400);});
et.addEventListener('mouseenter',()=>clearTimeout(ht));
et.addEventListener('mouseleave',()=>{ht=setTimeout(()=>{if(!editor.on)et.classList.remove('show');},400);});
et.addEventListener('click',()=>editor.toggle());
document.addEventListener('keydown',e=>{
  const ce=e.target.getAttribute && e.target.getAttribute('contenteditable')==='true';
  if((e.key==='e'||e.key==='E') && !ce) editor.toggle();
  if((e.ctrlKey||e.metaKey) && e.key==='s'){ e.preventDefault(); editor.save(); editor.download(); }
});
</script>
</body>
</html>

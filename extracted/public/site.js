(() => {
  window.__siteLoaded = true;
  const $ = s => document.querySelector(s);
  const touch = matchMedia('(pointer: coarse)').matches;
  let locked = false;
  const menu = $('#menu'), burger = $('#burger'), bar = $('#bar');
  const setMenu = o => { menu.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); menu.setAttribute('aria-hidden', !o);
    burger.setAttribute('aria-label', o ? 'Close menu' : 'Open menu'); document.documentElement.style.overflow = (o || locked) ? 'hidden' : ''; };
  burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('open')) setMenu(false); });
  const onScroll = () => bar.classList.toggle('solid', scrollY > 40); addEventListener('scroll', onScroll, { passive: true }); onScroll();
/* ------------------------------------------------------ tools dialog: property quiz + EMI calculator */
  const WA_NUM = '919611122011', FORM_URL = 'https://formspree.io/f/mgojwjap';
  const waLink = txt => 'https://wa.me/' + WA_NUM + '?text=' + encodeURIComponent(txt);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const dlg = $('#dlg'), qBody = $('#qBody'), qMeta = $('#qMeta'), qBar = $('#qBar');
  const tabQ = $('#tabQ'), tabE = $('#tabE'), panQ = $('#panQ'), panE = $('#panE');
  let lastFocus = null, qStep = 0, qDone = false, emiReady = false; const Q = {};

  const NEEDS = ['Buy a property', 'Sell a property', 'Rent a property', 'Invest in property', 'Buy land', 'Joint venture'];
  const TYPES = ['Apartment', 'Villa or independent house', 'Plot or land', 'Commercial space', 'Not sure yet'];
  const BUY_B = ['Under ₹50 lakh', '₹50 lakh – ₹1 crore', '₹1 – 2 crore', '₹2 – 5 crore', 'Above ₹5 crore', 'Not sure yet'];
  const RENT_B = ['Under ₹20,000 a month', '₹20,000 – ₹40,000 a month', '₹40,000 – ₹75,000 a month', 'Above ₹75,000 a month', 'Not sure yet'];
  const WHEN = ['As soon as possible', 'Within 1–3 months', 'In 3–6 months', 'Just exploring'];
  const flow = () => { const f = ['need']; if (Q.need !== 'Buy land' && Q.need !== 'Joint venture') f.push('type'); f.push('area'); if (Q.need !== 'Joint venture') f.push('budget'); f.push('when', 'contact'); return f; };
  const budgetWord = () => Q.need === 'Rent a property' ? 'Monthly budget' : Q.need === 'Sell a property' ? 'Expected price' : 'Budget';
  const opts = (list, key) => '<div class="opts" role="group" aria-labelledby="qH">' + list.map(v => '<button type="button" class="opt" data-k="' + key + '" data-v="' + esc(v) + '" aria-pressed="' + (Q[key] === v) + '">' + esc(v) + '</button>').join('') + '</div>';
  const backBtn = () => qStep > 0 ? '<button type="button" class="back" data-act="back">← Back</button>' : '<span></span>';

  function renderQ() {
    const f = flow(), id = f[qStep], n = f.length; qDone = false;
    qMeta.textContent = 'Step ' + (qStep + 1) + ' of ' + n; qBar.style.width = ((qStep + 1) / n * 100) + '%';
    let h = '', focusSel = '#qH';
    if (id === 'need') h = '<h3 id="qH" tabindex="-1">What do you need help with?</h3>' + opts(NEEDS, 'need');
    else if (id === 'type') h = '<h3 id="qH" tabindex="-1">What kind of property?</h3>' + opts(TYPES, 'type') + '<div class="row">' + backBtn() + '<span></span></div>';
    else if (id === 'area') { h = '<h3 id="qH" tabindex="-1">Which area of Bangalore?</h3><p class="hint">Type an area, or leave it blank if you are not sure yet.</p>' +
      '<label class="fld"><span>Area</span><input id="qArea" type="text" autocomplete="off" maxlength="80" value="' + esc(Q.area || '') + '"></label>' +
      '<div class="row">' + backBtn() + '<button type="button" class="btn gold" data-act="area">Next</button></div>'; if (!touch) focusSel = '#qArea'; }
    else if (id === 'budget') h = '<h3 id="qH" tabindex="-1">' + (Q.need === 'Rent a property' ? 'What is your monthly budget?' : Q.need === 'Sell a property' ? 'What price are you expecting?' : 'What is your budget?') + '</h3>' + opts(Q.need === 'Rent a property' ? RENT_B : BUY_B, 'budget') + '<div class="row">' + backBtn() + '<span></span></div>';
    else if (id === 'when') h = '<h3 id="qH" tabindex="-1">How soon do you want to go ahead?</h3>' + opts(WHEN, 'when') + '<div class="row">' + backBtn() + '<span></span></div>';
    else { h = '<h3 id="qH" tabindex="-1">Where should we reach you?</h3><p class="hint">We use your details only to reply to this enquiry. <a href="https://www.dharamorealtysolutions.com/privacy" target="_blank" rel="noopener">Privacy Policy</a></p>' +
      '<label class="fld"><span>Your name</span><input id="qName" type="text" autocomplete="name" maxlength="80" value="' + esc(Q.name || '') + '"></label>' +
      '<label class="fld"><span>Mobile number</span><input id="qPhone" type="tel" inputmode="tel" autocomplete="tel" placeholder="10-digit mobile number" maxlength="18" value="' + esc(Q.phone || '') + '"></label>' +
      '<label class="fld"><span>Anything else we should know? (optional)</span><textarea id="qNote" rows="3" maxlength="400">' + esc(Q.note || '') + '</textarea></label>' +
      '<p class="err" id="qErr" role="alert"></p><div class="row">' + backBtn() + '<button type="button" class="btn gold" data-act="send">Send my requirements</button></div>'; if (!touch) focusSel = '#qName'; }
    qBody.innerHTML = h; const el = $(focusSel); if (el) el.focus({ preventScroll: true });
    dlgBox.scrollTop = 0;
  }
  const dlgBox = dlg.querySelector('.dlg-c');
  const normPhone = s => { let d = String(s).replace(/[^0-9]/g, ''); if (d.length === 12 && d.startsWith('91')) d = d.slice(2); if (d.length === 11 && d.startsWith('0')) d = d.slice(1); return /^[6-9][0-9]{9}$/.test(d) ? d : ''; };

  function sendQuiz() {
    const name = $('#qName').value.trim(), phoneRaw = $('#qPhone').value, note = $('#qNote').value.trim(), err = $('#qErr');
    const ph = normPhone(phoneRaw); $('#qName').removeAttribute('aria-invalid'); $('#qPhone').removeAttribute('aria-invalid');
    if (name.length < 2) { $('#qName').setAttribute('aria-invalid', 'true'); err.textContent = 'Please enter your name.'; $('#qName').focus(); return; }
    if (!ph) { $('#qPhone').setAttribute('aria-invalid', 'true'); err.textContent = 'Please enter a valid 10-digit mobile number.'; $('#qPhone').focus(); return; }
    Q.name = name; Q.phone = ph; Q.note = note;
    const rows = [['I want to', Q.need], ['Property type', Q.type], ['Area', Q.area || 'Not decided yet'], [budgetWord(), Q.budget], ['Timeline', Q.when]].filter(r => r[1]);
    const msg = 'Hi Dharam O Realty Solutions, I am ' + name + '.\n' + rows.map(r => r[0] + ': ' + r[1]).join('\n') + '\nPhone: ' + ph + (note ? '\nNote: ' + note : '');
    try { fetch(FORM_URL, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ _subject: 'New website enquiry: Find my property', name, phone: ph, need: Q.need, type: Q.type || '', area: Q.area || '', budget: Q.budget || '', timeline: Q.when || '', note, page: location.href }) }).catch(() => {}); } catch (e) {}
    qDone = true; qMeta.textContent = 'All set'; qBar.style.width = '100%';
    qBody.innerHTML = '<h3 id="qH" tabindex="-1">Thank you, ' + esc(name.split(' ')[0]) + '.</h3><p class="hint">One last step: tap the button to send your requirements to us on WhatsApp. It is the easiest way to continue the conversation.</p>' +
      '<div class="doneact"><a class="btn gold" href="' + waLink(msg) + '" target="_blank" rel="noopener">Send on WhatsApp</a><a class="btn" href="tel:+' + WA_NUM + '">Or call us</a></div>' +
      '<dl class="sum">' + rows.map(r => '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>').join('') + '</dl>' +
      '<div class="row"><button type="button" class="back" data-act="restart">Start again</button><span></span></div>';
    const hh = $('#qH'); if (hh) hh.focus({ preventScroll: true }); dlgBox.scrollTop = 0;
  }
  qBody.addEventListener('click', e => {
    const o = e.target.closest('.opt');
    if (o) { const k = o.dataset.k, v = o.dataset.v;
      if (k === 'need' && Q.need !== v) { delete Q.type; delete Q.budget; Q.need = v; if (v === 'Buy land') Q.type = 'Plot or land'; if (v === 'Joint venture') { Q.type = 'Land and development partner'; } }
      else Q[k] = v;
      qStep = Math.min(qStep + 1, flow().length - 1); renderQ(); return; }
    const a = e.target.closest('[data-act]'); if (!a) return; const act = a.dataset.act;
    if (act === 'back') { qStep = Math.max(0, qStep - 1); renderQ(); }
    else if (act === 'area') { Q.area = $('#qArea').value.trim(); qStep++; renderQ(); }
    else if (act === 'send') sendQuiz();
    else if (act === 'restart') { Object.keys(Q).forEach(k => delete Q[k]); qStep = 0; renderQ(); }
  });
  qBody.addEventListener('keydown', e => { if (e.key !== 'Enter' || e.target.tagName === 'TEXTAREA') return;
    if (e.target.id === 'qArea') { e.preventDefault(); $('[data-act="area"]').click(); } else if (e.target.id === 'qName' || e.target.id === 'qPhone') { e.preventDefault(); sendQuiz(); } });

  /* EMI calculator */
  const inr = n => '₹' + Math.round(n).toLocaleString('en-IN');
  const words = n => n >= 1e7 ? (n / 1e7).toFixed(2).replace(/\.?0+$/, '') + ' crore' : n >= 1e5 ? (n / 1e5).toFixed(2).replace(/\.?0+$/, '') + ' lakh' : '';
  const num = s => parseFloat(String(s).replace(/[^0-9.]/g, '')) || 0;
  const E = { loan: $('#eLoan'), loanR: $('#eLoanR'), rate: $('#eRate'), rateR: $('#eRateR'), yrs: $('#eYrs'), yrsR: $('#eYrsR') };
  function calcEmi() {
    const P = Math.min(Math.max(num(E.loan.value), 0), 1e10), rate = Math.min(num(E.rate.value), 40), yrs = Math.min(Math.max(num(E.yrs.value), 0), 40);
    $('#eLoanW').textContent = P ? '(' + (words(P) || inr(P)) + ')' : '';
    const n = Math.round(yrs * 12), r = rate / 1200;
    if (!P || !n) { ['#eEmi', '#ePrin', '#eInt', '#eTot'].forEach(s => $(s).textContent = '—'); $('#eDonut').setAttribute('stroke-dasharray', '0 289'); return; }
    const emi = r === 0 ? P / n : P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1), tot = emi * n, intr = tot - P;
    $('#eEmi').textContent = inr(emi); $('#ePrin').textContent = inr(P); $('#eInt').textContent = inr(intr); $('#eTot').textContent = inr(tot);
    $('#eDonut').setAttribute('stroke-dasharray', (P / tot * 289.03).toFixed(1) + ' 289.03');
    $('#eWa').href = waLink('Hi Dharam O Realty Solutions, I used the EMI calculator on your website: a loan of ' + inr(P) + ' for ' + yrs + ' years at ' + rate + '% comes to about ' + inr(emi) + ' a month. I would like to discuss what budget works for me.');
  }
  const fmtIn = v => v ? Math.round(v).toLocaleString('en-IN') : '';
  const link = (box, rng, lo, hi) => {
    box.addEventListener('input', () => { const v = num(box.value); if (v >= lo && v <= hi) rng.value = v; calcEmi(); });
    box.addEventListener('blur', () => { if (box === E.loan) box.value = fmtIn(num(box.value)); calcEmi(); });
    rng.addEventListener('input', () => { box.value = box === E.loan ? fmtIn(+rng.value) : rng.value; calcEmi(); });
  };
  link(E.loan, E.loanR, 500000, 50000000); link(E.rate, E.rateR, 5, 15); link(E.yrs, E.yrsR, 1, 30);

  /* open / close / tabs / keyboard */
  function setTab(which) {
    const q = which !== 'emi'; tabQ.setAttribute('aria-selected', q); tabE.setAttribute('aria-selected', !q); panQ.hidden = !q; panE.hidden = q;
    if (q) { if (!qBody.innerHTML) renderQ(); } else calcEmi();
  }
  function openDlg(which) {
    lastFocus = document.activeElement; if (menu.classList.contains('open')) setMenu(false);
    setTab(which); dlg.classList.add('open'); dlg.setAttribute('aria-hidden', 'false'); document.documentElement.style.overflow = 'hidden';
    setTimeout(() => { const t = which === 'emi' ? $('#eH') : $('#qH'); if (t) t.focus({ preventScroll: true }); }, 60);
  }
  function closeDlg() {
    dlg.classList.remove('open'); dlg.setAttribute('aria-hidden', 'true'); document.documentElement.style.overflow = locked ? 'hidden' : '';
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  document.addEventListener('click', e => { const b = e.target.closest('[data-open]'); if (b) { e.preventDefault(); openDlg(b.dataset.open); } });
  $('#dlgX').addEventListener('click', closeDlg); $('#dlgB').addEventListener('click', closeDlg);
  tabQ.addEventListener('click', () => setTab('quiz')); tabE.addEventListener('click', () => setTab('emi'));
  document.addEventListener('keydown', e => {
    if (!dlg.classList.contains('open')) return;
    if (e.key === 'Escape') { e.preventDefault(); closeDlg(); return; }
    if (e.key !== 'Tab') return;
    const f = [...dlg.querySelectorAll('button,a[href],input,textarea')].filter(x => x.offsetParent !== null && !x.disabled);
    if (!f.length) return; const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && (document.activeElement === first || !dlg.contains(document.activeElement))) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && (document.activeElement === last || !dlg.contains(document.activeElement))) { e.preventDefault(); first.focus(); }
  });

  /* fade things in as they scroll into view */
  const els = [...document.querySelectorAll('.rv2')];
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    els.forEach(e => io.observe(e));
  } else els.forEach(e => e.classList.add('in'));
})();

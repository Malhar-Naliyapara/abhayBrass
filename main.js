/* ── HERO ANIMATIONS ── */
document.querySelectorAll('.h1r[data-delay]').forEach(el => {
  el.style.setProperty('--d', el.dataset.delay);
});

/* ── PRODUCTS DATA ── */
const fc = { Antique:'#8B6914', Chrome:'#B0B0B0', Gold:'#C9A84C', Satin:'#B8A99A', Nickel:'#A0A0A0' };
const bg = { Bolts:'#1C1A15', Hinges:'#151A1E', Knobs:'#1A1520', Handles:'#151C15', Locks:'#1C1515', Hooks:'#1A1A14' };
const ic = { Bolts:'🔩', Hinges:'🔧', Knobs:'⚙️', Handles:'🪝', Locks:'🔒', Hooks:'🔗' };
const base = 'https://www.dharabrass.com/';
const bmap = { best:'Bestseller', new:'New', prem:'Premium' };

const prods = [
  {n:'25mm Barrel Bolt',c:'Bolts',f:['Antique','Chrome'],b:'best',img:base+'assets/imgs/products/01/01/01.jpg'},
  {n:'25mm Necked Barrel Bolt',c:'Bolts',f:['Antique','Gold','Chrome'],img:base+'assets/imgs/products/01/01/02.jpg'},
  {n:'24mm Barrel Bolt',c:'Bolts',f:['Chrome','Satin'],img:base+'assets/imgs/products/01/01/03.jpg'},
  {n:'24mm Necked Barrel Bolt',c:'Bolts',f:['Antique','Nickel'],img:base+'assets/imgs/products/01/01/04.jpg'},
  {n:'32mm Barrel Bolt',c:'Bolts',f:['Chrome','Gold'],b:'new',img:base+'assets/imgs/products/01/01/05.jpg'},
  {n:'32mm Necked Barrel Bolt',c:'Bolts',f:['Antique','Chrome'],img:base+'assets/imgs/products/01/01/06.jpg'},
  {n:'38mm Barrel Bolt',c:'Bolts',f:['Gold','Satin'],img:base+'assets/imgs/products/01/01/07.jpg'},
  {n:'38mm Necked Barrel Bolt',c:'Bolts',f:['Chrome','Nickel'],img:base+'assets/imgs/products/01/01/08.jpg'},
  {n:'Zen Baby Latch',c:'Bolts',f:['Antique'],img:base+'assets/imgs/products/01/01/09.jpg'},
  {n:'Half Round Baby Latch',c:'Bolts',f:['Chrome','Satin'],img:base+'assets/imgs/products/01/01/10.jpg'},
  {n:'Surface Bolt',c:'Bolts',f:['Antique','Chrome'],img:base+'assets/imgs/products/01/01/11.jpg'},
  {n:'Flush Bolt',c:'Bolts',f:['Chrome','Gold'],b:'new',img:base+'assets/imgs/products/01/01/12.jpg'},
  {n:'Rod Leg',c:'Bolts',f:['Antique','Nickel'],img:base+'assets/imgs/products/01/01/13.jpg'},
  {n:'Parliament Tower Bolt',c:'Bolts',f:['Gold','Chrome'],img:base+'assets/imgs/products/01/01/14.jpg'},
  {n:'Reversible Bolt',c:'Bolts',f:['Chrome','Satin'],img:base+'assets/imgs/products/01/01/15.jpg'},
  {n:'Round Concealed Tower Bolt',c:'Bolts',f:['Antique','Chrome'],img:base+'assets/imgs/products/01/01/16.jpg'},
  {n:'Double Ball Catch',c:'Bolts',f:['Gold','Nickel'],img:base+'assets/imgs/products/01/01/17.jpg'},
  {n:'Adjustable Hinges',c:'Hinges',f:['Antique','Chrome'],b:'best',img:base+'assets/imgs/products/01/02/01.jpg'},
  {n:'Ball Bearing Hinges',c:'Hinges',f:['Gold','Satin'],img:base+'assets/imgs/products/01/02/02.jpg'},
  {n:'Broad Butt Hinges',c:'Hinges',f:['Chrome','Nickel'],img:base+'assets/imgs/products/01/02/03.jpg'},
  {n:'Butt Hinges',c:'Hinges',f:['Antique','Chrome'],img:base+'assets/imgs/products/01/02/04.jpg'},
  {n:'Butterfly Hinges',c:'Hinges',f:['Chrome'],b:'new',img:base+'assets/imgs/products/01/02/05.jpg'},
  {n:'Counter Flap Hinges',c:'Hinges',f:['Gold','Satin'],img:base+'assets/imgs/products/01/02/06.jpg'},
  {n:'Crown Hinges',c:'Hinges',f:['Antique','Nickel'],img:base+'assets/imgs/products/01/02/07.jpg'},
  {n:'Decorative Hinges',c:'Hinges',f:['Gold','Chrome'],b:'prem',img:base+'assets/imgs/products/01/02/08.jpg'},
  {n:'Double Phosphor Bronze Washer Hinges',c:'Hinges',f:['Antique','Chrome'],img:base+'assets/imgs/products/01/02/09.jpg'},
  {n:'Double Stainless Steel Washer Hinges',c:'Hinges',f:['Chrome','Nickel'],img:base+'assets/imgs/products/01/02/10.jpg'},
  {n:'Double Steel Washer Hinges',c:'Hinges',f:['Antique','Satin'],img:base+'assets/imgs/products/01/02/11.jpg'},
  {n:'Flag Hinges',c:'Hinges',f:['Gold','Chrome'],img:base+'assets/imgs/products/01/02/12.jpg'},
  {n:'Flush Hinges',c:'Hinges',f:['Chrome','Nickel'],img:base+'assets/imgs/products/01/02/13.jpg'},
  {n:'H Hinges',c:'Hinges',f:['Antique','Gold'],img:base+'assets/imgs/products/01/02/15.jpg'},
  {n:'L Hinges',c:'Hinges',f:['Chrome','Satin'],img:base+'assets/imgs/products/01/02/16.jpg'},
  {n:'Loose Pin Hinges',c:'Hinges',f:['Antique','Chrome'],img:base+'assets/imgs/products/01/02/17.jpg'},
  {n:'Parliament Hinges',c:'Hinges',f:['Gold','Nickel'],img:base+'assets/imgs/products/01/02/18.jpg'},
  {n:'Reflex Hinges',c:'Hinges',f:['Chrome','Antique'],img:base+'assets/imgs/products/01/02/20.jpg'},
  {n:'Round Corner Hinges',c:'Hinges',f:['Gold','Satin'],img:base+'assets/imgs/products/01/02/21.jpg'},
  {n:'Security Hinges',c:'Hinges',f:['Chrome','Nickel'],b:'best',img:base+'assets/imgs/products/01/02/22.jpg'},
  {n:'Simplex Hinges',c:'Hinges',f:['Antique','Chrome'],img:base+'assets/imgs/products/01/02/23.jpg'},
  {n:'Small Butt Hinges',c:'Hinges',f:['Gold','Satin'],img:base+'assets/imgs/products/01/02/24.jpg'},
  {n:'Square Barrel Hinges',c:'Hinges',f:['Chrome','Nickel'],img:base+'assets/imgs/products/01/02/25.jpg'},
  {n:'Square Corner Hinges',c:'Hinges',f:['Antique','Gold'],img:base+'assets/imgs/products/01/02/26.jpg'},
  {n:'Tee Hinges',c:'Hinges',f:['Chrome','Satin'],img:base+'assets/imgs/products/01/02/27.jpg'},
  {n:'SS Butt Hinges',c:'Knobs',f:['Chrome','Satin'],b:'best',img:base+'assets/imgs/products/02/01/01.jpg'},
  {n:'SS 2 Ball Bearing Hinges',c:'Knobs',f:['Chrome','Nickel'],img:base+'assets/imgs/products/02/01/02.jpg'},
  {n:'SS 4 Ball Bearing Hinges',c:'Knobs',f:['Chrome'],img:base+'assets/imgs/products/02/01/03.jpg'},
  {n:'SS Parliament Hinges',c:'Knobs',f:['Chrome','Satin'],img:base+'assets/imgs/products/02/01/04.jpg'},
  {n:'SS Square Parliament Hinges',c:'Knobs',f:['Chrome','Nickel'],img:base+'assets/imgs/products/02/01/05.jpg'},
  {n:'SS Broad Butt Hinges',c:'Knobs',f:['Chrome','Satin'],img:base+'assets/imgs/products/02/01/06.jpg'},
  {n:'SS Flush Hinges',c:'Knobs',f:['Chrome'],img:base+'assets/imgs/products/02/01/07.jpg'},
  {n:'SS Flag Hinges',c:'Knobs',f:['Chrome','Nickel'],img:base+'assets/imgs/products/02/01/08.jpg'},
  {n:'SS Washer Hinges',c:'Knobs',f:['Chrome','Satin'],img:base+'assets/imgs/products/02/01/09.jpg'},
  {n:'SS Loose Pin Hinges',c:'Knobs',f:['Chrome'],img:base+'assets/imgs/products/02/01/10.jpg'},
  {n:'SS Rising Hinges',c:'Knobs',f:['Chrome','Nickel'],b:'new',img:base+'assets/imgs/products/02/01/11.jpg'},
  {n:'SS Lift Off Hinges',c:'Knobs',f:['Chrome','Satin'],img:base+'assets/imgs/products/02/01/12.jpg'},
  {n:'SS Round Corner Hinges',c:'Knobs',f:['Chrome'],img:base+'assets/imgs/products/02/01/13.jpg'},
  {n:'SS Square Corner Hinges',c:'Knobs',f:['Chrome','Nickel'],img:base+'assets/imgs/products/02/01/14.jpg'},
  {n:'SS H Hinges',c:'Knobs',f:['Chrome','Satin'],img:base+'assets/imgs/products/02/01/15.jpg'},
  {n:'D-Shape Handle',c:'Handles',f:['Antique','Chrome'],b:'best'},
  {n:'Bar Handle 128mm',c:'Handles',f:['Gold','Satin']},
  {n:'Bar Handle 192mm',c:'Handles',f:['Chrome','Nickel']},
  {n:'Pull Handle 300mm',c:'Handles',f:['Antique','Chrome'],b:'new'},
  {n:'Wardrobe Handle',c:'Handles',f:['Gold','Chrome']},
  {n:'Drawer Handle',c:'Handles',f:['Antique','Satin']},
  {n:'Cabinet Handle',c:'Handles',f:['Chrome','Nickel']},
  {n:'Flush Handle',c:'Handles',f:['Antique']},
  {n:'Mortise Handle',c:'Handles',f:['Gold','Chrome']},
  {n:'Mortise Lock',c:'Locks',f:['Chrome','Antique'],b:'best'},
  {n:'Cylindrical Lock',c:'Locks',f:['Gold','Satin']},
  {n:'Rim Lock',c:'Locks',f:['Chrome','Nickel']},
  {n:'Pad Lock',c:'Locks',f:['Antique','Chrome']},
  {n:'Hasp & Staple',c:'Locks',f:['Antique']},
  {n:'Sliding Door Lock',c:'Locks',f:['Chrome','Gold'],b:'new'},
  {n:'Drawer Lock',c:'Locks',f:['Antique','Satin']},
  {n:'Coat Hook Double',c:'Hooks',f:['Antique','Chrome'],b:'best'},
  {n:'Coat Hook Single',c:'Hooks',f:['Gold','Satin']},
  {n:'Bathroom Hook',c:'Hooks',f:['Chrome','Nickel']},
  {n:'Robe Hook Oval',c:'Hooks',f:['Antique','Chrome']},
  {n:'Cup Hook',c:'Hooks',f:['Gold','Antique']},
  {n:'S-Hook Large',c:'Hooks',f:['Chrome','Satin']},
  {n:'Ring Hook',c:'Hooks',f:['Antique']},
  {n:'Picture Hook',c:'Hooks',f:['Gold','Chrome'],b:'new'},
  {n:'Curtain Ring',c:'Hooks',f:['Antique','Nickel']},
  {n:'Rail Hook',c:'Hooks',f:['Chrome','Gold']},
];

/* ── PRODUCT RENDER ── */
let currentProds = [];
let currentCat   = 'All';
let currentQuery = '';
let showAll      = false;

function render(cat, query) {
  let list = cat === 'All' ? [...prods] : prods.filter(p => p.c === cat);
  if (query) {
    const q = query.toLowerCase();
    list = list.filter(p =>
      p.n.toLowerCase().includes(q) || p.c.toLowerCase().includes(q) ||
      p.f.some(f => f.toLowerCase().includes(q))
    );
  }
  currentProds = list;

  const noRes   = document.getElementById('no-results');
  const vaBtn   = document.getElementById('view-all-btn');
  const display = showAll ? list : list.slice(0, 24);

  document.getElementById('pcount').textContent =
    `Showing ${display.length} of ${list.length} product${list.length !== 1 ? 's' : ''}`;

  if (list.length === 0) {
    document.getElementById('pgrid').innerHTML = '';
    noRes.style.display = 'flex';
    vaBtn.style.display = 'none';
    return;
  }
  noRes.style.display = 'none';
  vaBtn.style.display = !showAll && list.length > 24 ? 'block' : 'none';

  document.getElementById('pgrid').innerHTML = display.map((p, i) => {
    const dots = p.f.map(f =>
      `<div class="dot" style="background:${fc[f] || '#555'}" title="${f}"></div>`
    ).join('');
    const badge = p.b ? `<div class="pc-badge ${p.b}">${bmap[p.b]}</div>` : '';
    const imgContent = p.img
      ? `<img src="${p.img}" alt="${p.n}" loading="lazy" class="pc-img-el" onerror="this.style.display='none'">`
      : `<div class="pc-icon-ph">${ic[p.c] || '⚙️'}</div>`;
    return `<div class="pc" data-idx="${i}" tabindex="0" role="button" aria-label="View details for ${p.n}">
      <div class="pc-img-wrap" data-cat="${p.c}">
        ${imgContent}
        ${badge}
        <div class="pc-overlay"><div class="pc-ov-btn"><i class="ti ti-mail"></i> Enquire</div></div>
      </div>
      <div class="pc-body">
        <div class="pc-name">${p.n}</div>
        <div class="pc-cat">${p.c}</div>
        <div class="pc-foot">
          <div class="dots">${dots}</div>
          <div class="enq">Enquire <i class="ti ti-arrow-right" style="font-size:10px" aria-hidden="true"></i></div>
        </div>
      </div>
    </div>`;
  }).join('');

  document.querySelectorAll('.pc-img-wrap[data-cat]').forEach(el => {
    el.style.background = bg[el.dataset.cat] || '#1a1a1a';
  });

  document.querySelectorAll('.pc').forEach((card, i) => {
    card.style.animationDelay = `${i * 35}ms`;
    card.classList.add('pc-enter');
  });
}

function filt(cat, btn) {
  currentCat = cat;
  showAll    = false;
  render(cat, currentQuery);
  if (btn) {
    document.querySelectorAll('.fb').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
  }
  if (cat !== 'All') {
    setTimeout(() => {
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }, 60);
  }
}

render('All', '');

/* ── VIEW ALL TOGGLE ── */
document.getElementById('view-all-btn').addEventListener('click', () => {
  showAll = true;
  render(currentCat, currentQuery);
});

/* ── PRODUCT GRID CLICK ── */
document.getElementById('pgrid').addEventListener('click', e => {
  const card = e.target.closest('.pc');
  if (card) openModal(currentProds[parseInt(card.dataset.idx)]);
});
document.getElementById('pgrid').addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    const card = e.target.closest('.pc');
    if (card) { e.preventDefault(); openModal(currentProds[parseInt(card.dataset.idx)]); }
  }
});

/* ── SEARCH ── */
document.getElementById('search-input').addEventListener('input', e => {
  currentQuery = e.target.value.trim();
  showAll = false;
  render(currentCat, currentQuery);
});

/* ── MODAL ── */
function openModal(p) {
  if (!p) return;
  const modal = document.getElementById('modal');
  document.getElementById('modal-cat').textContent  = p.c;
  document.getElementById('modal-name').textContent = p.n;

  const finEl = document.getElementById('modal-finishes');
  finEl.innerHTML = p.f.map(f =>
    `<span class="mfin" style="--fc:${fc[f] || '#aaa'}">${f}</span>`
  ).join('');

  const imgEl = document.getElementById('modal-img');
  if (p.img) {
    imgEl.innerHTML = `<img src="${p.img}" alt="${p.n}" onerror="this.parentElement.innerHTML='<div class=modal-icon-ph>${ic[p.c]||'⚙️'}</div>'">`;
  } else {
    imgEl.innerHTML = `<div class="modal-icon-ph">${ic[p.c] || '⚙️'}</div>`;
  }

  document.getElementById('modal-enq').onclick = () => {
    closeModal();
    const sel = document.getElementById('f-product');
    const map = { Bolts:'Tower Bolts', Hinges:'Hinges', Knobs:'SS Hinges', Handles:'Handles', Locks:'Locks', Hooks:'Hooks & Rings' };
    if (sel) sel.value = map[p.c] || '';
    const msg = document.getElementById('f-message');
    if (msg) { msg.value = `I am interested in: ${p.n}\n\nFinishes available: ${p.f.join(', ')}\n\nPlease share pricing and minimum order quantity.`; }
    setTimeout(() => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', e => {
  if (e.target === document.getElementById('modal')) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ── CONTACT FORM ── */
const form   = document.getElementById('enquiry-form');
const subBtn = document.getElementById('sub-btn');

function setLoading(on) {
  subBtn.disabled = on;
  subBtn.querySelector('.sub-text').style.display = on ? 'none' : 'inline';
  subBtn.querySelector('.sub-icon').style.display = on ? 'none' : 'inline';
  subBtn.querySelector('.sub-loading').style.display = on ? 'flex' : 'none';
}

function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast toast-show toast-${type}`;
  setTimeout(() => { t.className = 'toast'; }, 4500);
}

function fieldError(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}

form.addEventListener('submit', async e => {
  e.preventDefault();

  // Clear errors
  ['err-name','err-email','err-message'].forEach(id => fieldError(id, ''));

  const name    = document.getElementById('f-name').value.trim();
  const email   = document.getElementById('f-email').value.trim();
  const company = document.getElementById('f-company').value.trim();
  const phone   = document.getElementById('f-phone').value.trim();
  const product = document.getElementById('f-product').value;
  const message = document.getElementById('f-message').value.trim();

  let ok = true;
  if (!name)    { fieldError('err-name',    'Name is required'); ok = false; }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldError('err-email', 'A valid email address is required'); ok = false;
  }
  if (!message) { fieldError('err-message', 'Please describe your requirements'); ok = false; }
  if (!ok) { document.getElementById('f-name').focus(); return; }

  setLoading(true);
  try {
    /* FormSubmit.co free email relay — no backend needed.
       First submission sends a confirmation to info@abhaybrass.com; after that,
       all enquiries arrive instantly. Replace with the actual inbox if needed. */
    const res = await fetch('https://formsubmit.co/ajax/info@abhaybrass.com', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name, email,
        company:  company  || 'N/A',
        phone:    phone    || 'N/A',
        product:  product  || 'Not specified',
        message,
        _subject: `New Enquiry from ${name} — Abhay Brass`,
        _captcha: false,
        _template: 'table',
      }),
    });
    if (res.ok) {
      form.reset();
      showToast('Enquiry sent! We\'ll respond within 24 hours.');
    } else {
      showToast('Something went wrong. Please email info@abhaybrass.com directly.', 'error');
    }
  } catch {
    showToast('Connection error. Please email info@abhaybrass.com directly.', 'error');
  } finally {
    setLoading(false);
  }
});

/* ── SCROLL REVEAL ── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

const staggerObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.reveal-stagger').forEach((c, i) => {
        setTimeout(() => c.classList.add('visible'), i * 90);
      });
      staggerObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
['cat-grid','why-grid'].forEach(id => {
  const el = document.getElementById(id);
  if (el) staggerObs.observe(el);
});

/* ── STICKY NAV ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ── MOBILE MENU ── */
const navMenuBtn   = document.getElementById('nav-menu');
const mobileMenu   = document.getElementById('mobile-menu');
navMenuBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  navMenuBtn.setAttribute('aria-expanded', isOpen);
  navMenuBtn.querySelector('i').className = isOpen ? 'ti ti-x' : 'ti ti-menu-2';
});
document.querySelectorAll('.mm-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    navMenuBtn.setAttribute('aria-expanded', 'false');
    navMenuBtn.querySelector('i').className = 'ti ti-menu-2';
  });
});

/* ── SMOOTH SCROLL for nav links ── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

/* ── HERO PARTICLES ── */
const pts = document.getElementById('pts');
for (let i = 0; i < 20; i++) {
  const p = document.createElement('div');
  p.className = 'pt';
  p.style.cssText = `left:${Math.random()*100}%;bottom:${Math.random()*60}%;--d:${4+Math.random()*6}s;--dl:${Math.random()*6}s`;
  pts.appendChild(p);
}

/* ── HERO COUNTER ── */
function countUp(id, target, sfx, delay, dur) {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const t0 = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(e * target) + sfx;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, delay);
}
countUp('s1', 500, '+', 2600, 1200);
countUp('s2',  30, '+', 2700,  900);
countUp('s3',  29,  '', 2800,  900);
countUp('s4',2000, '+', 2900, 1200);

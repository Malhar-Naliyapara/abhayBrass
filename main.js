/* ── MOTION PREFERENCE ── */
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* ── HERO ANIMATIONS ── */
document.querySelectorAll(".h1r[data-delay]").forEach((el) => {
  el.style.setProperty("--d", el.dataset.delay);
});

/* ── PRODUCTS DATA ──
   Each product: { n: name, c: category, m: material, t?: type/group, s: slug }
   Image is resolved from c + s at render time:
     upload/<folder>/<slug>.jpg  →  upload/<folder>/_category.jpg  →  icon
   See upload/README.md for the filename each photo should use. */
const mc = {
  Brass: "#C9A84C",
  Aluminium: "#AEB4BA",
  Steel: "#8A99A6",
};
const bg = {
  Bolts: "#1C1A15",
  Hinges: "#151A1E",
};
const ic = { Bolts: "🔩", Hinges: "🪛" };
const catLabel = { Bolts: "Tower Bolt", Hinges: "Hinge" };
const catFolder = { Bolts: "tower-bolts", Hinges: "hinges" };
const bmap = { best: "Bestseller", new: "New", prem: "Premium" };

const prods = [
  /* ── TOWER BOLTS · Brass · One Piece ── */
  { n: '3/8" Round Tower Bolt (Light)', c: "Bolts", m: "Brass", t: "One Piece", s: "brass-round-tb-3-8-light" },
  { n: '3/8" Round Tower Bolt (Heavy)', c: "Bolts", m: "Brass", t: "One Piece", s: "brass-round-tb-3-8-heavy" },
  { n: '½" Round Tower Bolt', c: "Bolts", m: "Brass", t: "One Piece", s: "brass-round-tb-half" },
  { n: '½" Hex Tower Bolt', c: "Bolts", m: "Brass", t: "One Piece", s: "brass-hex-tb-half" },
  { n: '½" V-Hex Tower Bolt', c: "Bolts", m: "Brass", t: "One Piece", s: "brass-vhex-tb-half" },

  /* ── TOWER BOLTS · Brass · Two Piece ── */
  { n: "Matka Tower Bolt (SRD)", c: "Bolts", m: "Brass", t: "Two Piece", s: "brass-matka-tb-srd" },
  { n: "Full Brass Matka Tower Bolt", c: "Bolts", m: "Brass", t: "Two Piece", s: "brass-full-matka-tb" },
  { n: "Marble Tower Bolt (Regular)", c: "Bolts", m: "Brass", t: "Two Piece", s: "brass-marble-tb-regular" },
  { n: "Marble Tower Bolt (Heavy)", c: "Bolts", m: "Brass", t: "Two Piece", s: "brass-marble-tb-heavy" },
  { n: "10mm Xylo Tower Bolt", c: "Bolts", m: "Brass", t: "Two Piece", s: "brass-xylo-tb-10mm" },
  { n: "12mm Xylo Tower Bolt", c: "Bolts", m: "Brass", t: "Two Piece", s: "brass-xylo-tb-12mm" },
  { n: "10mm Hex Tower Bolt", c: "Bolts", m: "Brass", t: "Two Piece", s: "brass-hex-tb-10mm" },
  { n: "10mm V-Hex Tower Bolt", c: "Bolts", m: "Brass", t: "Two Piece", s: "brass-vhex-tb-10mm" },
  { n: "12mm Hex Tower Bolt", c: "Bolts", m: "Brass", t: "Two Piece", s: "brass-hex-tb-12mm" },
  { n: "12mm V-Hex Tower Bolt", c: "Bolts", m: "Brass", t: "Two Piece", s: "brass-vhex-tb-12mm" },

  /* ── TOWER BOLTS · Aluminium ── */
  { n: "16mm Round Tower Bolt", c: "Bolts", m: "Aluminium", s: "alu-round-tb-16mm" },
  { n: "12mm Round Tower Bolt", c: "Bolts", m: "Aluminium", s: "alu-round-tb-12mm" },
  { n: "12mm V-Hex Tower Bolt", c: "Bolts", m: "Aluminium", s: "alu-vhex-tb-12mm" },
  { n: "12mm Apple Tower Bolt", c: "Bolts", m: "Aluminium", s: "alu-apple-tb-12mm" },
  { n: "12mm Double Line Veli Tower Bolt", c: "Bolts", m: "Aluminium", s: "alu-double-line-veli-tb-12mm" },
  { n: "10mm Round Tower Bolt", c: "Bolts", m: "Aluminium", s: "alu-round-tb-10mm" },
  { n: "Xylo Tower Bolt", c: "Bolts", m: "Aluminium", s: "alu-xylo-tb" },
  { n: "Pyramid Tower Bolt", c: "Bolts", m: "Aluminium", s: "alu-pyramid-tb" },
  { n: "Super Marble / Duck Marble", c: "Bolts", m: "Aluminium", s: "alu-super-marble-duck-marble" },
  { n: "Pollo Marble", c: "Bolts", m: "Aluminium", s: "alu-pollo-marble" },
  { n: "Royal Tower Bolt", c: "Bolts", m: "Aluminium", s: "alu-royal-tb" },
  { n: "Flower Tower Bolt", c: "Bolts", m: "Aluminium", s: "alu-flower-tb" },
  { n: "Sylo Tower Bolt", c: "Bolts", m: "Aluminium", s: "alu-sylo-tb" },
  { n: "12mm Knob Tower Bolt", c: "Bolts", m: "Aluminium", s: "alu-knob-tb-12mm" },
  { n: "Half Round Tower Bolt", c: "Bolts", m: "Aluminium", s: "alu-half-round-tb" },
  { n: "Owel Tower Bolt", c: "Bolts", m: "Aluminium", s: "alu-owel-tb" },
  { n: "Square Tower Bolt", c: "Bolts", m: "Aluminium", s: "alu-square-tb" },
  { n: "Jumbo Baby Latch", c: "Bolts", m: "Aluminium", t: "Baby Latch", s: "alu-jumbo-baby-latch" },
  { n: "12mm Round Baby Latch", c: "Bolts", m: "Aluminium", t: "Baby Latch", s: "alu-round-baby-latch-12mm" },
  { n: "12mm Square Baby Latch", c: "Bolts", m: "Aluminium", t: "Baby Latch", s: "alu-square-baby-latch-12mm" },
  { n: "Xylo Baby Latch", c: "Bolts", m: "Aluminium", t: "Baby Latch", s: "alu-xylo-baby-latch" },
  { n: "12mm Round Tower Bolt (One Pcs)", c: "Bolts", m: "Aluminium", t: "One Piece", s: "alu-round-tb-12mm-one-pcs" },
  { n: "12mm Veli Tower Bolt (One Pcs)", c: "Bolts", m: "Aluminium", t: "One Piece", s: "alu-veli-tb-12mm-one-pcs" },
  { n: "12mm V-Hex Tower Bolt (One Pcs)", c: "Bolts", m: "Aluminium", t: "One Piece", s: "alu-vhex-tb-12mm-one-pcs" },

  /* ── HINGES · Steel ── */
  { n: "L Hinges", c: "Hinges", m: "Steel", s: "steel-l-hinges" },
  { n: "Butt Hinges", c: "Hinges", m: "Steel", s: "steel-butt-hinges" },
  { n: "Butterfly Hinges", c: "Hinges", m: "Steel", s: "steel-butterfly-hinges" },
  { n: "Parliament Hinges", c: "Hinges", m: "Steel", s: "steel-parliament-hinges" },

  /* ── HINGES · Brass ── */
  { n: "Railway Hinges", c: "Hinges", m: "Brass", s: "brass-railway-hinges" },
  { n: "Butt Hinges", c: "Hinges", m: "Brass", s: "brass-butt-hinges" },
  { n: "L Hinges", c: "Hinges", m: "Brass", s: "brass-l-hinges" },
  { n: "W Hinges", c: "Hinges", m: "Brass", s: "brass-w-hinges" },
  { n: "Parliament Hinges", c: "Hinges", m: "Brass", s: "brass-parliament-hinges" },
  { n: "Duck Hinges", c: "Hinges", m: "Brass", s: "brass-duck-hinges" },
  { n: "Bearing Hinges", c: "Hinges", m: "Brass", s: "brass-bearing-hinges" },
];

/* ── PRODUCT RENDER ──
   The catalog (grid, filters, search, modal) lives only on products.html.
   Every block below is guarded so this same script can load on every page. */
let currentProds = [];
let currentCat = "All";
let currentMat = null;
let currentQuery = "";
let showAll = false;
const hasGrid = () => !!document.getElementById("pgrid");

/* Resolve product image, falling back to a per-category photo, then an icon. */
function imgFallback(el) {
  if (!el.dataset.tried && el.dataset.fb) {
    el.dataset.tried = "1";
    el.src = el.dataset.fb;
  } else {
    const ph = document.createElement("div");
    ph.className = el.dataset.ph || "pc-icon-ph";
    ph.textContent = el.dataset.ic || "⚙️";
    el.replaceWith(ph);
  }
}

function render() {
  let list = prods.filter(
    (p) => (currentCat === "All" || p.c === currentCat) && (!currentMat || p.m === currentMat),
  );
  if (currentQuery) {
    const q = currentQuery.toLowerCase();
    list = list.filter(
      (p) =>
        p.n.toLowerCase().includes(q) ||
        catLabel[p.c].toLowerCase().includes(q) ||
        p.m.toLowerCase().includes(q) ||
        (p.t && p.t.toLowerCase().includes(q)),
    );
  }
  currentProds = list;

  const noRes = document.getElementById("no-results");
  const vaBtn = document.getElementById("view-all-btn");
  const display = showAll ? list : list.slice(0, 24);

  document.getElementById("pcount").textContent =
    `Showing ${display.length} of ${list.length} product${list.length !== 1 ? "s" : ""}`;

  if (list.length === 0) {
    document.getElementById("pgrid").innerHTML = "";
    noRes.style.display = "flex";
    vaBtn.style.display = "none";
    return;
  }
  noRes.style.display = "none";
  vaBtn.style.display = !showAll && list.length > 24 ? "block" : "none";

  document.getElementById("pgrid").innerHTML = display
    .map((p, i) => {
      const folder = catFolder[p.c];
      const pimg = `upload/${folder}/${p.s}.jpg`;
      const cimg = `upload/${folder}/_category.jpg`;
      const icon = ic[p.c] || "⚙️";
      const badge = p.b ? `<div class="pc-badge ${p.b}">${bmap[p.b]}</div>` : "";
      const imgContent = `<img src="${pimg}" data-fb="${cimg}" data-ic="${icon}" alt="${p.n}" loading="lazy" class="pc-img-el" onerror="imgFallback(this)">`;
      const mat = `<span class="pc-mat" style="--mc:${mc[p.m] || "#888"}">${p.m}</span>`;
      const sub = catLabel[p.c] + (p.t ? ` · ${p.t}` : "");
      return `<div class="pc" data-idx="${i}" tabindex="0" role="button" aria-label="View details for ${p.n}">
      <div class="pc-img-wrap" data-cat="${p.c}">
        ${imgContent}
        ${badge}
        <div class="pc-overlay"><div class="pc-ov-btn"><i class="ti ti-mail"></i> Enquire</div></div>
      </div>
      <div class="pc-body">
        <div class="pc-name">${p.n}</div>
        <div class="pc-cat">${sub}</div>
        <div class="pc-foot">
          <div class="pc-mat-wrap">${mat}</div>
          <div class="enq">Enquire <i class="ti ti-arrow-right" style="font-size:10px" aria-hidden="true"></i></div>
        </div>
      </div>
    </div>`;
    })
    .join("");

  document.querySelectorAll(".pc-img-wrap[data-cat]").forEach((el) => {
    el.style.background = bg[el.dataset.cat] || "#1a1a1a";
  });

  document.querySelectorAll(".pc").forEach((card, i) => {
    card.style.animationDelay = `${i * 35}ms`;
    card.classList.add("pc-enter");
  });
}

/* Apply a category/material filter. Called from category cards, hero tiles,
   footer links and filter chips across the whole site.
   When there is no grid on the current page (home, about, …) it forwards to
   products.html with the selection encoded in the URL. */
function filt(cat, mat, btn) {
  if (!hasGrid()) {
    const params = new URLSearchParams();
    if (cat && cat !== "All") params.set("cat", cat);
    if (mat) params.set("mat", mat);
    const q = params.toString();
    window.location.href = "products.html" + (q ? `?${q}` : "");
    return;
  }
  currentCat = cat;
  currentMat = mat || null;
  showAll = false;
  render();
  syncChips(cat, mat, btn);
  if (cat !== "All" || mat) {
    setTimeout(() => {
      document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    }, 60);
  }
}

/* Highlight the active filter chip. */
function syncChips(cat, mat, btn) {
  document.querySelectorAll(".fb").forEach((b) => b.classList.remove("on"));
  if (btn) {
    btn.classList.add("on");
    return;
  }
  document.querySelectorAll(".fb").forEach((b) => {
    if (b.dataset.cat === cat && (b.dataset.mat || "") === (mat || "")) b.classList.add("on");
  });
  if (!document.querySelector(".fb.on")) {
    const allBtn = document.querySelector('.fb[data-cat="All"]');
    if (allBtn) allBtn.classList.add("on");
  }
}

/* ── CATALOG PAGE INIT (products.html only) ── */
if (hasGrid()) {
  // Seed filter from ?cat=&mat= so category links deep-link into the catalog.
  const params = new URLSearchParams(window.location.search);
  const urlCat = params.get("cat");
  const urlMat = params.get("mat");
  if (urlCat || urlMat) {
    currentCat = urlCat || "All";
    currentMat = urlMat || null;
  }
  render();
  syncChips(currentCat, currentMat, null);

  document.getElementById("view-all-btn").addEventListener("click", () => {
    showAll = true;
    render();
  });

  const grid = document.getElementById("pgrid");
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".pc");
    if (card) openModal(currentProds[parseInt(card.dataset.idx)], card.querySelector(".pc-img-wrap"));
  });
  grid.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".pc");
      if (card) {
        e.preventDefault();
        openModal(currentProds[parseInt(card.dataset.idx)], card.querySelector(".pc-img-wrap"));
      }
    }
  });

  document.getElementById("search-input").addEventListener("input", (e) => {
    currentQuery = e.target.value.trim();
    showAll = false;
    render();
  });
}

/* ── MODAL ── */
function openModal(p, originEl) {
  if (!p) return;
  const modal = document.getElementById("modal");
  document.getElementById("modal-cat").textContent = `${p.m} ${catLabel[p.c]}`;
  document.getElementById("modal-name").textContent = p.n;

  const finEl = document.getElementById("modal-finishes");
  const matChip = `<span class="mfin" style="--fc:${mc[p.m] || "#aaa"}">${p.m}</span>`;
  const typeChip = p.t ? `<span class="mfin mfin-plain">${p.t}</span>` : "";
  finEl.innerHTML = matChip + typeChip;

  const folder = catFolder[p.c];
  const imgEl = document.getElementById("modal-img");
  imgEl.innerHTML = `<img src="upload/${folder}/${p.s}.jpg" data-fb="upload/${folder}/_category.jpg" data-ic="${ic[p.c] || "⚙️"}" data-ph="modal-icon-ph" alt="${p.n}" onerror="imgFallback(this)">`;

  document.getElementById("modal-enq").onclick = () => {
    const map = { Bolts: "Tower Bolts", Hinges: "Hinges" };
    const item = `${p.n} (${p.m}${p.t ? ", " + p.t : ""})`;
    // The enquiry form lives on contact.html — carry the selection over in the URL.
    const params = new URLSearchParams();
    params.set("product", map[p.c] || "");
    params.set("item", item);
    window.location.href = "contact.html?" + params.toString();
  };

  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  // Shared-element expand: grow the dialog out of the card that was clicked
  // (FLIP — animate transform only, so it stays on the compositor).
  if (originEl && !prefersReduced) {
    const box = modal.querySelector(".modal-box");
    const first = originEl.getBoundingClientRect();
    box.style.transition = "none";
    box.style.transform = "";
    const last = box.getBoundingClientRect();
    const dx = first.left + first.width / 2 - (last.left + last.width / 2);
    const dy = first.top + first.height / 2 - (last.top + last.height / 2);
    const sx = Math.max(first.width / last.width, 0.2);
    const sy = Math.max(first.height / last.height, 0.2);
    box.style.transformOrigin = "center center";
    box.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
    box.style.opacity = "0.5";
    requestAnimationFrame(() => {
      box.style.transition = "transform 0.42s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease";
      box.style.transform = "";
      box.style.opacity = "";
    });
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

if (document.getElementById("modal")) {
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modal")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

/* ── CONTACT FORM (contact.html only) ── */
const form = document.getElementById("enquiry-form");
const subBtn = document.getElementById("sub-btn");

function setLoading(on) {
  subBtn.disabled = on;
  subBtn.querySelector(".sub-text").style.display = on ? "none" : "inline";
  subBtn.querySelector(".sub-icon").style.display = on ? "none" : "inline";
  subBtn.querySelector(".sub-loading").style.display = on ? "flex" : "none";
}

function showToast(msg, type = "success") {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className = `toast toast-show toast-${type}`;
  setTimeout(() => {
    t.className = "toast";
  }, 4500);
}

function fieldError(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}

if (form) {
  // Prefill from a product enquiry link: contact.html?product=…&item=…
  const params = new URLSearchParams(window.location.search);
  const product = params.get("product");
  const item = params.get("item");
  if (product) {
    const sel = document.getElementById("f-product");
    if (sel) sel.value = product;
  }
  if (item) {
    const msg = document.getElementById("f-message");
    if (msg) {
      msg.value = `I am interested in: ${item}\n\nPlease share pricing and minimum order quantity.`;
    }
  }
}

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Clear errors
  ["err-name", "err-email", "err-message"].forEach((id) => fieldError(id, ""));

  const name = document.getElementById("f-name").value.trim();
  const email = document.getElementById("f-email").value.trim();
  const company = document.getElementById("f-company").value.trim();
  const phone = document.getElementById("f-phone").value.trim();
  const product = document.getElementById("f-product").value;
  const message = document.getElementById("f-message").value.trim();

  let ok = true;
  if (!name) {
    fieldError("err-name", "Name is required");
    ok = false;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldError("err-email", "A valid email address is required");
    ok = false;
  }
  if (!message) {
    fieldError("err-message", "Please describe your requirements");
    ok = false;
  }
  if (!ok) {
    document.getElementById("f-name").focus();
    return;
  }

  setLoading(true);
  try {
    /* FormSubmit.co free email relay — no backend needed.
       First submission sends a confirmation to info@abhaybrass.com; after that,
       all enquiries arrive instantly. Replace with the actual inbox if needed. */
    const res = await fetch("https://formsubmit.co/ajax/info@abhaybrass.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        email,
        company: company || "N/A",
        phone: phone || "N/A",
        product: product || "Not specified",
        message,
        _subject: `New Enquiry from ${name} — Abhay Brass`,
        _captcha: false,
        _template: "table",
      }),
    });
    if (res.ok) {
      form.reset();
      showToast("Enquiry sent! We'll respond within 24 hours.");
    } else {
      showToast("Something went wrong. Please email info@abhaybrass.com directly.", "error");
    }
  } catch {
    showToast("Connection error. Please email info@abhaybrass.com directly.", "error");
  } finally {
    setLoading(false);
  }
});

/* ── SCROLL REVEAL ── */
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 },
);
document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

const staggerObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.querySelectorAll(".reveal-stagger").forEach((c, i) => {
          setTimeout(() => c.classList.add("visible"), i * 45);
        });
        staggerObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);
// Observe every container that holds staggered items, on any page.
const staggerContainers = new Set();
document.querySelectorAll(".reveal-stagger").forEach((el) => {
  if (el.parentElement) staggerContainers.add(el.parentElement);
});
staggerContainers.forEach((el) => staggerObs.observe(el));

/* ── CLIP-PATH HEADING REVEAL ──
   Section/page titles wipe up instead of the generic fade, for a more editorial
   feel. No HTML changes needed — we opt every title in from JS. */
const clipObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        clipObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.2 },
);
document.querySelectorAll(".sec-title, .ph-title").forEach((el) => {
  el.classList.add("clip-reveal");
  clipObs.observe(el);
});

/* ── STICKY NAV ── */
const nav = document.getElementById("nav");
if (nav) {
  window.addEventListener(
    "scroll",
    () => {
      nav.classList.toggle("scrolled", window.scrollY > 50);
    },
    { passive: true },
  );
}

/* ── MOBILE MENU ── */
const navMenuBtn = document.getElementById("nav-menu");
const mobileMenu = document.getElementById("mobile-menu");
if (navMenuBtn && mobileMenu) {
  navMenuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    navMenuBtn.setAttribute("aria-expanded", isOpen);
    navMenuBtn.querySelector("i").className = isOpen ? "ti ti-x" : "ti ti-menu-2";
  });
  document.querySelectorAll(".mm-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      navMenuBtn.setAttribute("aria-expanded", "false");
      navMenuBtn.querySelector("i").className = "ti ti-menu-2";
    });
  });
}

/* ── SMOOTH SCROLL for nav links ── */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href === "#" || href.length < 2) return; // bare "#" placeholder links
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ── HERO PARTICLES (home only) ── */
const pts = document.getElementById("pts");
if (pts) {
  for (let i = 0; i < 20; i++) {
    const p = document.createElement("div");
    p.className = "pt";
    p.style.cssText = `left:${Math.random() * 100}%;bottom:${Math.random() * 60}%;--d:${4 + Math.random() * 6}s;--dl:${Math.random() * 6}s`;
    pts.appendChild(p);
  }
}

/* ── SCROLL PROGRESS BAR (all pages) ──
   Brass hairline that fills as you scroll. scaleX only → compositor-friendly. */
const progressBar = document.createElement("div");
progressBar.className = "scroll-progress";
progressBar.setAttribute("aria-hidden", "true");
document.body.appendChild(progressBar);
const updateProgress = () => {
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  progressBar.style.transform = `scaleX(${max > 0 ? doc.scrollTop / max : 0})`;
};
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress, { passive: true });
updateProgress();

/* ── MAGNETIC CTAs ──
   High-value buttons drift a few px toward the cursor and spring back on leave.
   Pointer-only + reduced-motion gated; keyboard/touch users get the static button. */
if (canHover && !prefersReduced) {
  document.querySelectorAll(".cta-p, .nav-quote").forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
    });
    btn.addEventListener("pointerleave", () => {
      btn.style.transform = "";
    });
  });
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
countUp("s1", 500, "+", 2600, 1200);
countUp("s2", 30, "+", 2700, 900);
countUp("s3", 29, "", 2800, 900);
countUp("s4", 2000, "+", 2900, 1200);

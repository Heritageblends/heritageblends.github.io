const PRODUCTS = [
  { id: "turmeric", name: "Turmeric Powder", type: "Spices", price: 130, size: "100g", asin: "B0GVM631VG", img: "assets/turmeric.jpg", c1: "#c9860a", c2: "#f0b32e", heat: 1,
    tags: ["earthy", "golden"], desc: "Pure Kerala haldi — high-curcumin turmeric ground fine. 100% natural, no colour or additives. Earthy, faintly bitter, deeply staining.",
    origin: "Organic · Kerala", use: "Every curry base, golden milk, marinades", ml: "മഞ്ഞൾ പൊടി" },
  { id: "chilli", name: "Kashmiri Chilli Powder", type: "Spices", price: 222, size: "200g", asin: "B0GWY1QY93", img: "assets/chilli.jpg", c1: "#a02c17", c2: "#d6472a", heat: 2,
    tags: ["deep red", "mild heat"], desc: "Kashmiri chillies ground for a rich, natural red and a gentle warmth rather than fierce heat. No added colour.",
    origin: "Organic · Kerala", use: "Curries, tandoori marinades, pickles", ml: "കാശ്മീരി മുളക് പൊടി" },
  { id: "garam", name: "Garam Masala", type: "Spices", price: 199, size: "100g", asin: "B0GWY7PBB4", img: "assets/garam.jpg", c1: "#6a3a1c", c2: "#a8602e", heat: 2,
    tags: ["warm", "complex"], desc: "A strong blend of premium spices — roasted and ground for a rich aroma and bold flavour. 100% pure and natural, no fillers.",
    origin: "Blended in Kizhakkambalam", use: "Finish curries, biryani, roast vegetables", ml: "ഗരം മസാല" },
  { id: "chutney", name: "Chutney Powder", type: "Spices", price: 140, size: "100g", asin: "B0GXWWXZTY", img: "assets/chutney.jpg", c1: "#8a4a1c", c2: "#c0803a", heat: 2,
    tags: ["nutty", "spicy"], desc: "Homemade-style gun powder podi of roasted lentils, chilli and curry leaf. Mix with hot rice and ghee, or dust over idli and dosa.",
    origin: "Blended in Kizhakkambalam", use: "Rice & ghee, idli, dosa", ml: "ചമ്മന്തിപ്പൊടി" },
  { id: "pepper", name: "Whole Black Pepper", type: "Spices", price: 190, size: "100g", asin: "B0GVML7XCH", img: "assets/pepper.jpg", c1: "#3a2a1e", c2: "#6b4a30", heat: 3,
    tags: ["bold aroma", "strong"], desc: "Premium Kerala whole black pepper (kali mirch) — bold aroma and strong flavour. 100% natural, nothing added.",
    origin: "Organic · Kerala", use: "Rasam, eggs, everything — grind fresh", ml: "കുരുമുളക്" },
  { id: "nutmeg", name: "Nutmeg & Mace (Javitri)", type: "Spices", price: 150, size: "25g", asin: "B0H276NGF9", img: "assets/nutmeg.jpg", c1: "#7a4626", c2: "#a9703f", heat: 1,
    tags: ["aromatic", "warm"], desc: "Sun-dried Kerala nutmeg mace (javitri). Warmth without heat — perfect for biryani, desserts and masala blends.",
    origin: "Sun-dried · Kerala", use: "Biryani, desserts, masala", ml: "ജാതിപത്രി" },

  { id: "littlemillet", name: "Little Millet", type: "Millets", price: 160, size: "500g", asin: "B0H18PMV7V", img: "assets/littlemillet.jpg", c1: "#b89b5e", c2: "#d8c48a", heat: 0,
    tags: ["high fibre", "light"], desc: "Chama rice — natural, unpolished little millet, rich in fibre. Cooks up like rice; light and easy for daily meals.",
    origin: "Natural & unpolished", use: "Rice swap, pongal, upma", ml: "ചാമ" },
  { id: "foxtail", name: "Foxtail Millet", type: "Millets", price: 137, size: "500g", asin: "B0H1JVLFBB", img: "assets/foxtail.jpg", c1: "#c2a35a", c2: "#e0c887", heat: 0,
    tags: ["protein", "nutty"], desc: "Thinai — natural, nutritious foxtail millet with a soft, nutty bite. No preservatives. A wholesome stand-in for rice.",
    origin: "Natural · no preservatives", use: "Upma, pongal, rice swap", ml: "തിന" },
  { id: "flaxseed", name: "Flaxseed", type: "Millets", price: 160, size: "500g", asin: "B0H19891KR", img: "assets/flaxseed.jpg", c1: "#7a5a2a", c2: "#a8823f", heat: 0,
    tags: ["omega-3", "fibre"], desc: "Natural, unpolished flax seeds from Wayanad, rich in omega-3 and fibre. Stir into podi, smoothies or dough.",
    origin: "Wayanad, Kerala", use: "Podi, smoothies, dough", ml: "ചെറുചണവിത്ത്" },
  { id: "jowarpowder", name: "Jowar Powder", type: "Millets", price: 200, size: "1kg", asin: "B0H1JM7VLS", img: "assets/jowarpowder.jpg", c1: "#cbb98a", c2: "#e6d8b0", heat: 0,
    tags: ["gluten-free", "soft"], desc: "Authentic sorghum flour from Wayanad for soft rotis and wholesome bakes. Gluten-free, no preservatives.",
    origin: "Wayanad, Kerala", use: "Rotis, bakes, porridge", ml: "ജോവർ പൊടി" },
  { id: "jowarrava", name: "Jowar Rava", type: "Millets", price: 143, size: "500g", asin: "B0H196RH88", img: "assets/jowarrava.jpg", c1: "#d0be92", c2: "#e8dcb8", heat: 0,
    tags: ["gluten-free", "quick"], desc: "Natural sorghum semolina from Wayanad — gluten-free and fibre-rich. A quick, wholesome upma or porridge.",
    origin: "Wayanad, Kerala", use: "Upma, porridge, idli", ml: "ജോവർ റവ" },
  { id: "ragi", name: "Finger Millet (Ragi)", type: "Millets", price: 130, size: "500g", asin: "B0H5B7614M", img: "assets/ragi.jpg", c1: "#6e4b2c", c2: "#9c7043", heat: 0,
    tags: ["calcium", "gluten-free"], desc: "Whole-grain finger millet — a nutritious ancient millet rich in dietary fibre and gluten-free. For puttu, dosa and porridge.",
    origin: "Whole grain · Kerala", use: "Puttu, dosa, porridge", ml: "രാഗി / കൂവരക്" },

  { id: "blackrice", name: "Black Rice", type: "Rice & Grains", price: 190, size: "500g", asin: "B0H191W6Y8", img: "assets/blackrice.jpg", c1: "#2b2233", c2: "#4a3d55", heat: 0,
    tags: ["antioxidant", "nutty"], desc: "Natural, unpolished forbidden rice from Wayanad, rich in antioxidants. Turns deep purple as it cooks — for payasam and healthy bowls.",
    origin: "Wayanad, Kerala", use: "Payasam, bowls, pilaf", ml: "കറുത്ത അരി" },
  { id: "cornrava", name: "Corn Maize Rava", type: "Rice & Grains", price: 135, size: "500g", asin: "B0H3FNZJH1", img: "assets/cornrava.jpg", c1: "#cbb06a", c2: "#e6d296", heat: 0,
    tags: ["gluten-free", "versatile"], desc: "Broken corn / makka rava — golden and gluten-free for upma, porridge and rustic breads. Simple and wholesome.",
    origin: "Gluten-free", use: "Upma, porridge, breads", ml: "ചോളം റവ" },
  { id: "barley", name: "Barley (Yavam)", type: "Rice & Grains", price: 136, size: "500g", asin: "B0H4BNPWS4", img: "assets/barley.jpg", c1: "#b6a06a", c2: "#d6c495", heat: 0,
    tags: ["high fibre", "cooling"], desc: "Premium whole-grain barley (yavam), natural and unpolished. High-fibre and gentle — for soups, porridge and cooling barley water.",
    origin: "Whole grain · natural", use: "Soups, porridge, barley water", ml: "യവം" },
];

const SEED_REVIEWS = {
  turmeric: [
    { name: "Nisha T.", rating: 5, text: "Stains everything gold, which is how you know it's the real thing. No fake colour.", date: "May 2026" },
    { name: "Ravi M.", rating: 5, text: "You can smell it the moment the pack opens. Nothing like supermarket turmeric.", date: "Mar 2026" },
  ],
  chilli: [
    { name: "Anjali P.", rating: 5, text: "Gorgeous deep red and gentle warmth — perfect for tandoori without blowing your head off.", date: "Jun 2026" },
    { name: "Tom B.", rating: 4, text: "Lovely colour and clean flavour. Clearly just chilli, no additives.", date: "May 2026" },
  ],
  garam: [
    { name: "Devika P.", rating: 5, text: "Balanced, not clove-heavy like most blends. Added at the end — big difference.", date: "Jun 2026" },
    { name: "Sam H.", rating: 4, text: "Smells incredible. Biryani was the best I've made at home.", date: "May 2026" },
  ],
  chutney: [
    { name: "Lakshmi R.", rating: 5, text: "Just like the podi my grandmother made. Rice, ghee and this — heaven.", date: "Jun 2026" },
    { name: "Arun S.", rating: 4, text: "Great over dosa. Nutty and just spicy enough.", date: "Apr 2026" },
  ],
  pepper: [
    { name: "Anand K.", rating: 5, text: "Fruity and hot at once. In rasam it's a different food.", date: "Jun 2026" },
    { name: "Lucia F.", rating: 5, text: "Real Kerala pepper — you can taste it. Nothing else in the pack.", date: "May 2026" },
  ],
  nutmeg: [
    { name: "Elena V.", rating: 5, text: "Grating fresh nutmeg into béchamel — no going back to pre-ground.", date: "Jun 2026" },
    { name: "Kiran J.", rating: 4, text: "The mace is a lovely bonus. Aromatic without any heat.", date: "Feb 2026" },
  ],
  littlemillet: [
    { name: "Sneha M.", rating: 5, text: "Cooks just like rice and sits so light. My go-to now for dinner.", date: "Jun 2026" },
  ],
  foxtail: [
    { name: "Rahul V.", rating: 5, text: "Great rice swap for the family. Nutty and filling, kids didn't complain.", date: "May 2026" },
    { name: "Divya P.", rating: 4, text: "Lovely in pongal. Clean grain, no grit.", date: "Apr 2026" },
  ],
  flaxseed: [
    { name: "Maya K.", rating: 5, text: "Nicely roasted, not raw-tasting. A spoon in my smoothie every morning.", date: "Jun 2026" },
  ],
  jowarpowder: [
    { name: "Geetha N.", rating: 5, text: "Softest jowar rotis I've made. Fresh and finely ground.", date: "May 2026" },
    { name: "Imran S.", rating: 4, text: "Good gluten-free flour for everyday. Mixes well.", date: "Mar 2026" },
  ],
  jowarrava: [
    { name: "Beena T.", rating: 5, text: "Quick upma on busy mornings and it keeps me full till lunch.", date: "Jun 2026" },
  ],
  ragi: [
    { name: "Suresh B.", rating: 5, text: "Earthy and fresh. Ragi puttu came out beautifully.", date: "May 2026" },
    { name: "Ann M.", rating: 5, text: "Using it for my baby's porridge — clean and finely milled.", date: "Apr 2026" },
  ],
  blackrice: [
    { name: "Priya S.", rating: 5, text: "Turns the loveliest purple. Made payasam and everyone asked for the recipe.", date: "Jun 2026" },
    { name: "Nikhil D.", rating: 4, text: "Chewy and nutty. A bit longer to cook but worth it.", date: "Apr 2026" },
  ],
  cornrava: [
    { name: "Fatima Z.", rating: 4, text: "Wholesome upma and a nice change from the usual. Good value.", date: "May 2026" },
  ],
  barley: [
    { name: "George K.", rating: 5, text: "Make barley water through summer with this. Clean and fresh.", date: "Jun 2026" },
  ],
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const rupee = n => "₹" + n.toLocaleString("en-IN");
const productById = id => PRODUCTS.find(p => p.id === id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const WHATSAPP = "917306889276"; // Spice Shala WhatsApp: +91 73068 89276
const WA_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.7.8-2.7-.2-.3A8 8 0 1 1 12 20z"/></svg>';
const waLink = t => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`;
function waCartText() {
  const items = Object.entries(state.cart);
  if (!items.length) return "Hi Spice Shala, I'd like to place an order.";
  const lines = items.map(([id, q]) => { const p = productById(id); return `• ${q} × ${p.name} (${p.size}) — ${rupee(p.price * q)}`; });
  return `Hi Spice Shala, I'd like to order:\n${lines.join("\n")}\n\nTotal: ${rupee(cartTotal())}`;
}
const heatDots = n => `<span class="heat__dots">${[1,2,3].map(i => `<span class="heat__dot ${i <= n ? "on" : ""}"></span>`).join("")}</span>`;

const state = {
  cart: loadJSON("msc_cart", {}),
  reviews: loadJSON("msc_reviews", {}),
  filter: "All",
  query: "",
};
function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
}
function saveCart() { localStorage.setItem("msc_cart", JSON.stringify(state.cart)); }
function saveReviews() { localStorage.setItem("msc_reviews", JSON.stringify(state.reviews)); }

/* ---- reviews ---- */
function reviewsFor(id) { return [...(state.reviews[id] || []), ...(SEED_REVIEWS[id] || [])]; }
function avgRating(id) {
  const r = reviewsFor(id);
  return r.length ? r.reduce((a, x) => a + x.rating, 0) / r.length : 0;
}
function reviewCount(id) { return reviewsFor(id).length; }
function stars(rating) {
  const full = Math.round(rating);
  return `<span class="stars" aria-label="${rating.toFixed(1)} out of 5">${"★".repeat(full)}${"☆".repeat(5 - full)}</span>`;
}
function addReview(id, review) {
  (state.reviews[id] ||= []).unshift(review);
  saveReviews();
}

/* ---- product card (shared by grid + related) ---- */
function cardHTML(p) {
  const n = reviewCount(p.id);
  return `<article class="card" data-id="${p.id}">
    <a class="card__art" href="product.html?id=${p.id}" aria-label="View ${p.name}">
      <img class="card__img" src="${p.img}" alt="${p.name}" loading="lazy">
    </a>
    <div class="card__body">
      <span class="card__type">${p.type}</span>
      <a class="card__name" href="product.html?id=${p.id}">${p.name}</a>
      <span class="card__ml" lang="ml">${p.ml}</span>
      <div class="card__rating">${stars(avgRating(p.id))} <span>${avgRating(p.id).toFixed(1)}</span>
        <button class="card__quick" data-quick="${p.id}">quick view</button></div>
      <div class="card__tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      ${p.heat ? `<div class="heat">Heat ${heatDots(p.heat)}</div>` : ""}
      <div class="card__foot">
        <span class="card__price">${rupee(p.price)} <small>/ ${p.size}</small></span>
        <button class="card__add" data-add="${p.id}" aria-label="Add ${p.name} to cart">+</button>
      </div>
    </div>
  </article>`;
}

/* ---- cart ---- */
function addToCart(id, n = 1) {
  state.cart[id] = (state.cart[id] || 0) + n;
  saveCart(); renderCart(); bump(); toast(`${productById(id).name} added`);
}
function setQty(id, delta) {
  state.cart[id] = (state.cart[id] || 0) + delta;
  if (state.cart[id] <= 0) delete state.cart[id];
  saveCart(); renderCart();
}
function removeItem(id) { delete state.cart[id]; saveCart(); renderCart(); }
const cartCount = () => Object.values(state.cart).reduce((a, b) => a + b, 0);
const cartTotal = () => Object.entries(state.cart).reduce((a, [id, q]) => a + productById(id).price * q, 0);

function renderCart() {
  const count = cartCount();
  const badge = $("#cartCount");
  if (!badge) return;
  badge.textContent = count;
  badge.dataset.empty = count === 0;

  const items = $("#drawerItems"), empty = $("#drawerEmpty"), foot = $("#drawerFoot");
  const entries = Object.entries(state.cart);
  empty.style.display = entries.length ? "none" : "grid";
  foot.style.display = entries.length ? "block" : "none";
  items.style.display = entries.length ? "flex" : "none";

  items.innerHTML = entries.map(([id, q]) => {
    const p = productById(id);
    return `<div class="line">
      <div class="line__art" style="background-image:url('${p.img}')"></div>
      <div>
        <div class="line__name">${p.name}</div>
        <div class="line__price">${rupee(p.price)} / ${p.size}</div>
        <div class="line__qty">
          <button data-dec="${id}" aria-label="Decrease">–</button>
          <span>${q}</span>
          <button data-inc="${id}" aria-label="Increase">+</button>
        </div>
        <button class="line__rm" data-rm="${id}">remove</button>
      </div>
      <div class="line__sum">${rupee(p.price * q)}</div>
    </div>`;
  }).join("");
  $("#cartTotal").textContent = rupee(cartTotal());
}
function bump() {
  const b = $("#cartCount");
  b && b.animate([{ transform: "scale(1)" }, { transform: "scale(1.5)" }, { transform: "scale(1)" }], { duration: 350 });
}

/* delegated clicks (grid, cart, quick view) */
document.addEventListener("click", e => {
  const add = e.target.closest("[data-add]"); if (add) return addToCart(add.dataset.add);
  const quick = e.target.closest("[data-quick]"); if (quick) return openModal(quick.dataset.quick);
  const inc = e.target.closest("[data-inc]"); if (inc) return setQty(inc.dataset.inc, 1);
  const dec = e.target.closest("[data-dec]"); if (dec) return setQty(dec.dataset.dec, -1);
  const rm = e.target.closest("[data-rm]"); if (rm) return removeItem(rm.dataset.rm);
});

/* ---- drawer + scrim ---- */
const drawer = $("#drawer"), scrim = $("#scrim"), modal = $("#modal");
let scrimHandler = null;
function showScrim(onClick) { scrim.hidden = false; scrimHandler = onClick; }
function hideScrim() { if (!drawer.classList.contains("open") && !modal.classList.contains("open")) { scrim.hidden = true; scrimHandler = null; } }
function openDrawer() { drawer.classList.add("open"); drawer.setAttribute("aria-hidden", "false"); showScrim(closeDrawer); }
function closeDrawer() { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden", "true"); hideScrim(); }
$("#cartBtn").addEventListener("click", openDrawer);
$("#drawerClose").addEventListener("click", closeDrawer);
$("#checkoutBtn").addEventListener("click", () => toast("Demo store — checkout is disabled"));
scrim.addEventListener("click", () => scrimHandler && scrimHandler());

/* ---- quick-view modal ---- */
function openModal(id) {
  const p = productById(id);
  $("#modalCard").innerHTML = `
    <button class="modal__close" id="modalClose" aria-label="Close">&times;</button>
    <div class="modal__art"><img class="modal__img" src="${p.img}" alt="${p.name}"></div>
    <div class="modal__body">
      <span class="modal__type">${p.type}${p.heat ? ` · Heat ${heatDots(p.heat)}` : ""}</span>
      <h2 class="modal__name" id="modalName">${p.name}</h2>
      <p class="card__ml" lang="ml">${p.ml}</p>
      <div class="card__rating">${stars(avgRating(p.id))} <span>${avgRating(p.id).toFixed(1)} · ${reviewCount(p.id)} reviews</span></div>
      <p class="modal__desc">${p.desc}</p>
      <div class="modal__price">${rupee(p.price)} <small>/ ${p.size}</small></div>
      <div class="modal__actions">
        <button class="btn btn--solid" data-add="${p.id}">Add to tin</button>
        <a class="btn btn--ghost" href="product.html?id=${p.id}">Full details & reviews →</a>
      </div>
    </div>`;
  modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
  showScrim(closeModal);
  $("#modalClose").addEventListener("click", closeModal);
}
function closeModal() { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); hideScrim(); }
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") { closeModal(); closeDrawer(); } });

/* ---- toast ---- */
let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ---- nav shadow + reveal ---- */
const nav = $("#nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 20), { passive: true });
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.15 });
$$(".reveal").forEach(el => io.observe(el));

renderCart();

/* ---- whatsapp order ---- */
const waFab = document.createElement("a");
waFab.className = "wa-fab";
waFab.href = waLink("Hi Spice Shala, I'd like to place an order.");
waFab.target = "_blank";
waFab.rel = "noopener";
waFab.setAttribute("aria-label", "Order on WhatsApp");
waFab.innerHTML = `${WA_ICON}<span>Order on WhatsApp</span>`;
document.body.appendChild(waFab);

const waCartBtn = document.createElement("button");
waCartBtn.className = "btn btn--full wa-btn";
waCartBtn.type = "button";
waCartBtn.innerHTML = `${WA_ICON} Order on WhatsApp`;
waCartBtn.addEventListener("click", () => window.open(waLink(waCartText()), "_blank", "noopener"));
$("#checkoutBtn").insertAdjacentElement("afterend", waCartBtn);

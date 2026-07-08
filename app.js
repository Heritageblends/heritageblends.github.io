/* home page only — shared.js provides data, cart, drawer, modal, nav, reveal */
const VOICES = [
  { q: "The pepper actually made me put my old jar in the bin. There's no comparison.", who: "Meera R.", where: "Bengaluru" },
  { q: "First garam masala that tastes like my mother's. I don't know how, but it does.", who: "Anand K.", where: "London" },
  { q: "Milled-to-order isn't marketing — you can smell it the second the tin opens.", who: "Priya S.", where: "Kochi" },
  { q: "I cook more since these arrived. The kitchen just smells like somewhere I want to be.", who: "Thomas V.", where: "Melbourne" },
];

/* ---- product grid ---- */
const grid = $("#grid");
const gridEmpty = $("#gridEmpty");
function renderGrid() {
  const list = PRODUCTS.filter(p =>
    (state.filter === "All" || p.type === state.filter) &&
    (p.name.toLowerCase().includes(state.query) || p.tags.join(" ").includes(state.query))
  );
  gridEmpty.hidden = list.length > 0;
  grid.innerHTML = list.map(cardHTML).join("");
}

const types = ["All", ...new Set(PRODUCTS.map(p => p.type))];
$("#filters").innerHTML = types.map(t =>
  `<button class="chip ${t === "All" ? "active" : ""}" data-filter="${t}">${t}</button>`).join("");
$("#filters").addEventListener("click", e => {
  const b = e.target.closest("[data-filter]");
  if (!b) return;
  state.filter = b.dataset.filter;
  $$(".chip").forEach(c => c.classList.toggle("active", c === b));
  renderGrid();
});
$("#search").addEventListener("input", e => { state.query = e.target.value.trim().toLowerCase(); renderGrid(); });

/* clicking any in-page "Shop" link resets the grid to All */
function resetShop() {
  state.filter = "All";
  state.query = "";
  const s = $("#search"); if (s) s.value = "";
  $$(".chip").forEach(c => c.classList.toggle("active", c.dataset.filter === "All"));
  renderGrid();
}
$$('a[href="#shop"]').forEach(a => a.addEventListener("click", resetShop));

/* ---- testimonials ---- */
const track = $("#voices"), dots = $("#voiceDots");
let vIndex = 0, vTimer;
track.innerHTML = VOICES.map(v =>
  `<figure class="voice"><blockquote>“${v.q}”</blockquote><cite>${v.who}<span>${v.where}</span></cite></figure>`).join("");
dots.innerHTML = VOICES.map((_, i) =>
  `<button class="vdot ${i === 0 ? "active" : ""}" data-v="${i}" role="tab" aria-label="Testimonial ${i + 1}"></button>`).join("");
function goVoice(i) {
  vIndex = (i + VOICES.length) % VOICES.length;
  track.style.transform = `translateX(-${vIndex * 100}%)`;
  $$(".vdot").forEach((d, k) => d.classList.toggle("active", k === vIndex));
}
dots.addEventListener("click", e => { const b = e.target.closest("[data-v]"); if (b) { goVoice(+b.dataset.v); restart(); } });
function restart() { clearInterval(vTimer); vTimer = setInterval(() => goVoice(vIndex + 1), 5000); }
restart();

/* ---- hero specks + parallax ---- */
const specks = $("#specks");
const SPECK_COLORS = ["#dc9a12", "#d8562a", "#4a2a15", "#37492f"];
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  for (let i = 0; i < 26; i++) {
    const s = document.createElement("span");
    s.className = "speck";
    const size = 4 + Math.random() * 9;
    s.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;bottom:-20px;
      background:${SPECK_COLORS[i % 4]};animation-duration:${12 + Math.random() * 16}s;animation-delay:${-Math.random() * 20}s`;
    specks.appendChild(s);
  }
}
const jar = $(".jar");
if (jar) addEventListener("scroll", () => { jar.style.translate = `0 ${scrollY * 0.12}px`; }, { passive: true });

renderGrid();

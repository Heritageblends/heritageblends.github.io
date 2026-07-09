/* product detail page — depends on shared.js */
const pid = new URLSearchParams(location.search).get("id");
const product = productById(pid);
const root = $("#pdp");

if (!product) {
  root.innerHTML = `<section class="pdp"><p class="crumbs"><a href="index.html">Home</a> / <span>Not found</span></p>
    <h1 class="pdp__name">That spice wandered off.</h1>
    <p class="pdp__desc">We couldn't find that product. <a href="index.html#shop" style="text-decoration:underline">Back to the shop →</a></p></section>`;
} else {
  document.title = `${product.name} — Spice Shala · Heritage Blends`;
  injectJsonLd(product);
  render();
}

function injectJsonLd(p) {
  const count = reviewCount(p.id), avg = avgRating(p.id);
  const data = {
    "@context": "https://schema.org", "@type": "Product",
    name: p.name, image: `${SITE}/${p.img}`, description: p.desc,
    category: p.type, brand: { "@type": "Brand", name: "Spice Shala" },
    offers: { "@type": "Offer", priceCurrency: "INR", price: p.price, availability: "https://schema.org/InStock", url: amazonProduct(p.asin) },
  };
  if (count) data.aggregateRating = { "@type": "AggregateRating", ratingValue: avg.toFixed(1), reviewCount: count };
  const el = document.createElement("script");
  el.type = "application/ld+json";
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
}

function reviewHTML(r, fresh) {
  return `<div class="review">
    <div class="review__head">
      <span class="review__who">${esc(r.name)} ${stars(r.rating)}${fresh ? '<span class="review__new">new</span>' : ""}</span>
      <span class="review__date">${esc(r.date)}</span>
    </div>
    <p class="review__text">${esc(r.text)}</p>
  </div>`;
}

function reviewsSection() {
  const id = product.id;
  const list = reviewsFor(id);
  const userCount = (state.reviews[id] || []).length;
  return `
  <section class="reviews" id="reviews">
    <div class="reviews__top">
      <div class="reviews__summary">
        <div class="reviews__avg">${avgRating(id).toFixed(1)}</div>
        ${stars(avgRating(id))}
        <p class="reviews__count">${reviewCount(id)} review${reviewCount(id) === 1 ? "" : "s"}</p>
      </div>
      <div>
        <div class="reviews__list" id="reviewList">
          ${list.map((r, i) => reviewHTML(r, i < userCount)).join("")}
        </div>
        <form class="rform" id="rform" novalidate>
          <h3>Write a review</h3>
          <div class="rform__row">
            <label>Your rating</label>
            <div class="star-pick" id="starPick">
              ${[5,4,3,2,1].map(n => `<input type="radio" name="rating" id="r${n}" value="${n}"><label for="r${n}" aria-label="${n} star${n>1?"s":""}"></label>`).join("")}
            </div>
          </div>
          <div class="rform__row">
            <label for="rname">Name</label>
            <input type="text" id="rname" maxlength="40" placeholder="How should we sign it?" />
          </div>
          <div class="rform__row">
            <label for="rtext">Your review</label>
            <textarea id="rtext" maxlength="500" placeholder="How did it cook up?"></textarea>
          </div>
          <button type="submit" class="btn btn--solid">Post review</button>
          <p class="rform__msg" id="rmsg" role="status"></p>
        </form>
      </div>
    </div>
  </section>`;
}

function render() {
  const p = product;
  const related = PRODUCTS.filter(x => x.id !== p.id && (x.type === p.type || x.tags.some(t => p.tags.includes(t)))).slice(0, 3);
  const relatedFallback = related.length ? related : PRODUCTS.filter(x => x.id !== p.id).slice(0, 3);

  root.innerHTML = `
  <section class="pdp">
    <p class="crumbs"><a href="index.html">Home</a> / <a href="index.html#shop">Spice Shala</a> / <span>${esc(p.name)}</span></p>
    <div class="pdp__main">
      <div class="pdp__art">
        <span class="pdp__badge">${p.type}</span>
        <img class="pdp__img" src="${p.img}" alt="${esc(p.name)}" width="600" height="600">
      </div>
      <div class="pdp__info">
        <span class="card__type">${p.type} · 100% natural</span>
        <h1 class="pdp__name">${esc(p.name)}</h1>
        <p class="pdp__ml" lang="ml">${esc(p.ml)}</p>
        <div class="pdp__rating">${stars(avgRating(p.id))} <span>${avgRating(p.id).toFixed(1)}</span>
          <a href="#reviews">${reviewCount(p.id)} reviews</a></div>
        <div class="pdp__price">${rupee(p.price)} <small>/ ${esc(p.size)} pack</small></div>
        <p class="pdp__desc">${esc(p.desc)}</p>
        <dl class="pdp__meta">
          ${p.heat ? `<div><dt>Heat</dt><dd>${heatDots(p.heat)}</dd></div>` : ""}
          <div><dt>Pack</dt><dd>${esc(p.size)}</dd></div>
          <div><dt>Origin</dt><dd>${esc(p.origin)}</dd></div>
          <div><dt>Cook with</dt><dd>${esc(p.use)}</dd></div>
          <div><dt>Notes</dt><dd>${p.tags.map(t => `<span class="tag">${t}</span>`).join(" ")}</dd></div>
        </dl>
        <div class="pdp__buy">
          <div class="stepper">
            <button type="button" id="qtyDown" aria-label="Decrease quantity">–</button>
            <span id="qtyVal">1</span>
            <button type="button" id="qtyUp" aria-label="Increase quantity">+</button>
          </div>
          <button class="btn btn--solid" id="pdpAdd">Add to tin — <span id="pdpTotal">${rupee(p.price)}</span></button>
        </div>
        ${waButton(`Hi Spice Shala, I'd like to order ${p.name} (${p.size}) — ${rupee(p.price)}.`, "pdp__wa")}
        <a class="pdp__amazon" href="${amazonProduct(p.asin)}" target="_blank" rel="noopener">Buy this on Amazon ↗</a>
      </div>
    </div>
  </section>
  ${reviewsSection()}
  <section class="related">
    <h2>Cooks also reach for</h2>
    <div class="grid">${relatedFallback.map(cardHTML).join("")}</div>
  </section>`;

  wireBuy();
  wireReviewForm();
}

function wireBuy() {
  let qty = 1;
  const val = $("#qtyVal"), total = $("#pdpTotal");
  const sync = () => { val.textContent = qty; total.textContent = rupee(product.price * qty); };
  $("#qtyUp").addEventListener("click", () => { qty++; sync(); });
  $("#qtyDown").addEventListener("click", () => { if (qty > 1) { qty--; sync(); } });
  $("#pdpAdd").addEventListener("click", () => addToCart(product.id, qty));
}

function wireReviewForm() {
  const form = $("#rform"), msg = $("#rmsg");
  const nameIn = $("#rname"), textIn = $("#rtext");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const rating = +(form.querySelector("input[name=rating]:checked")?.value || 0);
    const name = nameIn.value.trim();
    const text = textIn.value.trim();
    nameIn.classList.toggle("invalid", !name);
    textIn.classList.toggle("invalid", !text);
    if (!rating || !name || !text) {
      msg.className = "rform__msg err";
      msg.textContent = !rating ? "Pick a star rating first." : "Add your name and a few words.";
      return;
    }
    const date = new Date().toLocaleDateString("en-GB", { month: "short", year: "numeric" });
    addReview(product.id, { name, rating, text, date });
    root.querySelector("#reviews").outerHTML = reviewsSection();
    wireReviewForm();
    document.getElementById("reviews").scrollIntoView({ behavior: "smooth" });
    toast("Thanks — your review is live");
  });
}

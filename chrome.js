/* Shared page chrome: grain, nav, footer, cart drawer, quick-view modal, toast.
   Injected on every page so markup lives in one place. Load BEFORE shared.js
   (which queries #cartBtn, #drawer, etc. at startup).

   New page recipe:
     <body data-page="shop">           <!-- "home" = landing page (same-page anchors) -->
       <main>…page-specific content…</main>
       <script src="chrome.js"></script>
       <script src="shared.js"></script>
       <script src="your-page.js"></script>  <!-- optional -->
     </body> */
(() => {
  const AMAZON = "https://www.amazon.in/stores/page/A7D6D321-57EE-4AC2-9443-A8E4D26991DD";
  const WHATSAPP = "917306889276";
  const home = document.body.dataset.page === "home";
  const P = home ? "" : "index.html";           // prefix links back to the landing sections
  const amz = (label) => `<a class="footer__amazon" href="${AMAZON}" target="_blank" rel="noopener">${label}</a>`;

  const header = `
<div class="grain" aria-hidden="true"></div>
<header class="nav${home ? "" : " scrolled"}" id="nav">
  <a href="${home ? "#top" : "index.html"}" class="brand" aria-label="Heritage Blends home">
    <svg class="brand__mark" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 2c3 5 8 7 8 13a8 8 0 1 1-16 0c0-6 5-8 8-13z" fill="currentColor"/><circle cx="16" cy="17" r="3" fill="var(--cream)"/></svg>
    <span class="brand__name">Heritage<em>Blends</em></span>
    <span class="brand__sub">Spice Shala</span>
  </a>
  <nav class="nav__links" aria-label="Primary">
    <a href="${P}#shop">Shop</a>
    <a href="${P}#story">Our Story</a>
    <a href="${P}#ritual">Ritual</a>
  </nav>
  <button class="cart-btn" id="cartBtn" aria-label="Open cart">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h2l2.5 12h9L20 8H7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/><circle cx="10" cy="20" r="1.4" fill="currentColor"/><circle cx="17" cy="20" r="1.4" fill="currentColor"/></svg>
    <span class="cart-btn__count" id="cartCount" data-empty="true">0</span>
  </button>
</header>`;

  const footer = `
<footer class="footer">
  <div class="footer__brand">
    <span class="brand__name">Heritage<em>Blends</em></span>
    <p><span lang="ml">സ്പൈസ് ഷാല</span> · Kizhakkambalam, Ernakulam · Kerala</p>
    ${amz("Also on Amazon →")}
  </div>
  <div class="footer__cols">
    <div><h4>Shop</h4><a href="${P}#shop">All spices</a><a href="${P}#shop">Blends</a>${amz("Buy on Amazon ↗")}</div>
    <div><h4>House</h4><a href="${P}#story">Our story</a><a href="${P}#ritual">The ritual</a></div>
    <div><h4>Say hello</h4><a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener">WhatsApp us</a>${amz("Amazon store ↗")}</div>
  </div>
  <p class="footer__note">© 2026 Heritage Blends. Spice Shala is a demo storefront — no real orders are placed.</p>
</footer>

<aside class="drawer" id="drawer" aria-hidden="true" aria-label="Shopping cart">
  <div class="drawer__head">
    <h2>Your tin</h2>
    <button class="drawer__close" id="drawerClose" aria-label="Close cart">&times;</button>
  </div>
  <div class="drawer__items" id="drawerItems"></div>
  <div class="drawer__empty" id="drawerEmpty">
    <p>Nothing here yet.</p>
    <span>Your spices will gather here.</span>
  </div>
  <div class="drawer__foot" id="drawerFoot">
    <div class="drawer__total"><span>Subtotal</span><strong id="cartTotal">₹0</strong></div>
    <button class="btn btn--solid btn--full" id="checkoutBtn">Checkout</button>
    <p class="drawer__fineprint">Demo only — checkout is disabled.</p>
  </div>
</aside>
<div class="scrim" id="scrim" hidden></div>

<div class="modal" id="modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modalName">
  <div class="modal__card" id="modalCard"></div>
</div>

<div class="toast" id="toast" role="status" aria-live="polite"></div>`;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);
})();

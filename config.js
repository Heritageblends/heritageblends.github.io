/* Canonical site constants + link builders. Load FIRST (before chrome.js),
   so every page/module derives contacts and store URLs from one source. */
const SITE = "https://heritageblends.github.io";
const WHATSAPP = "917306889276";              // Spice Shala: +91 73068 89276
const AMAZON = "https://www.amazon.in/stores/page/A7D6D321-57EE-4AC2-9443-A8E4D26991DD";
const INSTAGRAM = "https://www.instagram.com/heritageblends_26";

const amazonStore = () => AMAZON;
const amazonProduct = asin => `https://www.amazon.in/dp/${asin}`;
const waLink = text => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

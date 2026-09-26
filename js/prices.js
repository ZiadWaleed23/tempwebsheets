/* =========================================================================
   PRICES.JS
   Price helpers only — the prices themselves live in js/products.js, in
   each product's  price:  field (add-product.html and manage-products.html
   both have a Price box, so you never edit this file for a new product).

   - price: 0 (or missing) shows "Price on request" and is left out of the
     cart total.
   - Change the currency / number format in PRICE_CONFIG below.
   ========================================================================= */

const PRICE_CONFIG = {
  currency: "EGP",        // shown before the number, e.g. "EGP 4,500"
  locale: "en-US",        // number formatting (thousands separator)
  onRequestLabel: "Price on request"
};

/* Accepts a product object or a product id. Returns a number, or null when
   no price is set. */
function getPrice(productOrId) {
  const product = typeof productOrId === "string"
    ? PRODUCTS.find(p => p.id === productOrId)
    : productOrId;
  const value = product ? Number(product.price) : NaN;
  return value > 0 ? value : null;
}

function formatPrice(amount) {
  if (amount === null || amount === undefined || isNaN(amount)) return PRICE_CONFIG.onRequestLabel;
  return `${PRICE_CONFIG.currency} ${Number(amount).toLocaleString(PRICE_CONFIG.locale, { maximumFractionDigits: 2 })}`;
}

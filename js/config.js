/* =========================================================================
   CONFIG.JS
   Centralized, editable configuration for the entire site.
   Change the brand name, contact details, social links, categories and
   brand list here — every page and component reads from this one file.
   ========================================================================= */

const SITE_CONFIG = {

  // ---------------------------------------------------------------------
  // BRAND
  // ---------------------------------------------------------------------
  brand: {
    name: "Elio",
    tagline: "Elevating Aesthetic Excellence.",
    shortDescription:
      "A curated portfolio of professional aesthetic and beauty products, selected for clinics and skincare professionals who expect more.",
    logoLetter: "A" // used as a fallback mark if no image logo is supplied
  },

  // ---------------------------------------------------------------------
  // CONTACT & SOCIAL — placeholders, replace with real details
  // ---------------------------------------------------------------------
  contact: {
    email: "hello@elio.com",
    phone: "+971 4 880 7659",
    whatsapp: "+971 50 900 7659",
    whatsappLink: "https://wa.me/971509007659",
    location: "Hadaek Al-Ahram - 118",
    hours: "Sun – Thu, 10 A.M – 8 P.M"
  },

  social: {
    instagram: "https://instagram.com/elio",
    facebook: "https://facebook.com/elio",
    linkedin: "https://linkedin.com/company/elio"
  },

  // ---------------------------------------------------------------------
  // NAVIGATION CATEGORIES (used in mega-menu, footer, filters, homepage)
  // Add or edit entries here — every component that lists categories
  // reads from this array.
  // ---------------------------------------------------------------------
  categories: [
    {
      id: "botox",
      name: "Botulinum Toxin",
      description: "Injectable neuromodulators for the treatment of dynamic wrinkles and hyperhidrosis.",
      image: "https://beauty-vt.com/wp-content/uploads/2022/10/botulinum-toxin-in-aesthetic-medicine-everything-you-need-to-know.jpg"
    },
    {
      id: "dermal-fillers",
      name: "Dermal Fillers",
      description: "Hyaluronic-acid, PLLA and calcium-hydroxyapatite based volumizing and contouring formulations for professional aesthetic use.",
      image: "https://www.beautifi.com/wp-content/uploads/2021/12/23.-Dermal-Fillers.jpeg"
    },
    {
      id: "skin-boosters",
      name: "Skin Boosters",
      description: "Bio-revitalizing injectable treatments formulated to support skin hydration, quality and radiance.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4trJCcNqkFpDTco02n6IxH47gXrZXIWSbpBIIZ25vGw&s=10"
    },
    {
      id: "mesotherapy",
      name: "Mesotherapy",
      description: "Ampoules and vial complexes used in mesotherapy sessions for skin, hair and body revitalization.",
      image: "https://prp-london.com/images/mesotherapy-hair-scalp-london.webp"
    },
    {
      id: "cold-peeling",
      name: "Cold Peeling",
      description: "Non-thermal peeling solutions for surface renewal without downtime.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUUmUEfkMGAmJM3CT8FPKWsl4Qhi8kcd5xgeFDodPT-b10iyniXKGi3I&s=10"
    },
    {
      id: "disposables",
      name: "Disposables & Accessories",
      description: "Cannulas, needles and injection accessories for professional aesthetic procedures.",
      image: "https://www.theaestheticsociety.org/sites/default/files/styles/tas_wide_l_3_2/public/content/hero/2021-09/_5ccc6e112986b.jpg?h=0ac13cd6&itok=4HxsfGQ0"
    }
  ],

  // ---------------------------------------------------------------------
  // BRANDS — "Selected Brands" section. Replace logo text with <img> tags
  // once real logos are available (see renderBrands() in app.js).
  // ---------------------------------------------------------------------
  brands: [
    { id: "refinex",       name: "REFINEX" },
    { id: "metox",         name: "METOX" },
    { id: "dysport",       name: "DYSPORT" },
    { id: "evetox",        name: "EVE TOX" },
    { id: "nabota",        name: "NABOTA" },
    { id: "demure",        name: "DEMURE" },
    { id: "dermofil",      name: "DERMOFIL" },
    { id: "hyamax",        name: "HYAMAX" },
    { id: "master-treat",  name: "MASTER TREAT" },
    { id: "audrey",        name: "AUDREY" },
    { id: "revolax",       name: "REVOLAX" },
    { id: "deneb",         name: "DENEB" },
    { id: "sedyfill",      name: "SEDYFILL" },
    { id: "celosome",      name: "CELOSOME" },
    { id: "sculptra",      name: "SCULPTRA" },
    { id: "olidia",        name: "OLIDIA" },
    { id: "vom",           name: "VOM" },
    { id: "premium",       name: "PREMIUM" },
    { id: "richesse",      name: "RICHESSE" },
    { id: "eptq",          name: "E.P.T.Q" },
    { id: "bella",         name: "BELLA" },
    { id: "hadurage",      name: "HADURAGE" },
    { id: "maxyfill",      name: "MAXYFILL" },
    { id: "bde-beaute",    name: "BDE BEAUTÉ" },
    { id: "hyaron",        name: "HYARON" },
    { id: "aqua",          name: "AQUA" },
    { id: "exo",           name: "EXO" },
    { id: "regloray",      name: "REGLORAY" },
    { id: "mesoheal",      name: "MESOHEAL" },
    { id: "rrs",           name: "RRS" },
    { id: "jalupro",       name: "JALUPRO" },
    { id: "nithya",        name: "NITHYA" },
    { id: "everline",      name: "EVERLINE" },
    { id: "kiara",         name: "KIARA" },
    { id: "remedium",      name: "REMEDIUM" },
    { id: "rablanca",      name: "RABLANCA" },
    { id: "medisupply",    name: "MEDISUPPLY" },
    { id: "clinic-select", name: "CLINIC SELECT" },
    { id: "reluma",        name: "Reluma" },
    { id: "axeniq",        name: "AxeniQ" },
  ],

  // ---------------------------------------------------------------------
  // CATALOG SETTINGS — tune performance/pagination behaviour here
  // ---------------------------------------------------------------------
  catalog: {
    productsPerPage: 12,     // number of cards revealed per "Load More" click
    gridPageInitial: 12      // number of cards rendered on first paint
  },

  // ---------------------------------------------------------------------
  // SHIPPING — flat fee below the threshold, free at/above it.
  // Change these two numbers only; the cart page reads from here.
  // ---------------------------------------------------------------------
  shipping: {
    freeThreshold: 25000,   // order subtotal (EGP) that unlocks free shipping
    fee: 400                 // flat shipping fee (EGP) below the threshold
  },

  // ---------------------------------------------------------------------
  // ORDER SYNC — sends a copy of every order to an external endpoint
  // (e.g. a Google Sheets Web App) at the same time the WhatsApp message
  // is prepared. Set enabled to false to turn this off completely.
  // Paste the "Web app URL" you get after deploying the Apps Script
  // (see GOOGLE_SHEETS_SETUP.md) into webhookUrl below.
  // ---------------------------------------------------------------------
  orderSync: {
    enabled: true,
    webhookUrl: "https://script.google.com/macros/s/AKfycbweJljf289hmXqwMwPPQM3adOfLHVZOoRUiy5PPuIK0zxTdG99Adxx3FjJFqTkdhZ9nDQ/exec"
  }
};

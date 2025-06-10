
export enum madeFor {
  MOTHER = "mother",
  BABY = "baby",
}

export interface Category {
  catID: string;
  name: string;
  description: string;
  madeFor: madeFor;
  image: string;
  tags: string[];
  strapiId?: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  catID: string;
  image: string;
  material?: string;
  strapiId?: string;
}

export const categories: Category[] = [
  {
    "catID": "cat-1",
    "name": "Reusable Cloth Diaper",
    "description": "Premium cloth diapers featuring adjustable snap buttons and high-absorption technology.",
    "madeFor": "baby",
    "image": "/images/banner.jpeg",
    "tags": [
      "Wholesale Cloth Diapers",
      "Bulk Baby Products",
      "Eco-friendly",
      "Reusable",
      "Private Label",
      "Sustainable"
    ],
    "strapiId": 103
  },
  {
    "catID": "cat-2",
    "name": "Nappy",
    "description": "High-quality, absorbent nappies designed for comfort and durability.",
    "madeFor": "baby",
    "image": "/images/banner.jpeg",
    "tags": [
      "Wholesale Nappies",
      "Bulk Manufacturing",
      "Custom Branding",
      "Baby Care",
      "Wholesale Distribution"
    ],
    "strapiId": 105
  },
  {
    "catID": "cat-3",
    "name": "Insert / Soaker",
    "description": "High quality diaper inserts and soakers with multi-layer absorption technology.",
    "madeFor": "baby",
    "image": "/images/banner.jpeg",
    "tags": [
      "Diaper Inserts",
      "Wholesale Soakers",
      "Bulk Supply",
      "Custom Manufacturing",
      "Absorption Technology"
    ],
    "strapiId": 107
  },
  {
    "catID": "cat-4",
    "name": "Bib",
    "description": "Durable baby bibs with waterproof backing. Available in various designs and materials.",
    "madeFor": "baby",
    "image": "/images/banner.jpeg",
    "tags": [
      "Wholesale Bibs",
      "Bulk Baby Accessories",
      "Custom Design",
      "Waterproof Products",
      "Private Labeling"
    ],
    "strapiId": 109
  },
  {
    "catID": "cat-5",
    "name": "Baby Undergarments",
    "description": "Premium quality baby undergarments. Featuring soft, skin-friendly materials.",
    "madeFor": "baby",
    "image": "/images/banner.jpeg",
    "tags": [
      "Wholesale Undergarments",
      "Bulk Baby Clothing",
      "Custom Sizing",
      "Private Label",
      "Infant Wear"
    ],
    "strapiId": 111
  },
  {
    "catID": "cat-6",
    "name": "Padded shorts",
    "description": "Specialized padded shorts for infants, manufactured with premium materials.",
    "madeFor": "baby",
    "image": "/images/banner.jpeg",
    "tags": [
      "Wholesale Baby Shorts",
      "Padded Clothing",
      "Custom Manufacturing",
      "Bulk Orders",
      "Specialized Infant Wear"
    ],
    "strapiId": 113
  },
  {
    "catID": "cat-7",
    "name": "Muslin Products",
    "description": "Premium muslin fabric products including swaddles, blankets, and wraps.",
    "madeFor": "baby",
    "image": "/images/banner.jpeg",
    "tags": [
      "Wholesale Muslin",
      "Bulk Swaddles",
      "Custom Textiles",
      "Baby Blankets",
      "Private Label Muslin"
    ],
    "strapiId": 115
  },
  {
    "catID": "cat-8",
    "name": "Reusable Sanitary Pads",
    "description": "Eco-friendly sanitary pads manufactured for wholesale distribution. Features advanced absorption technology.",
    "madeFor": "mother",
    "image": "/images/banner.jpeg",
    "tags": [
      "Wholesale Sanitary Products",
      "Sustainable Hygiene",
      "Bulk Manufacturing",
      "Custom Design",
      "Eco-friendly"
    ],
    "strapiId": 117
  },
  {
    "catID": "cat-9",
    "name": "Period Panty",
    "description": "High-quality period underwear with integrated absorption technology.",
    "madeFor": "mother",
    "image": "/images/banner.jpeg",
    "tags": [
      "Wholesale Period Wear",
      "Bulk Manufacturing",
      "Custom Specifications",
      "Female Hygiene",
      "Sustainable Products"
    ],
    "strapiId": 119
  },
  {
    "catID": "cat-10",
    "name": "Nursing Pad",
    "description": "Premium nursing pads, with multiple absorption layers.",
    "madeFor": "mother",
    "image": "/images/banner.jpeg",
    "tags": [
      "Wholesale Nursing Products",
      "Bulk Manufacturing",
      "Maternity Care",
      "Custom Design",
      "Private Label"
    ],
    "strapiId": 121
  },
  {
    "catID": "cat-11",
    "name": "Nursing Cover",
    "description": "Versatile nursing covers.",
    "madeFor": "mother",
    "image": "/images/banner.jpeg",
    "tags": [
      "Wholesale Nursing Covers",
      "Bulk Production",
      "Custom Design",
      "Maternity Wear",
      "Private Label"
    ],
    "strapiId": 123
  },
  {
    "catID": "cat-12",
    "name": "Maternity Products",
    "description": "Comprehensive range of maternity wear and accessories.",
    "madeFor": "mother",
    "image": "/images/banner.jpeg",
    "tags": [
      "Wholesale Maternity Wear",
      "Bulk Manufacturing",
      "Custom Design",
      "Private Label",
      "Pregnancy Care"
    ],
    "strapiId": 125
  }
];

export const products: Product[] = [
  {
    "id": "prod-1",
    "title": "Adjustable Reusable Cloth Diapers with Snap Buttons",
    "description": "Soft and comfortable reusable cloth diaper with adjustable snap buttons for a perfect fit.",
    "catID": "cat-1",
    "image": "/products/cloth-diaper-snap.jpg",
    "material": "Cotton, Waterproof Layer",
    "strapiId": 2
  },
  {
    "id": "prod-2",
    "title": "Adjustable Reusable Cloth Diapers with Fine Velcro",
    "description": "Soft and comfortable reusable cloth diaper with fine velcro adjustment for a secure fit.",
    "catID": "cat-1",
    "image": "/products/cloth-diaper-velcro.jpg",
    "material": "Cotton, Waterproof Layer",
    "strapiId": 4
  },
  {
    "id": "prod-3",
    "title": "Basic Cotton Nappy",
    "description": "Breathable and lightweight cotton nappy for everyday comfort.",
    "catID": "cat-2",
    "image": "/products/basic-cotton-nappy.jpg",
    "material": "100% Cotton",
    "strapiId": 6
  },
  {
    "id": "prod-4",
    "title": "Padded Dry Feel Nappy",
    "description": "Padded nappy with a dry feel layer to keep babies comfortable for longer hours.",
    "catID": "cat-2",
    "image": "/products/padded-dry-feel-nappy.jpg",
    "material": "Cotton, Microfiber Padding",
    "strapiId": 8
  },
  {
    "id": "prod-5",
    "title": "Padded Nappy",
    "description": "Soft, cushioned nappy providing extra comfort and protection.",
    "catID": "cat-2",
    "image": "/products/padded-nappy.jpg",
    "material": "Cotton, Microfiber Padding",
    "strapiId": 10
  },
  {
    "id": "prod-6",
    "title": "High Absorbent Dry Feel Insert/Soaker",
    "description": "Super absorbent insert with dry feel technology for leak protection.",
    "catID": "cat-3",
    "image": "/products/high-absorbent-dry-feel-insert.jpg",
    "material": "Cotton, Microfiber Core",
    "strapiId": 12
  },
  {
    "id": "prod-7",
    "title": "High Absorbent Cotton Insert",
    "description": "100% cotton insert with high absorption for extended dryness.",
    "catID": "cat-3",
    "image": "/products/high-absorbent-cotton-insert.jpg",
    "material": "100% Cotton",
    "strapiId": 14
  },
  {
    "id": "prod-8",
    "title": "High Absorbent Bamboo Insert",
    "description": "Bamboo fabric insert offering superior absorbency and softness.",
    "catID": "cat-3",
    "image": "/products/high-absorbent-bamboo-insert.jpg",
    "material": "Bamboo Fabric",
    "strapiId": 16
  },
  {
    "id": "prod-9",
    "title": "High Absorbent Folded Insert",
    "description": "Folded insert design for customizable absorbency levels.",
    "catID": "cat-3",
    "image": "/products/high-absorbent-folded-insert.jpg",
    "material": "Cotton, Microfiber",
    "strapiId": 18
  },
  {
    "id": "prod-10",
    "title": "Waterproof Baby Bib",
    "description": "Mess-free, waterproof bib to protect clothing during meals.",
    "catID": "cat-4",
    "image": "/products/waterproof-bib.jpg",
    "material": "Polyester with TPU Layer",
    "strapiId": 20
  },
  {
    "id": "prod-11",
    "title": "Reversible Baby Bib",
    "description": "Soft, reversible baby bib with two stylish sides.",
    "catID": "cat-4",
    "image": "/products/reversible-bib.jpg",
    "material": "Cotton, Terry Cloth",
    "strapiId": 22
  },
  {
    "id": "prod-12",
    "title": "Reusable Cloth Sanitary Pads",
    "description": "Eco-friendly, reusable sanitary pads for sustainable menstrual care.",
    "catID": "cat-8",
    "image": "/products/reusable-sanitary-pad.jpg",
    "material": "Cotton, Bamboo Charcoal Layer",
    "strapiId": 24
  },
  {
    "id": "prod-13",
    "title": "Period Panty",
    "description": "Leak-proof period panty with multi-layer absorption technology.",
    "catID": "cat-9",
    "image": "/products/period-panty.jpg",
    "material": "Cotton, Absorbent Layer",
    "strapiId": 26
  },
  {
    "id": "prod-14",
    "title": "Nursing Pad",
    "description": "Soft, absorbent nursing pads for extra leak protection.",
    "catID": "cat-10",
    "image": "/products/nursing-pad.jpg",
    "material": "Cotton, Bamboo Fiber",
    "strapiId": 28
  },
  {
    "id": "prod-15",
    "title": "Maternity Nursing Cover",
    "description": "Lightweight and breathable nursing cover for mothers.",
    "catID": "cat-11",
    "image": "/products/nursing-cover.jpg",
    "material": "Cotton, Muslin",
    "strapiId": 30
  },
  {
    "id": "prod-16",
    "title": "Muslin Swaddle",
    "description": "Soft, breathable muslin swaddle for newborns.",
    "catID": "cat-7",
    "image": "/products/muslin-swaddle.jpg",
    "material": "100% Organic Muslin Cotton",
    "strapiId": 32
  }
];

// Function to fetch data from Strapi
export async function fetchFromStrapi() {
  // Implement Strapi API calls here
}

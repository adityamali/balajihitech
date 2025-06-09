export enum madeFor {
  MOTHER = "mother",
  BABY = "baby",
}

export interface Category {
  catID: number;
  name: string;
  description: string;
  madeFor: madeFor;
  image: string;
  tags: string[];
}

export interface Product {
  id: string;
  title: string;
  description: string;
  catID: number;
  image: string;
  material?: string;
  careInstructions?: string;
}

export const categories: Category[] = [
  {
    catID: 1,
    name: "Reusable Cloth Diaper",
    description:
      "Premium cloth diapers featuring adjustable snap buttons and high-absorption technology.",
    madeFor: madeFor.BABY,
    image: "/images/banner.jpeg",
    tags: [
      "Wholesale Cloth Diapers",
      "Bulk Baby Products",
      "Eco-friendly",
      "Reusable",
      "Private Label",
      "Sustainable",
    ],
  },
  {
    catID: 2,
    name: "Nappy",
    description:
      "High-quality, absorbent nappies designed for comfort and durability.",
    madeFor: madeFor.BABY,
    image: "/images/banner.jpeg",
    tags: [
      "Wholesale Nappies",
      "Bulk Manufacturing",
      "Custom Branding",
      "Baby Care",
      "Wholesale Distribution",
    ],
  },
  {
    catID: 3,
    name: "Insert / Soaker",
    description:
      "High quality diaper inserts and soakers with multi-layer absorption technology.",
    madeFor: madeFor.BABY,
    image: "/images/banner.jpeg",
    tags: [
      "Diaper Inserts",
      "Wholesale Soakers",
      "Bulk Supply",
      "Custom Manufacturing",
      "Absorption Technology",
    ],
  },
  {
    catID: 4,
    name: "Bib",
    description:
      "Durable baby bibs with waterproof backing. Available in various designs and materials.",
    madeFor: madeFor.BABY,
    image: "/images/banner.jpeg",
    tags: [
      "Wholesale Bibs",
      "Bulk Baby Accessories",
      "Custom Design",
      "Waterproof Products",
      "Private Labeling",
    ],
  },
  {
    catID: 5,
    name: "Baby Undergarments",
    description:
      "Premium quality baby undergarments. Featuring soft, skin-friendly materials.",
    madeFor: madeFor.BABY,
    image: "/images/banner.jpeg",
    tags: [
      "Wholesale Undergarments",
      "Bulk Baby Clothing",
      "Custom Sizing",
      "Private Label",
      "Infant Wear",
    ],
  },
  {
    catID: 6,
    name: "Padded shorts",
    description:
      "Specialized padded shorts for infants, manufactured with premium materials.",
    madeFor: madeFor.BABY,
    image: "/images/banner.jpeg",
    tags: [
      "Wholesale Baby Shorts",
      "Padded Clothing",
      "Custom Manufacturing",
      "Bulk Orders",
      "Specialized Infant Wear",
    ],
  },
  {
    catID: 7,
    name: "Muslin Products",
    description:
      "Premium muslin fabric products including swaddles, blankets, and wraps.",
    madeFor: madeFor.BABY,
    image: "/images/banner.jpeg",
    tags: [
      "Wholesale Muslin",
      "Bulk Swaddles",
      "Custom Textiles",
      "Baby Blankets",
      "Private Label Muslin",
    ],
  },
  {
    catID: 8,
    name: "Reusable Sanitary Pads",
    description:
      "Eco-friendly sanitary pads manufactured for wholesale distribution. Features advanced absorption technology.",
    madeFor: madeFor.MOTHER,
    image: "/images/banner.jpeg",
    tags: [
      "Wholesale Sanitary Products",
      "Sustainable Hygiene",
      "Bulk Manufacturing",
      "Custom Design",
      "Eco-friendly",
    ],
  },
  {
    catID: 9,
    name: "Period Panty",
    description:
      "High-quality period underwear with integrated absorption technology.",
    madeFor: madeFor.MOTHER,
    image: "/images/banner.jpeg",
    tags: [
      "Wholesale Period Wear",
      "Bulk Manufacturing",
      "Custom Specifications",
      "Female Hygiene",
      "Sustainable Products",
    ],
  },
  {
    catID: 10,
    name: "Nursing Pad",
    description: "Premium nursing pads, with multiple absorption layers.",
    madeFor: madeFor.MOTHER,
    image: "/images/banner.jpeg",
    tags: [
      "Wholesale Nursing Products",
      "Bulk Manufacturing",
      "Maternity Care",
      "Custom Design",
      "Private Label",
    ],
  },
  {
    catID: 11,
    name: "Nursing Cover",
    description: "Versatile nursing covers.",
    madeFor: madeFor.MOTHER,
    image: "/images/banner.jpeg",
    tags: [
      "Wholesale Nursing Covers",
      "Bulk Production",
      "Custom Design",
      "Maternity Wear",
      "Private Label",
    ],
  },
  {
    catID: 12,
    name: "Maternity Products",
    description: "Comprehensive range of maternity wear and accessories.",
    madeFor: madeFor.MOTHER,
    image: "/images/banner.jpeg",
    tags: [
      "Wholesale Maternity Wear",
      "Bulk Manufacturing",
      "Custom Design",
      "Private Label",
      "Pregnancy Care",
    ],
  },
];

export const products: Product[] = [
  {
    id: "1",
    title: "Adjustable Reusable Cloth Diapers with Snap Buttons",
    description: "Soft and comfortable reusable cloth diaper with adjustable snap buttons for a perfect fit.",
    catID: 1,
    image: "/products/cloth-diaper-snap.jpg",
    material: "Cotton, Waterproof Layer",
    careInstructions: "Machine wash cold, do not bleach, tumble dry low",
  },
  {
    id: "2",
    title: "Adjustable Reusable Cloth Diapers with Fine Velcro",
    description: "Soft and comfortable reusable cloth diaper with fine velcro adjustment for a secure fit.",
    catID: 1,
    image: "/products/cloth-diaper-velcro.jpg",
    material: "Cotton, Waterproof Layer",
    careInstructions: "Machine wash cold, do not bleach, tumble dry low",
  },
  {
    id: "3",
    title: "Basic Cotton Nappy",
    description: "Breathable and lightweight cotton nappy for everyday comfort.",
    catID: 2,
    image: "/products/basic-cotton-nappy.jpg",
    material: "100% Cotton",
    careInstructions: "Hand wash or machine wash gentle, air dry",
  },
  {
    id: "4",
    title: "Padded Dry Feel Nappy",
    description: "Padded nappy with a dry feel layer to keep babies comfortable for longer hours.",
    catID: 2,
    image: "/products/padded-dry-feel-nappy.jpg",
    material: "Cotton, Microfiber Padding",
    careInstructions: "Machine wash cold, do not bleach, tumble dry low",
  },
  {
    id: "5",
    title: "Padded Nappy",
    description: "Soft, cushioned nappy providing extra comfort and protection.",
    catID: 2,
    image: "/products/padded-nappy.jpg",
    material: "Cotton, Microfiber Padding",
    careInstructions: "Machine wash cold, air dry",
  },
  {
    id: "6",
    title: "High Absorbent Dry Feel Insert/Soaker",
    description: "Super absorbent insert with dry feel technology for leak protection.",
    catID: 3,
    image: "/products/high-absorbent-dry-feel-insert.jpg",
    material: "Cotton, Microfiber Core",
    careInstructions: "Machine wash cold, tumble dry low",
  },
  {
    id: "7",
    title: "High Absorbent Cotton Insert",
    description: "100% cotton insert with high absorption for extended dryness.",
    catID: 3,
    image: "/products/high-absorbent-cotton-insert.jpg",
    material: "100% Cotton",
    careInstructions: "Machine wash warm, tumble dry low",
  },
  {
    id: "8",
    title: "High Absorbent Bamboo Insert",
    description: "Bamboo fabric insert offering superior absorbency and softness.",
    catID: 3,
    image: "/products/high-absorbent-bamboo-insert.jpg",
    material: "Bamboo Fabric",
    careInstructions: "Hand wash recommended, air dry",
  },
  {
    id: "9",
    title: "High Absorbent Folded Insert",
    description: "Folded insert design for customizable absorbency levels.",
    catID: 3,
    image: "/products/high-absorbent-folded-insert.jpg",
    material: "Cotton, Microfiber",
    careInstructions: "Machine wash cold, air dry",
  },
  {
    id: "10",
    title: "Waterproof Baby Bib",
    description: "Mess-free, waterproof bib to protect clothing during meals.",
    catID: 4,
    image: "/products/waterproof-bib.jpg",
    material: "Polyester with TPU Layer",
    careInstructions: "Wipe clean or hand wash, air dry",
  },
  {
    id: "11",
    title: "Reversible Baby Bib",
    description: "Soft, reversible baby bib with two stylish sides.",
    catID: 4,
    image: "/products/reversible-bib.jpg",
    material: "Cotton, Terry Cloth",
    careInstructions: "Machine wash gentle, tumble dry low",
  },
  {
    id: "12",
    title: "Reusable Cloth Sanitary Pads",
    description: "Eco-friendly, reusable sanitary pads for sustainable menstrual care.",
    catID: 8,
    image: "/products/reusable-sanitary-pad.jpg",
    material: "Cotton, Bamboo Charcoal Layer",
    careInstructions: "Hand wash or machine wash, air dry",
  },
  {
    id: "13",
    title: "Period Panty",
    description: "Leak-proof period panty with multi-layer absorption technology.",
    catID: 9,
    image: "/products/period-panty.jpg",
    material: "Cotton, Absorbent Layer",
    careInstructions: "Hand wash recommended, air dry",
  },
  {
    id: "14",
    title: "Nursing Pad",
    description: "Soft, absorbent nursing pads for extra leak protection.",
    catID: 10,
    image: "/products/nursing-pad.jpg",
    material: "Cotton, Bamboo Fiber",
    careInstructions: "Machine wash cold, air dry",
  },
  {
    id: "15",
    title: "Maternity Nursing Cover",
    description: "Lightweight and breathable nursing cover for mothers.",
    catID: 11,
    image: "/products/nursing-cover.jpg",
    material: "Cotton, Muslin",
    careInstructions: "Machine wash cold, tumble dry low",
  },
  {
    id: "16",
    title: "Muslin Swaddle",
    description: "Soft, breathable muslin swaddle for newborns.",
    catID: 7,
    image: "/products/muslin-swaddle.jpg",
    material: "100% Organic Muslin Cotton",
    careInstructions: "Machine wash gentle, air dry",
  },
];


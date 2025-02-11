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
  price: number;
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
    price: 599,
    description:
      "Soft and comfortable cotton romper perfect for your little one.",
    catID: 1,
    image: "/products/romper.jpg",
    material: "100% Organic Cotton",
    careInstructions: "Machine wash cold, tumble dry low",
  },
  {
    id: "2",
    title: "Adjustable Reusable Cloth Diapers with Fine Velcro",
    price: 299,
    description: "Comfortable cotton t-shirt for your little one.",
    catID: 1,
    image: "/products/tshirt.jpg",
    material: "100% Organic Cotton",
    careInstructions: "Machine wash cold, tumble dry low",
  },
  {
    id: "3",
    title: "Basic Cotton Nappy",
    price: 199,
    description: "Comfortable cotton short for your little one.",
    catID: 2,
    image: "/products/short.jpg",
    material: "100% Organic Cotton",
    careInstructions: "Machine wash cold, tumble dry low",
  },
  {
    id: "4",
    title: "Padded Dry Feel Nappy",
    price: 199,
    description: "Comfortable cotton short for your little one.",
    catID: 2,
    image: "/products/short.jpg",
    material: "100% Organic Cotton",
  },
  {
    id: "5",
    title: "Padded Nappy",
    price: 199,
    description: "Comfortable cotton short for your little one.",
    catID: 2,
    image: "/products/short.jpg",
    material: "100% Organic Cotton",
  },
  {
    id: "6",
    title: "Insert/Soaker - High Absorbant Dry Feel Diaper Inserts",
    price: 199,
    description: "Comfortable cotton short for your little one.",
    catID: 3,
    image: "/products/short.jpg",
    material: "100% Organic Cotton",
  },
  {
    id: "7",
    title: "Insert/Soaker - High Absorbant Cotton Diaper Inserts",
    price: 199,
    description: "Comfortable cotton short for your little one.",
    catID: 3,
    image: "/products/short.jpg",
    material: "100% Organic Cotton",
  },
  {
    id: "8",
    title: "Inserts / Soakers - High Absorbant Bamboo Fabric Inserts",
    price: 199,
    description: "",
    catID: 3,
    image: "/products/short.jpg",
    material: "Bamboo Fabric",
  },
];

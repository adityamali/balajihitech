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
  image?: string;
  material?: string;
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
  {
    catID: 13,
    name: "Training Pants",
    description: "Comprehensive range of training pants",
    madeFor: madeFor.BABY,
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
    title: "Cloth Diapers with Snap Buttons",
    description: 
     `Type: Cloth Diaper\nAge: 3 month to 3 year\nFabric Outer: 100% water resistant PUL fabric\nEco Friendly Diaper\nDry feel inner layer to keep baby's skin safe.\nReusable upto 300+ washes.\nCloth diaper with high absorbency, trusted by moms.\nOne size to fit from new born till baby is toilet trained.\nAdjustable snap buttons.\nWater proof exterior.\n`,
    catID: 1,
    image: "/products/1.png",
    material: "Cotton, Waterproof Layer",
  },
  // {
  //   id: "2",
  //   title: "Adjustable Reusable Cloth Diapers with Fine Velcro",
  //   description: "Soft and comfortable reusable cloth diaper with fine velcro adjustment for a secure fit.",
  //   catID: 1,
  //   material: "Cotton, Waterproof Layer",
  // },
  // {
  //   id: "3",
  //   title: "Basic Cotton Nappy",
  //   description: "Breathable and lightweight cotton nappy for everyday comfort.",
  //   catID: 2,
  //   material: "100% Cotton",
  // },
  // {
  //   id: "4",
  //   title: "Padded Dry Feel Nappy",
  //   description: "Padded nappy with a dry feel layer to keep babies comfortable for longer hours.",
  //   catID: 2,
  //   material: "Cotton, Microfiber Padding",
  // },
  {
    id: "5",
    title: "Padded Nappy",
    description: `• Type - Cloth nappy
• Age - 0 to 3 month
• Size - M/L/XL
• Fabric - hosiery printed Cotton
• Langots are easy to use, and gives fit which can easily contain pee
• Langots are quick to dry. So that it can be frequently reused.
• No chance to rashes
• Reusable and washable
• Unique two size loop adjustment in each nappy.
• Dry feel inner layer to keep baby skin dry and safe.`,
    catID: 2,
    image: "/products/paddednappy.webp",
    material: "Cotton, Microfiber Padding",
  },
  // {
  //   id: "6",
  //   title: "High Absorbent Dry Feel Insert/Soaker",
  //   description: "Super absorbent insert with dry feel technology for leak protection.",
  //   catID: 3,
  //   material: "Cotton, Microfiber Core",
  // },
  // {
  //   id: "7",
  //   title: "High Absorbent Cotton Insert",
  //   description: "100% cotton insert with high absorption for extended dryness.",
  //   catID: 3,
  //   material: "100% Cotton",
  // },
  // {
  //   id: "8",
  //   title: "High Absorbent Bamboo Insert",
  //   description: "Bamboo fabric insert offering superior absorbency and softness.",
  //   catID: 3,
  //   material: "Bamboo Fabric",
  // },
  // {
  //   id: "9",
  //   title: "High Absorbent Folded Insert",
  //   description: "Folded insert design for customizable absorbency levels.",
  //   catID: 3,
  //   material: "Cotton, Microfiber",
  // },
  {
    id: "10",
    title: "Waterproof Baby Bib",
    description: `• Waterproof, apron style full coverage reversible cloth bibs
• Super cute prints on both sides.
• Material: PUL lamination to make it water resistant.
• Perfect meal partner -would keep baby's outfit clean, and tidy by using bibs.
• Machine washable and quick dry.
• Gentle Fabric - baby bibs are made up of 100% PUL fabric, to keep safe, soft and sensitive skin of new born.
• One-size bibs - Perfect for 0 month to 12 months babies
- from new born to toddler.`,
    catID: 4,
    image: "/products/babybib.webp",
    material: "Polyester with TPU Layer",
  },
  // {
  //   id: "11",
  //   title: "Reversible Baby Bib",
  //   description: "Soft, reversible baby bib with two stylish sides.",
  //   catID: 4,
  //   material: "Cotton, Terry Cloth",
  // },
  {
    id: "12",
    title: "Reusable Cloth Sanitary Pads",
    description: `• Micro fleece dry feel top, ultra absorbent polyester core, laminated leak proof bottom.\n• Absorbent wings.\n• Absorbs for 5-8 hours.\n• Dry Feel, No stains, No infections.\n• Especially designed for women to wear all day.\n• Enhanced with unique leak lock technology that ensures comfort all day.\n• No rashes and itching\n• Free from bleach and chemical and prevents period order.`,
    catID: 8,
    image: "/products/12.png",
    material: "Cotton, Bamboo Charcoal Layer",
  },
  // {
  //   id: "13",
  //   title: "Period Panty",
  //   description: "Leak-proof period panty with multi-layer absorption technology.",
  //   catID: 9,
  //   image: "/products/13.png",
  //   material: "Cotton, Absorbent Layer",
  // },
  {
    id: "14",
    title: "Nursing Pad",
    description: `• MATERIAL -100% Cotton with Dry Feel Fleece layer on the inside and laminated with PUL layer on outside to make it leak proof.
• Super soft and comfortable
• Printed waterproof layer on the top.
• Dry Feel layer touchi.ng the skin for max comfort.
• 5 layers of Cotton padding.
• Breathable fabric.
• Age group for adult.
• Easy to use and wash.`,
    catID: 10,
    image: "/products/nursingPad.webp",
    material: "Cotton, Bamboo Fiber",
  },
  {
    id: "15",
    title: "Training Pants",
    description: `• Type - training pants.
• Age -3 month to 3 years
• Material - cotton
• Size - M/L/XL
• Gentle and comfortable elastic.
• Diaper free and mesh free experience.
• Highly absorbent quick dry.
• 3 layer of soft padding.
• Prints are made up of organic dyes
• Breathable fabric used to make training pant semi water proof.`,
    catID: 13,
    image: "/products/trainingpants.webp",
    material: "Cotton",
  },
  // {
  //   id: "16",
  //   title: "Muslin Swaddle",
  //   description: "Soft, breathable muslin swaddle for newborns.",
  //   catID: 7,
  //   material: "100% Organic Muslin Cotton",
  // },
];


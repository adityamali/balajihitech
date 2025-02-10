export enum madeFor {
  MOTHER = "mother",
  BABY = "baby",
}

export interface Category {
  catID: number;
  name: string;
  description: string;
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
  sizes?: string[];
  colors?: string[];
  material?: string;
  careInstructions?: string;
}

export const categories: Category[] = [
  {
    catID: 1,
    name: "Reusable Cloth Diaper",
    description: "some desc",
    image: "/images/banner.jpeg",
    tags: ["Cloth Diaper", "Reusable"],
  },
  {
    catID: 2,
    name: "Nappy",
    description: "some desc",
    image: "/images/banner.jpeg",
    tags: ["Cloth Diaper", "Reusable"],
  },
  {
    catID: 3,
    name: "Insert / Soaker",
    description: "some desc",
    image: "/images/banner.jpeg",
    tags: ["Cloth Diaper", "Reusable"],
  },
  {
    catID: 4,
    name: "Bib",
    description: "some desc",
    image: "/images/banner.jpeg",
    tags: ["Cloth Diaper", "Reusable"],
  },
  {
    catID: 5,
    name: "Baby Undergarments",
    description: "some desc",
    image: "/images/banner.jpeg",
    tags: ["Cloth Diaper", "Reusable"],
  },
  {
    catID: 6,
    name: "Padded shorts",
    description: "some desc",
    image: "/images/banner.jpeg",
    tags: ["Cloth Diaper", "Reusable"],
  },
  {
    catID: 7,
    name: "Muslin Products",
    description: "some desc",
    image: "/images/banner.jpeg",
    tags: ["Cloth Diaper", "Reusable"],
  },
];

export const products: Product[] = [
  {
    id: "1",
    title: "Baby Romper",
    price: 599,
    description:
      "Soft and comfortable cotton romper perfect for your little one.",
    catID: 1,
    image: "/products/romper.jpg",
    sizes: ["0-3M", "3-6M", "6-12M"],
    colors: ["#FFC0CB", "#87CEEB", "#FFFFFF"],
    material: "100% Organic Cotton",
    careInstructions: "Machine wash cold, tumble dry low",
  },
  {
    id: "2",
    title: "Baby T-Shirt",
    price: 299,
    description: "Comfortable cotton t-shirt for your little one.",
    catID: 1,
    image: "/products/tshirt.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#FFC0CB", "#87CEEB", "#FFFFFF"],
    material: "100% Organic Cotton",
    careInstructions: "Machine wash cold, tumble dry low",
  },
  {
    id: "3",
    title: "Baby Short",
    price: 199,
    description: "Comfortable cotton short for your little one.",
    catID: 1,
    image: "/products/short.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#FFC0CB", "#87CEEB", "#FFFFFF"],
    material: "100% Organic Cotton",
    careInstructions: "Machine wash cold, tumble dry low",
  },
];

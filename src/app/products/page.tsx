import { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products | Balaji Hi-Tech Garments",
  description: "Browse our collection of sustainable baby and mother care products including reusable cloth diapers, nappies, and more.",
  keywords: ["baby products", "mother care", "cloth diapers", "reusable diapers", "sustainable products"],
};

export default function ProductsPage() {
  return <ProductsClient />;
}
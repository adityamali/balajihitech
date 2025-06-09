import { Metadata } from "next";
import ContactForm from "./ContactForm";

// Export metadata for SEO
export const metadata: Metadata = {
  title: "Contact Us | Balaji Hi-Tech Garments",
  description: "Get in touch with Balaji Hi-Tech Garments for inquiries about our sustainable baby and mother care products.",
  keywords: ["contact", "baby products", "mother care", "sustainable garments", "Ichalkaranji"],
};

export default function ContactPage() {
  return <ContactForm />;
}
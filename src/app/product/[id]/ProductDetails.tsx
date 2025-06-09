"use client";
import { motion } from "framer-motion";
import { Product, Category } from "@/data/data";
import { useState } from "react";
import Image from "next/image";
import { Phone, Check, Info } from "lucide-react";
import Link from "next/link";

type ProductDetailsProps = {
  product: Product;
  category?: Category | null;
};

export default function ProductDetails({ product, category }: ProductDetailsProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
      className="flex flex-col space-y-6"
    >
      <motion.h1 
        variants={fadeIn}
        className="text-3xl font-bold"
      >
        {product.title}
      </motion.h1>
      
      {category && (
        <motion.div variants={fadeIn} className="flex items-center">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
            {category.name}
          </span>
          <span className="ml-2 text-sm text-muted-foreground">
            For {category.madeFor}
          </span>
        </motion.div>
      )}
      
      <motion.div variants={fadeIn} className="space-y-4">
        <h2 className="text-xl font-semibold">Product Details</h2>
        <p className="text-muted-foreground leading-relaxed">{product.description}</p>
      </motion.div>

      {/* Features */}
      <motion.div variants={fadeIn} className="space-y-4">
        <h2 className="text-xl font-semibold">Features</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <Check size={18} className="text-green-600 mt-1 flex-shrink-0" />
            <span>Eco-friendly and sustainable materials</span>
          </li>
          <li className="flex items-start gap-2">
            <Check size={18} className="text-green-600 mt-1 flex-shrink-0" />
            <span>Premium quality manufacturing</span>
          </li>
          <li className="flex items-start gap-2">
            <Check size={18} className="text-green-600 mt-1 flex-shrink-0" />
            <span>Designed for comfort and durability</span>
          </li>
        </ul>
      </motion.div>

      {/* Contact Buttons */}
      <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
        <motion.a
          href={`https://wa.me/919881372830?text=I'm%20interested%20in%20${encodeURIComponent(product.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#25D366] text-black py-3 px-6 rounded-md hover:opacity-90 transition-all flex justify-center items-center gap-2 w-full"
          aria-label="Connect on WhatsApp"
        >
          <Image
            src="/whatsapp.svg"
            alt="WhatsApp Logo"
            width={20}
            height={20}
          />
          <span>Connect on WhatsApp</span>
        </motion.a>

        <motion.a
          href="tel:+919881372830"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-black text-white py-3 px-6 rounded-md hover:opacity-90 transition-all flex justify-center items-center gap-2 w-full"
          aria-label="Call us"
        >
          <Phone size={20} className="text-white" />
          <span>Call Us</span>
        </motion.a>
      </motion.div>

      {/* Additional Information */}
      <motion.div variants={fadeIn} className="border-t pt-6 mt-6 space-y-4">
        {product.material && (
          <div>
            <h3 className="font-semibold flex items-center gap-2">
              Material
              <button 
                className="text-muted-foreground hover:text-foreground"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                aria-label="Material information"
              >
                <Info size={16} />
              </button>
              {showTooltip && (
                <div className="absolute bg-black text-white p-2 rounded text-xs max-w-xs">
                  We use high-quality, sustainable materials for all our products
                </div>
              )}
            </h3>
            <p className="text-muted-foreground">{product.material}</p>
          </div>
        )}
        
        {product.careInstructions && (
          <div>
            <h3 className="font-semibold">Care Instructions</h3>
            <p className="text-muted-foreground">{product.careInstructions}</p>
          </div>
        )}
      </motion.div>
      
      {/* Related Products Link */}
      {category && (
        <motion.div variants={fadeIn} className="pt-4">
          <Link 
            href={`/products?madeFor=${category.madeFor}`}
            className="text-primary hover:underline flex items-center gap-1"
          >
            View more {category.madeFor} products
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";
import { Product } from "@/data/data";
import { useState } from "react";

export default function ProductDetails({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string>();
  const [selectedColor, setSelectedColor] = useState<string>();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col space-y-6"
    >
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-2xl font-semibold text-primary">
        Rs {product.price}/-
      </p>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Product Details</h2>
        <p className="text-muted-foreground">{product.description}</p>
      </div>

      {/* Size Selection */}
      {product.sizes && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Select Size</h2>
          <div className="flex gap-4">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-md transition-colors ${
                  selectedSize === size
                    ? "bg-primary text-white"
                    : "hover:bg-primary hover:text-white"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Color Selection */}
      {product.colors && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Available Colors</h2>
          <div className="flex gap-4">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border cursor-pointer transition-transform ${
                  selectedColor === color ? "scale-110 ring-2 ring-primary" : ""
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Add to Cart Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          if (product.sizes && !selectedSize) {
            alert("Please select a size");
            return;
          }
          if (product.colors && !selectedColor) {
            alert("Please select a color");
            return;
          }
          // Add to cart logic here
        }}
        className="bg-primary text-white py-3 px-6 rounded-md hover:opacity-90 transition-opacity mt-8"
      >
        Add to Cart
      </motion.button>

      {/* Additional Information */}
      <div className="border-t pt-6 mt-6 space-y-4">
        <div>
          <h3 className="font-semibold">Material</h3>
          <p className="text-muted-foreground">{product.material}</p>
        </div>
        <div>
          <h3 className="font-semibold">Care Instructions</h3>
          <p className="text-muted-foreground">{product.careInstructions}</p>
        </div>
      </div>
    </motion.div>
  );
}

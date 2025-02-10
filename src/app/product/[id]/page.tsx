"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/data/data";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center mt-24 pt-8 pb-16">
      <div className="w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square rounded-xl overflow-hidden"
          >
            <Image
              src={product.image || "/products/placeholder.jpg"}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Product Details */}
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
                      className="px-4 py-2 border rounded-md hover:bg-primary hover:text-white transition-colors"
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
                    <div
                      key={color}
                      className="w-8 h-8 rounded-full border cursor-pointer"
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
                <p className="text-muted-foreground">
                  {product.careInstructions}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

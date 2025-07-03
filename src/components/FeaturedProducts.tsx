"use client";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardImage, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { products as allProducts, categories, madeFor } from "@/data/data";

export default function FeaturedProducts() {
  const [products, setProducts] = useState(allProducts.slice(0, 4));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading for a smoother UI experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of high-quality, sustainable products designed for both mothers and babies.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Link href={`/product/${product.id}`} className="block group">
                  <Card className="w-full h-full overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow">
                    <div className="relative aspect-square w-full">
                      {product.image ? 
                        <Image 
                          src={product.image} 
                          alt={product.title || 'Product image'}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        : 
                        <Image 
                          src={categories.find(cat => cat.catID === product.catID)?.madeFor === madeFor.MOTHER ? '/images/mother.png' : '/images/baby.png'}
                          alt={product.title || 'Product image'}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                            categories.find(cat => cat.catID === product.catID)?.madeFor === madeFor.MOTHER 
                              ? 'object-left'
                              : 'object-right'
                          }`}
                        />
                      }                          
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base text-center font-bold text-gray-800 line-clamp-2">{product.title}</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/80 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
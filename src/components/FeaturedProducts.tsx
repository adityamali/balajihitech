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
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl">
            Explore our collection of high-quality, sustainable products designed for both mothers and babies.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-64 rounded-lg mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                  <Link href={`/product/${product.id}`}>
                      <Card className="w-full h-full">
                        <div className="relative aspect-square w-full">
                          {product.image ? 
                          <Image 
                            src={product.image} 
                            alt={product.title || 'Product image'}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover rounded-t-lg"
                          />
                          : 
                          <Image 
                            src={categories.find(cat => cat.catID === product.catID)?.madeFor === madeFor.MOTHER ? '/images/mother.png' : '/images/baby.png'}
                            alt={product.title || 'Product image'}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className={`object-cover rounded-t-lg ${
                              categories.find(cat => cat.catID === product.catID)?.madeFor === madeFor.MOTHER 
                                ? 'object-left'
                                : 'object-right'
                            }`}
                          />
                          }                          
                        </div>
                        <CardHeader>
                          <CardTitle className="text-base line-clamp-2">{product.title}</CardTitle>
                        </CardHeader>
                      </Card>
                    </Link>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardImage, CardTitle } from './ui/card';
import { products, Product } from '@/data/data';
import { motion } from 'framer-motion';

export default function FeaturedProducts() {
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Memoize the product selection to avoid unnecessary re-renders
  const selectRandomProducts = useCallback(() => {
    setIsLoading(true);
    // Fisher-Yates shuffle algorithm for better randomization
    const shuffled = [...products];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setRandomProducts(shuffled.slice(0, 5));
    setIsLoading(false);
  }, []);
  
  useEffect(() => {
    selectRandomProducts();
  }, [selectRandomProducts]);

  return (
    <section className="w-full mt-16">
      <div className="w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
          <button 
            onClick={selectRandomProducts}
            className="text-sm text-primary hover:text-primary/80 transition-colors"
            aria-label="Refresh featured products"
          >
            Refresh
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {isLoading ? (
            // Loading skeleton
            Array(5).fill(0).map((_, index) => (
              <div key={index} className="w-full h-[280px] bg-gray-100 rounded-lg animate-pulse"></div>
            ))
          ) : (
            randomProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * parseInt(product.id) % 5 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href={`/product/${product.id}`}>
                  <Card className="w-full h-full overflow-hidden">
                    <div className="relative">
                      <CardImage className="w-full h-[200px]" />
                      {product.image && (
                        <div className="absolute inset-0">
                          <Image 
                            src={product.image || '/placeholder.jpg'} 
                            alt={product.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 250px"
                            className="object-cover"
                            priority={parseInt(product.id) <= 2}
                          />
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-base line-clamp-2">{product.title}</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
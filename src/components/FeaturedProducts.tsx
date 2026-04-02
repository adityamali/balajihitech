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
    <section className="py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary-900 mb-4 tracking-widest uppercase block">Our Highlights</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-sans tracking-tight">Featured Products</h2>
          <p className="text-gray-600 max-w-xl mx-auto font-sans text-lg">
            Curated essentials designed with sustainable fabrics for unparalleled comfort.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse bg-white p-4 rounded-3xl">
                <div className="bg-gray-100 h-64 rounded-2xl mb-6"></div>
                <div className="h-4 bg-gray-100 rounded-full w-3/4 mx-auto"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="h-full"
              >
                <Link 
                  href={`/product/${product.id}`} 
                  className="block group h-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-[2.5rem]"
                >
                  <Card className="w-full h-full overflow-hidden rounded-[2.5rem] border-4 border-white shadow-soft group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 bg-white/40 backdrop-blur-md group-hover:-translate-y-2 relative pb-4">
                    <div className="relative aspect-[4/5] w-full rounded-t-[2.2rem] rounded-b-xl overflow-hidden m-2 max-w-[calc(100%-16px)]">
                      {product.image ? 
                        <Image 
                          src={product.image} 
                          alt={product.title || 'Product image'}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        : 
                        <Image 
                          src={categories.find(cat => cat.catID === product.catID)?.madeFor === madeFor.MOTHER ? '/images/mother.png' : '/images/baby.png'}
                          alt={product.title || 'Product image'}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className={`object-cover group-hover:scale-105 transition-transform duration-700 ease-out ${
                            categories.find(cat => cat.catID === product.catID)?.madeFor === madeFor.MOTHER 
                              ? 'object-left'
                              : 'object-right'
                          }`}
                        />
                      }
                      {/* Hover Overlay Button */}
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 text-gray-900 rounded-full w-16 h-16 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-xl z-20">
                        <span className="font-bold text-sm tracking-tight">&rarr;</span>
                      </div>
                    </div>
                    <CardHeader className="pt-6 pb-4 px-6 flex justify-center items-center text-center">
                      <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2 font-sans group-hover:text-primary-900 transition-colors leading-snug">{product.title}</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center mt-20">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-12 py-4 border-2 border-primary text-lg font-bold rounded-full text-gray-900 bg-white hover:bg-primary/10 transition-all shadow-sm hover:shadow-md active:scale-95 group"
          >
            <span>View All Products</span>
            <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
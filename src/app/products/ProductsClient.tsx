"use client";
import { products, categories, madeFor } from "@/data/data";
import React, { useState, useMemo, useEffect, useCallback } from "react";
import Fuse from "fuse.js";
import { ChevronDown, ChevronUp, Filter, Loader2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardImage,
  CardTitle,
} from "@/components/ui/card";
import { ProductSearch } from "@/components/ui/ProductSearch";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMadeFor, setSelectedMadeFor] = useState<madeFor | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const madeForValues = Object.values(madeFor);

  console.log("Products:", products);
  
  // Set initial madeFor filter from URL params
  useEffect(() => {
    const madeForParam = searchParams.get("madeFor");
    if (
      madeForParam &&
      Object.values(madeFor).includes(madeForParam as madeFor)
    ) {
      setSelectedMadeFor(madeForParam as madeFor);
    }
    
    // Simulate loading state for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [searchParams]);

  const handleMadeForChange = useCallback((value: madeFor | null) => {
    setSelectedMadeFor(value);
    if (value) {
      router.push(`/products?madeFor=${value}`);
    } else {
      router.push("/products");
    }
  }, [router]);

  const fuse = useMemo(
    () =>
      new Fuse(products, {
        keys: ["title", "description"],
        threshold: 0.3,
        minMatchCharLength: 2,
        includeScore: true,
        shouldSort: true,
        distance: 100,
      }),
    []
  );

  const filteredProducts = useMemo(() => {
    let results = products;

    console.log("results :", results);

    // Apply fuzzy search if query exists
    if (searchQuery.trim()) {
      const fuseResults = fuse.search(searchQuery);
      results = fuseResults.map((result) => result.item);
    }

    // Apply filters
    return results.filter((product) => {
      const category = categories.find((cat) => cat.catID === product.catID);

      const matchesCategory = selectedCategory
        ? categories.find((cat) => cat.name === selectedCategory)?.catID ===
          product.catID
        : true;

      const matchesMadeFor = selectedMadeFor
        ? category?.madeFor === selectedMadeFor
        : true;

      return matchesCategory && matchesMadeFor;
    });
  }, [searchQuery, selectedCategory, selectedMadeFor, fuse]);

  return (
    <div className="min-h-screen bg-[#faf8f5] pt-32 pb-24 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-secondary/30 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[80px] pointer-events-none translate-y-1/4 -translate-x-1/4"></div>

      <main className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-sans text-gray-900 tracking-tight mb-4">Our Collection</h1>
          <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">Discover consciously crafted essentials designed with pure gentleness for mom and baby.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className="lg:w-1/4">
            <div className="sticky top-32">
              <div className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-8 shadow-soft border-4 border-white">
                <h3 className="text-2xl font-bold mb-6 font-sans text-gray-900">Filters</h3>

                {/* Made For Filter */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-4 font-sans tracking-wide uppercase text-sm">Made For</h4>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => handleMadeForChange(null)}
                      className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        selectedMadeFor === null
                          ? "bg-gray-900 text-white shadow-md hover:-translate-y-0.5"
                          : "bg-white text-gray-600 shadow-sm hover:shadow border border-gray-100 hover:-translate-y-0.5 hover:text-gray-900"
                      }`}
                    >
                      All
                    </button>
                    {madeForValues.map((madeForValue) => (
                      <button
                        key={madeForValue}
                        onClick={() => handleMadeForChange(madeForValue)}
                        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all capitalize outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                          selectedMadeFor === madeForValue
                            ? "bg-gray-900 text-white shadow-md hover:-translate-y-0.5"
                            : "bg-white text-gray-600 shadow-sm hover:shadow border border-gray-100 hover:-translate-y-0.5 hover:text-gray-900"
                        }`}
                      >
                        {madeForValue}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

        {/* Products Grid */}
        <div className="lg:w-3/4">
          {/* Search and Sort */}
          <div className="flex justify-between items-center mb-6">
            <div className="w-full max-w-sm">
              <ProductSearch
                placeholder="Search products..."
                onSearch={setSearchQuery}
              />
            </div>
            <p className="text-sm text-gray-500">
              {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {Array(6).fill(0).map((_, index) => (
                <div key={index} className="animate-pulse bg-white/40 rounded-[2.5rem] p-3 border-4 border-white shadow-soft">
                  <div className="bg-white/50 h-[300px] rounded-[2rem] mb-6"></div>
                  <div className="h-4 bg-white/60 rounded-full w-2/3 mx-auto mb-3"></div>
                  <div className="h-3 bg-white/50 rounded-full w-1/2 mx-auto"></div>
                </div>
              ))}
            </div>
          ) : (
            <AnimatePresence>
              {filteredProducts.length > 0 ? (
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 20 }}
                      transition={{ duration: 0.4 }}
                      className="h-full"
                    >
                      <Link href={`/product/${product.id}`} className="block h-full group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-[2.5rem]">
                        <Card className="w-full h-full overflow-hidden rounded-[2.5rem] border-4 border-white shadow-soft group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 bg-white/40 backdrop-blur-md group-hover:-translate-y-2 relative pb-4">
                          <div className="relative aspect-[4/5] w-full rounded-[2.2rem] overflow-hidden m-2 max-w-[calc(100%-16px)]">
                            <Image 
                              src={product.image || (categories.find(cat => cat.catID === product.catID)?.madeFor === madeFor.MOTHER ? '/images/mother.png' : '/images/baby.png')}
                              alt={product.title || 'Product image'}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className={`object-cover group-hover:scale-105 transition-transform duration-700 ease-out ${!product.image && categories.find(cat => cat.catID === product.catID)?.madeFor === madeFor.MOTHER ? 'object-left' : 'object-right'}`}
                            />
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
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 text-gray-500"
                >
                  <Filter size={48} className="mx-auto opacity-30 mb-4" />
                  <p className="text-lg font-medium">No products found.</p>
                  <p className="mt-2">Try adjusting your filters or search terms.</p>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
        </div>
      </main>
    </div>
  );  
}
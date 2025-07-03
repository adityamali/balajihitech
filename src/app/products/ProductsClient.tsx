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
    <main className="container mx-auto px-4 mt-28 pb-16">
      {/* <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Our Products</h1>
        <p className="text-lg text-gray-600 mt-2">Sustainable and comfortable products for mother and baby.</p>
      </div> */}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:w-1/4">
          <div className="sticky top-28">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Filters</h3>

              {/* Made For Filter */}
              <div>
                <h4 className="font-semibold mb-2">Made For</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleMadeForChange(null)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedMadeFor === null
                        ? "bg-primary text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    All
                  </button>
                  {madeForValues.map((madeForValue) => (
                    <button
                      key={madeForValue}
                      onClick={() => handleMadeForChange(madeForValue)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors capitalize ${
                        selectedMadeFor === madeForValue
                          ? "bg-primary text-white"
                          : "bg-gray-200 hover:bg-gray-300"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {Array(9).fill(0).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-200 rounded-lg h-64 w-full"></div>
                  <div className="mt-3 h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <AnimatePresence>
              {filteredProducts.length > 0 ? (
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                >
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="group"
                    >
                      <Link href={`/product/${product.id}`}>
                        <Card className="w-full h-full overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow">
                          <div className="relative aspect-square w-full">
                            <Image 
                              src={product.image || (categories.find(cat => cat.catID === product.catID)?.madeFor === madeFor.MOTHER ? '/images/mother.png' : '/images/baby.png')}
                              alt={product.title || 'Product image'}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <CardHeader className="p-4">
                            <CardTitle className="text-base text-center font-bold text-gray-800 line-clamp-2">{product.title}</CardTitle>
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
  );  
}
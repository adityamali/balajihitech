"use client";
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
import { getCategories, getProducts, getStrapiMedia } from "@/lib/strapi";

// Define madeFor enum to match your data structure
enum madeFor {
  MOTHER = "mother",
  BABY = "baby",
}

export default function ProductsClientStrapi() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMadeFor, setSelectedMadeFor] = useState<madeFor | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  const madeForValues = Object.values(madeFor);
  
  // Fetch data from Strapi
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const categoriesData = await getCategories();
        const productsData = await getProducts();

        console.log(productsData);
        
        setCategories(categoriesData || []);
        setProducts(productsData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  // Set initial madeFor filter from URL params
  useEffect(() => {
    const madeForParam = searchParams.get("madeFor");
    if (
      madeForParam &&
      Object.values(madeFor).includes(madeForParam as madeFor)
    ) {
      setSelectedMadeFor(madeForParam as madeFor);
    }
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
    [products]
  );

  const filteredProducts = useMemo(() => {
    if (isLoading) return [];
    
    let results = products;

    // Apply fuzzy search if query exists
    if (searchQuery.trim()) {
      const fuseResults = fuse.search(searchQuery);
      results = fuseResults.map((result) => result.item);
    }

    // Apply filters
    return results.filter((product) => {
      // Get the category directly from the product
      const category = product.category;

      const matchesCategory = selectedCategory
        ? category?.name === selectedCategory
        : true;

      const matchesMadeFor = selectedMadeFor
        ? category?.madeFor?.toLowerCase() === selectedMadeFor
        : true;

      return matchesCategory && matchesMadeFor;
    });
  }, [searchQuery, selectedCategory, selectedMadeFor, fuse, products, isLoading]);

  return (
    <main className="flex min-h-screen w-full justify-center items-start gap-4 mt-24 pb-16">
      <div className="w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)] flex flex-col lg:flex-row">
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="flex items-center justify-between w-full p-4 bg-primary/5 rounded-lg lg:hidden mb-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-expanded={isFiltersOpen}
          aria-controls="mobile-filters"
        >
          <span className="font-semibold flex items-center gap-2">
            <Filter size={18} />
            Filters
          </span>
          {isFiltersOpen ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>

        <div className="flex flex-col gap-6 w-full p-2 lg:p-6">
          {/* Search */}
          <div className="bg-white/80 backdrop-blur-sm z-10 py-4 sticky top-[100px]">
            <ProductSearch
              placeholder="Search products..."
              onSearch={setSearchQuery}
            />
          </div>

          {/* Mobile Filters */}
          <AnimatePresence>
            {isFiltersOpen && (
              <motion.div
                id="mobile-filters"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden lg:hidden"
              >
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Made For</h3>
                  <div className="flex flex-wrap gap-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleMadeForChange(null)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors
                      ${
                        selectedMadeFor === null
                          ? "bg-primary text-white"
                          : "bg-primary/10 hover:bg-primary/20"
                      }`}
                      aria-pressed={selectedMadeFor === null}
                    >
                      All
                    </motion.button>
                    {madeForValues.map((madeForValue) => (
                      <motion.button
                        key={madeForValue}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleMadeForChange(madeForValue)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors
                        ${
                          selectedMadeFor === madeForValue
                            ? "bg-primary text-white"
                            : "bg-primary/10 hover:bg-primary/20"
                        }`}
                        aria-pressed={selectedMadeFor === madeForValue}
                      >
                        {madeForValue}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Filters */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold mb-4">Made For</h3>
            <div className="flex flex-wrap gap-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleMadeForChange(null)}
                className={`px-4 py-2 rounded-full text-sm transition-colors
                ${
                  selectedMadeFor === null
                    ? "bg-primary text-white"
                    : "bg-primary/10 hover:bg-primary/20"
                }`}
                aria-pressed={selectedMadeFor === null}
              >
                All
              </motion.button>
              {madeForValues.map((madeForValue) => (
                <motion.button
                  key={madeForValue}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleMadeForChange(madeForValue)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors
                  ${
                    selectedMadeFor === madeForValue
                      ? "bg-primary text-white"
                      : "bg-primary/10 hover:bg-primary/20"
                  }`}
                  aria-pressed={selectedMadeFor === madeForValue}
                >
                  {madeForValue}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              {selectedMadeFor 
                ? `${selectedMadeFor.charAt(0).toUpperCase() + selectedMadeFor.slice(1)} Products` 
                : "All Products"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} found
            </p>
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array(8).fill(0).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-200 rounded-lg h-[200px] w-full"></div>
                  <div className="mt-2 h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5 }}
                  >
                    <Link href={`/product/${product.documentId}`}>
                      <Card className="w-full h-full">
                        <div className="relative aspect-square w-full">
                          {product.image && product.image.length > 0 ? 
                          <Image 
                            src= {getStrapiMedia(product.image[0].url)} 
                            alt={product.title || 'Product image'}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover rounded-t-lg"
                          />
                          : 
                            <Image 
                              src={product.category?.madeFor === 'MOTHER' ? '/images/mother.png' : '/images/baby.png'}
                              alt={product.title || 'Product image'}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                              className={`object-cover rounded-t-lg ${
                                product.category?.madeFor === 'MOTHER' 
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

              {/* No Results Message */}
              {filteredProducts.length === 0 && !isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 text-muted-foreground"
                >
                  <div className="mb-4">
                    <Filter size={48} className="mx-auto opacity-20" />
                  </div>
                  <p className="text-lg font-medium">No products found matching your criteria.</p>
                  <p className="mt-2">Try adjusting your filters or search terms.</p>
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="mt-4 text-primary hover:underline"
                    >
                      Clear search
                    </button>
                  )}
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );  
}
"use client";
import { products, categories, madeFor } from "@/data/data";
import React, { useState, useMemo, useEffect } from "react";
import Fuse from "fuse.js";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Card,
  CardHeader,
  CardImage,
  // CardPrice,
  CardTitle,
} from "@/components/ui/card";
import { ProductSearch } from "@/components/ui/ProductSearch";
// import Filters from "@/components/ui/Filters";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";

function page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMadeFor, setSelectedMadeFor] = useState<madeFor | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const madeForValues = Object.values(madeFor);

  // Set initial madeFor filter from URL params and update URL when filter changes
  useEffect(() => {
    const madeForParam = searchParams.get("madeFor");
    if (
      madeForParam &&
      Object.values(madeFor).includes(madeForParam as madeFor)
    ) {
      setSelectedMadeFor(madeForParam as madeFor);
    }
  }, [searchParams]);

  const handleMadeForChange = (value: madeFor | null) => {
    setSelectedMadeFor(value);
    if (value) {
      router.push(`/products?madeFor=${value}`);
    } else {
      router.push("/products");
    }
  };

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
    <div className="flex min-h-screen w-full justify-center items-start gap-4 mt-24 pb-16">
      <div className="w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)] flex flex-col lg:flex-row">
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="flex items-center justify-between w-full p-4 bg-primary/5 rounded-lg lg:hidden mb-4"
        >
          <span className="font-semibold">Filters</span>
          {isFiltersOpen ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>

        <div className="flex flex-col gap-4 w-full p-2 lg:p-6">
          {/* Search */}
          <div className="bg-white/80 backdrop-blur-sm z-10 py-4">
            <ProductSearch
              placeholder="Search products..."
              onSearch={setSearchQuery}
            />
          </div>

          <div>
            <h3 className="mb-4">Made For</h3>
            <div className="flex">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleMadeForChange(null)}
                className={`px-4 py-2 rounded-full text-sm text-left transition-colors
              ${
                selectedMadeFor === null
                  ? "bg-primary text-white"
                  : "bg-primary/10 hover:bg-primary/20"
              }`}
              >
                All
              </motion.button>
              {madeForValues.map((madeFor) => (
                <motion.button
                  key={madeFor}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleMadeForChange(madeFor)}
                  className={`px-4 py-2 rounded-full text-sm text-left transition-colors
                ${
                  selectedMadeFor === madeFor
                    ? "bg-primary text-white"
                    : "bg-primary/10 hover:bg-primary/20"
                }`}
                >
                  {madeFor}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <Card key={product.id} className="w-full">
                  <CardImage />
                  <CardHeader>
                    <CardTitle className="text-base">{product.title}</CardTitle>
                    {/* <CardPrice>Rs {product.price}/-</CardPrice> */}
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No products found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;

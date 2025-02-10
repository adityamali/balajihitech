"use client";
import { products, categories, madeFor } from "@/data/data";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Card,
  CardHeader,
  CardImage,
  CardPrice,
  CardTitle,
} from "@/components/ui/card";
import { Search } from "@/components/ui/search";
import Filters from "@/components/ui/Filters";

function page() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full justify-center items-start gap-4 mt-24 pb-16">
      <div className="w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)] flex flex-col lg:flex-row">
        {/* Filters Toggle for Mobile */}
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

        {/* Filters */}
        <div
          id="filters"
          className={`w-full lg:w-[20%] lg:sticky lg:top-24 lg:h-fit transition-all duration-300 ease-in-out ${
            isFiltersOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"
          } overflow-hidden`}
        >
          <Filters />
        </div>

        <div className="flex flex-col gap-4 w-full p-2 lg:p-6">
          {/* Search */}
          <div className="sticky top-24 bg-white/80 backdrop-blur-sm z-10 py-4">
            <Search />
          </div>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.slice(0, 5).map((product) => (
              <Card key={product.id} className="w-full">
                <CardImage />
                <CardHeader>
                  <CardTitle className="text-base">{product.title}</CardTitle>
                  <CardPrice>Rs {product.price}/-</CardPrice>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

"use client";

import { categories, madeFor } from "@/data/data";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Filters() {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<
    string | null
  >(null);
  const [selectedMadeForFilter, setSelectedMadeForFilter] =
    useState<madeFor | null>(null);

  // Get unique categories from Cat data
  const uniqueCategories = categories.map((category) => category.name);
  const madeForValues = Object.values(madeFor);

  return (
    <div className="w-full mb-8 space-y-6 p-6 bg-gray-100 rounded-lg mt-24">
      <div>
        <h3 className="mb-4">Made For</h3>
        <div className="grid grid-cols-1 gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedMadeForFilter(null)}
            className={`px-4 py-2 rounded-full text-sm text-left transition-colors
              ${
                selectedMadeForFilter === null
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
              onClick={() => setSelectedMadeForFilter(madeFor)}
              className={`px-4 py-2 rounded-full text-sm text-left transition-colors
                ${
                  selectedMadeForFilter === madeFor
                    ? "bg-primary text-white"
                    : "bg-primary/10 hover:bg-primary/20"
                }`}
            >
              {madeFor}
            </motion.button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-4">Filter by Category</h3>
        <div className="grid grid-cols-1 gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCategoryFilter(null)}
            className={`px-4 py-2 rounded-full text-sm text-left transition-colors
              ${
                selectedCategoryFilter === null
                  ? "bg-primary text-white"
                  : "bg-primary/10 hover:bg-primary/20"
              }`}
          >
            All
          </motion.button>
          {uniqueCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategoryFilter(category)}
              className={`px-4 py-2 rounded-full text-sm text-left transition-colors
                ${
                  selectedCategoryFilter === category
                    ? "bg-primary text-white"
                    : "bg-primary/10 hover:bg-primary/20"
                }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

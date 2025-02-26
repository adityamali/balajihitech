"use client";

import { categories, madeFor } from "@/data/data";
import { motion } from "framer-motion";

interface FiltersProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedMadeFor: madeFor | null;
  setSelectedMadeFor: (madeFor: madeFor | null) => void;
}

export default function Filters({
  selectedCategory,
  setSelectedCategory,
  selectedMadeFor,
  setSelectedMadeFor,
}: FiltersProps) {
  // Remove local state and use props instead
  const uniqueCategories = categories.map((category) => category.name);
  const madeForValues = Object.values(madeFor);

  return (
    <div className="w-full mb-8 space-y-6 p-6 bg-gray-100 rounded-lg">
      <div>
        <h3 className="mb-4">Made For</h3>
        <div className="grid grid-cols-1 gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedMadeFor(null)}
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
              onClick={() => setSelectedMadeFor(madeFor)}
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

      <div>
        <h3 className="mb-4">Filter by Category</h3>
        <div className="grid grid-cols-1 gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm text-left transition-colors
              ${
                selectedCategory === null
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
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm text-left transition-colors
                ${
                  selectedCategory === category
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

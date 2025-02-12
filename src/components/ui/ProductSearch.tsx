"use client";

import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

interface ProductSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function ProductSearch({ onSearch, placeholder = "Search..." }: ProductSearchProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex gap-2">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              onSearch(e.target.value);
            }}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <SearchIcon size={20} />
          Search
        </button>
      </div>
    </form>
  );
}
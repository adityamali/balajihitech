"use client";

import { Search as SearchIcon, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ProductSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function ProductSearch({ onSearch, placeholder = "Search..." }: ProductSearchProps) {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle keyboard shortcut (Ctrl+K or Cmd+K) to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  const handleClear = () => {
    setInputValue("");
    onSearch("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex gap-2">
        <motion.div 
          className={`relative flex-1 rounded-md transition-shadow ${
            isFocused ? "ring-2 ring-primary/50" : ""
          }`}
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.995 }}
        >
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              onSearch(e.target.value);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            aria-label="Search products"
            className="w-full pl-10 pr-10 py-3 border rounded-md focus:outline-none"
          />
          
          {inputValue && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
          
          {isFocused && (
            <div className="absolute right-12 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 hidden md:block">
              <kbd className="px-2 py-1 bg-gray-100 rounded">Ctrl+K</kbd>
            </div>
          )}
        </motion.div>
        
        <motion.button
          type="submit"
          className="px-4 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Search"
        >
          <SearchIcon size={18} />
          <span className="hidden sm:inline">Search</span>
        </motion.button>
      </div>
    </form>
  );
}
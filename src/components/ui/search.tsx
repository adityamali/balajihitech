"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Input from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

export function Search({ className, onSearch, ...props }: SearchProps) {
  const [value, setValue] = React.useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearch?.(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("relative flex gap-2", className)}
    >
      <div className="relative flex-1">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        <Input
          type="search"
          placeholder="Search products..."
          className="pl-8 w-full"
          value={value}
          onChange={handleSearch}
          {...props}
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition-opacity flex items-center gap-2"
      >
        <SearchIcon size={20} />
        Search
      </button>
    </form>
  );
}

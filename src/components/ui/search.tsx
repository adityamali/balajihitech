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

  return (
    <div className={cn("relative", className)}>
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
      <Input
        type="search"
        placeholder="Search..."
        className="pl-8"
        value={value}
        onChange={handleSearch}
        {...props}
      />
    </div>
  );
}

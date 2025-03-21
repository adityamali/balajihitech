"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`w-full top-0 left-0 fixed bg-white/80 backdrop-blur-sm transition-all duration-300 z-50 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex justify-between items-center bg-primary"></div>
      <div className="flex justify-between items-center px-4 sm:px-8 lg:px-16 py-6 md:py-8">
        <div className="text-xl sm:text-2xl font-bold">
          <div id="logo" className="text-primary-900">
            <Link href={"/"}>Balaji Hi Tech Garment</Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8">
          <Link href={"/"} className="p-2">
            Home
          </Link>
          <Link href={"/products"} className="p-2">
            Products
          </Link>
          <Link href={"/materials"} className="p-2">
            Materials
          </Link>
          <Link href={"/about"} className="p-2">
            About
          </Link>
          <Link href={"/ethics"} className="p-2">
            Ethics
          </Link>
          <Link href={"/contact"} className="bg-primary py-2 px-4 rounded">
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full min-h-screen left-0 right-0 bg-white/95 backdrop-blur-sm lg:hidden py-4 shadow-lg z-50">
            <div className="flex flex-col items-center gap-4">
              <Link
                href={"/"}
                className="p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href={"/products"}
                className="p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href={"/materials"}
                className="p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Materials
              </Link>
              <Link
                href={"/about"}
                className="p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href={"/ethics"}
                className="p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ethics
              </Link>
              <Link
                href={"/contact"}
                className="bg-primary py-2 px-4 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;

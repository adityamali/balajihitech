"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Optimize scroll handler with useCallback
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  // Add scroll listener with passive option for better performance
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/materials", label: "Materials" },
    { href: "/about", label: "About" },
    { href: "/ethics", label: "Ethics" },
    { href: "/contact", label: "Contact", isButton: true }
  ];

  return (
    <motion.header
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      className={`fixed top-4 left-1/2 w-[92%] max-w-7xl rounded-full transition-all duration-300 z-50 border border-white/20 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl shadow-soft py-2" : "bg-white/40 backdrop-blur-md shadow-sm py-3"
      } 
      ${isMenuOpen ? "bg-white !rounded-2xl" : ""}`}
    >
      <div className="flex justify-between items-center px-6 md:px-10">
        <div >
          <Link href="/" className="text-primary-900 block" aria-label="Balaji Hi-Tech Garments - Home">
            <Image 
              src="/icon.png" 
              alt="Balaji Hi-Tech Garments Logo" 
              width={270} 
              height={54} 
              priority 
              className="w-auto h-auto max-w-[200px] sm:max-w-[140px] lg:max-w-[280px]"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-6 xl:gap-10 text-[1.05rem] font-sans items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                link.isButton
                  ? "bg-primary text-gray-900 hover:bg-secondary/70 hover:shadow-md py-2.5 px-6 rounded-full font-bold transition-all hover:-translate-y-0.5 active:scale-95"
                  : `py-1.5 px-3 rounded-full relative transition-all text-gray-700 hover:text-gray-900 hover:bg-white/50 ${
                      pathname === link.href ? "bg-white shadow-sm font-semibold text-gray-900" : ""
                    }`
              }`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-[80px] left-0 right-0 bg-white/95 backdrop-blur-xl lg:hidden py-6 shadow-soft rounded-2xl z-50 overflow-hidden mx-4 border border-gray-100"
            >
              <nav className="flex flex-col items-center gap-6 pt-8">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * navLinks.indexOf(link) }}
                  >
                    <Link
                      href={link.href}
                      className={`block w-full text-center p-3 text-xl font-sans rounded-xl transition-colors ${
                        link.isButton
                          ? "bg-secondary text-gray-900 py-4 font-bold max-w-xs mx-auto shadow-sm"
                          : pathname === link.href
                          ? "bg-primary/10 font-bold text-gray-900"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={pathname === link.href ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
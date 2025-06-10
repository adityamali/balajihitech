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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`w-full top-0 left-0 fixed bg-white/90 backdrop-blur-sm transition-all duration-300 z-50 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="h-1 bg-primary w-full"></div>
      <div className="flex justify-between items-center px-4 sm:px-8 lg:px-16 py-4 md:py-6">
        <div className="text-xl sm:text-2xl font-bold">
          <Link href="/" className="text-primary-900 block" aria-label="Balaji Hi-Tech Garments - Home">
            <Image 
              src="/icon.png" 
              alt="Balaji Hi-Tech Garments Logo" 
              width={270} 
              height={54} 
              priority 
              className="w-auto h-auto"
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
        <nav className="hidden lg:flex gap-8 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                link.isButton
                  ? "bg-primary text-white hover:bg-primary/90 py-2 px-4 rounded transition-colors"
                  : `p-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full ${
                      pathname === link.href ? "after:w-full" : ""
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
              className="fixed top-[73px] left-0 right-0 bg-white/98 backdrop-blur-md lg:hidden py-4 shadow-lg z-50 overflow-auto bg-white"
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
                      className={`p-3 text-lg ${
                        link.isButton
                          ? "bg-primary text-white py-2 px-6 rounded-full"
                          : pathname === link.href
                          ? "font-medium text-primary"
                          : ""
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
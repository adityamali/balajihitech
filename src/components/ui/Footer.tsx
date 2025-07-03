'use client';

import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <footer className="bg-secondary/20 mt-16 bg-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Balaji Hi Tech Garment</h3>
            <p className="text-gray-600">
              Quality garments for babies and mothers, crafted with care and comfort in mind.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" className="text-gray-500 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-500 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-gray-600 hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/products?madeFor=baby" className="text-gray-600 hover:text-primary transition-colors">Baby Products</Link></li>
              <li><Link href="/products?madeFor=mother" className="text-gray-600 hover:text-primary transition-colors">Mother Care</Link></li>
              <li><Link href="/materials" className="text-gray-600 hover:text-primary transition-colors">Materials</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary" />
                <span>G.NO. -486, Bhatale Mala, Datt Nagar, Ichalkaranji - 416115</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <span>+91 9881372830</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <span>balajihitechg@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>© {currentYear} Balaji Hi Tech Garment. All rights reserved. • <Link href="/privacy" className="hover:text-primary underline">Privacy Policy</Link></p>
          <p className="mt-1">Designed and developed by <Link href="https://adityamali.com" className="hover:text-primary font-semibold" target="_blank" rel="noopener noreferrer">Aditya Mali</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
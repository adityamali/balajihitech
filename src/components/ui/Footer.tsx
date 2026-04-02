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
    <footer className="mt-32 relative text-gray-800">
      <div className="bg-secondary/30 pt-16 pb-12 rounded-t-[3rem] relative z-10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] border-t-[8px] border-white">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 font-sans text-gray-900 tracking-tight">Balaji Hi-Tech<br/>Garments</h3>
            <p className="text-gray-700 leading-relaxed font-sans">
              Quality garments for babies and mothers, crafted with care and comfort in mind.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-600 hover:bg-primary hover:text-gray-900 hover:shadow-soft hover:-translate-y-1 transition-all" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-600 hover:bg-primary hover:text-gray-900 hover:shadow-soft hover:-translate-y-1 transition-all" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-sans text-gray-900">Quick Links</h4>
            <ul className="space-y-4 font-sans">
              <li><Link href="/" className="inline-block relative text-gray-700 hover:text-gray-900 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 hover:after:w-full after:transition-all">Home</Link></li>
              <li><Link href="/products" className="inline-block relative text-gray-700 hover:text-gray-900 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 hover:after:w-full after:transition-all">Products</Link></li>
              <li><Link href="/about" className="inline-block relative text-gray-700 hover:text-gray-900 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 hover:after:w-full after:transition-all">About Us</Link></li>
              <li><Link href="/contact" className="inline-block relative text-gray-700 hover:text-gray-900 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 hover:after:w-full after:transition-all">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-sans text-gray-900">Products</h4>
            <ul className="space-y-4 font-sans">
              <li><Link href="/products?madeFor=baby" className="inline-block relative text-gray-700 hover:text-gray-900 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 hover:after:w-full after:transition-all">Baby Products</Link></li>
              <li><Link href="/products?madeFor=mother" className="inline-block relative text-gray-700 hover:text-gray-900 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 hover:after:w-full after:transition-all">Mother Care</Link></li>
              <li><Link href="/materials" className="inline-block relative text-gray-700 hover:text-gray-900 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 hover:after:w-full after:transition-all">Materials</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-sans text-gray-900">Contact Us</h4>
            <div className="space-y-4 text-gray-700 font-sans">
              <div className="flex items-start space-x-4">
                <MapPin size={24} className="text-primary mt-1 flex-shrink-0" />
                <span className="leading-relaxed">G.NO. -486, Bhatale Mala,<br/>Datt Nagar, Ichalkaranji - 416115</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span>+91 9881372830</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span>balajihitechg@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/40 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 font-sans gap-4">
          <p>© {currentYear} Balaji Hi-Tech Garments. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-gray-900 hover:underline transition-colors">Privacy Policy</Link>
            <span className="text-gray-400">|</span>
            <p>Designed by <Link href="https://adityamali.com" className="hover:text-gray-900 font-bold transition-colors" target="_blank" rel="noopener noreferrer">Aditya Mali</Link></p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
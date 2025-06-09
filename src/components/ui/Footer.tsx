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
    <footer className="bg-primary mt-16">
      <div className="flex flex-col w-full justify-between items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] lg:w-[calc(100vw-8rem)] py-12 px-4">
          {/* Company Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            className="text-center sm:text-left"
          >
            <h3 className="text-xl font-bold mb-3">Balaji Hi Tech Garment</h3>
            <p className="text-muted-foreground">
              Quality garments for babies and mothers, crafted with care and
              comfort in mind.
            </p>
            <div className="flex space-x-4 pt-4 justify-center sm:justify-start">
              <Link href="https://facebook.com" className="hover:text-white p-2 hover:bg-black/10 rounded-full transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com" className="hover:text-white p-2 hover:bg-black/10 rounded-full transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeInUp}
            className="text-center sm:text-left"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white flex items-center gap-1 w-fit mx-auto sm:mx-0">
                  Home
                  <ArrowUpRight size={14} className="opacity-70" />
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white flex items-center gap-1 w-fit mx-auto sm:mx-0">
                  Products
                  <ArrowUpRight size={14} className="opacity-70" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white flex items-center gap-1 w-fit mx-auto sm:mx-0">
                  About Us
                  <ArrowUpRight size={14} className="opacity-70" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white flex items-center gap-1 w-fit mx-auto sm:mx-0">
                  Contact
                  <ArrowUpRight size={14} className="opacity-70" />
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
            className="text-center sm:text-left"
          >
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?madeFor=baby" className="hover:text-white flex items-center gap-1 w-fit mx-auto sm:mx-0">
                  Baby Products
                  <ArrowUpRight size={14} className="opacity-70" />
                </Link>
              </li>
              <li>
                <Link href="/products?madeFor=mother" className="hover:text-white flex items-center gap-1 w-fit mx-auto sm:mx-0">
                  Mother Care
                  <ArrowUpRight size={14} className="opacity-70" />
                </Link>
              </li>
              <li>
                <Link href="/materials" className="hover:text-white flex items-center gap-1 w-fit mx-auto sm:mx-0">
                  Materials
                  <ArrowUpRight size={14} className="opacity-70" />
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeInUp}
            className="text-center sm:text-left"
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <Link
                href="https://www.google.com/maps/place/16°42'26.4%22N+74°27'35.4%22E/@16.7061362,74.4549213,3141m/data=!3m1!1e3!4m4!3m3!8m2!3d16.7073333!4d74.4598333?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
                className="hover:text-white group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center space-x-3 justify-center sm:justify-start">
                  <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                    <MapPin size={18} className="text-black" />
                  </div>
                  <span className="text-sm">
                    G.NO. -486, Bhatale Mala, Datt Nagar, Ichalkaranji - 416115
                  </span>
                </div>
              </Link>
              <Link href="tel:+919881372830" className="hover:text-white group">
                <div className="flex items-center space-x-3 justify-center sm:justify-start">
                  <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                    <Phone size={18} className="text-black" />
                  </div>
                  <span className="text-sm">+91 9881372830</span>
                </div>
              </Link>
              <Link
                href="mailto:balajihitechg@gmail.com"
                className="hover:text-white group"
              >
                <div className="flex items-center space-x-3 justify-center sm:justify-start">
                  <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                    <Mail size={18} className="text-black" />
                  </div>
                  <span className="text-sm">balajihitechg@gmail.com</span>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 w-full py-6 text-center text-sm text-muted-foreground">
          <p className="px-4">
            © {currentYear} Balaji Hi Tech Garment. All rights
            reserved.
            {" • "}
            <Link href="/privacy" className="hover:text-white underline">
              Privacy Policy
            </Link>
          </p>
          <p className="mt-1">
            Designed and developed by{" "}
            <Link
              href="https://adityamali.com"
              className="hover:text-white font-semibold pl-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aditya Mali
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
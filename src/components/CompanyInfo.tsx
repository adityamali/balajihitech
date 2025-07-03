'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function CompanyInfo() {
  return (
    <section className="w-full bg-secondary/20 mt-16 py-20 md:py-32 text-center sm:text-left">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg image-hover">
              <Image
                src="/ethics/fair.jpg"
                alt="Balaji Hi-Tech Garment facility"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Balaji Hi-Tech</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Balaji Hi-Tech Garment is a leading manufacturer of reusable cloth diapers, period panties, and reusable sanitary pads, offering sustainable solutions for daily hygiene. We focus on eco-friendly, technical textile products that combine comfort, durability, and environmental care.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our innovative products help reduce the burden of non-biodegradable waste, making a positive impact on the environment. With an in-house lab and a strong R&D focus, we continuously innovate for better performance and sustainability.
            </p>
            
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary/80 transition-colors"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CompanyInfo;
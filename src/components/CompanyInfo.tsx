'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function CompanyInfo() {
  return (
    <section className="w-full relative mt-32 py-24 bg-white overflow-hidden">
      {/* Decorative large text behind */}
      <div className="absolute top-0 left-0 w-full text-center overflow-hidden z-0 pointer-events-none opacity-5">
        <h2 className="text-[8rem] font-black whitespace-nowrap tracking-tighter">BALAJI HI-TECH</h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-0 lg:-space-x-12">

          {/* Main Image Block */}
          <motion.div
            className="w-full lg:w-3/5 z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-xl border-[12px] border-white/60 backdrop-blur-sm">
              <Image
                src="/ethics/fair.jpg"
                alt="Balaji Hi-Tech Garment facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
          </motion.div>

          {/* Overlapping Content Block */}
          <motion.div
            className="w-full lg:w-2/5 z-20 mt-[-50px] lg:mt-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-16 h-2 bg-secondary rounded-full mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-sans leading-tight">Crafting Comfort <br /><span className="text-gray-400">&</span> Care</h2>
              <p className="text-gray-600 mb-6 leading-relaxed font-sans text-lg">
                Balaji Hi-Tech Garments pioneers sustainable hygiene with reusable cloth diapers, period panties, and eco-conscious apparel.
              </p>
              <p className="text-gray-500 mb-10 leading-relaxed font-sans mt-2">
                Merging technical textiles with environmental responsibility since inception.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-4 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary hover:text-gray-900 transition-all shadow-md active:scale-95 group"
              >
                Our Legacy
                <span className="bg-white/20 p-2 rounded-full group-hover:bg-gray-900/10 transition-colors">
                  <ArrowRight size={18} />
                </span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default CompanyInfo;
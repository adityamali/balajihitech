"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Script from "next/script";

const faqs = [
  {
    question: "Why choose reusable cloth diapers for my baby?",
    answer: "Reusable cloth diapers are highly breathable, reducing the risk of diaper rash caused by synthetic chemicals in disposables. They are economically efficient over time and significantly lower your family's carbon footprint by keeping plastics out of landfills.",
  },
  {
    question: "How do I wash and maintain reusable cloth diapers?",
    answer: "Knock solid waste into the toilet, run a cold pre-wash, followed by a hot wash with cloth-safe detergent. Avoid fabric softeners and bleach, as they can degrade the absorbent materials. Tumble dry on low or line dry in the sun for natural stain removal.",
  },
  {
    question: "Are your products environmentally sustainable?",
    answer: "Yes. Balaji Hi-Tech Garments strictly utilizes sustainable, non-toxic textiles. By manufacturing washable products, we reduce single-use waste. Our production processes in Ichalkaranji prioritize energy efficiency and ethical labor practices.",
  },
  {
    question: "What materials are used in Balaji Hi-Tech garments?",
    answer: "We use premium organic cotton, bamboo terry, and stay-dry microfleece. These materials are chosen for their hypoallergenic properties, supreme absorbency, and softness against sensitive baby and maternal skin.",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="relative w-full py-24 bg-[#faf8f5] overflow-hidden">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Ambient Blur */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <span className="bg-white border-2 border-primary/20 text-primary-900 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-4 inline-block shadow-sm">
            Knowledge Base
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-sans tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white/80 backdrop-blur-md border-2 transition-colors duration-300 rounded-[2rem] overflow-hidden shadow-soft ${openIndex === index ? 'border-primary' : 'border-white hover:border-gray-200'}`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <h3 className="text-xl font-bold font-sans text-gray-900 pr-8">{faq.question}</h3>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary text-gray-900' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-2 text-gray-600 leading-relaxed text-lg font-sans">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const materials = [
  {
    id: 1,
    name: "100% Organic Cotton",
    description:
      "A natural, hypoallergenic textile utilized by Balaji Hi-Tech. It is highly breathable, preventing diaper rash by ensuring optimal airflow. It is sustainably sourced to minimize pesticide runoff.",
    image: "/materials/cotton.jpg",
    properties: ["Breathable", "Hypoallergenic", "Soft", "Durable"],
  },
  {
    id: 2,
    name: "Sustainable Bamboo Terry",
    description:
      "Bamboo terry provides exceptional absorption capacity for reusable baby diapers. It is naturally antibacterial, thermal-regulating, and significantly more sustainable than synthetic microfiber materials.",
    image: "/materials/bamboo.jpg",
    properties: [
      "Antibacterial",
      "Eco-friendly",
      "Temperature Regulating",
      "Ultra-soft",
    ],
  },
  {
    id: 3,
    name: "Breathable Organic Muslin",
    description:
      "An ultra-lightweight and permeable fabric ideal for swaddles. Muslin reduces the risk of overheating in infants while dynamically adapting to physiological temperature changes, making it vital for early childhood care.",
    image: "/materials/muslin.jpg",
    properties: [
      "Lightweight",
      "Breathable",
      "Gets softer with wash",
      "Natural",
    ],
  },
];

export default function MaterialsPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] pt-32 pb-24 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-secondary/30 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[80px] pointer-events-none translate-y-1/4 -translate-x-1/4"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-sans text-gray-900 tracking-tight mb-4">Our Materials</h1>
          <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
            We carefully select premium materials that are gentle on skin, environmentally conscious, and maintain the highest quality standards.
          </p>
        </div>
        {/* Materials Showcase */}
        <div className="w-full flex flex-col gap-16 mb-24 mt-8">
          {materials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden group border-4 border-white shadow-soft"
            >
              <motion.div
                className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.3,
                  duration: 0.6,
                }}
              >
                <Image
                  src={material.image}
                  alt={material.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
              </motion.div>

              <motion.div
                className="relative h-full p-6 md:p-10 flex flex-col justify-end items-start md:items-end z-10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
              >
                <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] max-w-2xl text-left border-4 border-white shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                  <motion.h3
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans tracking-tight"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.2 }}
                  >
                    {material.name}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 mb-6 font-sans leading-relaxed text-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.3 }}
                  >
                    {material.description}
                  </motion.p>
                  <div className="space-y-3">
                    <motion.h4
                      className="font-bold mb-3 text-xs tracking-wider uppercase text-gray-400 font-sans"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.3 + 0.4 }}
                    >
                      Key Properties
                    </motion.h4>
                    <div className="flex flex-wrap gap-2">
                      {material.properties.map((property, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ delay: 0.1, duration: 0.2 }}
                          className="bg-white border border-gray-100 shadow-sm text-gray-700 text-sm font-bold px-5 py-2 rounded-full"
                        >
                          {property}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        {/* Quality Assurance Section */}
        <div className="bg-white/60 backdrop-blur-md w-full py-16 text-center mt-10 rounded-[3rem] border-4 border-white shadow-soft relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[60px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-gray-900 mb-6">Our Quality Commitment</h2>
            <p className="text-lg md:text-xl text-gray-600 font-sans leading-relaxed">
              Every material undergoes rigorous testing to ensure it meets our high standards for safety, comfort, and durability. We prioritize sustainable and ethical sourcing practices while maintaining premium quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

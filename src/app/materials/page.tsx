"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const materials = [
  {
    id: 1,
    name: "Cotton",
    description:
      "Breathable, soft, and gentle on baby's delicate skin. Our cotton is carefully selected for its premium quality and durability.",
    image: "/materials/cotton.jpg",
    properties: ["Breathable", "Hypoallergenic", "Soft", "Durable"],
  },
  {
    id: 2,
    name: "Bamboo Fiber",
    description:
      "Naturally antibacterial and eco-friendly. Bamboo fiber offers exceptional comfort while being sustainable and environmentally conscious.",
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
    name: "Muslin",
    description:
      "Light, airy, and gets softer with each wash. Perfect for sensitive skin and ideal for various baby products.",
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
    <div className="flex flex-col items-center justify-center mt-24 pt-8 pb-16">
      <div className="w-[calc(100vw-8rem)]">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Materials</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We carefully select premium materials that are gentle on skin,
            environmentally conscious, and maintain the highest quality
            standards.
          </p>
        </div>
        {/* Materials Showcase */}
        <div className="w-full px-4 sm:px-0 flex flex-col gap-8 mb-16 mt-16">
          {materials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`relative h-[400px] sm:h-[500px] rounded-lg overflow-hidden group
                ${
                  index === 0
                    ? "bg-primary/20"
                    : index === 1
                    ? "bg-secondary/20"
                    : "bg-tertiary/20"
                }`}
            >
              <motion.div
                className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 ease-out"
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
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-700" />
              </motion.div>

              <motion.div
                className="relative h-full p-8 flex flex-col justify-end z-10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
              >
                <motion.h3
                  className="text-3xl font-bold text-white mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.3 + 0.2 }}
                >
                  {material.name}
                </motion.h3>
                <motion.p
                  className="text-white/90 mb-6 max-w-2xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.3 + 0.3 }}
                >
                  {material.description}
                </motion.p>
                <div className="space-y-2">
                  <motion.h4
                    className="font-semibold mb-2 text-white/90"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.4 }}
                  >
                    Key Properties:
                  </motion.h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {material.properties.map((property, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                        className="bg-white/10 backdrop-blur-sm p-2 rounded-md text-center text-sm text-white border border-white/20"
                      >
                        {property}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        {/* Quality Assurance Section */}
        <div className="bg-primary/5 w-full py-12 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-4">
              Our Quality Commitment
            </h2>
            <p className="text-muted-foreground">
              Every material undergoes rigorous testing to ensure it meets our
              high standards for safety, comfort, and durability. We prioritize
              sustainable and ethical sourcing practices while maintaining
              premium quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

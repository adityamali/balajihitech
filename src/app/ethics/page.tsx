"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ethicalPractices = [
  {
    id: 1,
    title: "Fair Labor Practices",
    description:
      "We ensure fair wages, safe working conditions, and reasonable working hours for all our employees. Our manufacturing facilities maintain the highest standards of workplace safety and employee welfare.",
    image: "/ethics/fair.jpg",
    practices: [
      "Fair Wages",
      "Safe Environment",
      "Regular Breaks",
      "Worker Benefits",
    ],
  },
  {
    id: 2,
    title: "Sustainable Manufacturing",
    description:
      "Our commitment to environmental responsibility includes using eco-friendly processes, minimizing waste, and implementing water conservation practices in our manufacturing process.",
    image: "/ethics/sustainable.jpg",
    practices: [
      "Waste Reduction",
      "Water Conservation",
      "Energy Efficient",
      "Eco-friendly Dyes",
    ],
  },
  {
    id: 3,
    title: "Quality & Transparency",
    description:
      "We maintain complete transparency in our supply chain and manufacturing processes. Every garment can be traced back to its source, ensuring quality and ethical standards are met at every step.",
    image: "/ethics/quality.jpg",
    practices: [
      "Supply Chain Tracking",
      "Quality Testing",
      "Regular Audits",
      "Open Communication",
    ],
  },
];

export default function EthicsPage() {
  return (
    <div className="container mx-auto px-4 mt-28 pb-16">
      <div className="relative h-96 rounded-lg overflow-hidden mb-16">
        <Image
          src="/ethics/ethics.jpg"
          alt="Ethical Manufacturing"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h1 className="text-5xl font-bold">Our Ethical Commitment</h1>
            <p className="text-lg mt-4 max-w-2xl mx-auto">
              At Balaji Hi-Tech Garment, we believe in responsible manufacturing that respects both people and the environment.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {ethicalPractices.map((practice, index) => (
          <motion.div
            key={practice.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden group"
          >
            <div className="relative h-64 w-full">
              <Image
                src={practice.image}
                alt={practice.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{practice.title}</h3>
              <p className="text-gray-600 mb-4">{practice.description}</p>
              <div>
                <h4 className="font-semibold mb-2 text-gray-700">Key Initiatives:</h4>
                <div className="flex flex-wrap gap-2">
                  {practice.practices.map((item, idx) => (
                    <span key={idx} className="bg-primary/20 text-primary-foreground text-sm px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-secondary/20 w-full py-12 text-center mt-16 rounded-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Certifications & Commitments</h2>
          <p className="text-gray-600">
            We are proud to maintain the highest standards in ethical manufacturing, backed by international certifications and regular third-party audits. Our commitment to ethical practices goes beyond compliance – it's about creating positive change in the garment industry.
          </p>
        </div>
      </div>
    </div>
  );
}

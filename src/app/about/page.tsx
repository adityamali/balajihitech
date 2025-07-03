"use client";

import CompanyInfo from "@/components/CompanyInfo";
import { motion } from "framer-motion";
import Image from "next/image";

// const milestones = [
//   {
//     year: "2007",
//     title: "Our Beginning",
//     description:
//       "Founded with a vision to revolutionize garment manufacturing in India.",
//   },
// ];

const values = [
  {
    title: "Innovation",
    description:
      "Continuously pushing boundaries in garment manufacturing technology and processes.",
    icon: "/about/innovation.jpg",
  },
  {
    title: "Quality",
    description:
      "Unwavering commitment to delivering premium quality in every product.",
    icon: "/about/quality.jpg",
  },
  {
    title: "Sustainability",
    description: "Environmental responsibility at the core of our operations.",
    icon: "/about/sustainable.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 mt-16 pb-16">
      {/* <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
          For over a decade, Balaji Hi-Tech Garment has been at the forefront of innovative garment manufacturing, combining traditional craftsmanship with cutting-edge technology.
        </p>
      </div> */}

      <CompanyInfo />

      {/* Values Section */}
      <div className="mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">The principles that guide our work and define our commitment to excellence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-8 text-center group"
            >
              <div className="relative h-48 w-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src={value.icon}
                  alt={value.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

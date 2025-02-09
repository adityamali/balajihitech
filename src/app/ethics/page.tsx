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
    <div className="flex flex-col items-center justify-center mt-24 pt-8 pb-16">
      <div className="w-[calc(100vw-8rem)]">
        {/* Header with Background */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-24">
          <Image
            src="/ethics/ethics.jpg"
            alt="Ethical Manufacturing"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-8">
            <h1 className="text-5xl font-bold mb-6">Our Ethical Commitment</h1>
            <p className="text-white/90 max-w-2xl text-center text-lg">
              At Balaji Hi Tech Garment, we believe in responsible manufacturing
              that respects both people and the environment. Our ethical
              practices are at the core of everything we do.
            </p>
          </div>
        </div>

        {/* Ethics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ethicalPractices.map((practice, index) => (
            <motion.div
              key={practice.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-background rounded-xl overflow-hidden shadow-lg"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={practice.image}
                  alt={practice.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 origin-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {practice.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-6">
                  {practice.description}
                </p>
                <div>
                  <h4 className="font-semibold mb-3">Key Initiatives:</h4>
                  <div className="flex flex-wrap gap-2">
                    {practice.practices.map((item, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ delay: index * 0.1 + idx * 0.1 }}
                        className={`px-3 py-1 rounded-full text-sm border`}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Section with New Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-tertiary/10 p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Our Certifications & Commitments
              </h2>
              <p className="text-muted-foreground text-center text-lg">
                We are proud to maintain the highest standards in ethical
                manufacturing, backed by international certifications and
                regular third-party audits. Our commitment to ethical practices
                goes beyond compliance – it's about creating positive change in
                the garment industry.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

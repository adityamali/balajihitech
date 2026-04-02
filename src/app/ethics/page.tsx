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
    <div className="min-h-screen bg-[#faf8f5] pt-32 pb-24 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-secondary/30 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[80px] pointer-events-none translate-y-1/4 -translate-x-1/4"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="relative h-96 sm:h-[30rem] rounded-[3rem] overflow-hidden mb-16 shadow-lg border-4 border-white">
          <Image
            src="/ethics/ethics.jpg"
            alt="Ethical Manufacturing"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center backdrop-blur-[2px]">
            <div className="text-center text-white p-8 max-w-4xl bg-black/40 rounded-[2.5rem] backdrop-blur-md border border-white/20 shadow-2xl mx-4">
              <h1 className="text-5xl md:text-6xl font-sans font-bold tracking-tight">Our Ethical Commitment</h1>
              <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto font-sans leading-relaxed text-white/90">
                At Balaji Hi-Tech Garment, we believe in responsible manufacturing that respects both people and the environment.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ethicalPractices.map((practice, index) => (
            <motion.div
              key={practice.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/50 backdrop-blur-md rounded-[2.5rem] border-4 border-white shadow-soft hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden group transition-all duration-500 flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden p-3 pb-0">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                  <Image
                    src={practice.image}
                    alt={practice.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold font-sans tracking-tight text-gray-900 mb-3">{practice.title}</h3>
                <p className="text-gray-600 mb-8 font-sans leading-relaxed flex-1">{practice.description}</p>
                <div>
                  <h4 className="font-bold mb-3 text-xs tracking-wider uppercase text-gray-400 font-sans">Key Initiatives</h4>
                  <div className="flex flex-wrap gap-2">
                    {practice.practices.map((item, idx) => (
                      <span key={idx} className="bg-white border border-gray-100 shadow-sm text-gray-700 text-sm font-bold px-4 py-2 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-md w-full py-16 text-center mt-20 rounded-[3rem] border-4 border-white shadow-soft relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[60px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[60px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-gray-900 mb-6">Our Certifications & Commitments</h2>
            <p className="text-lg md:text-xl text-gray-600 font-sans leading-relaxed">
              We are proud to maintain the highest standards in ethical manufacturing, backed by international certifications and regular third-party audits. Our commitment to ethical practices goes beyond compliance – it's about creating positive change in the garment industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

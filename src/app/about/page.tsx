"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const milestones = [
  {
    year: "1995",
    title: "Our Beginning",
    description:
      "Founded with a vision to revolutionize garment manufacturing in India.",
  },
  {
    year: "2005",
    title: "International Expansion",
    description:
      "Expanded operations to serve global markets with premium quality garments.",
  },
  {
    year: "2015",
    title: "Sustainability Initiative",
    description:
      "Launched comprehensive sustainability programs and eco-friendly manufacturing.",
  },
  {
    year: "2023",
    title: "Innovation Hub",
    description:
      "Established state-of-the-art innovation center for sustainable textile development.",
  },
];

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
    icon: "/about/sustainability.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-24 pt-8 pb-16">
      <div className="w-[calc(100vw-2rem)] lg:w-[calc(100vw-8rem)]">
        {/* Hero Section */}
        <div className="relative h-[500px] rounded-xl overflow-hidden mb-24">
          <Image
            src="/about/hero.jpg"
            alt="About Balaji Hi Tech"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-8">
            <motion.h1
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.h1>
            <motion.p
              className="text-white/90 max-w-3xl text-center text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              For over two decades, Balaji Hi Tech Garment has been at the
              forefront of innovative garment manufacturing, combining
              traditional craftsmanship with cutting-edge technology to deliver
              excellence in every stitch.
            </motion.p>
          </div>
        </div>
        {/* Timeline Section */}
        <div className="mb-24">
          <motion.h2
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Journey
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary via-secondary to-tertiary" />
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="relative flex items-center mb-16"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-12 text-right" : "pl-12 ml-auto"
                  }`}
                >
                  <div className="bg-black/50 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {milestone.year}
                    </h3>
                    <h4 className="text-xl font-semibold mb-2 text-white/90">
                      {milestone.title}
                    </h4>
                    <p className="text-white/70">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
              </motion.div>
            ))}
          </div>
        </div>
        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 px-4 sm:px-0"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl bg-black/50 border border-white/10 backdrop-blur-sm"
            >
              <div className="aspect-square relative">
                <Image
                  src={value.icon}
                  alt={value.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/70">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary/20 via-secondary/20 to-tertiary/20 rounded-xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-12 text-white">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Years of Excellence" },
              { number: "1000+", label: "Employees" },
              { number: "50+", label: "Global Partners" },
              { number: "100M+", label: "Garments Produced" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

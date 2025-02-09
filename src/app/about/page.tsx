"use client";

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
    <div className="flex flex-col items-center justify-center mt-24 pt-8 pb-16">
      <div className="w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] lg:w-[calc(100vw-8rem)]">
        {/* Contact Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            For over a decade, Balaji Hi Tech Garment has been at the forefront
            of innovative garment manufacturing, combining traditional
            craftsmanship with cutting-edge technology.
          </p>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl p-12 mb-24 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative z-10">
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
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-24 gap-8 px-4 sm:px-0"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm"
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

        {/* Timeline Section */}
        {/* <div className="mb-24">
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
        </div> */}
      </div>
    </div>
  );
}

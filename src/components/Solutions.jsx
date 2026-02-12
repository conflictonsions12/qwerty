// src/components/Solutions.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHandsHolding, FaClipboardCheck, FaUsers } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";

const iconMap = {
  hands: <FaHandsHolding className="w-8 h-8 text-white" />,
  clipboard: <FaClipboardCheck className="w-8 h-8 text-white" />,
  users: <FaUsers className="w-8 h-8 text-white" />,
};

export default function Solutions({ solutions }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const hoverVariants = {
    hover: { y: -10, transition: { duration: 0.3 } },
  };

  const getHoverText = (title) => {
    const hoverTexts = {
      "Soil Testing":
        "Ensure optimal crop health with our expert soil testing services. Identify mineral richness and contaminants. Free consultation available. Call to schedule.",
      "Crop Planning":
        "Optimize your farming with expert crop inspections and planning. We offer detailed guidance on the best crops for your land and essential care recommendations.",
      };
    return hoverTexts[title];
  };

  const getSlugName = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <section className="py-12 md:py-20 px-6 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-center text-green-600 mb-12 md:mb-16"
        >
          Primary Farming Solutions
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              onMouseEnter={() => setHoveredCard(solution.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative overflow-hidden rounded-lg shadow-lg group h-80 md:h-96"
            >
              {/* Background Image */}
              <div className="relative w-full h-full">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Dark overlay - darker on hover */}
                <motion.div
                  animate={{
                    backgroundColor:
                      hoveredCard === solution.id
                        ? "rgba(0, 0, 0, 0.65)"
                        : "rgba(0, 0, 0, 0.4)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                />
              </div>

              {/* Hover Content - Shows description on hover */}
              <motion.div
                animate={{
                  opacity: hoveredCard === solution.id ? 1 : 0,
                  pointerEvents: hoveredCard === solution.id ? "auto" : "none",
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center px-6"
              >
                <p className="text-white text-center text-sm md:text-base leading-relaxed">
                  {getHoverText(solution.title)}
                </p>
              </motion.div>

              {/* Bottom section with title and icon */}
              <div className="absolute bottom-0 left-0 right-0 flex items-stretch">
                {/* Title/Read More on white background (left side) */}
                <div className="flex-1 bg-white flex items-center justify-start px-6 py-4">
                  {hoveredCard === solution.id ? (
                    <Link
                      href={`/services/${getSlugName(solution.title)}`}
                      className="text-lg md:text-2xl font-extrabold text-green-600 hover:text-green-700 transition-colors"
                    >
                      Read More
                    </Link>
                  ) : (
                    <h3 className="text-lg md:text-2xl font-extrabold text-gray-900">
                      {solution.title}
                    </h3>
                  )}
                </div>

                {/* Icon on green background (right side) */}
                <div className="w-20 md:w-24 bg-green-600 flex items-center justify-center">
                  {iconMap[solution.icon]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

     
      </div>
    </section>
  );
}

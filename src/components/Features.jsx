// src/components/Features.jsx
"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaArrowsRotate, FaHandHoldingHeart } from "react-icons/fa6";

const iconMap = {
  wheat: <FaLeaf className="w-16 h-16 md:w-20 md:h-20 text-gray-900" />,
  people: <FaArrowsRotate className="w-16 h-16 md:w-20 md:h-20 text-gray-900" />,
  hand: <FaHandHoldingHeart className="w-16 h-16 md:w-20 md:h-20 text-gray-900" />,
};

export default function Features({ features = [] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-16 xl:px-24 bg-gray-50/70">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm md:text-base font-semibold text-gray-500 tracking-widest uppercase">
            FEATURES
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Key Agricultural Consulting Features
          </h2>
        </div>

        {/* Grid - all cards visible */}
        <motion.div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            xl:grid-cols-4 
            gap-6 md:gap-8
          "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              className="
                group
                relative
                rounded-xl
                overflow-hidden
                shadow-md
                bg-white
                hover:shadow-2xl
                transition-shadow
                duration-300
                h-full
                flex
                flex-col
              "
            >
              {/* The sliding green panel that covers the ENTIRE card */}
              <div className="absolute inset-0 z-20 bg-green-700 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />

              {/* Content wrapper - raised above the green layer when not hovered */}
              <div className="relative z-30 flex flex-col h-full">
                {/* Icon area */}
                <div className="relative h-44 bg-linear-to-b from-green-50/50 to-green-100/40 flex items-center justify-center">
                  {/* Optional thin top line - visible always */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-green-600/60" />

                  <div className="p-5 rounded-full bg-white/95 group-hover:bg-green-800/30 transition-colors duration-500">
                    {iconMap[feature.icon] || iconMap.wheat}
                  </div>
                </div>

                {/* Text area */}
                <div className="flex-1 p-6 md:p-7 flex flex-col items-center text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-500 delay-150">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-base text-gray-700 group-hover:text-white/95 transition-colors duration-500 delay-150 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
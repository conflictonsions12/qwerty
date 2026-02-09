// src/components/about/AboutIntro.jsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const missionVisionValues = [
  {
    title: "Mission",
    icon: (
      <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    description:
      "Our mission is to deliver expert agricultural insights, enhancing farm productivity and sustainability through tailored consulting services, soil testing, and crop management.",
  },
  {
    title: "Vision",
    icon: (
      <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    description:
      "We envision precision agriculture advancing yields, economic success, and environmental stewardship for farmers regionally and across diverse agricultural landscapes.",
  },
  {
    title: "Values",
    icon: (
      <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 13l4 4L19 7" />
        <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
      </svg>
    ),
    description:
      "We value integrity, innovation, and excellence, committed to providing actionable, science-based agricultural solutions that meet our clients' unique needs and challenges.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function AboutIntro() {
  const [activeItem, setActiveItem] = useState("Mission"); // Default: Mission is open

  const toggleDescription = (title) => {
    setActiveItem((prev) => (prev === title ? null : title));
  };

  const activeCard = missionVisionValues.find((item) => item.title === activeItem);

  // Optional: if you ever want to force-close everything on mount → comment out the line above and use:
  // const [activeItem, setActiveItem] = useState(null);

  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="text-center mb-6">
          <span className="text-sm md:text-base font-semibold text-gray-500 tracking-widest uppercase">
            || ABOUT OUR COMPANY ||
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-10 leading-tight">
          Enhancing Agricultural Yield Through Expert Consulting
          <br className="hidden sm:block" />
          <span className="text-green-700">Since 1981</span>
        </h1>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: paragraphs */}
          <div className="space-y-6 text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed">
            <p>
              Dhorne agro Consulting offers comprehensive services like crop inspections, soil testing, and irrigation planning to boost agricultural productivity and sustainability through high-quality, reliable consulting.
            </p>
            <p>
              Our team is dedicated to helping farmers achieve optimal agricultural outcomes. With a focus on innovation and client-specific strategies, we ensure each project benefits from tailored advice and state-of-the-art techniques, enhancing the efficiency and effectiveness of farming operations.
            </p>
          </div>

          {/* Right column: cards + description below */}
          <div className="flex flex-col gap-8 md:gap-10">
            {/* Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {missionVisionValues.map((item) => {
                const isActive = activeItem === item.title;

                return (
                  <motion.div
                    key={item.title}
                    variants={cardVariants}
                    onClick={() => toggleDescription(item.title)}
                    className={`
                      group
                      relative
                      bg-white
                      rounded-xl
                      shadow-md
                      hover:shadow-xl
                      transition-all
                      duration-300
                      overflow-hidden
                      border border-gray-100
                      flex flex-col items-center justify-center text-center
                      aspect-square
                      p-6 md:p-8
                      cursor-pointer
                      ${isActive ? "ring-2 ring-green-700 shadow-lg scale-[1.02]" : ""}
                    `}
                  >
                    <div
                      className={`
                        absolute inset-0 bg-green-700
                        transition-transform duration-500 ease-out z-0
                        ${isActive ? "translate-y-0" : "translate-y-[-100%] group-hover:translate-y-0"}
                      `}
                    />
                    <div className="relative z-10 flex flex-col items-center">
                      <div
                        className={`
                          mb-4 md:mb-6 transition-colors duration-500
                          ${isActive ? "text-white" : "text-green-700 group-hover:text-white"}
                        `}
                      >
                        {item.icon}
                      </div>
                      <h3
                        className={`
                          text-xl md:text-2xl font-bold transition-colors duration-500
                          ${isActive ? "text-white" : "text-green-700 group-hover:text-white"}
                        `}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Description panel – shown by default for Mission */}
            {activeCard && (
              <motion.div
                key={activeCard.title} // helps with smooth re-render when switching
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="
                  overflow-hidden
                  bg-green-50 border border-green-200 rounded-xl
                  p-6 md:p-8
                  text-gray-800 text-base md:text-lg leading-relaxed
                "
              >
                
                <p>{activeCard.description}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

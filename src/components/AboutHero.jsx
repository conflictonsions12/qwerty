// src/components/about/AboutIntro.jsx
"use client";

import { motion } from "framer-motion";

const missionVisionValues = [
  {
    title: "Mission",
    icon: (
      <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Vision",
    icon: (
      <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Values",
    icon: (
      <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 13l4 4L19 7" />
        <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function AboutIntro() {
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
          <span className="text-green-700">Since 2009</span>
        </h1>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left / Top: Paragraphs */}
          <div className="space-y-6 text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed">
            <p>
              Dhorne agro  consulting offers comprehensive services like crop inspections, soil testing, and irrigation planning to boost agricultural productivity and sustainability through high-quality, reliable consulting.
            </p>
            <p>
              We are dedicated to helping farmers achieve optimal agricultural outcomes. With a focus on innovation and client-specific strategies, we ensure each project benefits from tailored advice and state-of-the-art techniques, enhancing the efficiency and effectiveness of farming operations.
            </p>
          </div>

          {/* Right / Bottom: 3 small cards (row on desktop/tablet, column on mobile) */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {missionVisionValues.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="
                  group
                  relative
                  bg-white
                  rounded-xl
                  shadow-md
                  hover:shadow-xl
                  transition-all
                  duration-300
                  overflow-hidden
                  border
                  border-gray-100
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  aspect-square
                  p-6
                  md:p-8
                "
              >
                {/* Green slide overlay */}
                <div className="
                  absolute inset-0
                  bg-green-700
                  translate-y-[-100%]
                  group-hover:translate-y-0
                  transition-transform
                  duration-500
                  ease-out
                  z-0
                " />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 md:mb-6 text-green-700 group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </div>
                  <h3 className="
                    text-xl md:text-2xl
                    font-bold
                    text-green-700
                    group-hover:text-white
                    transition-colors
                    duration-500
                  ">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

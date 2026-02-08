
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection({ data }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const labelVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-12 md:py-20 px-6 lg:px-24 bg-white">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            variants={imageVariants}
            className="relative h-80 md:h-96 lg:h-112.5 rounded-lg overflow-hidden border-4 border-gray-300 shadow-xl"
          >
            <Image
              src={data.image}
              alt="Agricultural Consulting"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
          </motion.div>

          {/* Right side - Text */}
          <motion.div
            className="flex flex-col justify-center"
            variants={textContainerVariants}
          >
            {/* Label with line */}
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                variants={lineVariants}
                className="w-6 h-0.5 bg-gray-400 origin-left"
              />
              <motion.span
                variants={labelVariants}
                className="text-sm md:text-base font-semibold text-gray-500 tracking-widest"
              >
                {data.label}
              </motion.span>
            </div>

            {/* Title */}
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
            >
              {data.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={textVariants}
              className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed text-justify"
            >
              {data.description}
            </motion.p>

            {/* Highlight stats (optional) */}
            <motion.div
              variants={textVariants}
              className="mt-8 flex gap-8 md:gap-12"
            >
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-green-600">
                  16+
                </span>
                <span className="text-xs md:text-sm text-gray-600 font-medium">
                  Years of Experience
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-green-600">
                  1000+
                </span>
                <span className="text-xs md:text-sm text-gray-600 font-medium">
                  Happy Farmers
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-green-600">
                  100%
                </span>
                <span className="text-xs md:text-sm text-gray-600 font-medium">
                  Satisfaction Rate
                </span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={textVariants}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors duration-300 shadow-lg"
              >
                <Link href="/about-us">
                Learn More
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

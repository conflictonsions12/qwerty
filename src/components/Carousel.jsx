"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Wrench, Home, Leaf } from "lucide-react"; // Lucide React icons
import { motion, AnimatePresence } from "framer-motion";

const iconMap = {
  wrench: <Wrench className="w-12 h-12 md:w-20 md:h-20 text-green-600" />,
  "home-tree": <Home className="w-12 h-12 md:w-20 md:h-20 text-green-600" />,
  leaf: <Leaf className="w-12 h-12 md:w-20 md:h-20 text-green-600" />,
};

export default function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    exit: { opacity: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative w-full">
      {/* Image container */}
      <div className="relative w-full h-[550px] md:h-[650px] lg:h-[750px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Hero content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-4 sm:px-6 lg:px-24 text-white max-w-7xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full"
            >
              {/* Icon + Experience text */}
              <motion.div
                variants={textVariants}
                className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border border-white rounded-full flex items-center justify-center shrink-0">
                  {iconMap[slide.icon]}
                </div>
                <p className="text-xs sm:text-sm md:text-base font-medium line-clamp-2 md:line-clamp-none">
                  {currentSlide === 0
                    ? "We have more than 16 years Experience"
                    : currentSlide === 1
                    ? "Expert consultation for your farm"
                    : "Advanced agricultural analysis"}
                </p>
              </motion.div>

              {/* Title and Description */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                <motion.h1
                  variants={textVariants}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  variants={textVariants}
                  className="text-xs sm:text-sm md:text-base leading-relaxed max-w-xl"
                >
                  {slide.description}
                </motion.p>
              </div>

              {/* Buttons */}
              <motion.div
                variants={buttonVariants}
                className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-3 md:gap-4"
              >
                {slide.buttons.map((btn, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      href={btn.href}
                      className={`inline-block w-full sm:w-auto px-6 sm:px-10 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm shadow-lg transition hover:scale-105 text-center ${
                        idx === 0
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "border border-white text-white bg-transparent hover:bg-white hover:text-green-700"
                      }`}
                    >
                      {btn.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Left arrow button */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="hidden sm:flex absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full border border-white text-white items-center justify-center hover:bg-white hover:text-green-700 transition text-sm md:text-base"
      >
        {"<"}
      </motion.button>

      {/* Right arrow button */}
      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="hidden sm:flex absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full border border-white text-white items-center justify-center hover:bg-white hover:text-green-700 transition text-sm md:text-base"
      >
        {">"}
      </motion.button>

      {/* Slide indicators */}
      <motion.div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
        {slides.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => goToSlide(idx)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              backgroundColor:
                idx === currentSlide ? "rgb(34, 197, 94)" : "rgba(255, 255, 255, 0.5)",
              scale: idx === currentSlide ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
          />
        ))}
      </motion.div>

      {/* Mobile swipe hint */}
      <div className="sm:hidden absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-xs opacity-60">
        Swipe or tap dots to navigate
      </div>
    </section>
  );
}

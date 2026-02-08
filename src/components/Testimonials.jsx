// src/components/Testimonials.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from "react-icons/fa6";

export default function Testimonials({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-16 md:py-24 px-6 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            variants={contentVariants}
            className="text-sm md:text-base font-semibold text-gray-400 tracking-widest uppercase"
          >
            TESTIMONIAL
          </motion.span>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12 mt-4">
            <motion.h2
              variants={contentVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900"
            >
              Hear Our Clients&apos; Stories
            </motion.h2>

            {/* Navigation Arrows - Top Right */}
            <motion.div
              variants={contentVariants}
              className="flex gap-3 md:gap-4 shrink-0"
            >
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-gray-300 text-gray-600 flex items-center justify-center hover:border-green-600 hover:text-green-600 transition-colors"
              >
                <FaChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-gray-300 text-gray-600 flex items-center justify-center hover:border-green-600 hover:text-green-600 transition-colors"
              >
                <FaChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonial Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial.id}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white border-l-4 border-green-600 rounded-lg shadow-lg p-8 md:p-12"
          >
            <div className="flex items-start gap-4 md:gap-6 mb-6">
              {/* Quotation Mark */}
              <div className="text-green-600 text-4xl md:text-5xl shrink-0">
                <FaQuoteLeft />
              </div>

              {/* Client Info */}
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">
                  {currentTestimonial.name}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {currentTestimonial.title}
                </p>
              </div>
            </div>

            {/* Testimonial Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 max-w-3xl"
            >
              {currentTestimonial.content}
            </motion.p>

            {/* Rating and Date */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
              {/* Star Rating */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex gap-1"
              >
                {Array.from({ length: 5 }).map((_, idx) => (
                  <FaStar
                    key={idx}
                    className={`w-5 h-5 ${
                      idx < currentTestimonial.rating
                        ? "text-green-600"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </motion.div>

              {/* Date */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-wider"
              >
                [ {currentTestimonial.date} ]
              </motion.span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-12"
        >
          {testimonials.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                backgroundColor:
                  idx === currentIndex ? "#16a34a" : "#d1d5db",
                scale: idx === currentIndex ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

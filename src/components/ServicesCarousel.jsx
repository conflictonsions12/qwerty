// components/ServicesCarousel.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/constants/services"; // adjust path as needed
import Image from "next/image";
import Link from "next/link";

// Slide animation variants
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function ServicesCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right → left, -1 = left → right

  const itemsPerPage = 3;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const goToPage = (pageIndex) => {
    setDirection(pageIndex > currentPage ? 1 : -1);
    setCurrentPage(pageIndex);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleServices = services.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-12 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
       Our team is dedicated to creating beautiful landscapes and meticulously caring for them with unmatched services.
      </h2>

      <div className="relative h-[500px] md:h-110">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentPage} // remount when page changes
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 280, damping: 28 },
              opacity: { duration: 0.25 },
            }}
            className="absolute inset-0 flex gap-6 md:gap-8 justify-center items-start flex-wrap md:flex-nowrap"
          >
            {visibleServices.map((service) => (
              <div
                key={service.id}
                className="w-full max-w-85 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                </div>

                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-5 line-clamp-3 grow">
                    {service.shortDescription}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-auto px-5 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow rounded-full p-4 text-gray-800 text-2xl z-10 transition hover:scale-110"
        onClick={() => {
          setDirection(-1);
          setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
        }}
      >
        ←
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow rounded-full p-4 text-gray-800 text-2xl z-10 transition hover:scale-110"
        onClick={() => {
          setDirection(1);
          setCurrentPage((prev) => (prev + 1) % totalPages);
        }}
      >
        →
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center gap-3 mt-10">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentPage ? "bg-green-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
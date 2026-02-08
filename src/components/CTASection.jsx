// src/components/CTASection.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
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

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const glowVariants = {
    hidden: { boxShadow: "0 0 0px rgba(255, 255, 255, 0)" },
    visible: {
      boxShadow: [
        "0 0 20px rgba(255, 255, 255, 0.2)",
        "0 0 40px rgba(255, 255, 255, 0.4)",
        "0 0 20px rgba(255, 255, 255, 0.2)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="relative w-full h-125 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/cta-bg.jpg"
          alt="Contact us background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 lg:px-24">
        {/* Main Title with Jaw-Dropping Animation */}
        <motion.div
          variants={titleVariants}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl">
            Contact Us for Your
            <motion.span
              animate={{
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 20px rgba(255, 255, 255, 0)",
                  "0 0 40px rgba(255, 255, 255, 0.8)",
                  "0 0 20px rgba(255, 255, 255, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="block text-white mt-2"
            >
              Free Quote Now
            </motion.span>
          </h2>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={buttonVariants}>
          <motion.div
            variants={glowVariants}
            animate="visible"
            className="relative"
          >
            <Link
              href="/contact"
              className="inline-block px-8 md:px-12 py-3 md:py-4 border-2 border-white text-white font-extrabold text-sm md:text-lg rounded-full hover:bg-white hover:text-green-600 transition-all duration-300 uppercase tracking-wider"
            >
              GET A QUOTE
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Animation Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-20 left-10 w-20 h-20 border-2 border-white rounded-full"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-20 right-10 w-16 h-16 border-2 border-white rounded-lg"
        />
      </div>

      {/* Animated Gradient Overlay */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.5))",
          backgroundSize: "200% 200%",
        }}
      />
    </motion.section>
  );
}

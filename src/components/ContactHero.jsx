// src/components/ContactHero.jsx
"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image - fits perfectly, no zoom/crop distortion */}
      <div className="absolute inset-0">
        <div
          className="
            absolute inset-0 bg-cover bg-center bg-no-repeat
            transition-transform duration-700
          "
          style={{
            backgroundImage: `url('/contact-bg.jpg')`, // ← put your image in /public/contact-bg.jpg
            // or use a remote URL: url('https://images.unsplash.com/...') 
          }}
        />
        {/* Optional subtle overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center px-6 sm:px-10"
      >
        <h1
          className="
            text-6xl sm:text-7xl md:text-8xl lg:text-9xl 
            font-extrabold tracking-tight
            text-white drop-shadow-2xl
            select-none
          "
        >
          CONTACT
        </h1>

        {/* Optional subtitle / call to action */}
        <p className="mt-6 text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
          We&apos;re here to help with your agricultural needs.<br />
          Reach out today.
        </p>

        {/* Optional button / scroll prompt */}
        <motion.a
          href="#contact-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="
            mt-10 inline-block
            px-10 py-4 bg-green-700 text-white
            rounded-full font-semibold text-lg
            hover:bg-green-800 transition
            shadow-lg hover:shadow-xl
          "
        >
          Send Message →
        </motion.a>
      </motion.div>
    </section>
  );
}
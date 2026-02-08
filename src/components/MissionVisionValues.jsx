// src/components/about/MissionVisionValues.jsx
"use client";

import { motion } from "framer-motion";

const items = [
  {
    icon: "🌱", // replace with your SVG / react-icon
    title: "Mission",
    description:
      "Our team is dedicated to helping farmers achieve optimal agricultural outcomes. With a focus on innovation and client-specific strategies, we ensure each project benefits from tailored advice and state-of-the-art techniques, enhancing the efficiency and effectiveness of farming operations.",
  },
  {
    icon: "👁️",
    title: "Vision",
    description:
      "Our mission is to deliver expert agricultural insights, enhancing farm productivity and sustainability through tailored consulting services, soil testing, and crop management.",
  },
  {
    icon: "✨",
    title: "Values",
    description:
      "High-quality, reliable consulting focused on innovation, client success, sustainability, and long-term agricultural improvement since 1981.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function MissionVisionValues() {
  return (
    <motion.div
      className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          custom={index}
          variants={cardVariants}
          className="
            group
            relative
            bg-white
            rounded-2xl
            p-8
            shadow-sm
            hover:shadow-xl
            transition-all
            duration-300
            border
            border-gray-100
            overflow-hidden
            flex
            flex-col
            items-center
            text-center
            min-h-[380px]
          "
        >
          {/* Full green slide overlay on hover */}
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

          <div className="relative z-10 flex flex-col items-center flex-1 pt-4">
            <div className="text-6xl mb-6">{item.icon}</div>

            <h3 className="
              text-2xl md:text-3xl
              font-extrabold
              text-gray-900
              group-hover:text-white
              transition-colors
              duration-500
              mb-5
            ">
              {item.title}
            </h3>

            <p className="
              text-base md:text-lg
              text-gray-700
              group-hover:text-white/95
              transition-colors
              duration-500
              leading-relaxed
              max-w-prose
            ">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
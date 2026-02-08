"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Tag, ArrowRight } from "lucide-react";

export default function Blog({ data }) {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.5 },
    },
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
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4"
          >
            {data.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mb-6"
          >
            {data.subtitle}
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              href={data.exploreLink}
              className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm md:text-base hover:text-green-700 transition-colors"
            >
              Explore All Articles
              <motion.div whileHover={{ x: 5 }}>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.posts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover="hover"
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
            >
              {/* Image */}
              <motion.div
                className="relative w-full h-56 md:h-64 overflow-hidden bg-gray-200"
                variants={imageVariants}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex flex-wrap gap-3 mb-4 text-xs md:text-sm text-gray-600">
                  {/* Category */}
                  <div className="flex items-center gap-1">
                    <Tag className="w-3 h-3 text-green-600" />
                    <span className="font-medium text-green-600">
                      {post.category}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>By {post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-extrabold text-gray-900 mb-3 line-clamp-2 hover:text-green-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm hover:text-green-700 transition-colors group"
                  >
                    Read Full Article
                    <motion.div
                      className="group-hover:translate-x-1"
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-3 h-3" />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <Link
            href={data.exploreLink}
            className="px-10 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors duration-300 shadow-lg"
          >
            View More Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

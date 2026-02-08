"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaUser, FaTag, FaArrowRight } from "react-icons/fa6";

export default function BlogClient({ posts }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {posts.map((post) => (
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
                  <div className="flex items-center gap-1">
                    <FaTag className="w-3 h-3 text-green-600" />
                    <span className="font-medium text-green-600">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <FaUser className="w-3 h-3" />
                    <span>By {post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-lg md:text-xl font-extrabold text-gray-900 mb-3 line-clamp-2 hover:text-green-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>

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
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm hover:text-green-700 transition-colors group"
                  >
                    Read Full Article
                    <motion.div
                      className="group-hover:translate-x-1"
                      transition={{ duration: 0.3 }}
                    >
                      <FaArrowRight className="w-3 h-3" />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Section */}
        <section className="py-12 md:py-16 px-6 lg:px-24 bg-green-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Looking for Expert Agricultural Consulting?
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6 max-w-2xl mx-auto">
              Get personalized advice from our team of agricultural experts. Schedule your free consultation today!
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg"
            >
              Get a qoute
            </Link>
          </motion.div>
        </section>
      </div>
    </section>
  );
}

// src/components/Footer.jsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa6";


export default function Footer({ data }) {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const linkHoverVariants = {
    hover: { x: 5, transition: { duration: 0.3 } },
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <motion.div
        className="px-6 lg:px-24 py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Column 1: Brand & Tagline */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-2xl font-extrabold text-green-600 mb-4">
              <span className="text-green-600">Dhorne</span>{" "}
              <span className="text-white">agro consult</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {data.tagline}
            </p>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
                To Receive Special Offers & Promos Reach out to us on Contact page
              </h4>
              {/*  <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <FaArrowRight className="w-4 h-4" />
                </motion.button>
              </div>*/}
            </div>
          </motion.div>

          {/* Column 2: Useful Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-lg font-extrabold text-white mb-6 uppercase tracking-wide">
              Useful Links
            </h4>
            <ul className="space-y-3">
              {data.usefulLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={linkHoverVariants}
                  whileHover="hover"
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Latest Blog Posts */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-lg font-extrabold text-white mb-6 uppercase tracking-wide">
              Latest From Blog
            </h4>
            <ul className="space-y-4">
              {data.latestBlogPosts.map((post) => (
                <motion.li key={post.id} whileHover={{ x: 5 }}>
                  <Link
                    href={post.href}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm leading-snug line-clamp-2"
                  >
                    {post.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-lg font-extrabold text-white mb-6 uppercase tracking-wide">
              Contact Us
            </h4>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <FaPhone className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs uppercase font-semibold">
                    Phone
                  </p>
                  <a
                    href="tel:(941)2989451"
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    (941) 298 9451
                  </a>
                </div>
              </div>

              {/* Email */}
               <div className="flex items-start gap-3">
                <FaEnvelope className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs uppercase font-semibold">
                    Email
                  </p>
                  <a
                    href="mailto:davidhorneconsult@gmail.com"
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm break-all"
                  >
                    davidhorneconsult@gmail.com
                  </a>
                </div>
              </div> 

              {/* Address */}
              {/* <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs uppercase font-semibold">
                    Address
                  </p>
                  <p className="text-gray-300 text-sm">
                    Agricultural Consulting Services
                  </p>
                </div>
              </div> */}
            </div>

           
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="border-t border-gray-800 px-6 lg:px-24 py-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Dhorne agro consult. All rights
            reserved.
          </p>
          
        </div>
      </motion.div>
    </footer>
  );
}

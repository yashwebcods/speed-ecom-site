"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const brandImages = [
  "/b1.jpg", 
  "/b2.jpg", 
  "/b3.jpg", 
  "/b4.jpg", 
  "/b5.jpg"
]

// Repeat to fill the marquee
const repeatedBrands = [...brandImages, ...brandImages, ...brandImages, ...brandImages]

export function TrustedBy() {
  return (
    <section className="w-full bg-white py-8 md:py-10 border-b border-gray-100 relative z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 md:px-8 max-w-7xl"
      >
        {/* "Trusted by" label */}
        <div className="mb-6 md:mb-8 text-center md:text-left">
          <h2 className="text-sm md:text-base font-bold text-slate-400 tracking-widest uppercase">
            Empowering Top E-Commerce Brands
          </h2>
        </div>

        {/* Marquee strip - Now constrained within the container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden w-full transform-gpu"
        >
          <motion.div
            className="flex whitespace-nowrap items-center will-change-transform py-2"
            animate={{ x: ["0%", "-50%"] }}
            initial={{ x: 0 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {repeatedBrands.map((brandSrc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % brandImages.length) * 0.05 }}
                className="flex-shrink-0 mx-6 md:mx-10 relative transform-gpu flex items-center justify-center h-12 md:h-16 w-24 md:w-32"
              >
                <img
                  src={brandSrc}
                  alt={`Trusted Brand ${i}`}
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 cursor-default mix-blend-multiply"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Fade edges within the container */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-white to-transparent z-10" />
        </motion.div>
      </motion.div>
    </section>
  )
}

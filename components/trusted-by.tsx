"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const logos = [1, 2, 3, 4, 5]

// Repeat set enough times to fill the container width
const repeated = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos]

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
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-medium text-slate-500 tracking-tight">
            Trusted by
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
            className="flex whitespace-nowrap items-center will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            initial={{ x: 0 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {repeated.map((num, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % logos.length) * 0.05 }}
                className="flex-shrink-0 mx-6 md:mx-10 relative h-8 md:h-12 w-24 md:w-40 transform-gpu"
              >
                <Image
                  src={`/b${num}.jpg`}
                  alt={`Brand ${num}`}
                  fill
                  sizes="(max-width: 768px) 96px, 160px"
                  className="object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 will-change-transform"
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

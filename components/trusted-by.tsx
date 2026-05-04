"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const logos = [1, 2, 3, 4, 5]

export function TrustedBy() {
  return (
    <section className="w-full bg-white py-8 md:py-10 overflow-hidden border-b border-gray-50 relative z-10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-medium text-slate-500 tracking-tight">
          Trusted by
        </h2>
      </div>
      
      <div className="w-full relative">
        <motion.div 
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          initial={{ x: 0 }}
          transition={{ 
            duration: 45, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {/* Seamless loop with smaller, elegant logo sizes */}
          {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((num, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 mx-8 md:mx-14 relative h-8 md:h-12 w-24 md:w-44"
            >
              <Image 
                src={`/b${num}.jpg`} 
                alt={`Brand ${num}`} 
                fill
                sizes="(max-width: 768px) 96px, 176px"
                className="object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: "7,000+", label: "Live Clients" },
  { value: "101 Cr+", label: "Annual Transaction" },
  { value: "10,540+", label: "Facilities in" },
  { value: "280+", label: "Integrations" },
]

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <span ref={ref}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {value}
      </motion.span>
    </span>
  )
}

export function StatsStrip() {
  return (
    <section className="w-full relative bg-white py-12 lg:py-16">
      
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Unicommerce is Empowering
          </h2>
        </motion.div>

        {/* Stats Grid - 4 Cards - Smaller size */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Card - smaller with subtle border */}
              <div className="bg-white border border-gray-100 rounded-xl p-4 lg:p-5 text-center hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow">
                
                {/* Number - smaller size */}
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2">
                  <AnimatedNumber value={stat.value} />
                </div>

                {/* Label */}
                <p className="text-gray-800 font-medium text-sm sm:text-base">
                  {stat.label}
                </p>
                
               
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
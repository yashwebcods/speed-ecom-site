"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: "3,500+", label: "Trusted Sellers" },
  { value: "700+", label: "Verified Reviews" },
  { value: "40+", label: "Team Members" },
  { value: "6", label: "Supported Platforms" },
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
    <section className="w-full relative bg-[var(--color-navy-dark)] section-spacing">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            SpeedEcom is Empowering
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-cta-primary)] leading-tight mb-2">
                <AnimatedNumber value={stat.value} />
              </div>
              <p className="text-sm sm:text-base text-white/60 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

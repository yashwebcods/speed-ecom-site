"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: "3000", suffix: "+", label: "Sellers Served", sublabel: "Active across all platforms" },
  { value: "50", prefix: "₹", suffix: "Cr+", label: "Revenue Tracked", sublabel: "Orders reconciled accurately" },
  { value: "98", suffix: "%", label: "Retention Rate", sublabel: "Sellers stay & grow with us" },
  { value: "24", suffix: "/7", label: "Support Available", sublabel: "Always here when you need us" },
]

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: string; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        {value}
      </motion.span>
      {suffix}
    </span>
  )
}

export function StatsStrip() {
  return (
    <section className="w-full mt-10 relative overflow-hidden bg-[#0B2545] py-16 lg:py-20">

      {/* Grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 left-1/4 w-[350px] h-[350px] bg-violet-600/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 right-1/4 w-[300px] h-[300px] bg-indigo-500/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-6 py-4 group relative"
            >
              {/* Hover bg */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-colors duration-300 rounded-xl" />

              {/* Number */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none mb-3 tracking-tight relative z-10"
                style={{ fontVariantNumeric: "tabular-nums" }}>
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>

              {/* Divider line */}
              <div className="w-8 h-[2px] bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full mb-3 relative z-10" />

              {/* Label */}
              <p className="text-white font-bold text-sm sm:text-base mb-1 relative z-10">
                {stat.label}
              </p>
              <p className="text-white/45 text-xs leading-relaxed relative z-10 hidden sm:block">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      
    </section>
  )
}
"use client"

import { motion } from "framer-motion"
import { Shield, Target, LineChart, Sparkles } from "lucide-react"

const advantages = [
  {
    icon: Sparkles,
    title: "Smart & Strategic Insights",
    description: "Stay ahead with data-backed pricing models, deep competitor benchmarking, and predictive sales forecasting.",
  },
  {
    icon: Target,
    title: "Platform-Specific Expertise",
    description: "Native optimization for Meesho, Flipkart, Amazon, and Myntra—leveraging platform-specific algorithms to win.",
  },
  {
    icon: Shield,
    title: "Transparent Financial Tracking",
    description: "Eliminate revenue leakage with automated settlement audits, commission dispute management, and hidden fee detection.",
  },
  {
    icon: LineChart,
    title: "Proven Profit Techniques",
    description: "Scale faster with high-conversion weekend strategies, ROI-focused discount models, and automated return claim tracking.",
  },
]

export function Advantages() {
  return (
    <section id="advantages" className="py-20 lg:py-32 relative overflow-hidden bg-white">
      {/* Background decorative glowing layers (subtle pastel colors) */}
      <div className="absolute inset-0 opacity-20 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[320px] h-[320px] bg-violet-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[320px] h-[320px] bg-blue-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Subtle light grid background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl lg:text-4xl font-bold font-display mb-4 text-[#0B2545]">
            Advantages of <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Choosing Us</span>
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-base lg:text-lg">
            Helping online sellers maximize profit, minimize losses, and grow strategically
            on platforms like Meesho, Flipkart, and Amazon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as any }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group text-center p-6 lg:p-10 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-violet-100 hover:shadow-violet-500/5 transition-all transform-gpu will-change-transform cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 rounded-2xl bg-violet-50 text-[#8B5CF6] mb-4 lg:mb-6"
              >
                <advantage.icon className="w-6 lg:w-8 h-6 lg:h-8" />
              </motion.div>
              <h4 className="font-bold font-display text-[#0B2545] mb-3 group-hover:text-[#8B5CF6] transition-colors text-xl sm:text-lg lg:text-xl">
                {advantage.title}
              </h4>
              <p className="text-base sm:text-sm lg:text-base text-slate-600 leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


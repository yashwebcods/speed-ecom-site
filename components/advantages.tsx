"use client"

import { motion } from "framer-motion"
import { Sparkles, Target, Shield, LineChart } from "lucide-react"

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
    <section id="advantages" className="py-12 lg:py-24 bg-slate-50/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Side: Heading and Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any }}
            className="lg:w-[55%] text-left"
          >
            <h3 className="text-3xl lg:text-5xl font-bold font-display mb-6 leading-tight">
              Advantages of <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Choosing Us</span>
            </h3>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Helping online sellers maximize profit, minimize losses, and grow strategically
              on platforms like Meesho, Flipkart, and Amazon. Our data-driven approach
              ensures your business stays ahead of the competition.
            </p>
          </motion.div>

          {/* Right Side: 2x2 Grid (Smaller and more compact) */}
          <div className="lg:w-[45%] grid grid-cols-2 gap-3 sm:gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group p-3 sm:p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col items-start"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-violet-50 text-violet-600 mb-2 sm:mb-3 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                  <advantage.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="font-bold font-display text-slate-900 mb-1 sm:mb-2 group-hover:text-violet-600 transition-colors text-xs sm:text-base leading-tight text-left">
                  {advantage.title}
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed text-left">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Shield, Target, LineChart, Sparkles } from "lucide-react"

const advantages = [
  {
    icon: Sparkles,
    number: "01",
    title: "Smart & Strategic Insights",
    description:
      "Stay ahead with data-backed pricing models, deep competitor benchmarking, and predictive sales forecasting that keeps you one step ahead.",
    accent: "#7c3aed",
    accentBg: "#ede9fe",
    accentText: "#5b21b6",
    stat: "3x Faster Decisions",
  },
  {
    icon: Target,
    number: "02",
    title: "Platform-Specific Expertise",
    description:
      "Native optimization for Meesho, Flipkart, Amazon, and Myntra — leveraging platform-specific algorithms to win the buy box and boost visibility.",
    accent: "#2563eb",
    accentBg: "#dbeafe",
    accentText: "#1e40af",
    stat: "5+ Marketplaces",
  },
  {
    icon: Shield,
    number: "03",
    title: "Transparent Financial Tracking",
    description:
      "Eliminate revenue leakage with automated settlement audits, commission dispute management, and hidden fee detection across all channels.",
    accent: "#059669",
    accentBg: "#d1fae5",
    accentText: "#065f46",
    stat: "₹0 Leakage Missed",
  },
  {
    icon: LineChart,
    number: "04",
    title: "Proven Profit Techniques",
    description:
      "Scale faster with high-conversion weekend strategies, ROI-focused discount models, and automated return claim tracking that protects your margins.",
    accent: "#d97706",
    accentBg: "#fef3c7",
    accentText: "#92400e",
    stat: "40% Avg Profit Boost",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as any } },
}

export function Advantages() {
  return (
    <section
      id="advantages"
      className="section-spacing relative overflow-hidden bg-[#f8f9ff]"
    >
      {/* Top diagonal slash */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }} />

      {/* Decorative blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[420px] h-[420px] bg-violet-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-[380px] h-[380px] bg-blue-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0B2545] leading-tight mb-4">
            Advantages of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
              Choosing Us
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base lg:text-lg leading-relaxed">
            Helping online sellers maximize profit, minimize losses, and grow
            strategically on every major marketplace.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {advantages.map((adv) => (
            <motion.div
              key={adv.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all overflow-hidden"
            >
              {/* Left color bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl"
                style={{ background: adv.accent }}
              />

              <div className="p-7 lg:p-8 pl-8 lg:pl-9">
                {/* Top row: icon + number */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: adv.accentBg }}
                  >
                    <adv.icon
                      className="w-7 h-7"
                      style={{ color: adv.accent }}
                    />
                  </div>

                  {/* Stat pill */}
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full mt-1"
                    style={{
                      background: adv.accentBg,
                      color: adv.accentText,
                    }}
                  >
                    {adv.stat}
                  </span>
                </div>

                {/* Big number watermark */}
                <div
                  className="absolute bottom-4 right-6 text-[80px] font-black leading-none select-none pointer-events-none opacity-[0.04]"
                  style={{ color: adv.accent }}
                >
                  {adv.number}
                </div>

                <h3
                  className="text-xl font-bold text-[#0B2545] mb-3 leading-snug group-hover:transition-colors duration-300"
                  style={{ ["--hover-color" as any]: adv.accent }}
                >
                  <span className="group-hover:text-[var(--hover-color)] transition-colors duration-300">
                    {adv.title}
                  </span>
                </h3>

                <p className="text-slate-500 text-sm lg:text-base leading-relaxed">
                  {adv.description}
                </p>

                {/* Bottom arrow indicator */}
                <div className="mt-5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: adv.accent }}
                  >
                    Learn more
                  </span>
                  <svg
                    style={{ color: adv.accent }}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
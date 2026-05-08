"use client"

import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { useRef } from "react"
import { Sparkles, BarChart3, Zap, Layers, Bot } from "lucide-react"

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
  },
}

export const PaymentHero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className="container mx-auto px-4 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          style={{ y: y1, opacity: contentOpacity }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="text-left lg:text-center mb-12 sm:mb-16 mt-8 sm:mt-12 relative transform-gpu will-change-transform"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border border-violet-500/20 text-violet-700 dark:text-violet-300 text-xs sm:text-sm font-black uppercase tracking-[0.2em] shadow-sm backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-violet-500 animate-pulse" />
            <span>Real-Time SKU Intelligence with AI</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black font-display mb-6 sm:mb-8 md:mb-10 tracking-tight leading-[1.15] px-2 sm:px-0 relative group">
            <span className="text-slate-900 dark:text-white relative z-10">Track every </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 relative z-10">order</span>
            <span className="text-slate-900 dark:text-white relative z-10">, every </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 relative z-10">SKU</span>
            <br className="hidden md:block" />
            <span className="text-slate-900 dark:text-white relative z-10"> and every </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 relative z-10">rupee</span>
            <span className="text-slate-900 dark:text-white relative z-10"> in real-time</span>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1)_0%,transparent_70%)] blur-[100px] pointer-events-none -z-10" />
          </h2>

          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed font-bold tracking-tight px-4 sm:px-6 lg:px-0">
            Powered by our advanced <span className="text-violet-600">Speedy AI engine</span>. Get instant clarity on your marketplace performance across Amazon, Flipkart, Myntra, and more.
          </p>

          <motion.div 
            style={{ y: y2 }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-4 mb-12 sm:mb-16 px-2 sm:px-4 transform-gpu will-change-transform"
          >
            {[
              { label: "Live SKU Tracking", icon: <BarChart3 className="w-4 h-4" />, color: "from-blue-500/10 to-cyan-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300" },
              { label: "Real-time Updates", icon: <Zap className="w-4 h-4" />, color: "from-amber-500/10 to-orange-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300" },
              { label: "Interactive Dashboards", icon: <Layers className="w-4 h-4" />, color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300" },
              { label: "AI Instant Analysis", icon: <Bot className="w-4 h-4" />, color: "from-violet-500/10 to-purple-500/10 border-violet-500/30 text-violet-700 dark:text-violet-300" },
            ].map((point, i) => (
              <motion.div 
                key={i} 
                variants={fadeUpItem}
                whileHover={{ y: -5, scale: 1.05, filter: "brightness(1.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={`flex items-center justify-center gap-2 px-2 sm:px-4 py-2.5 sm:py-3 rounded-2xl bg-gradient-to-r ${point.color} border text-[8px] sm:text-[10px] lg:text-xs font-black uppercase tracking-wider sm:tracking-widest shadow-lg shadow-black/5 cursor-default group transition-all duration-300 w-full`}
              >
                <span className="group-hover:rotate-12 transition-transform duration-300 shrink-0">{point.icon}</span>
                <span className="truncate">{point.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

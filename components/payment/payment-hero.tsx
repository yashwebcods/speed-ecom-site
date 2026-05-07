"use client"

import { motion, Variants } from "framer-motion"
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
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left lg:text-center mb-12 sm:mb-16 mt-8 sm:mt-12 relative"
        >
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border border-violet-500/20 text-violet-700 dark:text-violet-300 text-[10px] sm:text-sm font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-violet-500" />
            <span>Real-Time SKU Intelligence with AI</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display mb-4 sm:mb-6 md:mb-8 tracking-tight leading-[1.15] md:leading-[1.1] px-2 sm:px-0">
            <span className="text-slate-900 dark:text-white">Track every </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">order</span>
            <span className="text-slate-900 dark:text-white">, every </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">SKU</span>
            <br className="hidden md:block" />
            <span className="text-slate-900 dark:text-white"> and every </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">rupee</span>
            <span className="text-slate-900 dark:text-white"> in real-time</span>
          </h2>

          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed font-medium px-4 sm:px-6 lg:px-0">
            Powered by our advanced Speedy AI engine. Get instant clarity on your marketplace performance across Amazon, Flipkart, Myntra, and more.
          </p>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:flex sm:flex-wrap justify-start lg:justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-12 sm:mb-16 px-0 sm:px-4"
          >
            {[
              { label: "Live SKU-wise tracking", icon: <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, color: "from-blue-500/10 to-cyan-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300" },
              { label: "Real-time updates", icon: <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, color: "from-amber-500/10 to-orange-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300" },
              { label: "Interactive dashboards", icon: <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300" },
              { label: "AI instant analysis", icon: <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, color: "from-violet-500/10 to-purple-500/10 border-violet-500/30 text-violet-700 dark:text-violet-300" },
            ].map((point, i) => (
              <motion.div 
                key={i} 
                variants={fadeUpItem}
                className={`flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${point.color} border text-[10px] sm:text-xs md:text-sm font-bold shadow-sm whitespace-nowrap`}
              >
                {point.icon}
                <span className="truncate">{point.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

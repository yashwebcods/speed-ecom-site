"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Sparkles, CheckCircle2, Bot, ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const SpeedyAIEngine = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const yBg = useTransform(scrollYProgress, [0, 1], [0, -50])
  const yContent = useTransform(scrollYProgress, [0, 1], [20, -20])
  const rotateCard = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={containerRef} className="relative mb-0 overflow-hidden bg-primary min-h-fit py-8 lg:py-20 flex items-center">
      {/* Background decorative elements */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 opacity-30 pointer-events-none transform-gpu will-change-transform">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49%,rgba(255,255,255,0.05)_50%,transparent_51%,transparent_100%)] bg-[size:80px_80px] pointer-events-none opacity-20" />
      
      <motion.div 
        style={{ y: yContent, opacity }}
        className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-8 lg:p-16 max-w-7xl mx-auto px-4 lg:px-8 transform-gpu will-change-transform"
      >
        {/* Left Side: Heading and Text */}
        <div className="lg:w-[60%] text-left space-y-4 lg:space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider"
          >
            <Sparkles className="w-4 h-4 text-[#FACC15]" /> Speedy AI Engine
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-5xl font-bold font-display leading-[1.2] lg:leading-[1.1] text-white tracking-tight"
          >
            Meet Your Personal <br className="hidden lg:block" />
            <span className="text-[#FACC15]">AI Analyst</span>
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-[13px] sm:text-base text-white/90 leading-relaxed max-w-xl font-medium"
          >
            <p>Our Speedy AI works in real-time with your live marketplace data to give you instant insights.</p>
            <p>It automatically analyzes your orders, SKUs, payments, and charges — and converts them into reports, tables, and charts.</p>
            <ul className="space-y-4 pt-2">
              {["No manual Excel work", "No confusion", "Just clear business insights"].map((text, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-3 text-white font-bold"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          style={{ rotate: rotateCard }}
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="lg:w-[40%] w-[90%] sm:w-full mx-auto transform-gpu will-change-transform"
        >
          <Card className="p-4 sm:p-8 bg-white border-white shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] rounded-[1.5rem] sm:rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="flex items-center justify-between mb-4 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-14 h-14 rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-indigo-100 transform group-hover:scale-110 transition-transform duration-500">
                  <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <p className="text-slate-900 font-black text-sm sm:text-lg leading-tight">Speedy AI Analyst</p>
                  <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1">
                    <div className="w-1.5 h-1.5 sm:w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Live processing</p>
                  </div>
                </div>
              </div>
              <Badge className="bg-emerald-50 text-emerald-600 border-emerald-100 text-[8px] sm:text-[10px] font-black px-2 sm:px-3 py-0.5 sm:py-1 uppercase tracking-widest rounded-full">Active</Badge>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 group-hover:border-primary/20 transition-colors duration-500">
                <p className="text-slate-500 text-[10px] sm:text-xs italic mb-2 sm:mb-4 font-bold tracking-tight">"Analyze today's SKU performance"</p>
                <div className="h-1.5 sm:h-2 w-full bg-slate-200 rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-[0_0_12px_rgba(124,58,237,0.5)]"
                    initial={{ width: "0%" }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <p className="text-slate-400 text-[8px] sm:text-[10px] font-black uppercase tracking-widest mb-1 sm:mb-2">Total Sales</p>
                  <p className="text-base sm:text-2xl font-black text-slate-900 tracking-tight">₹4,28,450</p>
                  <span className="text-emerald-500 text-[10px] sm:text-xs flex items-center gap-1 mt-1 sm:mt-2 font-black">
                    <ArrowUpRight className="w-3 h-3 sm:w-4 h-4" /> +12.5%
                  </span>
                </div>
                <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <p className="text-slate-400 text-[8px] sm:text-[10px] font-black uppercase tracking-widest mb-1 sm:mb-2">Net Profit</p>
                  <p className="text-base sm:text-2xl font-black text-slate-900 tracking-tight">₹85,200</p>
                  <span className="text-emerald-500 text-[10px] sm:text-xs flex items-center gap-1 mt-1 sm:mt-2 font-black">
                    <ArrowUpRight className="w-3 h-3 sm:w-4 h-4" /> +8.2%
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { Sparkles, CheckCircle2, Bot, ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const SpeedyAIEngine = () => {
  return (
    <div className="relative mb-16 sm:mb-20 lg:mb-32 overflow-hidden bg-primary">
      {/* Background decorative elements matching CTA */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49%,rgba(255,255,255,0.05)_50%,transparent_51%,transparent_100%)] bg-[size:80px_80px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-8 lg:p-16 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Left Side: Heading and Text */}
        <div className="lg:w-[60%] text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#FACC15]" /> Speedy AI Engine
          </div>
          <h3 className="text-4xl lg:text-6xl font-bold font-display leading-[1.1] text-white">
            Meet Your Personal <br className="hidden lg:block" />
            <span className="text-[#FACC15]">AI Analyst</span>
          </h3>
          <div className="space-y-4 text-base lg:text-lg text-white/90 leading-relaxed max-w-xl">
            <p>Our Speedy AI works in real-time with your live marketplace data to give you instant insights.</p>
            <p>It automatically analyzes your orders, SKUs, payments, and charges — and converts them into reports, tables, and charts.</p>
            <ul className="space-y-3 pt-2">
              {["No manual Excel work", "No confusion", "Just clear business insights"].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-bold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: AI Analyst Card (Compact Size) */}
        <div className="lg:w-[40%] w-full">
          <Card className="p-5 sm:p-8 bg-white border-white shadow-2xl rounded-[2rem] relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-indigo-100">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-base leading-tight">Speedy AI Analyst</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-slate-400 text-[10px] font-medium">Live processing...</p>
                  </div>
                </div>
              </div>
              <Badge className="bg-emerald-50 text-emerald-600 border-emerald-100 text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider">Active</Badge>
            </div>
            
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-slate-500 text-xs italic mb-3 font-medium">"Analyze today's SKU performance"</p>
                <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "40%" }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1.5">Total Sales</p>
                  <p className="text-xl font-black text-slate-900">₹4,28,450</p>
                  <span className="text-emerald-500 text-[10px] flex items-center gap-1 mt-1 font-bold">
                    <ArrowUpRight className="w-3 h-3" /> +12.5%
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1.5">Net Profit</p>
                  <p className="text-xl font-black text-slate-900">₹85,200</p>
                  <span className="text-emerald-500 text-[10px] flex items-center gap-1 mt-1 font-bold">
                    <ArrowUpRight className="w-3 h-3" /> +8.2%
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

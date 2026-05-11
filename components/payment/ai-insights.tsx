"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Package, ShieldCheck, TrendingUp, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"

export const AIInsights = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={containerRef} className="relative mb-16 sm:mb-20 lg:mb-32 overflow-hidden bg-primary min-h-fit py-10 lg:py-20 flex items-center">
      {/* Background decorative elements */}
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

      <motion.div 
        style={{ opacity }}
        className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-20 items-center p-8 lg:p-16 max-w-7xl mx-auto px-4 lg:px-8"
      >
        <motion.div style={{ y: y1 }} className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { title: "Identify loss-making SKUs", icon: <Package className="text-red-500" /> },
              { title: "Detect hidden charges", icon: <ShieldCheck className="text-emerald-500" /> },
              { title: "Analyze ad performance", icon: <TrendingUp className="text-indigo-500" /> },
              { title: "Suggest profit growth", icon: <Sparkles className="text-amber-500" /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <Card className="p-3 sm:p-4 lg:p-6 h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/30 transition-all group shadow-none">
                  <div className="mb-2 lg:mb-4 group-hover:scale-110 transition-transform scale-75 sm:scale-100 origin-left">{item.icon}</div>
                  <h5 className="font-bold text-[10px] sm:text-sm lg:text-base leading-tight text-white">{item.title}</h5>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="space-y-4 lg:space-y-6 order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
            💡 Intelligent Growth
          </div>
          <h3 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-[1.2] lg:leading-[1.1] tracking-tight text-white">
            Smart Insights That <br className="hidden sm:block" />
            <span className="text-[#facc15]">Grow Your Profit</span>
          </h3>
          <p className="text-[13px] sm:text-base lg:text-xl text-white/90 leading-relaxed">
            Our AI doesn't just show data — it tells you what to do next. It's like having a financial expert working 24/7 for your business.
          </p>
          <div className="pt-2 lg:pt-4">
            <p className="text-base sm:text-xl lg:text-2xl font-display font-bold italic text-white">
              "From Raw Data to Clear Profit Insights."
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { PaymentHero } from "./payment/payment-hero"
import { SpeedyAIEngine } from "./payment/speedy-ai-engine"
import { LiveDashboard } from "./payment/live-dashboard"
import { AIInsights } from "./payment/ai-insights"
import { StickyCapabilitiesFeatures } from "./payment/sticky-capabilities"

export const PaymentReconciliation = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 1])

  return (
    <section ref={containerRef} className="relative bg-background overflow-clip">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.08)_0%,transparent_70%)] opacity-50" />
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
      </div>

      <motion.div style={{ opacity }}>
        <PaymentHero />
        <SpeedyAIEngine />
        <LiveDashboard />
        <AIInsights />
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-16 md:mt-24 mb-12"
              >
                <StickyCapabilitiesFeatures />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

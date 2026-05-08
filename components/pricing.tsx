"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const pricingTiers = [
  {
    name: "Standard",
    description: (
      <>
        Suitable for <strong>Micro-businesses</strong> that require basic automation to manage operations.
      </>
    ),
    ctaText: "Request Demo",
    color: "border-blue-100",
  },
  {
    name: "Professional",
    description: (
      <>
        Suitable for <strong>growing businesses</strong> that are striving to strengthen operational capabilities.
      </>
    ),
    ctaText: "Request Demo",
    color: "border-blue-100",
  },
  {
    name: "Enterprise",
    description: (
      <>
        Suitable for <strong>Large-scale businesses</strong> that require robust and power-packed features.
      </>
    ),
    ctaText: "Request Demo",
    color: "border-blue-100",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold font-display text-slate-800 mb-6 leading-tight"
          >
            Choose A Plan As Per Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Business Type</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-base lg:text-xl leading-relaxed max-w-3xl mx-auto font-medium"
          >
            From startups to large enterprises, our plans are designed to fit all. Choose one and experience seamless operational efficiency.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-white rounded-[2rem] p-8 lg:p-12 border border-slate-200 hover:border-primary/50 shadow-sm hover:shadow-2xl hover:shadow-primary/5 flex flex-col items-center text-center h-full transition-all duration-300 transform-gpu hover:-translate-y-2`}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 font-display">
                {tier.name}
              </h3>
              
              <div className="text-slate-600 text-sm lg:text-lg leading-relaxed mb-10 flex-grow font-medium">
                {tier.description}
              </div>

              <Button
                className="w-full sm:w-fit px-12 py-7 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 border-none"
              >
                {tier.ctaText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

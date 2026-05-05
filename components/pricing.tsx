"use client"

import { motion } from "framer-motion"
import { Check, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingTiers = [
  {
    name: "Starter",
    price: "₹249",
    period: "/month",
    description: "Perfect for single-platform sellers starting their growth journey.",
    features: [
      { name: "1 Marketplace Integration", included: true },
      { name: "Monthly Profit/Loss Report", included: true },
      { name: "Wrong Commission Detection", included: true },
      { name: "Dedicated Relationship Manager", included: true },
      { name: "SKU-wise Profit Tracking", included: false },
      { name: "Advertising Analysis", included: false },
    ],
    highlighted: false,
    ctaText: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "₹499",
    period: "/month",
    description: "Ideal for growing businesses selling across multiple platforms.",
    features: [
      { name: "Up to 3 Marketplace Integrations", included: true },
      { name: "Monthly Profit/Loss Report", included: true },
      { name: "Wrong Commission Detection", included: true },
      { name: "Dedicated Relationship Manager", included: true },
      { name: "SKU-wise Profit Tracking", included: true },
      { name: "Advertising Analysis", included: true },
    ],
    highlighted: true,
    ctaText: "Get Professional",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For high-volume sellers needing advanced integrations and custom reports.",
    features: [
      { name: "Unlimited Marketplace Integrations", included: true },
      { name: "Real-time Profit/Loss Dashboard", included: true },
      { name: "Automated Dispute Resolution", included: true },
      { name: "Priority 24/7 Support", included: true },
      { name: "Advanced SKU & Ad Analysis", included: true },
      { name: "Custom API Integrations", included: true },
    ],
    highlighted: false,
    ctaText: "Contact Sales",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-violet-600 text-xs font-bold uppercase tracking-[0.2em] mb-4 block"
          >
            Simple Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold font-display text-slate-900 mb-6 leading-tight"
          >
            Invest in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Profitability</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base lg:text-lg leading-relaxed"
          >
            Choose the plan that fits your business needs. Transparent pricing with no hidden fees, designed to help you recover lost revenue and grow.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-white rounded-3xl p-8 lg:p-10 border ${tier.highlighted
                  ? "border-violet-500 shadow-2xl shadow-violet-500/10 scale-100 lg:scale-105 z-10"
                  : "border-slate-100 shadow-lg"
                } flex flex-col h-full`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <p className="text-sm text-slate-500 h-10">{tier.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">{tier.price}</span>
                  <span className="text-slate-500 font-medium">{tier.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-slate-300 shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? "text-slate-700" : "text-slate-400"}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                variant={tier.highlighted ? "default" : "outline"}
                className={`w-full py-6 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98] ${tier.highlighted
                    ? "bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-600/20"
                    : "border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
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

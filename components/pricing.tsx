"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

const pricingTiers = [
  {
    name: "Starter",
    price: "₹249",
    period: "/month",
    subtext: "Perfect for new sellers",
    popular: false,
    features: [
      { text: "Dedicated Relationship Manager", included: true },
      { text: "Monthly Financial Analysis Report", included: true },
      { text: "Commission & Settlement Audit", included: true },
      { text: "Basic Listing Optimization", included: true },
      { text: "24/7 Email Support", included: true },
      { text: "Speedi AI Access", included: false },
      { text: "Advanced Advertising Strategy", included: false },
    ],
    ctaText: "Get Started",
    ctaVariant: "cta-secondary" as const,
    ctaHref: "https://forms.gle/XHrALZDXNSWV5eyt9",
  },
  {
    name: "Professional",
    price: "₹999",
    period: "/month",
    subtext: "For growing sellers",
    popular: true,
    features: [
      { text: "Everything in Starter", included: true },
      { text: "Speedi AI (50 questions/month)", included: true },
      { text: "Advanced Listing & SEO Optimization", included: true },
      { text: "Full Advertising Campaign Management", included: true },
      { text: "Shipping Weight Discrepancy Reports", included: true },
      { text: "Pricing Strategy & Profit Analysis", included: true },
      { text: "Weekend Sales Optimization", included: true },
    ],
    ctaText: "Book Free Demo",
    ctaVariant: "cta" as const,
    ctaHref: "https://forms.gle/XHrALZDXNSWV5eyt9",
  },
  {
    name: "Enterprise",
    price: "Custom pricing",
    period: "",
    subtext: "For large-scale operations",
    popular: false,
    features: [
      { text: "Everything in Professional", included: true },
      { text: "Unlimited Speedi AI access", included: true },
      { text: "Dedicated Account Manager team", included: true },
      { text: "Multi-warehouse Settlement Reports", included: true },
      { text: "Competitor Benchmarking", included: true },
      { text: "Business Growth & Planning Insights", included: true },
      { text: "Priority Support with SLA", included: true },
    ],
    ctaText: "Contact Us",
    ctaVariant: "cta-secondary" as const,
    ctaHref: "/contact",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="section-spacing bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[28px] lg:text-[32px] font-semibold text-[var(--color-navy-dark)] mb-4 leading-tight"
          >
            Choose A Plan As Per Your Business Type
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#374151] text-[15px] sm:text-base leading-[1.7] max-w-3xl mx-auto"
          >
            From startups to large enterprises, our plans are designed to fit all. Choose one and
            experience seamless operational efficiency.
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
              className={`relative bg-white rounded-2xl p-8 border flex flex-col h-full transition-all duration-300 ${
                tier.popular
                  ? "border-[var(--color-cta-primary)] shadow-xl border-l-[3px] border-l-[var(--color-cta-primary)]"
                  : "border-slate-200 hover:border-[var(--color-brand-blue)]/40 hover:shadow-lg"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 right-4 px-3 py-1 rounded-md text-xs font-semibold text-white bg-[var(--color-cta-primary)]">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold text-[var(--color-navy-dark)] mb-2">
                {tier.name}
              </h3>
              <div className="mb-1">
                <span className="text-3xl font-bold text-[var(--color-navy-dark)]">{tier.price}</span>
                {tier.period && (
                  <span className="text-[#6B7280] text-sm font-medium">{tier.period}</span>
                )}
              </div>
              <p className="text-[13px] text-[#6B7280] mb-6">{tier.subtext}</p>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-2 text-sm text-[#374151]">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-[var(--color-success)] shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 text-[#9CA3AF] shrink-0 mt-0.5" />
                    )}
                    <span className={!feature.included ? "text-[#9CA3AF]" : ""}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button asChild variant={tier.ctaVariant} className="w-full">
                <Link
                  href={tier.ctaHref}
                  target={tier.ctaHref.startsWith("http") ? "_blank" : undefined}
                >
                  {tier.ctaText}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[13px] text-[#6B7280] mt-12 max-w-3xl mx-auto"
        >
          All plans include a free demo • No lock-in contract • Cancel anytime • 100% data security
        </motion.p>
      </div>
    </section>
  )
}

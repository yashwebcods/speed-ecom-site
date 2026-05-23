"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const featureChips = [
  "Auto Order Matching",
  "Fee & Commission Audit",
  "Settlement Discrepancy Detection",
  "SKU-Level Profit Analysis",
]

const quickActions = [
  "What should I fix first?",
  "Settlement discrepancy?",
  "SKU reconciliation",
  "Platform fee mismatch",
  "Why am I in loss?",
  "Auto reconciliation",
]

export function SpeediAISection() {
  return (
    <section className="section-spacing bg-[var(--color-navy-darkest)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[13px] font-medium text-[var(--color-cta-primary)] mb-3">
              AI-Powered Reconciliation
            </p>
            <h2 className="text-[28px] sm:text-[32px] font-semibold text-white leading-tight mb-5">
              Meet Speedi AI — Your 24/7 Reconciliation Expert
            </h2>
            <p className="text-[15px] sm:text-base text-white/75 leading-[1.7] mb-8 max-w-lg">
              Speedi AI reads your full reconciliation data and tells you exactly what to fix,
              where money is leaking, and which SKUs deserve more budget. Ask it anything about
              your store — it answers in seconds.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {featureChips.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 rounded-full text-sm text-white bg-[var(--color-navy-dark)] border border-white/15"
                >
                  {chip}
                </span>
              ))}
            </div>
            <Link
              href="/platform"
              className="text-[var(--color-cta-primary)] font-semibold text-[15px] hover:underline underline-offset-4 transition-all"
            >
              Try Speedi AI with your data →
            </Link>
          </motion.div>

          {/* Right — mock chat */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[var(--color-navy-mid)] rounded-2xl p-5 border border-white/10"
          >
            <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/10">
              <span className="text-sm font-semibold text-white">Speedi AI</span>
              <span className="flex items-center gap-1.5 text-xs text-white/50">
                <span className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                Live
              </span>
            </div>

            <div className="space-y-4 mb-5">
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-tr-sm px-4 py-3 bg-[var(--color-brand-deep-blue)] text-white text-sm leading-relaxed">
                  Why am I in loss this month?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[92%] rounded-2xl rounded-tl-sm px-4 py-3 bg-[var(--color-navy-card)] text-[#CBD5E1] text-sm leading-relaxed">
                  Your top 3 loss drivers: (1) Wrong weight slabs on Meesho — ₹12,400
                  overcharged. (2) 3 unsettled RTO orders on Flipkart — ₹8,200 missing. (3) Ad
                  ACOS on 2 SKUs exceeds 45% — ₹6,100 wasted. Fix these first.
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-tr-sm px-4 py-3 bg-[var(--color-brand-deep-blue)] text-white text-sm leading-relaxed">
                  Which SKUs should I scale?
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {quickActions.map((action) => (
                <span
                  key={action}
                  className="text-xs px-3 py-1.5 rounded-full text-white/70 border border-white/12 bg-white/[0.06]"
                >
                  {action}
                </span>
              ))}
            </div>

            <p className="text-[11px] text-white/35 text-center">Powered by Claude AI</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

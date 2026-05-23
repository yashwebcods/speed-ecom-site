"use client"

import Link from "next/link"
import { motion, Variants } from "framer-motion"
import {
  Megaphone,
  BarChart3,
  CalendarDays,
  Scale,
  FileSearch,
  LineChart,
  Warehouse,
  TrendingUp,
  ChevronRight,
} from "lucide-react"

const services = [
  {
    icon: Megaphone,
    title: "Advertising & ROI Tracking",
    description:
      "Track ad spend, ACOS, and campaign ROI across Amazon, Flipkart, and Meesho with monthly performance insights.",
    deliverable: "Monthly ad performance PDF with ACOS per campaign",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: BarChart3,
    title: "Sales-Wise Participant Analysis",
    description:
      "Understand which SKUs and categories drive revenue across every marketplace you sell on.",
    deliverable: "SKU ranking table across all your platforms",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: CalendarDays,
    title: "Discount & Festival Sales Strategy",
    description:
      "Plan profitable festival campaigns with data-backed pricing and discount recommendations.",
    deliverable: "30-day event calendar with pricing recommendations",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Scale,
    title: "Shipping Weight Discrepancy Report",
    description:
      "Identify overcharges from wrong weight slabs and recover excess shipping fees from platforms.",
    deliverable: "Weight mismatch report with exact overcharge amount",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: FileSearch,
    title: "Wrong Commission & Settlement Audit",
    description:
      "Catch incorrect commissions, missing settlements, and fee errors before they hurt your margins.",
    deliverable: "Dispute-ready report with platform submission format",
    color: "bg-teal-500/10 text-teal-600",
  },
  {
    icon: LineChart,
    title: "Pricing Strategy & Profit Analysis",
    description:
      "SKU-level profit and loss visibility so you can price confidently and protect margins.",
    deliverable: "SKU-wise P&L sheet updated monthly",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Order Settlement Reports",
    description:
      "Reconcile FBA, FBF, and warehouse settlements with clear flags on profit leaks.",
    deliverable: "FBA/FBF comparison sheet with profit leaks flagged",
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    icon: TrendingUp,
    title: "Business Growth & Planning Insights",
    description:
      "Quarterly forecasts, competitor benchmarks, and strategic recommendations to scale profitably.",
    deliverable: "Quarterly forecast report with competitor benchmarks",
    color: "bg-cyan-500/10 text-cyan-600",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function ServicesDetailed() {
  return (
    <section id="services" className="section-spacing bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h1 className="text-[40px] sm:text-[44px] font-bold text-[var(--color-navy-dark)] leading-tight mb-4">
          Our Services
        </h1>
        <p className="text-[15px] sm:text-base text-[#374151] leading-[1.7]">
          End-to-end financial management for Indian online sellers — from ad ROI to settlement
          audits and growth planning.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={itemVariants}
            className="group bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-[var(--color-brand-blue)]/40 hover:shadow-lg transition-all duration-300"
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${service.color} transition-transform duration-300 group-hover:scale-110`}
            >
              <service.icon className="w-5 h-5" />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-foreground leading-snug mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#374151] leading-[1.7] mb-3">{service.description}</p>
              <p className="text-[13px] text-[#6B7280] leading-relaxed mb-4">
                <span className="font-medium text-[#6B7280]">What you receive: </span>
                {service.deliverable}
              </p>
              <Link
                href="/contact"
                className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-brand-blue)] hover:underline"
              >
                Learn More
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

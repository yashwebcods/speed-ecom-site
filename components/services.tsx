"use client"
import { motion, Variants } from "framer-motion"
import {
  TrendingUp,
  AlertTriangle,
  ArrowLeftRight,
  PackageX,
  FileSearch,
  ClipboardList,
  BarChart2,
  Users,
  Zap,
} from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "AI-Powered Reconciliation Engine",
    description:
      "Automatically match every order, payment, and return across all marketplaces. Detect discrepancies in real-time, reconcile settlements, and know exactly how much you earned — down to the last rupee.",
    color: "bg-gradient-to-br from-[#1D4ED8]/20 to-[#7C3AED]/20 text-[#1D4ED8]",
  },
  {
    icon: AlertTriangle,
    title: "Leakage & Wrong Charge Detection",
    description:
      "Automatically detect overcharged commissions, wrong weight slabs, and duplicate deductions across Meesho, Amazon, Flipkart & more. Recover what's rightfully yours.",
    color: "bg-gradient-to-br from-[#DC2626]/20 to-[#EA580C]/20 text-[#DC2626]",
  },
  {
    icon: ArrowLeftRight,
    title: "Order-to-Payment Reconciliation",
    description:
      "Match every order with its settlement entry. Identify payment delays, short credits, and missing remittances across all channels in one clean dashboard.",
    color: "bg-gradient-to-br from-[#06B6D4]/20 to-[#0891B2]/20 text-[#06B6D4]",
  },
  {
    icon: PackageX,
    title: "Return, RTO & Exchange Reality",
    description:
      "See the true cost of returns and RTO per SKU. Track exchange rates, identify high-return products, and make data-driven decisions to reduce losses.",
    color: "bg-gradient-to-br from-[#F59E0B]/20 to-[#D97706]/20 text-[#F59E0B]",
  },
  {
    icon: FileSearch,
    title: "Return Reconciliation",
    description:
      "Reconcile every returned order against credit notes and refunds. Catch unprocessed returns, missing credits, and settlement discrepancies before they hurt your margins.",
    color: "bg-gradient-to-br from-[#3B82F6]/20 to-[#2563EB]/20 text-[#3B82F6]",
  },
  {
    icon: Zap,
    title: "Speed AI - Instant Processing",
    description:
      "Lightning-fast AI that processes thousands of transactions in milliseconds. Get real-time insights, instant reconciliation, and never wait for reports again.",
    color: "bg-gradient-to-br from-[#F59E0B]/20 to-[#EA580C]/20 text-[#F59E0B]",
  },
  {
    icon: BarChart2,
    title: "Profit & Loss",
    description:
      "Know instantly which products, categories, channels, and warehouses are making money — and which are not. Be smart, grow your business profitably.",
    color: "bg-gradient-to-br from-[#10B981]/20 to-[#059669]/20 text-[#10B981]",
  },
  {
    icon: Users,
    title: "Multi-User Support",
    description:
      "Collaborate with your team without compromising security. Assign role-based access so every member sees exactly what they need — nothing more, nothing less.",
    color: "bg-gradient-to-br from-[#14B8A6]/20 to-[#0D9488]/20 text-[#14B8A6]",
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
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as any },
  },
}

export function Services() {
  return (
    <section id="services" className="bg-white py-20 px-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gray-900 leading-tight mb-4">
          Everything You Need to Run a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] to-[#7C3AED]">
            Profitable Business
          </span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          From profit tracking to commission audits — we give sellers the
          clarity and control to grow smarter, not harder.
        </p>
      </motion.div>

      {/* Cards Grid */}
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
            className="bg-gradient-to-br from-[#0a1f3d] to-[#0f2d4f] border border-white/20 rounded-2xl p-6 flex flex-col gap-4 shadow-lg"
          >
            {/* Icon */}
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${service.color}`}
            >
              <service.icon className="w-5 h-5" />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-base font-semibold text-white leading-snug mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
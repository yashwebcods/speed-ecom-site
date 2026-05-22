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
} from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "AI-Powered Reconciliation Engine",
    description:
      "Automatically match every order, payment, and return across all marketplaces.  Detect discrepancies in real-time, reconcile settlements, and know exactly  how much you earned — down to the last rupee.",
   color: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: AlertTriangle,
    title: "Leakage & Wrong Charge Detection",
    description:
      "Automatically detect overcharged commissions, wrong weight slabs, and duplicate deductions across Meesho, Amazon, Flipkart & more. Recover what's rightfully yours.",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: ArrowLeftRight,
    title: "Order-to-Payment Reconciliation",
    description:
      "Match every order with its settlement entry. Identify payment delays, short credits, and missing remittances across all channels in one clean dashboard.",
    color: "bg-teal-500/10 text-teal-600",
  },
  {
    icon: PackageX,
    title: "Return, RTO & Exchange Reality",
    description:
      "See the true cost of returns and RTO per SKU. Track exchange rates, identify high-return products, and make data-driven decisions to reduce losses.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: FileSearch,
    title: "Return Reconciliation",
    description:
      "Reconcile every returned order against credit notes and refunds. Catch unprocessed returns, missing credits, and settlement discrepancies before they hurt your margins.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: ClipboardList,
    title: "Order Management System",
    description:
      "Centrally manage orders across all marketplaces. Streamline fulfilment, track status in real time, and eliminate manual errors with a single unified interface.",
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    icon: BarChart2,
    title: "Profit & Loss",
    description:
      "Know instantly which products, categories, channels, and warehouses are making money — and which are not. Be smart, grow your business profitably.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Users,
    title: "Multi-User Support",
    description:
      "Collaborate with your team without compromising security. Assign role-based access so every member sees exactly what they need — nothing more, nothing less.",
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
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as any },
  },
}

export function Services() {
  return (
    <section id="services" className="bg-background py-20 px-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
       
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-4">
          Everything You Need to Run a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
            Profitable Business
          </span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
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
            className="group bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            {/* Icon */}
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${service.color} transition-transform duration-300 group-hover:scale-110`}
            >
              <service.icon className="w-5 h-5" />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-base font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
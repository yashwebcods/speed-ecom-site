"use client"

import { motion } from "framer-motion"
import { Check, X, Minus } from "lucide-react"

const features = [
  {
    capability: "SKU-wise actual profit after returns, ads and GST",
    manual: "cross",
    accountant: "dash",
    speed: "check"
  },
  {
    capability: "Hidden fee / payout mismatch detection",
    manual: "cross",
    accountant: "cross",
    speed: "check"
  },
  {
    capability: "Order-to-payment matching",
    manual: "dash",
    accountant: "dash",
    speed: "check"
  },
  {
    capability: "Next-month delayed settlement capture",
    manual: "cross",
    accountant: "cross",
    speed: "check"
  },
  {
    capability: "Recovery-focused order references",
    manual: "cross",
    accountant: "dash",
    speed: "check"
  }
]

export function ComparisonSection() {
  const getIcon = (status: string) => {
    switch (status) {
      case "check": return <Check className="w-6 h-6 text-emerald-500 mx-auto" strokeWidth={3} />
      case "cross": return <X className="w-5 h-5 text-red-500 mx-auto" strokeWidth={2.5} />
      case "dash": return <Minus className="w-5 h-5 text-amber-500 mx-auto" strokeWidth={3} />
      default: return null
    }
  }

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-100/40 via-transparent to-transparent" />
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              Speed E-Com?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-gray-600"
          >
            See how we stack up against traditional reconciliation methods
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="py-6 px-8 font-bold text-slate-500 uppercase tracking-widest text-xs sm:text-sm border-b border-gray-100 w-2/5">
                    Capability
                  </th>
                  <th className="py-6 px-4 font-bold text-slate-500 uppercase tracking-widest text-xs sm:text-sm text-center border-b border-gray-100 w-1/5">
                    Manual Excel
                  </th>
                  <th className="py-6 px-4 font-bold text-slate-500 uppercase tracking-widest text-xs sm:text-sm text-center border-b border-gray-100 w-1/5">
                    Generic Accountant
                  </th>
                  <th className="py-6 px-4 font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 uppercase tracking-widest text-xs sm:text-sm text-center border-b border-gray-100 w-1/5">
                    Speed E-Com
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, idx) => (
                  <tr key={idx} className="hover:bg-violet-50/30 transition-colors group">
                    <td className="py-6 px-8 border-b border-gray-50 text-slate-800 font-semibold text-sm sm:text-base">
                      {feature.capability}
                    </td>
                    <td className="py-6 px-4 border-b border-gray-50 text-center">
                      {getIcon(feature.manual)}
                    </td>
                    <td className="py-6 px-4 border-b border-gray-50 text-center">
                      {getIcon(feature.accountant)}
                    </td>
                    <td className="py-6 px-4 border-b border-gray-50 text-center bg-violet-50/20 group-hover:bg-transparent transition-colors">
                      {getIcon(feature.speed)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
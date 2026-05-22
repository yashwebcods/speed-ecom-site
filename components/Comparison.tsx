"use client"

import { motion } from "framer-motion"
import { Check, X, Shield, Zap, Clock, Sparkles, TrendingUp, Award, Rocket, ArrowRight, Phone, Calendar } from "lucide-react"

const comparisonData = {
  standard: {
    title: "Standard Service",
    badge: "Basic",
    features: [
      { name: "Dedicated Account Manager", included: false },
      { name: "24/7 Customer Support", included: false },
      { name: "Monthly Financial Analysis", included: true },
      { name: "Basic Listing Optimization", included: true },
      { name: "Inventory Management", included: false },
      { name: "Advertising Campaign Setup", included: false },
    ]
  },
  premium: {
    title: "Speed E-Com Solution",
    badge: "",
    features: [
      { name: "Dedicated Account Manager", included: true },
      { name: "24/7 Customer Support", included: true },
      { name: "Monthly Financial Analysis", included: true },
      { name: "Advanced Listing Optimization", included: true },
      { name: "Smart Inventory Management", included: true },
      { name: "Full Advertising Campaign Setup", included: true },
    ]
  }
}

export function ComparisonSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Decor - Light Theme */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-100/30 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-50/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       

        {/* Header - Comparison */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Standard or Premium,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              the goal is the same
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg text-gray-600 px-4"
          >
            Both plans are designed to maximize your e-commerce profits, but with different levels of support and automation
          </motion.p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {/* Standard Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group h-full"
          >
            <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:border-violet-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-400 to-gray-500" />
              
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{comparisonData.standard.title}</h3>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs sm:text-sm font-semibold">
                    {comparisonData.standard.badge}
                  </span>
                </div>

                <div className="space-y-3">
                  {comparisonData.standard.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <X className="w-3 h-3 text-gray-400" />
                        </div>
                      )}
                      <span className={`text-sm sm:text-base ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base shadow-md">
                      Book A Free Demo →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Premium Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group h-full"
          >
            <div className="relative bg-white rounded-2xl border-2 border-violet-400 overflow-hidden h-full transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-indigo-500" />
              
              {/* Popular Badge */}
              <div className="absolute top-4 right-4">
                <div className="px-3 py-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full text-xs font-bold text-white shadow-md flex items-center gap-1">
                  <Rocket className="w-3 h-3" />
                  MOST POPULAR
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{comparisonData.premium.title}</h3>
                  
                </div>

                <div className="space-y-3">
                  {comparisonData.premium.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm sm:text-base text-gray-700">{feature.name}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base shadow-md">
                      Book A Free Demo →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>       
      </div>
    </section>
  )
}
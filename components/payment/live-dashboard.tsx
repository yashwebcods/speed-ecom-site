"use client"

import { motion } from "framer-motion"
import { Layers, BarChart3, TrendingUp, Search, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const LiveDashboard = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          {/* Real-Time Dashboard Section */}
          <div className="mb-16 sm:mb-20 lg:mb-32">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto px-4 lg:px-0">
              {/* Left Side: Heading */}
              <div className="lg:w-[60%] text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-600 border border-violet-100 text-xs font-bold uppercase tracking-wider mb-6">
                  <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" /> Live Data Processing
                </div>
                <h3 className="text-4xl lg:text-7xl font-bold mb-6 font-display leading-[1.1]">
                  <span className="text-slate-900 dark:text-white">Live Dashboard with </span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">SKU-Level Insights</span>
                </h3>
                <p className="text-base lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-medium leading-relaxed">
                  All data is updated in real-time directly from marketplaces like Amazon, Flipkart, Myntra, Meesho, and Ajio.
                </p>
              </div>

              {/* Right Side: 2x2 Grid (Compact Cards) */}
              <div className="lg:w-[40%] grid grid-cols-2 gap-4 lg:gap-6">
                {[
                  { title: "SKU-wise tables", desc: "Granular data", icon: <Layers className="w-5 h-5" />, color: "bg-blue-50 text-blue-600" },
                  { title: "Visual charts", desc: "Understand trends", icon: <BarChart3 className="w-5 h-5" />, color: "bg-violet-50 text-violet-600" },
                  { title: "Profit & loss", desc: "Monitor line", icon: <TrendingUp className="w-5 h-5" />, color: "bg-emerald-50 text-emerald-600" },
                  { title: "Error detection", desc: "Find early", icon: <Search className="w-5 h-5" />, color: "bg-amber-50 text-amber-600" },
                ].map((item, i) => (
                  <Card key={i} className="p-6 hover:shadow-xl transition-all border-slate-100 bg-white shadow-sm rounded-3xl flex flex-col items-start gap-3">
                    <div className={`flex w-12 h-12 rounded-2xl ${item.color} items-center justify-center flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <h5 className="font-bold text-sm lg:text-base text-slate-900 mb-1">
                        {item.title}
                      </h5>
                      <p className="text-xs text-slate-500 font-medium leading-tight">
                        {item.desc}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Data Table Section */}
            <div className="mt-16 w-full max-w-7xl mx-auto px-4 sm:px-0">
              <Card className="p-6 sm:p-10 border-slate-100 shadow-2xl bg-white relative rounded-[2.5rem] overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
                  <div>
                    <h4 className="font-bold text-2xl text-slate-900">Top Performing SKUs</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live Metrics</p>
                    </div>
                  </div>
                  <Button variant="outline" className="rounded-full px-6 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 group">
                    View All <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                  
                  <div className="overflow-x-auto pb-2 relative z-10">
                    <Table className="min-w-[450px]">
                      <TableHeader>
                        <TableRow className="border-slate-200 dark:border-slate-700">
                          <TableHead className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">SKU Name</TableHead>
                          <TableHead className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">Sales</TableHead>
                          <TableHead className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">Charges</TableHead>
                          <TableHead className="text-right text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">Profit</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { sku: "SP-WIRELESS-EARBUDS", sales: "₹45,000", charges: "₹12,400", profit: "+₹8,500", color: "text-emerald-600" },
                          { sku: "SP-SMART-WATCH-01", sales: "₹82,500", charges: "₹24,150", profit: "+₹15,200", color: "text-emerald-600" },
                          { sku: "SP-PHONE-CASE-GLS", sales: "₹12,200", charges: "₹4,800", profit: "-₹1,200", color: "text-red-600" },
                          { sku: "SP-FAST-CHARGER-20W", sales: "₹28,400", charges: "₹8,200", profit: "+₹4,100", color: "text-emerald-600" },
                        ].map((row, i) => (
                          <TableRow key={i} className="border-slate-100 dark:border-slate-800">
                            <TableCell className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-200">{row.sku}</TableCell>
                            <TableCell className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 font-medium">{row.sales}</TableCell>
                            <TableCell className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 font-medium">{row.charges}</TableCell>
                            <TableCell className={`text-right font-bold text-xs sm:text-sm ${row.color}`}>{row.profit}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                      <div className="flex items-center justify-between mb-6">
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">7-Day Sales Trend</p>
                        <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">+24.5%</p>
                      </div>
                      <div className="flex items-end gap-2 h-24">
                        {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="flex-1 bg-gradient-to-t from-violet-600/50 to-violet-500 rounded-t-md hover:from-violet-600 hover:to-violet-400 transition-all cursor-pointer relative group/bar"
                          >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover/bar:opacity-100 transition-opacity">
                              ₹{h}k
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-6">
                      <div className="relative w-24 h-24 shrink-0">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 32 32">
                          <circle cx="16" cy="16" r="14" fill="transparent" stroke="rgba(0,0,0,0.05)" className="dark:stroke-white/5" strokeWidth="4" />
                          <circle cx="16" cy="16" r="14" fill="transparent" stroke="#8b5cf6" strokeWidth="4" strokeDasharray="65 100" strokeDashoffset="0" strokeLinecap="round" />
                          <circle cx="16" cy="16" r="14" fill="transparent" stroke="#10b981" strokeWidth="4" strokeDasharray="20 100" strokeDashoffset="-65" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <p className="text-slate-900 dark:text-white font-black text-xs leading-none">85%</p>
                          <p className="text-[8px] text-slate-500 dark:text-slate-400 font-bold mt-1 uppercase">ROI</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Profitability Index</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-violet-500" />
                            <p className="text-xs text-slate-900 dark:text-white font-medium">Marketplace: 65%</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            <p className="text-xs text-slate-900 dark:text-white font-medium">Net Profit: 20%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

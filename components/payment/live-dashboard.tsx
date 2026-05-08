"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Layers, BarChart3, TrendingUp, Search, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const LiveDashboard = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40])
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -20])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  return (
    <div ref={containerRef} className="container mx-auto px-4 lg:px-8 overflow-hidden py-10 min-h-fit flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div style={{ opacity }} className="transform-gpu will-change-transform">
          {/* Real-Time Dashboard Section */}
          <div className="mb-16 sm:mb-20 lg:mb-32">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto px-4 lg:px-0">
              {/* Left Side: Heading */}
              <motion.div 
                style={{ y: y1 }} 
                className="lg:w-[60%] text-left space-y-6 transform-gpu will-change-transform"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-violet-600 border border-violet-100 text-xs font-black uppercase tracking-widest mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-violet-500 animate-ping" /> Live Data Sync
                </div>
                <h3 className="text-3xl lg:text-5xl font-bold mb-6 font-display leading-[1.1] tracking-tight">
                  <span className="text-slate-900 dark:text-white">Live Dashboard with </span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">SKU-Level Insights</span>
                </h3>
                <p className="text-sm lg:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-medium leading-relaxed">
                  Experience seamless real-time updates directly from major marketplaces like Amazon, Flipkart, Myntra, and more.
                </p>
              </motion.div>

              {/* Right Side: 2x2 Grid (Compact Cards) */}
              <motion.div 
                style={{ y: y2 }} 
                className="lg:w-[40%] grid grid-cols-2 gap-4 lg:gap-6 transform-gpu will-change-transform"
              >
                {[
                  { title: "SKU-wise tables", desc: "Granular data", icon: <Layers className="w-6 h-6" />, color: "bg-blue-50 text-blue-600", hover: "hover:border-blue-200" },
                  { title: "Visual charts", desc: "Understand trends", icon: <BarChart3 className="w-6 h-6" />, color: "bg-violet-50 text-violet-600", hover: "hover:border-violet-200" },
                  { title: "Profit & loss", desc: "Monitor line", icon: <TrendingUp className="w-6 h-6" />, color: "bg-emerald-50 text-emerald-600", hover: "hover:border-emerald-200" },
                  { title: "Error detection", desc: "Find early", icon: <Search className="w-6 h-6" />, color: "bg-amber-50 text-amber-600", hover: "hover:border-amber-200" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Card className={`p-6 transition-all border-slate-100 bg-white shadow-sm hover:shadow-xl rounded-[2rem] flex flex-col items-start gap-4 ${item.hover} group cursor-default`}>
                      <div className={`flex w-14 h-14 rounded-2xl ${item.color} items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        {item.icon}
                      </div>
                      <div className="text-left">
                        <h5 className="font-black text-sm lg:text-base text-slate-900 mb-1">
                          {item.title}
                        </h5>
                        <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider leading-tight">
                          {item.desc}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Data Table Section */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
              className="mt-20 w-full max-w-7xl mx-auto px-4 sm:px-0 transform-gpu will-change-transform"
            >
              <Card className="p-6 sm:p-8 border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] bg-white relative rounded-[2rem] overflow-hidden group/table">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent opacity-0 group-hover/table:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 relative z-10">
                  <div>
                    <h4 className="font-black text-2xl text-slate-900 tracking-tight">Top Performing SKUs</h4>
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Live Insights Engine</p>
                    </div>
                  </div>
                  <Button variant="outline" className="rounded-full px-6 h-10 font-black text-[10px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all group/btn border-slate-200">
                    Full Analytics <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
                  
                  <div className="overflow-x-auto pb-2 relative z-10">
                    <Table className="min-w-[600px]">
                      <TableHeader>
                        <TableRow className="border-slate-100 hover:bg-transparent">
                          <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest h-12">SKU Inventory</TableHead>
                          <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest h-12">Gross Sales</TableHead>
                          <TableHead className="text-[10px] font-black text-slate-400 uppercase tracking-widest h-12">Adj. Charges</TableHead>
                          <TableHead className="text-right text-[10px] font-black text-slate-400 uppercase tracking-widest h-12">Net Contribution</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { sku: "SP-WIRELESS-EARBUDS-V2", sales: "₹45,000", charges: "₹12,400", profit: "+₹8,500", color: "text-emerald-600", trend: "+12%" },
                          { sku: "SP-SMART-WATCH-ULTRA", sales: "₹82,500", charges: "₹24,150", profit: "+₹15,200", color: "text-emerald-600", trend: "+18%" },
                          { sku: "SP-PHONE-CASE-MAGSAFE", sales: "₹12,200", charges: "₹4,800", profit: "-₹1,200", color: "text-red-600", trend: "-4%" },
                          { sku: "SP-FAST-CHARGER-GAN-65W", sales: "₹28,400", charges: "₹8,200", profit: "+₹4,100", color: "text-emerald-600", trend: "+7%" },
                        ].map((row, i) => (
                          <TableRow key={i} className="border-slate-50 hover:bg-slate-50/50 transition-colors group/row">
                            <TableCell className="py-4">
                              <p className="font-black text-slate-900 text-xs group-hover/row:text-primary transition-colors">{row.sku}</p>
                            </TableCell>
                            <TableCell className="font-bold text-slate-600 text-xs">{row.sales}</TableCell>
                            <TableCell className="font-bold text-slate-600 text-xs">{row.charges}</TableCell>
                            <TableCell className="text-right">
                              <div className="inline-flex flex-col items-end">
                                <span className={`font-black text-xs ${row.color}`}>{row.profit}</span>
                                <span className="text-[9px] font-bold text-slate-400 uppercase">{row.trend} vs last week</span>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
                    <div className="p-6 rounded-[1.5rem] bg-slate-50/50 border border-slate-100 hover:border-violet-200 transition-colors duration-500">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Weekly Performance</p>
                          <p className="text-lg font-black text-slate-900">Sales Velocity</p>
                        </div>
                        <div className="bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider">
                          +24.5% Growth
                        </div>
                      </div>
                      <div className="flex items-end gap-2.5 h-24 px-1">
                        {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 + (i * 0.05) }}
                            className="flex-1 bg-gradient-to-t from-violet-600 to-indigo-500 rounded-lg hover:from-violet-500 hover:to-indigo-400 transition-all cursor-pointer relative group/bar shadow-[0_4px_10px_rgba(124,58,237,0.15)]"
                          >
                            <motion.div 
                              initial={{ opacity: 0, y: 8 }}
                              whileHover={{ opacity: 1, y: 0 }}
                              className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-2 py-1 rounded-md text-[10px] font-black whitespace-nowrap shadow-lg pointer-events-none"
                            >
                              ₹{h}k
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                      <div className="mt-4 flex justify-between px-1 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                      </div>
                    </div>

                    <div className="p-6 rounded-[1.5rem] bg-slate-50/50 border border-slate-100 hover:border-emerald-200 transition-colors duration-500 flex items-center gap-6">
                      <div className="relative w-24 h-24 shrink-0 group/circle">
                        <svg className="w-full h-full -rotate-90 drop-shadow-lg" viewBox="0 0 32 32">
                          <circle cx="16" cy="16" r="14" fill="transparent" stroke="rgba(0,0,0,0.03)" strokeWidth="3.5" />
                          <motion.circle 
                            cx="16" cy="16" r="14" fill="transparent" stroke="#8b5cf6" strokeWidth="3.5" 
                            initial={{ strokeDasharray: "0 100" }}
                            whileInView={{ strokeDasharray: "65 100" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            strokeLinecap="round" 
                          />
                          <motion.circle 
                            cx="16" cy="16" r="14" fill="transparent" stroke="#10b981" strokeWidth="3.5" 
                            initial={{ strokeDasharray: "0 100" }}
                            whileInView={{ strokeDasharray: "20 100" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                            strokeDashoffset="-65" 
                            strokeLinecap="round" 
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <motion.p 
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="text-slate-900 font-black text-lg leading-none"
                          >85%</motion.p>
                          <p className="text-[9px] text-slate-400 font-black mt-0.5 uppercase tracking-widest">ROI</p>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Capital Efficiency</p>
                        <div className="space-y-3">
                          {[
                            { label: "Marketplace ROI", value: "65%", color: "bg-violet-500" },
                            { label: "Inventory Turn", value: "20%", color: "bg-emerald-500" }
                          ].map((item, i) => (
                            <div key={i} className="space-y-1.5">
                              <div className="flex items-center justify-between">
                                <p className="text-[10px] text-slate-900 font-black">{item.label}</p>
                                <p className="text-[10px] text-slate-500 font-bold">{item.value}</p>
                              </div>
                              <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: item.value }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: 0.6 + (i * 0.2) }}
                                  className={`h-full ${item.color}`}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

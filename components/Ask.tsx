"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search, TrendingDown, Zap, FileText, AlertTriangle,
  Tag, Building2, CheckCircle2, Send, MessageSquare,
  Lock, Sparkles, ChevronRight, Activity, Shield,
  BarChart3, Clock, ThumbsUp, TrendingUp, DollarSign,
  Package, Truck, AlertCircle
} from "lucide-react"
import Image from "next/image"

const QUICK_QUESTIONS = [
  { label: "What should I fix first?", icon: Search, value: "What should I fix first?" },
  { label: "Why am I in loss?", icon: TrendingDown, value: "Why am I in loss?" },
  { label: "Urgent SKU actions", icon: Zap, value: "Urgent SKU actions needed?" },
  { label: "Order mismatch?", icon: FileText, value: "Why are my orders not matching?" },
  { label: "Settlement discrepancy", icon: AlertTriangle, value: "Why is my settlement amount different?" },
  { label: "SKU reconciliation", icon: Tag, value: "Help me reconcile SKU-level data" },
  { label: "Platform fee mismatch", icon: Building2, value: "Platform fees are higher than expected" },
  { label: "Auto reconciliation", icon: CheckCircle2, value: "How does auto reconciliation work?" },
]

const CANNED_RESPONSES: Record<string, string> = {
  "What should I fix first?":
    "🔍 Top Priority: Your RTO rate is 34% — above the healthy 20% benchmark. Fix packaging for your top 3 returned SKUs first. This alone could improve net margin by 3–5%. Also review pricing on SKUs with <10% margin before the next sale season.",

  "Why am I in loss?":
    "📉 Loss Analysis: Your 15.59% margin is being squeezed by high return shipping costs (₹4.2/order avg), 46 loss-making SKUs, and excess ad spend on low-converting keywords. Reducing RTO by 10% and pausing 5 bottom SKUs can recover ₹40K–₹60K monthly.",

  "Urgent SKU actions needed?":
    "⚡ Urgent Actions: 1) Pause SKU #MH-209 (negative margin ₹−8/order). 2) Increase MRP of SKU #GL-445 by 12%. 3) Bundle SKU #TX-118 to reduce per-unit shipping. 4) Add better images to SKU #DP-302 — its conversion rate is 1.2% vs category avg 3.8%.",

  "Why are my orders not matching?":
    "🔄 Order Mismatch Detected: 47 orders from last month show discrepancy between Amazon and your system. Possible causes: 1) Order ID format mismatch (AMZ vs your ERP). 2) Split shipments recorded as single orders. 3) Cancelled orders still showing as 'Shipped'. Run our reconciliation tool to auto-match these within 2 minutes.",

  "Why is my settlement amount different?":
    "💰 Settlement Discrepancy: ₹23,450 difference found between Meesho settlement report and your bank statement. Breakdown: ₹8,200 TCS deducted (not in your books), ₹6,500 return adjustments, ₹4,800 shipping overcharges, ₹3,950 GST mismatch. Our AI can auto-reconcile and generate a dispute ready report.",

  "Help me reconcile SKU-level data":
    "🏷️ SKU Reconciliation: 156 orders have SKU-level mismatches. Top issues: 1) 34 orders - SKU codes changed mid-month. 2) 52 orders - missing variant mapping. 3) 70 orders - bundle SKUs not split correctly. Upload your catalog file and our AI will map all discrepancies in 3 clicks.",

  "Platform fees are higher than expected":
    "📊 Platform Fee Analysis: Amazon fees are 8.2% higher this month (₹42,180 extra). Breakdown: Closing fee increased on 320 orders (₹12,800), weight handling fee on 180 orders (₹8,400), storage fee spike (₹21,000 due to 45-day old inventory). Reconciliation report ready for dispute.",

  "How does auto reconciliation work?":
    "✅ Auto Reconciliation Process: 1) AI pulls order data from all platforms (Amazon, Flipkart, Meesho). 2) Matches each order with bank settlement. 3) Flags discrepancies in fees, returns, and adjustments. 4) Generates reconciliation report with variance analysis. 5) Creates dispute files for each platform. Average time: 3 minutes for 10,000+ orders.",
}

const TOP_TAGS = [
  { label: "Auto Reconciliation", icon: Activity, active: true },
  { label: "Fee Audit", icon: FileText, active: false },
  { label: "GST Matching", icon: CheckCircle2, active: false },
  { label: "Dispute Ready", icon: Shield, active: false },
]

// Stats cards data
const STATS_CARDS = [
  { label: "Total Discrepancies", value: "₹2,34,500", change: "+12.5%", icon: DollarSign, color: "violet" },
  { label: "Unmatched Orders", value: "47", change: "-8%", icon: Package, color: "blue" },
  { label: "RTO Rate", value: "34%", change: "+5%", icon: Truck, color: "orange" },
  { label: "Resolution Time", value: "2.4 days", change: "-32%", icon: Clock, color: "green" },
]

// Quick insights data
const QUICK_INSIGHTS = [
  { icon: TrendingUp, label: "Margin Opportunity", value: "₹84K", description: "Recoverable through optimization" },
  { icon: AlertCircle, label: "Critical SKUs", value: "46", description: "Loss-making products" },
  { icon: ThumbsUp, label: "Auto-fixable", value: "67%", description: "Issues can be auto-resolved" },
]

export function AskAI() {
  const [inputValue, setInputValue] = useState("")
  const [activeBtn, setActiveBtn] = useState<string | null>(null)
  const [response, setResponse] = useState<string | null>(null)
  const [isTyping, setIsTyping] = useState(false)
  const [quota, setQuota] = useState(10)

  const handleQuickBtn = (value: string) => {
    setInputValue(value)
    setActiveBtn(value)
    // Auto-submit on mobile for better UX
    if (window.innerWidth < 640) {
      handleAsk(value)
    }
  }

  const handleAsk = (overrideQ?: string) => {
    const q = (overrideQ || inputValue).trim()
    if (!q) return

    if (quota <= 0) {
      setResponse("⚠️ You have used all your AI questions for this report. Upgrade to ask more.")
      return
    }

    setQuota((prev) => prev - 1)
    setIsTyping(true)
    setResponse(null)

    setTimeout(() => {
      const answer =
        CANNED_RESPONSES[q] ||
        "🤖 Based on your reconciliation report, I found 47 orders with settlement mismatches totaling ₹23,450. Start with reconciling orders from March 15-20 where the discrepancy is highest. Want me to generate a detailed dispute report?"
      setResponse(answer)
      setIsTyping(false)
      setInputValue("")
      setActiveBtn(null)
    }, 1400)
  }

  return (
    <section className="w-full bg-[#F8F9FE] py-8 sm:py-10 md:py-12 relative overflow-hidden font-sans">
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1440px] mx-auto">

        {/* Main Card Container - Dark Theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-[#0f2a52] via-[#1a3d66] to-[#0f2a52] rounded-3xl shadow-2xl border border-violet-500/30 overflow-hidden relative"
        >
          {/* Background glow effects */}
          <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-28 w-80 h-80 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/5 blur-3xl" />

          <div className="p-6 lg:p-8 relative z-10">

            {/* Top Bar - Tags and Status */}
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                {TOP_TAGS.map((tag) => (
                  <motion.div
                    key={tag.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                      tag.active
                        ? "bg-gradient-to-r from-violet-500/30 to-indigo-500/30 text-violet-200 border border-violet-400/40 shadow-lg shadow-violet-500/20"
                        : "bg-white/5 text-violet-300/70 border border-white/10 hover:bg-white/10 hover:border-violet-400/30"
                    }`}
                  >
                    <tag.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">{tag.label}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-violet-300/70 bg-white/5 px-3 py-1.5 rounded-full w-fit">
                <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-emerald-500"></span>
                </span>
                <span className="hidden sm:inline">Live reconciliation active</span>
                <span className="sm:hidden">Live</span>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
              
              {/* LEFT SIDE - Stats & Insights - HIDDEN COMPLETELY ON MOBILE */}
              <div className="hidden sm:block lg:col-span-4 space-y-5">
                {/* Header + Image section */}
                <div className="text-center lg:text-left mb-4">
                  <div className="inline-flex items-center gap-2 bg-violet-500/20 px-3 py-1.5 rounded-full mb-4">
                    <Sparkles className="w-4 h-4 text-violet-300" />
                    <span className="text-xs font-semibold text-violet-200">AI-Powered Dashboard</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white leading-tight md:leading-[1.2] mb-3">
                    Meet your personal reconciliation expert that powers your decisions.
                  </h2>
                  <p className="text-sm sm:text-base text-violet-200 max-w-xl mx-auto lg:mx-0">
                    Speedi AI scans every transaction and tells you exactly what to fix next.
                  </p>
                </div>

                {/* Stats Cards Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {STATS_CARDS.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm hover:border-violet-400/50 transition-all group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className={`p-1.5 rounded-lg bg-${stat.color}-500/20`}>
                          <stat.icon className={`w-4 h-4 text-${stat.color}-300`} />
                        </div>
                        <span className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-red-400' : 'text-emerald-400'}`}>
                          {stat.change}
                        </span>
                      </div>
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-violet-300/70 mt-0.5">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Badge */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3 backdrop-blur-sm">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">AI-Powered insights</h4>
                    <p className="text-violet-300/70 text-xs">Trained on 10M+ transactions</p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - Chat Interface - TAKES FULL WIDTH ON MOBILE */}
              <div className="sm:lg:col-span-8 flex flex-col h-full">
                {/* Mobile-only header - shows only on mobile */}
                <div className="sm:hidden text-center mb-4">
                  <div className="inline-flex items-center gap-2 bg-violet-500/20 px-3 py-1.5 rounded-full mb-3">
                    <Sparkles className="w-3 h-3 text-violet-300" />
                    <span className="text-[10px] font-semibold text-violet-200">AI Expert</span>
                  </div>
                  <h2 className="text-lg font-bold text-white leading-tight mb-1">
                    Ask Speddi AI anything
                  </h2>
                  <p className="text-xs text-violet-200">
                    Get instant answers about your reconciliation
                  </p>
                </div>

                {/* Section header */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-violet-300 mb-3 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span className="hidden sm:inline">Quick questions sellers ask most:</span>
                    <span className="sm:hidden">Quick questions:</span>
                  </p>

                  {/* Quick Questions Grid - MOBILE: single column, only first 4 questions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Show all 8 on desktop/tablet, only first 4 on mobile */}
                    {QUICK_QUESTIONS.slice(0, window.innerWidth < 640 ? 4 : 8).map((q, idx) => {
                      const Icon = q.icon
                      const isActive = activeBtn === q.value
                      return (
                        <motion.button
                          key={q.value}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          onClick={() => handleQuickBtn(q.value)}
                          className={`group relative text-left p-3 rounded-xl border transition-all duration-300 flex items-center gap-3 overflow-hidden ${
                            isActive
                              ? "bg-gradient-to-r from-violet-600/40 to-indigo-600/40 border-violet-400/50 shadow-lg shadow-violet-500/20"
                              : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-violet-400/30"
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                            isActive 
                              ? "bg-gradient-to-br from-violet-500 to-indigo-500 text-white shadow-md" 
                              : "bg-violet-500/20 text-violet-300 group-hover:bg-violet-500/30"
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className={`text-xs sm:text-[13px] font-semibold leading-tight flex-1 ${
                            isActive ? "text-white" : "text-violet-100"
                          }`}>
                            {q.label}
                          </span>
                          <ChevronRight className={`w-3.5 h-3.5 transition-all ${
                            isActive 
                              ? "text-violet-300 translate-x-1" 
                              : "text-violet-500/50 group-hover:translate-x-1 group-hover:text-violet-400"
                          }`} />
                        </motion.button>
                      )
                    })}
                  </div>
                </div>

                {/* Divider - hidden on mobile */}
                <div className="hidden sm:flex items-center gap-3 my-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <span className="text-violet-400 text-xs font-medium">or ask your own question</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* AI Response Area */}
                <motion.div
                  initial={false}
                  animate={isTyping || response ? { opacity: 1, height: "auto", marginBottom: 20 } : { opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-violet-900/30 to-indigo-900/30 border border-violet-500/30 rounded-2xl p-4 sm:p-5 shadow-inner backdrop-blur-sm">
                    {isTyping ? (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shrink-0">
                          <Sparkles className="w-4 h-4 text-white animate-pulse" />
                        </div>
                        <div className="flex gap-1.5">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 rounded-full bg-violet-400"
                              animate={{ y: [0, -6, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-violet-300">AI is analyzing your data...</span>
                      </div>
                    ) : response && (
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shrink-0">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-violet-100 text-xs sm:text-sm leading-relaxed flex-1 break-words overflow-hidden whitespace-normal">
                          {response}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Input Area */}
                <div className="mt-auto pt-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-2 pl-4 flex items-center gap-3 shadow-lg focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-400/20 transition-all">
                    <MessageSquare className="w-5 h-5 text-violet-400/50 shrink-0" />
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleAsk()}
                      placeholder={window.innerWidth < 640 ? "Ask a question..." : "e.g. Why are my orders not matching?"}
                      className="flex-1 min-w-0 bg-transparent border-none outline-none text-white placeholder:text-violet-400/50 font-medium py-2.5 text-sm"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAsk()}
                      className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-5 py-2 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-violet-600/30"
                    >
                      <Send className="w-4 h-4" />
                      <span className="hidden sm:inline">Ask AI</span>
                    </motion.button>
                  </div>

                  {/* Quota and Info - simplified on mobile */}
                  <div className="flex flex-row items-center justify-between gap-2 mt-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
                      <p className="text-xs font-medium text-violet-300/70">
                        {quota} left
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-violet-300/50">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        2s
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3" />
                        94%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </motion.div>
      </div>
    </section>
  )
}
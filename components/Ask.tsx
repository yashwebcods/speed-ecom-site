"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search, TrendingDown, Zap, FileText, AlertTriangle,
  Tag, Building2, CheckCircle2, Send, MessageSquare,
  Lock, Sparkles, ChevronRight, Activity, Shield
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

export function AskAI() {
  const [inputValue, setInputValue] = useState("")
  const [activeBtn, setActiveBtn] = useState<string | null>(null)
  const [response, setResponse] = useState<string | null>(null)
  const [isTyping, setIsTyping] = useState(false)
  const [quota, setQuota] = useState(10)

  const handleQuickBtn = (value: string) => {
    setInputValue(value)
    setActiveBtn(value)
    // Optional: auto-submit when clicking a quick button
    // handleAsk(value)
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
    <section className="w-full bg-[#F8F9FE] py-8 md:py-10 relative overflow-hidden font-sans">
      <div className="w-full px-4 md:px-6 relative z-10 max-w-[1440px] mx-auto">

        {/* Main Card Container - Dark Theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-[#0f2a52] via-[#1a3d66] to-[#0f2a52] rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-violet-500/30 overflow-hidden relative"
        >
          {/* Subtle glow effects in the background */}
          <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-28 w-80 h-80 rounded-full bg-indigo-500/15 blur-3xl" />

          <div className="p-5 lg:p-6 relative z-10">

            {/* Top Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
              <div className="flex flex-wrap items-center gap-3">
                {TOP_TAGS.map((tag) => (
                  <div
                    key={tag.label}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${tag.active
                      ? "bg-violet-500/20 text-violet-200 border border-violet-400/30 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                      : "bg-white/5 text-violet-300/70 border border-white/10 hover:bg-white/10"
                      }`}
                  >
                    <tag.icon className="w-4 h-4" />
                    {tag.label}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-violet-300/70">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                Live reconciliation active
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Left Column - Copy & Visual */}
              <div className="flex flex-col">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.15] mb-3">
                  Your P&L report holds<br />the answers.
                </h2>
                <p className="text-base text-violet-200 mb-5 max-w-full lg:max-w-md">
                  Our AI reads every line and tells you exactly what to act on.
                </p>

                <div className="relative rounded-2xl overflow-hidden flex flex-col items-center justify-center mb-4 w-full">
                  {/* Image */}
                  <Image
                    src="/dashboard.png"
                    alt="AI Dashboard Illustration"
                    width={400}
                    height={280}
                    className="object-contain w-full max-h-[240px] h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>

                {/* Badge */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3 backdrop-blur-sm">
                  <div className="w-9 h-9 bg-violet-600/30 border border-violet-400/30 text-violet-300 rounded-lg flex items-center justify-center shadow-lg">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs">AI-Powered insights</h4>
                    <p className="text-violet-300/70 text-[10px] font-medium">Trained on 10M+ transactions</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Interactive Chat */}
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-violet-300 mb-3">
                  Quick questions sellers ask most:
                </p>

                {/* Quick Questions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                  {QUICK_QUESTIONS.map((q) => {
                    const Icon = q.icon
                    const isActive = activeBtn === q.value
                    return (
                      <button
                        key={q.value}
                        onClick={() => handleQuickBtn(q.value)}
                        className={`group relative text-left p-3 rounded-xl border transition-all duration-300 flex items-center gap-3 overflow-hidden ${isActive
                          ? "bg-violet-600/40 border-violet-400/50 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                          }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isActive ? "bg-violet-500 text-white" : "bg-violet-500/20 text-violet-300 group-hover:bg-violet-500/30"
                          }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className={`text-[13px] font-semibold leading-tight ${isActive ? "text-white" : "text-violet-100"}`}>
                          {q.label}
                        </span>

                        {/* Little arrow */}
                        <div className={`ml-auto shrink-0 transition-transform duration-300 ${isActive ? "text-violet-300 translate-x-1" : "text-violet-500/50 group-hover:translate-x-1 group-hover:text-violet-400"}`}>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="text-violet-400 text-xs font-medium">or type your own question</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* AI Output / Response Area (if active) */}
                <motion.div
                  initial={false}
                  animate={isTyping || response ? { opacity: 1, height: "auto", marginBottom: 24 } : { opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden mb-6"
                >
                  <div className="bg-violet-900/40 border border-violet-500/30 rounded-2xl p-5 shadow-inner backdrop-blur-sm">
                    {isTyping ? (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-violet-600/50 flex items-center justify-center shrink-0">
                          <Sparkles className="w-4 h-4 text-violet-200 animate-pulse" />
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
                      </div>
                    ) : (
                      <p className="text-violet-100 text-[15px] leading-relaxed">
                        {response}
                      </p>
                    )}
                  </div>
                </motion.div>

                {/* Input Area */}
                <div className="mt-auto">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-2 pl-4 flex flex-col gap-3 md:flex-row md:items-center md:gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.1)] focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-400/20 transition-all">
                    <MessageSquare className="w-5 h-5 text-violet-400/50 shrink-0" />
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleAsk()}
                      placeholder="e.g. Why are my orders not matching?"
                      className="flex-1 min-w-0 bg-transparent border-none outline-none text-white placeholder:text-violet-400/50 font-medium py-2"
                    />
                    <button
                      onClick={() => handleAsk()}
                      className="w-full md:w-auto bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-violet-600/30"
                    >
                      <Send className="w-4 h-4" />
                      Ask AI
                    </button>
                  </div>

                  {/* Quota */}
                  <div className="flex items-center gap-2 mt-4 ml-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
                    <p className="text-xs font-medium text-violet-300/70">
                      {quota} of 10 AI questions remaining for this report.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium text-violet-300/60">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span>Powered by <strong className="text-white font-semibold">Claude AI</strong> with your full reconciliation data</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                Your data is secure and never shared
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
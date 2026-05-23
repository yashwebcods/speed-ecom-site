"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const QUICK_QUESTIONS = [
  { label: "🔍 What should I fix first?", value: "What should I fix first?" },
  { label: "📉 Why am I in loss?", value: "Why am I in loss?" },
  { label: "⚡ Urgent SKU actions", value: "Urgent SKU actions needed?" },
  { label: "🔄 Order mismatch?", value: "Why are my orders not matching?" },
  { label: "💰 Settlement discrepancy", value: "Why is my settlement amount different?" },
  { label: "🏷️ SKU reconciliation", value: "Help me reconcile SKU-level data" },
  { label: "📊 Platform fee mismatch", value: "Platform fees are higher than expected" },
  { label: "✅ Auto reconciliation", value: "How does auto reconciliation work?" },
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

const FEATURES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Auto Order Matching",
    desc: "AI matches every order across platforms with bank settlements",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Fee & Settlement Audit",
    desc: "Detect hidden fees, TCS discrepancies, and wrong adjustments",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "AI Reconciliation",
    desc: "Match GSTR-1 with platform settlements, auto-detect mismatches",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Dispute Ready Reports",
    desc: "Generate platform-ready dispute files with 1 click",
  },
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
  }

  const handleAsk = () => {
    const q = inputValue.trim()
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
    <section className="w-full bg-background py-24 md:py-32 relative overflow-hidden">
      {/* Subtle dot grid - full width */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, currentColor 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="w-full px-4 md:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20 max-w-7xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-5 leading-tight">
            AI-Powered{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
              Reconciliation Engine
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Automatically match every order, payment, and return across all marketplaces. 
            Detect discrepancies in real-time, reconcile settlements, and know exactly 
            how much you earned — down to the last rupee. Stop chasing numbers. Let AI do the math.
          </p>
        </motion.div>

        {/* ── Main Dark Card - Full Width & Larger ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border-2 border-primary/60 shadow-2xl shadow-primary/20 bg-gradient-to-br from-[#0f2a52] via-[#1a3d66] to-[#0f2a52] max-w-7xl mx-auto"
        >
          {/* Glow blobs - larger */}
          <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-28 w-80 h-80 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-violet-800/10 blur-2xl" />

          <div className="relative z-10 p-8 md:p-12 lg:p-14">

            {/* ── Card top bar ── */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-10 pb-8 border-b border-violet-500/20">
              <div className="flex flex-wrap gap-3">
                {["Auto Reconciliation", "Fee Audit", "GST Matching", "Dispute Ready"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-lg bg-violet-500/15 border border-violet-500/20 text-violet-300 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-sm text-violet-300/40 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Live reconciliation active
              </div>
            </div>

            {/* ── Two-column body with more spacing ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 mb-10">

              {/* Left — feature list - larger */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <p className="text-violet-100 font-semibold text-lg leading-snug">
                  Your P&L report holds the answers. Our AI reads every line and tells you exactly what to act on.
                </p>
                <div className="flex flex-col gap-5">
                  {FEATURES.map((f) => (
                    <div key={f.title} className="flex items-start gap-4">
                      <span className="shrink-0 mt-0.5 w-10 h-10 rounded-lg bg-violet-500/20 border border-violet-500/25 flex items-center justify-center text-violet-400">
                        {f.icon}
                      </span>
                      <div>
                        <p className="text-violet-100 text-base font-semibold mb-1">{f.title}</p>
                        <p className="text-violet-300/55 text-sm leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-violet-300/40 text-sm flex items-center gap-2 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
                    <line x1="9" y1="2" x2="9" y2="4" /><line x1="15" y1="2" x2="15" y2="4" />
                    <line x1="9" y1="20" x2="9" y2="22" /><line x1="15" y1="20" x2="15" y2="22" />
                    <line x1="2" y1="9" x2="4" y2="9" /><line x1="2" y1="15" x2="4" y2="15" />
                    <line x1="20" y1="9" x2="22" y2="9" /><line x1="20" y1="15" x2="22" y2="15" />
                  </svg>
                  Powered by <span className="text-violet-300/70 font-semibold ml-0.5">Claude AI</span> with your full reconciliation data
                </p>
              </div>

              {/* Right — interactive AI - larger */}
              <div className="lg:col-span-3 flex flex-col gap-5">
                <p className="text-violet-300/70 text-base font-medium">
                  Quick questions sellers ask most:
                </p>

                {/* Quick buttons 2-col grid - larger buttons */}
                <div className="grid grid-cols-2 gap-3">
                  {QUICK_QUESTIONS.map((q) => (
                    <button
                      key={q.value}
                      onClick={() => handleQuickBtn(q.value)}
                      className={[
                        "px-4 py-3 rounded-xl text-sm font-medium border text-left transition-all duration-200",
                        activeBtn === q.value
                          ? "bg-violet-600/50 border-violet-400 text-white shadow-md shadow-violet-900/40"
                          : "bg-white/5 border-violet-500/25 text-violet-200 hover:bg-violet-600/25 hover:border-violet-400/55 hover:text-white",
                      ].join(" ")}
                    >
                      {q.label}
                    </button>
                  ))}
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 my-1">
                  <div className="flex-1 h-px bg-violet-500/20" />
                  <span className="text-violet-400/45 text-sm">or type your own question</span>
                  <div className="flex-1 h-px bg-violet-500/20" />
                </div>

                {/* Input row - larger */}
                <div className="flex items-center gap-3 bg-white/5 border border-violet-500/35 rounded-xl px-5 py-3 focus-within:border-violet-400/80 focus-within:bg-white/[0.07] transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400/50 shrink-0">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAsk()}
                    placeholder="e.g. Why are my orders not matching?"
                    className="flex-1 bg-transparent border-none outline-none text-violet-100 text-base placeholder:text-violet-300/35 caret-violet-400 min-w-0 py-1"
                  />
                  <button
                    onClick={handleAsk}
                    className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-violet-700 to-indigo-700 hover:from-violet-600 hover:to-indigo-600 active:scale-95 text-white text-sm font-bold transition-all duration-200 shadow-md shadow-violet-900/40"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Ask AI
                  </button>
                </div>

                {/* Quota */}
                <p className="text-violet-300/40 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  {quota} of 10 AI questions remaining for this report.
                </p>

                {/* Typing dots - larger */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl bg-white/5 border border-violet-500/20 px-5 py-4 flex items-center gap-2"
                  >
                    <span className="text-violet-400/60 text-sm mr-2">AI is analyzing your reconciliation data</span>
                    {[0, 0.2, 0.4].map((delay, i) => (
                      <motion.span
                        key={i}
                        className="w-2.5 h-2.5 rounded-full bg-violet-400"
                        animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay }}
                      />
                    ))}
                  </motion.div>
                )}

                {/* Response - larger */}
                {response && !isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-xl bg-white/5 border border-violet-400/25 px-5 py-5 text-violet-100 text-base leading-relaxed"
                  >
                    <p className="text-violet-400/60 text-sm font-semibold uppercase tracking-wider mb-2">
                      AI Reconciliation Response
                    </p>
                    {response}
                  </motion.div>
                )}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
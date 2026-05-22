"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const QUICK_QUESTIONS = [
  { label: "🔍 What should I fix first?", value: "What should I fix first?" },
  { label: "📉 Why am I in loss?", value: "Why am I in loss?" },
  { label: "⚡ Urgent SKU actions", value: "Urgent SKU actions needed?" },
  { label: "📦 RTO/Return impact", value: "What is the RTO/return impact?" },
  { label: "🗓️ Next month plan", value: "What should be my next month plan?" },
  { label: "💸 High payout delay?", value: "Why is my payout delayed?" },
  { label: "🏷️ Which SKUs to delist?", value: "Which SKUs should I delist?" },
  { label: "📊 GST reconciliation", value: "Help me with GST reconciliation" },
]

const CANNED_RESPONSES: Record<string, string> = {
  "What should I fix first?":
    "🔍 Top Priority: Your RTO rate is 34% — above the healthy 20% benchmark. Fix packaging for your top 3 returned SKUs first. This alone could improve net margin by 3–5%. Also review pricing on SKUs with <10% margin before the next sale season.",
  "Why am I in loss?":
    "📉 Loss Analysis: Your 15.59% margin is being squeezed by high return shipping costs (₹4.2/order avg), 46 loss-making SKUs, and excess ad spend on low-converting keywords. Reducing RTO by 10% and pausing 5 bottom SKUs can recover ₹40K–₹60K monthly.",
  "Urgent SKU actions needed?":
    "⚡ Urgent Actions: 1) Pause SKU #MH-209 (negative margin ₹−8/order). 2) Increase MRP of SKU #GL-445 by 12%. 3) Bundle SKU #TX-118 to reduce per-unit shipping. 4) Add better images to SKU #DP-302 — its conversion rate is 1.2% vs category avg 3.8%.",
  "What is the RTO/return impact?":
    "📦 RTO Impact: Returns are costing you ~₹1.8L/month. Top RTO states: UP (28%), Bihar (22%), MP (18%). Enable prepaid-only for pincodes with >40% RTO, improve size charts for apparel SKUs, and add unboxing videos to listings.",
  "What should be my next month plan?":
    "🗓️ Next Month Plan: 1) Delist 10 worst-margin SKUs. 2) Run ads only on top 5 profitable SKUs. 3) Add size charts to reduce apparel returns. 4) Target prepaid orders in Tier-1 cities. 5) Negotiate better shipping rates — ₹58/shipment can go to ₹48 at 500+ daily orders.",
  "Why is my payout delayed?":
    "💸 Payout Issue: 3 invoices are stuck in 'Under Review' on Meesho — likely due to missing GST uploads for orders from March 12–18. Upload corrected invoices to release ₹23,450 in pending payouts within 5–7 business days.",
  "Which SKUs should I delist?":
    "🏷️ Delist Candidates: SKU #MH-209 (−₹8/order), SKU #BL-117 (0.3% margin), SKU #TX-004 (68% RTO rate), SKU #GL-009 (zero orders in 45 days). Delisting these 4 SKUs will reduce losses by ~₹35K/month and free ad budget for profitable SKUs.",
  "Help me with GST reconciliation":
    "📊 GST Reconciliation: 12 orders from April show mismatch between GSTR-1 and Meesho settlement. Total disputed: ₹4,218. Likely cause: platform TCS deduction not reflected in your books. Use Export → GST Breakdown to download reconciled data for your CA.",
}

const STATS = [
  { value: "2,400+", label: "Active Sellers" },
  { value: "₹18Cr+", label: "Profits Recovered" },
  { value: "98%", label: "Accuracy Rate" },
  { value: "3 Platforms", label: "Amazon · Flipkart · Meesho" },
]

const FEATURES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "SKU-Level P&L",
    desc: "Know exactly which products are making or killing your profits",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "RTO Diagnosis",
    desc: "Pinpoint high-return pincodes, products & root causes",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Payout Recovery",
    desc: "Catch missing settlements & reconcile GST discrepancies fast",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Action Reports",
    desc: "Get a prioritized action plan, not just data dumps",
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
        "🤖 Based on your report data, I recommend reviewing your top loss-making SKUs and high-RTO regions first for the quickest margin improvement. Check the SKU Ranking tab for a full breakdown."
      setResponse(answer)
      setIsTyping(false)
      setInputValue("")
      setActiveBtn(null)
    }, 1400)
  }

  return (
    <section className="w-full bg-background py-20 md:py-28 relative overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, currentColor 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4 leading-tight">
            Ask AI{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
              what to fix
            </span>{" "}
            in your report
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Stop guessing. Get instant, data-backed answers about your profits,
            loss SKUs, RTO issues, GST mismatches, and exactly what to do next —
            in plain seller language.
          </p>
        </motion.div>

       
        {/* ── Main Dark Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden border-2 border-primary/60 shadow-xl shadow-primary/10 bg-gradient-to-br from-[#160428] via-[#2a0a52] to-[#160428]"
        >
          {/* Glow blobs */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 rounded-full bg-violet-800/10 blur-2xl" />

          <div className="relative z-10 p-6 md:p-10">

            {/* ── Card top bar ── */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-7 border-b border-violet-500/20">
              
              <div className="flex flex-wrap gap-2">
                {["SKU-level answers", "RTO diagnosis", "Payout recovery", "Action plan"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-violet-500/15 border border-violet-500/20 text-violet-300 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Two-column body ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">

              {/* Left — feature list */}
              <div className="lg:col-span-2 flex flex-col gap-5">
                <p className="text-violet-100 font-semibold text-base leading-snug">
                  Your P&L report holds the answers. Our AI reads every line and tells you exactly what to act on.
                </p>
                <div className="flex flex-col gap-4">
                  {FEATURES.map((f) => (
                    <div key={f.title} className="flex items-start gap-3">
                      <span className="shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-500/25 flex items-center justify-center text-violet-400">
                        {f.icon}
                      </span>
                      <div>
                        <p className="text-violet-100 text-sm font-semibold mb-0.5">{f.title}</p>
                        <p className="text-violet-300/55 text-xs leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-violet-300/40 text-xs flex items-center gap-1.5 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
                    <line x1="9" y1="2" x2="9" y2="4" /><line x1="15" y1="2" x2="15" y2="4" />
                    <line x1="9" y1="20" x2="9" y2="22" /><line x1="15" y1="20" x2="15" y2="22" />
                    <line x1="2" y1="9" x2="4" y2="9" /><line x1="2" y1="15" x2="4" y2="15" />
                    <line x1="20" y1="9" x2="22" y2="9" /><line x1="20" y1="15" x2="22" y2="15" />
                  </svg>
                  Powered by <span className="text-violet-300/70 font-semibold ml-0.5">Claude AI</span>&nbsp;with your full P&amp;L context
                </p>
              </div>

              {/* Right — interactive AI */}
              <div className="lg:col-span-3 flex flex-col gap-4">
                <p className="text-violet-300/70 text-sm font-medium">
                  Quick questions sellers ask most:
                </p>

                {/* Quick buttons 2-col grid */}
                <div className="grid grid-cols-2 gap-2">
                  {QUICK_QUESTIONS.map((q) => (
                    <button
                      key={q.value}
                      onClick={() => handleQuickBtn(q.value)}
                      className={[
                        "px-3 py-2.5 rounded-xl text-xs font-medium border text-left transition-all duration-200",
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
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-violet-500/20" />
                  <span className="text-violet-400/45 text-xs">or type your own question</span>
                  <div className="flex-1 h-px bg-violet-500/20" />
                </div>

                {/* Input row */}
                <div className="flex items-center gap-2 bg-white/5 border border-violet-500/35 rounded-xl px-4 py-2 focus-within:border-violet-400/80 focus-within:bg-white/[0.07] transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400/50 shrink-0">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAsk()}
                    placeholder="e.g. Why is my Meesho margin dropping?"
                    className="flex-1 bg-transparent border-none outline-none text-violet-100 text-sm placeholder:text-violet-300/35 caret-violet-400 min-w-0 py-1"
                  />
                  <button
                    onClick={handleAsk}
                    className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-700 to-indigo-700 hover:from-violet-600 hover:to-indigo-600 active:scale-95 text-white text-xs font-bold transition-all duration-200 shadow-md shadow-violet-900/40"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Ask AI
                  </button>
                </div>

                {/* Quota */}
                <p className="text-violet-300/40 text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  {quota} of 10 AI questions remaining for this report.
                </p>

                {/* Typing dots */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl bg-white/5 border border-violet-500/20 px-4 py-3.5 flex items-center gap-2"
                  >
                    <span className="text-violet-400/60 text-xs mr-1">AI is thinking</span>
                    {[0, 0.2, 0.4].map((delay, i) => (
                      <motion.span
                        key={i}
                        className="w-2 h-2 rounded-full bg-violet-400"
                        animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay }}
                      />
                    ))}
                  </motion.div>
                )}

                {/* Response */}
                {response && !isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-xl bg-white/5 border border-violet-400/25 px-4 py-4 text-violet-100 text-sm leading-relaxed"
                  >
                    <p className="text-violet-400/60 text-xs font-semibold uppercase tracking-wider mb-2">
                      AI Response
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
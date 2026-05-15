"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

// ─── Data ─────────────────────────────────────────────────────────────────────
const QA_DATA = [
  {
    question: "Kaunse SKUs delivery ke baad bhi loss me chal rahe hain?",
    answer: "Maine aapke delivered orders analyze kiye hain. Ye 3 SKUs high marketing costs aur returns ki wajah se loss me chal rahe hain:",
    component: "ProfitTable"
  },
  {
    question: "Kaunse SKUs high loss ya high return rates ke saath hain jo discontinuation ke liye consider kiye jaane chahiye?",
    answer: "Recent performance data ke base par, ye SKUs unsustainable return rates aur negative net margins dikh rahe hain:",
    component: "DiscontinuationTable"
  },
  {
    question: "Hamare top-performing SKUs mein se kaunse ab rising return & RTO trends dikh rahe hain jo future profitability ko impact kar sakte hain?",
    answer: "Maine 3 top-performers flag kiye hain jahan increasing RTO rates margins ko squeeze karne lage hain. Immediate attention recommended:",
    component: "TrendingReturnsTable"
  },
  {
    question: "Kya main apne returns track kar sakta hoon?",
    answer: "Haan, hamara return claim tracking tool har return ko account karta hai.",
  },
  {
    question: "Kaunsa platform mere sabse zyada cost kar raha hai?",
    answer: "Amazon fees aapke products ke liye Flipkart se 2.3x zyada hain.",
  },
]

const TYPING_SPEED_Q = 72
const TYPING_SPEED_A = 38
const PAUSE_AFTER_Q = 600
const INDICATOR_DURATION = 1600
const PAUSE_AFTER_A = 2200
const CLEAR_DELAY = 2400

// ─── Highlight numbers ────────────────────────────────────────────────────────
function highlightText(text: string) {
  return text.split(/(\d+\.?\d*[x%+]?)/g).map((part, i) =>
    /\d/.test(part)
      ? <strong key={i} className="text-yellow-300 font-bold">{part}</strong>
      : <span key={i}>{part}</span>
  )
}

// ─── Profit Table Component ──────────────────────────────────────────────────
function ProfitTable() {
  const data = [
    { sku: "S-ECOM-HB-01", price: "₹0", sett: "-₹277", profit: "-₹277", status: "Loss" },
    { sku: "S-ECOM-KC-42", price: "₹397", sett: "₹76", profit: "-₹188", status: "Loss" },
    { sku: "S-ECOM-WL-09", price: "₹337", sett: "₹313", profit: "-₹91", status: "Loss" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mt-3 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
    >
      <div className="px-3 py-2 bg-gradient-to-r from-red-500/20 to-transparent border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-red-200">Loss Analysis</span>
        </div>
        <span className="text-[8px] font-bold text-white/40 uppercase">3 Records Found</span>
      </div>

      <div className="p-1">
        <div className="grid grid-cols-4 gap-0 px-2 py-1.5 text-[8px] font-black uppercase tracking-widest text-white/30">
          <div>SKU</div>
          <div className="text-right">Price</div>
          <div className="text-right">Sett.</div>
          <div className="text-right">Net</div>
        </div>

        {data.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="grid grid-cols-4 gap-0 px-2 py-2 text-[10px] items-center border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group"
          >
            <div className="truncate pr-1 font-bold text-white/90 group-hover:text-white transition-colors">{row.sku}</div>
            <div className="text-right text-white/60 font-medium">{row.price}</div>
            <div className="text-right text-white/60 font-medium">{row.sett}</div>
            <div className="text-right font-black text-red-400 group-hover:text-red-300 transition-colors">{row.profit}</div>
          </motion.div>
        ))}
      </div>

      <div className="bg-red-500/10 px-3 py-2 text-[9px] text-red-100/80 font-bold border-t border-white/5 flex items-center gap-2">
        <div className="flex -space-x-1">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-3.5 h-3.5 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-[6px]">⚠️</div>
          ))}
        </div>
        <span>High priority: Negative margin detected</span>
      </div>
    </motion.div>
  )
}

function DiscontinuationTable() {
  const data = [
    { sku: "S-ECOM-IR-88", loss: "-₹285", returns: "50.0%", orders: "4" },
    { sku: "S-ECOM-CH-12", loss: "-₹1,112", returns: "14.6%", orders: "48" },
    { sku: "S-ECOM-EC-44", loss: "-₹1,814", returns: "14.3%", orders: "21" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mt-3 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
    >
      <div className="px-3 py-2 bg-gradient-to-r from-orange-500/20 to-transparent border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-orange-200">Discontinuation Alert</span>
        </div>
        <span className="text-[8px] font-bold text-white/40 uppercase">Action Required</span>
      </div>

      <div className="p-1">
        <div className="grid grid-cols-4 gap-0 px-2 py-1.5 text-[8px] font-black uppercase tracking-widest text-white/30">
          <div>SKU Name</div>
          <div className="text-right">Returns</div>
          <div className="text-right">Orders</div>
          <div className="text-right">Net Loss</div>
        </div>

        {data.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="grid grid-cols-4 gap-0 px-2 py-2 text-[10px] items-center border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group"
          >
            <div className="truncate pr-1 font-bold text-white/90 group-hover:text-white transition-colors">{row.sku}</div>
            <div className="text-right text-orange-300 font-medium">{row.returns}</div>
            <div className="text-right text-white/60 font-medium">{row.orders}</div>
            <div className="text-right font-black text-red-400 group-hover:text-red-300 transition-colors">{row.loss}</div>
          </motion.div>
        ))}
      </div>

      <div className="bg-orange-500/10 px-3 py-2 text-[9px] text-orange-100/80 font-bold border-t border-white/5 flex items-center gap-2">
        <span className="text-[12px]">⚠️</span>
        <span>Recommendation: Stop AD spend immediately</span>
      </div>
    </motion.div>
  )
}

function TrendingReturnsTable() {
  const data = [
    { sku: "S-ECOM-BT-11", profit: "₹10,577", retChange: "+12%", rtoChange: "+11.6%" },
    { sku: "S-ECOM-AP-92", profit: "₹8,240", retChange: "+8.5%", rtoChange: "+5.2%" },
    { sku: "S-ECOM-KC-55", profit: "₹12,110", retChange: "+4.2%", rtoChange: "+9.8%" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mt-3 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
    >
      <div className="px-3 py-2 bg-gradient-to-r from-violet-500/20 to-transparent border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-violet-200">Trend Watch</span>
        </div>
        <span className="text-[8px] font-bold text-white/40 uppercase">Top Performers</span>
      </div>

      <div className="p-1">
        <div className="grid grid-cols-4 gap-0 px-2 py-1.5 text-[8px] font-black uppercase tracking-widest text-white/30">
          <div>SKU Name</div>
          <div className="text-right">Profit</div>
          <div className="text-right">Ret Δ</div>
          <div className="text-right">RTO Δ</div>
        </div>

        {data.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="grid grid-cols-4 gap-0 px-2 py-2 text-[10px] items-center border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group"
          >
            <div className="truncate pr-1 font-bold text-white/90 group-hover:text-white transition-colors">{row.sku}</div>
            <div className="text-right text-emerald-400 font-medium">{row.profit}</div>
            <div className="text-right text-red-400 font-bold">{row.retChange}</div>
            <div className="text-right text-red-400 font-bold">{row.rtoChange}</div>
          </motion.div>
        ))}
      </div>

      <div className="bg-violet-500/10 px-3 py-2 text-[9px] text-violet-100/80 font-bold border-t border-white/5 flex items-center gap-2">
        <span className="text-[12px]">📈</span>
        <span>Warning: Return rates rising on high-volume items</span>
      </div>
    </motion.div>
  )
}

// ─── Types ────────────────────────────────────────────────────────────────────
type ChatMessage = { id: string; role: "user" | "assistant"; text: string; component?: string }
export type Phase =
  | "initial-wait"
  | "greeting"
  | "startup"
  | "typing-input"
  | "sending"
  | "showing-indicator"
  | "typing-answer"
  | "pause"
  | "gesturing"

// ─── 🤖 Spherical Robot Avatar ────────────────────────────────────────────────
export function RobotAvatar({ phase, disableBounce = false }: { phase: Phase, disableBounce?: boolean }) {
  const isThinking = phase === "showing-indicator"
  const isTalking = phase === "typing-answer"
  const [blink, setBlink] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Random blink
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const schedBlink = () => {
      timer = setTimeout(() => {
        setBlink(true)
        setTimeout(() => { setBlink(false); schedBlink() }, 160)
      }, 2000 + Math.random() * 2500)
    }
    schedBlink()
    return () => clearTimeout(timer)
  }, [])

  const eyeGlow = isTalking ? 1.4 : isThinking ? 0.9 : 1.0

  return (
    <motion.div
      animate={disableBounce ? { y: 0, rotate: 0, scale: 1 } : {
        y: phase === "initial-wait"
          ? [12, 15, 12]
          : phase === "greeting"
            ? [12, -45, 0, -25, 0] // Excited jumping for greeting
            : isThinking
              ? [0, -8, 0]
              : isTalking
                ? [0, -15, 0, -10, 0] // Bouncing while talking
                : [0, -5, 0], // Default floating
        rotate: phase === "greeting"
          ? [0, -10, 10, -5, 5, 0]
          : isTalking
            ? [0, -2, 2, 0]
            : phase === "typing-input"
              ? [-5, 5, -5] // Looking around while listening
              : isHovered
                ? [0, -5, 5, 0]
                : 0,
        scale: phase === "greeting" ? [1, 1.15, 1] : isHovered ? 1.05 : 1
      }}
      transition={disableBounce ? { duration: 0.1 } : {
        y: {
          duration: phase === "greeting" ? 1.2 : isTalking ? 0.8 : isThinking ? 1.0 : 2.6,
          repeat: Infinity,
          ease: phase === "greeting" ? "easeOut" : "easeInOut"
        },
        rotate: {
          duration: phase === "typing-input" ? 2 : (phase === "greeting" ? 1.2 : 0.5),
          repeat: Infinity,
          ease: "easeInOut"
        },
        scale: { duration: 0.3 }
      }}
      style={{ position: "relative", width: 90, height: 100, cursor: "pointer" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.95 }}
    >
      {/* ── Antenna stem ── */}
      <div style={{
        position: "absolute", left: "50%", top: -18,
        transform: "translateX(-50%)",
        width: 4, height: 18,
        background: "linear-gradient(to top, #b0bcd0, #dce4f0)",
        borderRadius: 3,
      }} />
      {/* ── Antenna ball ── */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="transform-gpu will-change-transform"
        style={{
          position: "absolute", left: "50%", top: -26,
          transform: "translateX(-50%)",
          width: 11, height: 11, borderRadius: "50%",
          background: "radial-gradient(circle at 40% 35%, #a0d8ff, #4090ff)",
          boxShadow: `0 0 8px 4px rgba(100,180,255,${0.6 * eyeGlow})`,
        }}
      />

      {/* ── Right arm ── */}
      <motion.div
        initial={{ rotate: 0, y: 0 }}
        animate={
          phase === "initial-wait"
            ? { rotate: 25, y: 8, x: -3 }
            : phase === "greeting"
              ? {
                rotate: [0, -45, 20, -30, 0],
                x: [0, 10, -5, 5, 0],
                y: [0, -10, 5, -5, 0]
              }
              : phase === "gesturing"
                ? { rotate: [0, -30, 0], y: [0, -5, 0] }
                : isTalking
                  ? { rotate: [0, 10, -5, 0], y: [0, -2, 1, 0] }
                  : isHovered
                    ? { rotate: [0, 15, 0], y: [0, -4, 0] }
                    : isThinking
                      ? { rotate: [0, -10, 0], y: [0, 5, 0] }
                      : { rotate: [0, 4, 0] }
        }
        transition={{
          duration: phase === "greeting" ? 1.4 : isTalking ? 0.6 : (isHovered ? 0.4 : 3),
          repeat: phase === "greeting" || phase === "initial-wait" ? 0 : Infinity,
          ease: "easeInOut"
        }}
        style={{ position: "absolute", top: "42%", right: -25, transformOrigin: "top left", zIndex: 1 }}
      >
        {/* Upper arm (mechanical cylinder) */}
        <div style={{
          width: 14, height: 22, borderRadius: "6px 6px 4px 4px",
          background: "linear-gradient(90deg, #f0f4f8, #cbd5e1, #94a3b8)",
          boxShadow: "1px 2px 6px rgba(0,0,0,0.15)",
        }} />
        {/* Joint sphere */}
        <div style={{
          width: 12, height: 12, borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, #ffffff, #94a3b8)",
          margin: "-4px auto 0",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }} />
        {/* Forearm */}
        <div style={{
          width: 12, height: 24, borderRadius: "4px 4px 10px 10px",
          background: "linear-gradient(90deg, #ffffff, #e2e8f0, #cbd5e1)",
          boxShadow: "1px 2px 5px rgba(0,0,0,0.12)",
          marginTop: -2,
        }} />
        {/* Hand/Pointing finger indicator */}
        <div style={{
          width: 16, height: 16, borderRadius: "50%",
          border: "2px solid #cbd5e1",
          background: "radial-gradient(circle, #f8fafc, #cbd5e1)",
          marginTop: -4, marginLeft: -2,
          boxShadow: "0 0 10px rgba(100,180,255,0.2)",
        }} />
      </motion.div>

      {/* ── Left arm ── */}
      <motion.div
        animate={
          phase === "initial-wait"
            ? { rotate: -25, y: 8, x: 3 }
            : phase === "greeting"
              ? {
                rotate: [0, 45, -20, 30, 0],
                x: [0, -10, 5, -5, 0],
                y: [0, -10, 5, -5, 0]
              }
              : phase === "gesturing"
                ? { rotate: [0, 60, 0], x: [0, -8, 0] }
                : isTalking
                  ? { rotate: [0, -8, 6, 0], y: [0, -1, 2, 0] }
                  : isHovered
                    ? { rotate: [0, -15, 0], y: [0, -4, 0] }
                    : { rotate: [0, -3, 0] }
        }
        transition={{
          duration: phase === "greeting" ? 1.4 : isTalking ? 0.6 : (isHovered ? 0.4 : 2.5),
          repeat: phase === "greeting" || phase === "initial-wait" ? 0 : Infinity,
          ease: "easeInOut", delay: phase === "greeting" ? 0 : 0.2
        }}
        style={{ position: "absolute", top: "45%", left: -22, transformOrigin: "top right" }}
      >
        <div style={{
          width: 14, height: 24, borderRadius: "6px 6px 4px 4px",
          background: "linear-gradient(-90deg, #f0f4f8, #cbd5e1, #94a3b8)",
          boxShadow: "-1px 2px 6px rgba(0,0,0,0.15)",
        }} />
        <div style={{
          width: 12, height: 12, borderRadius: "50%",
          background: "radial-gradient(circle at 70% 30%, #ffffff, #94a3b8)",
          margin: "-4px auto 0",
        }} />
        <div style={{
          width: 12, height: 22, borderRadius: "4px 4px 8px 8px",
          background: "linear-gradient(-90deg, #ffffff, #e2e8f0, #cbd5e1)",
          marginTop: -2,
        }} />
      </motion.div>

      {/* ── Main body sphere ── */}
      <motion.div
        animate={isThinking ? { rotate: [0, -6, 4, 0] } : {}}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", inset: 0,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #f1f5f9 45%, #cbd5e1 85%, #94a3b8 100%)",
          boxShadow: [
            "0 12px 35px rgba(0,0,0,0.18)",
            "inset -6px -8px 20px rgba(0,0,0,0.08)",
            "inset 6px 8px 18px rgba(255,255,255,1)",
          ].join(", "),
        }}
      >
        {/* Face visor — dark curved panel */}
        <div style={{
          position: "absolute",
          top: "16%", left: "8%", right: "8%", height: "45%",
          borderRadius: "100px",
          background: "radial-gradient(ellipse at 50% 30%, #1a243d 0%, #020408 100%)",
          boxShadow: "inset 0 0 18px rgba(40,120,255,0.15), 0 4px 12px rgba(0,0,0,0.4)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "4%",
        }}>
          {/* ── Eyes row ── */}
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scaleY: phase === "initial-wait" ? 0.05 : blink ? 0.05 : 1,
                }}
                transition={{
                  scaleY: { duration: phase === "greeting" ? 0.8 : 0.08, ease: "backOut" },
                }}
                className="transform-gpu will-change-transform"
                style={{
                  width: 22, height: 22, borderRadius: "50%",
                  background: "radial-gradient(circle at 45% 40%, #204890, #000408)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 0 0 2px rgba(30,80,200,0.8), 0 0 ${16 * eyeGlow}px ${10 * eyeGlow}px rgba(40,130,255,0.8)`,
                }}
              >
                <div style={{
                  width: 14, height: 14, borderRadius: "50%",
                  border: "2px solid rgba(100,200,255,0.6)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <motion.div
                    animate={{
                      opacity: phase === "initial-wait" ? 0 : [0.8, 1, 0.8],
                      scale: phase === "initial-wait" ? 0 : isHovered ? 1.2 : 1
                    }}
                    transition={{ opacity: { duration: 1.0, repeat: Infinity, delay: i * 0.3 }, scale: { duration: phase === "greeting" ? 0.8 : 0.3, ease: "backOut" } }}
                    style={{
                      width: 8, height: 8, borderRadius: "50%",
                      background: "#ffffff",
                      boxShadow: "0 0 8px 4px rgba(100,200,255,1)",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Smile ── */}
          <motion.div
            className="transform-gpu will-change-transform"
            animate={
              phase === "initial-wait" ? { scaleY: 0, opacity: 0 } :
                phase === "greeting" ? { scaleY: [0, 1.5, 1], opacity: [0, 1, 1] } :
                  isHovered ? { scaleY: 1.5, scaleX: 1.2 } :
                    isTalking ? { scaleY: [1, 1.3, 0.8, 1] } :
                      { scaleY: 1, opacity: 1 }
            }
            transition={{ duration: phase === "greeting" ? 1.2 : isHovered ? 0.3 : 0.4, repeat: isHovered ? 0 : Infinity }}
            style={{
              width: 28, height: 8,
              borderBottom: `2px solid rgba(60,150,255,${0.55 * eyeGlow})`,
              borderLeft: "2px solid transparent",
              borderRight: "2px solid transparent",
              borderRadius: "0 0 50% 50%",
              marginTop: 8,
              filter: `drop-shadow(0 2px 4px rgba(40,130,255,${0.5 * eyeGlow}))`,
            }}
          />
        </div>

        {/* ── Bottom hover glow ── */}
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6], scaleX: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="transform-gpu will-change-transform"
          style={{
            position: "absolute", bottom: "8%", left: "28%", right: "28%",
            height: 7, borderRadius: "50%",
            background: "radial-gradient(ellipse, #60c0ff 0%, #2070ff 100%)",
            boxShadow: "0 0 10px 5px rgba(40,140,255,0.55)",
          }}
        />

        {/* ── Specular highlight (glossy shine) ── */}
        <div style={{
          position: "absolute", top: "10%", left: "22%",
          width: "35%", height: "25%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.75) 0%, transparent 100%)",
          transform: "rotate(-25deg)",
          pointerEvents: "none",
        }} />
      </motion.div>

      {/* ── Shadow beneath robot ── */}
      <motion.div
        animate={{ scaleX: [0.85, 1, 0.85], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        className="transform-gpu will-change-transform"
        style={{
          position: "absolute", bottom: -12, left: "15%", right: "15%",
          height: 8, borderRadius: "50%",
          background: "rgba(0,0,0,0.35)",
        }}
      />
    </motion.div>
  )
}

// ─── Typing indicator ─────────────────────────────────────────────────────────
function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex items-end gap-2"
    >
      <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold shrink-0 shadow">
        AI
      </div>
      <div className="bg-primary rounded-2xl rounded-bl-sm px-4 py-3 shadow">
        <div className="flex gap-1 items-center h-4">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full bg-white/80 block"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 0.55, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Chat bubble ──────────────────────────────────────────────────────────────
function ChatBubble({ message, showCursor }: { message: ChatMessage; showCursor: boolean }) {
  const isUser = message.role === "user"
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 shadow ${isUser ? "bg-slate-200 text-slate-600" : "bg-primary text-white"
        }`}>
        {isUser ? "U" : "AI"}
      </div>
      <div className={`max-w-[82%] px-4 py-2.5 rounded-2xl shadow text-sm leading-relaxed ${isUser
        ? "bg-slate-100 text-slate-800 rounded-tr-sm"
        : "bg-primary text-white rounded-tl-sm"
        }`}>
        {isUser ? (
          <span>{message.text}</span>
        ) : (
          <div className="flex flex-col">
            <span>
              {highlightText(message.text)}
              {showCursor && (
                <motion.span
                  className="inline-block w-0.5 h-3.5 bg-white/80 ml-0.5 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}
            </span>
            {!showCursor && message.component === "ProfitTable" && <ProfitTable />}
            {!showCursor && message.component === "DiscontinuationTable" && <DiscontinuationTable />}
            {!showCursor && message.component === "TrendingReturnsTable" && <TrendingReturnsTable />}
          </div>
        )}
      </div>
    </motion.div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export function HeroChatScene() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [phase, setPhase] = useState<Phase>("initial-wait")
  const [qaIndex, setQaIndex] = useState(0)
  const [inputText, setInputText] = useState("")
  const [showIndicator, setShowIndicator] = useState(false)
  const [answerTypingId, setAnswerTypingId] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const clearTimers = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, showIndicator, inputText])

  useEffect(() => {
    clearTimers()
    const qa = QA_DATA[qaIndex]

    if (phase === "initial-wait") {
      timerRef.current = setTimeout(() => setPhase("greeting"), 2500)
    }

    if (phase === "greeting") {
      timerRef.current = setTimeout(() => setPhase("startup"), 2000)
    }

    if (phase === "startup") {
      timerRef.current = setTimeout(() => setPhase("typing-input"), 800)
    }

    if (phase === "typing-input") {
      let idx = 0
      setInputText("")
      intervalRef.current = setInterval(() => {
        idx++
        setInputText(qa.question.slice(0, idx))
        if (idx >= qa.question.length) {
          clearInterval(intervalRef.current!)
          timerRef.current = setTimeout(() => setPhase("sending"), 700)
        }
      }, TYPING_SPEED_Q)
    }

    if (phase === "sending") {
      setInputText("")
      setMessages((prev) => [...prev, { id: `q-${qaIndex}`, role: "user", text: qa.question }])
      timerRef.current = setTimeout(() => setPhase("showing-indicator"), PAUSE_AFTER_Q)
    }

    if (phase === "showing-indicator") {
      setShowIndicator(true)
      timerRef.current = setTimeout(() => {
        setShowIndicator(false)
        setPhase("typing-answer")
      }, INDICATOR_DURATION)
    }

    if (phase === "typing-answer") {
      const id = `a-${qaIndex}`
      let idx = 0
      setAnswerTypingId(id)
      setMessages((prev) => [...prev, { id, role: "assistant", text: "" }])
      intervalRef.current = setInterval(() => {
        idx++
        setMessages((prev) => prev.map((m) => m.id === id ? { ...m, text: qa.answer.slice(0, idx), component: idx >= qa.answer.length ? qa.component : undefined } : m))
        if (idx >= qa.answer.length) {
          clearInterval(intervalRef.current!)
          setAnswerTypingId(null)
          setPhase("pause")
        }
      }, TYPING_SPEED_A)
    }

    if (phase === "pause") {
      const isLast = qaIndex === QA_DATA.length - 1
      timerRef.current = setTimeout(() => {
        // Clear for next question
        setMessages([])
        setInputText("")
        setAnswerTypingId(null)

        if (isLast) {
          setQaIndex(0)
          setPhase("typing-input")
        } else {
          setQaIndex((i) => i + 1)
          setPhase("typing-input")
        }
      }, PAUSE_AFTER_A + (qa.component ? 3000 : 1000))
    }

    return clearTimers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, qaIndex])

  const isSending = phase === "sending"

  return (
    <div className="w-full h-full flex items-center justify-center px-2 pt-24 lg:pt-32">
      <div className="w-full max-w-[460px] relative">

        {/* ── Robot avatar (Behind the card) ── */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-20 z-0 pointer-events-none">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: (phase === "initial-wait" || phase === "greeting") ? 70 : 0,
              opacity: 1,
              scale: (phase === "initial-wait" || phase === "greeting") ? 1.25 : 0.9,
            }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            <RobotAvatar phase={phase} />
          </motion.div>
        </div>

        {/* ── Chat card ── */}
        <AnimatePresence>
          {phase !== "initial-wait" && phase !== "greeting" && phase !== "startup" && (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex flex-col relative z-10"
            >
              <div className="w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-3xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col">

                {/* Header */}
                <div className="px-5 py-3 border-b border-slate-100/50 dark:border-slate-800/50 flex items-center justify-between bg-white/40 dark:bg-slate-900/40">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                      <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping opacity-40" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-widest">Speed AI</p>
                      <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        {phase === "showing-indicator" ? "Thinking…" :
                          phase === "typing-answer" ? "Responding…" :
                            "Online · Analyzing Data"}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800" />)}
                  </div>
                </div>

                {/* Messages */}
                <div
                  ref={scrollRef}
                  className="flex flex-col gap-4 p-5 overflow-y-auto hide-scrollbar"
                  style={{ minHeight: "clamp(300px, 50vh, 360px)", maxHeight: "clamp(300px, 50vh, 360px)" }}
                >
                  <AnimatePresence mode="popLayout">
                    {messages.length === 0 && !showIndicator && phase === "typing-input" && (
                      <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center h-full pt-10 pb-4 text-center"
                      >
                        <p className="text-xs text-slate-400 dark:text-slate-500">
                          Ask me anything about your e-commerce profits…
                        </p>
                      </motion.div>
                    )}
                    {messages.map((msg) => (
                      <ChatBubble
                        key={msg.id}
                        message={msg}
                        showCursor={answerTypingId === msg.id}
                      />
                    ))}
                    {showIndicator && <TypingIndicator key="indicator" />}
                  </AnimatePresence>
                </div>

                {/* Input bar */}
                <div className="px-3 py-3 border-t border-slate-100 dark:border-slate-700/50 bg-white/60 dark:bg-slate-800/60 flex items-center gap-2">
                  <div className="flex-1">
                    <div className={`w-full bg-slate-50 dark:bg-slate-700/50 border rounded-xl px-3 py-2 text-sm min-h-[36px] flex items-center transition-all duration-300 ${phase === "typing-input"
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-slate-200 dark:border-slate-600"
                      }`}>
                      {inputText ? (
                        <span className="text-slate-700 dark:text-slate-200">
                          {inputText}
                          {phase === "typing-input" && (
                            <motion.span
                              className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle"
                              animate={{ opacity: [1, 0] }}
                              transition={{ duration: 0.5, repeat: Infinity }}
                            />
                          )}
                        </span>
                      ) : (
                        <span className="text-slate-400 dark:text-slate-500 text-xs select-none">
                          Ask about your e-commerce profit…
                        </span>
                      )}
                    </div>
                  </div>
                  <motion.button
                    animate={isSending ? { scale: [1, 1.25, 1] } : { scale: 1 }}
                    transition={{ duration: 0.35 }}
                    className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-md shrink-0"
                  >
                    <motion.svg
                      className="w-4 h-4 text-white"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      animate={isSending ? { x: [0, 4, 0], opacity: [1, 0.4, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </motion.svg>
                  </motion.button>
                </div>
              </div>

              {/* Footer */}
              <p className="text-center text-[11px] text-slate-400 dark:text-slate-500 mt-2.5">
                Powered by Speed E-Com AI · Amazon · Flipkart · Meesho
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

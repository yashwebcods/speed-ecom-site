"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

// ─── Data ─────────────────────────────────────────────────────────────────────
const QA_DATA = [
  {
    question: "Where is my profit going?",
    answer: "You're losing 18% in hidden marketplace fees.",
  },
  {
    question: "Which platform costs me the most?",
    answer: "Amazon fees are 2.3x higher than Flipkart for your products.",
  },
  {
    question: "How can I increase my profit?",
    answer: "Shift 30% of your listings to Meesho to improve margins.",
  },
  {
    question: "Can I track all platforms in one place?",
    answer: "Yes, our dashboard gives you real-time profit insights across all marketplaces.",
  },
]

const TYPING_SPEED_Q      = 72
const TYPING_SPEED_A      = 38
const PAUSE_AFTER_Q       = 600
const INDICATOR_DURATION  = 1600
const PAUSE_AFTER_A       = 2200
const CLEAR_DELAY         = 2400

// ─── Highlight numbers ────────────────────────────────────────────────────────
function highlightText(text: string) {
  return text.split(/(\d+\.?\d*[x%+]?)/g).map((part, i) =>
    /\d/.test(part)
      ? <strong key={i} className="text-yellow-300 font-bold">{part}</strong>
      : <span key={i}>{part}</span>
  )
}

// ─── Types ────────────────────────────────────────────────────────────────────
type ChatMessage = { id: string; role: "user" | "assistant"; text: string }
type Phase =
  | "initial-wait"
  | "greeting"
  | "startup"
  | "typing-input"
  | "sending"
  | "showing-indicator"
  | "typing-answer"
  | "pause"
  | "clearing"

// ─── 🤖 Spherical Robot Avatar ────────────────────────────────────────────────
function RobotAvatar({ phase }: { phase: Phase }) {
  const isThinking = phase === "showing-indicator"
  const isTalking  = phase === "typing-answer"
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
      animate={{ 
        y: phase === "initial-wait" ? 12 : phase === "greeting" ? [12, -15, 0] : isThinking ? [0, -3, 0] : [0, -5, 0],
        rotate: phase === "greeting" ? [0, -4, 4, -2, 0] : isHovered ? [0, -5, 5, 0] : 0,
        scale: isHovered ? 1.05 : 1
      }}
      transition={{ 
        y: { duration: phase === "greeting" ? 1.4 : isThinking ? 1.2 : 2.6, repeat: (phase === "initial-wait" || phase === "greeting") ? 0 : Infinity, ease: "easeInOut" },
        rotate: { duration: phase === "greeting" ? 1.4 : 0.5 },
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
        animate={{ boxShadow: [`0 0 6px 3px rgba(100,180,255,${0.4 * eyeGlow})`, `0 0 12px 6px rgba(100,180,255,${0.8 * eyeGlow})`, `0 0 6px 3px rgba(100,180,255,${0.4 * eyeGlow})`] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", left: "50%", top: -26,
          transform: "translateX(-50%)",
          width: 11, height: 11, borderRadius: "50%",
          background: "radial-gradient(circle at 40% 35%, #a0d8ff, #4090ff)",
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
                rotate: [25, -25, -5, 0], 
                x: [-3, 6, 0, 0],
                y: [8, -8, 0, 0]
              }
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
                rotate: [-25, 25, 5, 0], 
                x: [3, -6, 0, 0],
                y: [8, -8, 0, 0]
              }
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
                  boxShadow: (phase === "initial-wait" || blink) ? "none" : [
                    `0 0 0 2px rgba(30,80,200,0.8), 0 0 ${12 * eyeGlow}px ${8 * eyeGlow}px rgba(40,130,255,0.7)`,
                    `0 0 0 2px rgba(30,80,200,0.8), 0 0 ${20 * eyeGlow}px ${12 * eyeGlow}px rgba(80,180,255,0.9)`,
                    `0 0 0 2px rgba(30,80,200,0.8), 0 0 ${12 * eyeGlow}px ${8 * eyeGlow}px rgba(40,130,255,0.7)`,
                  ],
                }}
                transition={{
                  scaleY: { duration: phase === "greeting" ? 0.8 : 0.08, ease: "backOut" },
                  boxShadow: { duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 },
                }}
                style={{
                  width: 22, height: 22, borderRadius: "50%",
                  background: "radial-gradient(circle at 45% 40%, #204890, #000408)",
                  display: "flex", alignItems: "center", justifyContent: "center",
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
        style={{
          position: "absolute", bottom: -12, left: "15%", right: "15%",
          height: 8, borderRadius: "50%",
          background: "rgba(0,0,0,0.35)",
          filter: "blur(4px)",
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
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-[10px] font-bold shrink-0 shadow">
        AI
      </div>
      <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl rounded-bl-sm px-4 py-3 shadow">
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
      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 shadow ${
        isUser ? "bg-slate-200 text-slate-600" : "bg-gradient-to-br from-indigo-500 to-violet-600 text-white"
      }`}>
        {isUser ? "U" : "AI"}
      </div>
      <div className={`max-w-[82%] px-4 py-2.5 rounded-2xl shadow text-sm leading-relaxed ${
        isUser
          ? "bg-slate-100 text-slate-800 rounded-tr-sm"
          : "bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-tl-sm"
      }`}>
        {isUser ? (
          <span>{message.text}</span>
        ) : (
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
        )}
      </div>
    </motion.div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export function HeroChatScene() {
  const [messages, setMessages]         = useState<ChatMessage[]>([])
  const [phase, setPhase]               = useState<Phase>("initial-wait")
  const [qaIndex, setQaIndex]           = useState(0)
  const [inputText, setInputText]       = useState("")
  const [showIndicator, setShowIndicator] = useState(false)
  const [answerTypingId, setAnswerTypingId] = useState<string | null>(null)
  const scrollRef   = useRef<HTMLDivElement>(null)
  const timerRef    = useRef<ReturnType<typeof setTimeout> | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const clearTimers = useCallback(() => {
    if (timerRef.current)    clearTimeout(timerRef.current)
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
        setMessages((prev) => prev.map((m) => m.id === id ? { ...m, text: qa.answer.slice(0, idx) } : m))
        if (idx >= qa.answer.length) {
          clearInterval(intervalRef.current!)
          setAnswerTypingId(null)
          timerRef.current = setTimeout(() => setPhase("pause"), PAUSE_AFTER_A)
        }
      }, TYPING_SPEED_A)
    }

    if (phase === "pause") {
      const isLast = qaIndex === QA_DATA.length - 1
      if (isLast) {
        timerRef.current = setTimeout(() => setPhase("clearing"), 500)
      } else {
        setQaIndex((i) => i + 1)
        timerRef.current = setTimeout(() => setPhase("typing-input"), 400)
      }
    }

    if (phase === "clearing") {
      timerRef.current = setTimeout(() => {
        setMessages([])
        setInputText("")
        setShowIndicator(false)
        setAnswerTypingId(null)
        setQaIndex(0)
        setPhase("typing-input")
      }, CLEAR_DELAY)
    }

    return clearTimers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, qaIndex])

  const isSending = phase === "sending"

  return (
    <div className="w-full h-full flex items-center justify-center px-2">
      <div className="w-full max-w-[460px] flex flex-col items-center">

        {/* ── Robot avatar + header ── */}
        <div className="flex flex-col items-center mb-2" style={{ paddingTop: 10 }}>
          <motion.div 
            initial={{ scale: 1.5, y: 100 }}
            animate={{ 
              scale: (phase === "greeting" || phase === "initial-wait") ? 1.5 : 0.8,
              y: (phase === "greeting" || phase === "initial-wait") ? 100 : 0
            }}
            transition={{ duration: 0.8, ease: "backInOut" }}
            style={{ transformOrigin: "bottom center" }}
          >
            <RobotAvatar phase={phase} />
          </motion.div>
          <motion.div 
            className="mt-1 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: (phase === "greeting" || phase === "initial-wait") ? 0 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-sm font-bold text-slate-800 dark:text-slate-100 tracking-tight">
              Speed AI
            </p>
            <div className="flex items-center justify-center gap-1.5 mt-0.5">
              <motion.span
                className="w-2 h-2 rounded-full bg-emerald-400 block"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {phase === "showing-indicator" ? "Thinking…" :
                 phase === "typing-answer"     ? "Responding…" :
                 phase === "typing-input"      ? "Listening…" :
                 "Online · Analyzing your data"}
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── Chat card ── */}
        <AnimatePresence>
          {phase !== "initial-wait" && phase !== "greeting" && phase !== "startup" && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex flex-col"
            >
              <div className="w-full bg-white/85 dark:bg-slate-800/85 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col">

                {/* Messages */}
                <div
                  ref={scrollRef}
                  className="flex flex-col gap-3 p-4 overflow-y-auto"
                  style={{ minHeight: 240, maxHeight: 240 }}
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
                    <div className={`w-full bg-slate-50 dark:bg-slate-700/50 border rounded-xl px-3 py-2 text-sm min-h-[36px] flex items-center transition-all duration-300 ${
                      phase === "typing-input"
                        ? "border-indigo-400 ring-2 ring-indigo-200 dark:ring-indigo-800"
                        : "border-slate-200 dark:border-slate-600"
                    }`}>
                      {inputText ? (
                        <span className="text-slate-700 dark:text-slate-200">
                          {inputText}
                          {phase === "typing-input" && (
                            <motion.span
                              className="inline-block w-0.5 h-4 bg-indigo-500 ml-0.5 align-middle"
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
                    className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-md shrink-0"
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

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
    answer:
      "Yes, our dashboard gives you real-time profit insights across all marketplaces.",
  },
]

const TYPING_SPEED_Q  = 72   // ms per char — question (slow, realistic)
const TYPING_SPEED_A  = 40   // ms per char — answer (slightly faster)
const PAUSE_AFTER_Q   = 600  // ms before AI indicator
const INDICATOR_DURATION = 1600 // ms AI appears to think
const PAUSE_AFTER_A   = 2200 // ms before next question
const CLEAR_DELAY     = 2400 // ms before full reset

// Highlight numbers in answers
function highlightText(text: string) {
  return text.split(/(\d+\.?\d*[x%+]?)/g).map((part, i) =>
    /\d/.test(part) ? (
      <strong key={i} className="text-yellow-300 font-bold">{part}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

// ─── Types ────────────────────────────────────────────────────────────────────
type ChatMessage = { id: string; role: "user" | "assistant"; text: string }
type Phase =
  | "typing-input"      // characters appear in input field
  | "sending"           // input clears → bubble pops into chat
  | "showing-indicator" // AI thinking dots
  | "typing-answer"     // AI answer appears
  | "pause"             // wait before next cycle
  | "clearing"          // fade-out reset

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
function ChatBubble({
  message,
  showCursor,
}: {
  message: ChatMessage
  showCursor: boolean
}) {
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
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 shadow ${
          isUser
            ? "bg-slate-200 text-slate-600"
            : "bg-gradient-to-br from-indigo-500 to-violet-600 text-white"
        }`}
      >
        {isUser ? "U" : "AI"}
      </div>

      <div
        className={`max-w-[82%] px-4 py-2.5 rounded-2xl shadow text-sm leading-relaxed ${
          isUser
            ? "bg-slate-100 text-slate-800 rounded-tr-sm"
            : "bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-tl-sm"
        }`}
      >
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
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [phase, setPhase] = useState<Phase>("typing-input")
  const [qaIndex, setQaIndex] = useState(0)
  const [inputText, setInputText] = useState("")       // text shown in input bar
  const [showIndicator, setShowIndicator] = useState(false)
  const [answerTypingId, setAnswerTypingId] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const clearTimers = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [])

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, showIndicator, inputText])

  // ── State machine ──────────────────────────────────────────────────────────
  useEffect(() => {
    clearTimers()
    const qa = QA_DATA[qaIndex]

    // PHASE 1 — type question character-by-character into the INPUT FIELD
    if (phase === "typing-input") {
      let idx = 0
      setInputText("")
      intervalRef.current = setInterval(() => {
        idx++
        setInputText(qa.question.slice(0, idx))
        if (idx >= qa.question.length) {
          clearInterval(intervalRef.current!)
          // small hold after fully typed, then send
          timerRef.current = setTimeout(() => setPhase("sending"), 700)
        }
      }, TYPING_SPEED_Q)
    }

    // PHASE 2 — "send" the message: clear input, add bubble to chat
    if (phase === "sending") {
      setInputText("")
      setMessages((prev) => [
        ...prev,
        { id: `q-${qaIndex}`, role: "user", text: qa.question },
      ])
      timerRef.current = setTimeout(() => setPhase("showing-indicator"), PAUSE_AFTER_Q)
    }

    // PHASE 3 — show AI thinking dots
    if (phase === "showing-indicator") {
      setShowIndicator(true)
      timerRef.current = setTimeout(() => {
        setShowIndicator(false)
        setPhase("typing-answer")
      }, INDICATOR_DURATION)
    }

    // PHASE 4 — type answer as AI bubble
    if (phase === "typing-answer") {
      const id = `a-${qaIndex}`
      let idx = 0
      setAnswerTypingId(id)
      setMessages((prev) => [...prev, { id, role: "assistant", text: "" }])

      intervalRef.current = setInterval(() => {
        idx++
        setMessages((prev) =>
          prev.map((m) =>
            m.id === id ? { ...m, text: qa.answer.slice(0, idx) } : m
          )
        )
        if (idx >= qa.answer.length) {
          clearInterval(intervalRef.current!)
          setAnswerTypingId(null)
          timerRef.current = setTimeout(() => setPhase("pause"), PAUSE_AFTER_A)
        }
      }, TYPING_SPEED_A)
    }

    // PHASE 5 — pause then go to next or clear
    if (phase === "pause") {
      const isLast = qaIndex === QA_DATA.length - 1
      if (isLast) {
        timerRef.current = setTimeout(() => setPhase("clearing"), 500)
      } else {
        setQaIndex((i) => i + 1)
        timerRef.current = setTimeout(() => setPhase("typing-input"), 400)
      }
    }

    // PHASE 6 — reset
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
      <div className="w-full max-w-[440px] flex flex-col">

        {/* Header */}
        <div className="flex items-center gap-3 mb-3 px-1">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Profit Analyst AI</p>
            <div className="flex items-center gap-1.5">
              <motion.span
                className="w-2 h-2 rounded-full bg-emerald-400 block"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <span className="text-xs text-slate-500 dark:text-slate-400">Online · Analyzing your data</span>
            </div>
          </div>
        </div>

        {/* Chat window */}
        <div className="bg-white/85 dark:bg-slate-800/85 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col">

          {/* Messages area */}
          <div
            ref={scrollRef}
            className="flex flex-col gap-3 p-4 overflow-y-auto flex-1"
            style={{ minHeight: 300, maxHeight: 300 }}
          >
            <AnimatePresence mode="popLayout">
              {messages.length === 0 && !showIndicator && phase === "typing-input" && (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-full pt-12 pb-6 text-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <p className="text-xs text-slate-400">Ask me anything about your e-commerce profits…</p>
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

          {/* ── Input bar — question types here ── */}
          <div className="px-3 py-3 border-t border-slate-100 dark:border-slate-700/50 bg-white/60 dark:bg-slate-800/60 flex items-center gap-2">
            <div className="flex-1 relative">
              <div
                className={`w-full bg-slate-50 dark:bg-slate-700/50 border rounded-xl px-3 py-2 text-sm min-h-[36px] flex items-center transition-all duration-300 ${
                  phase === "typing-input"
                    ? "border-indigo-400 ring-2 ring-indigo-200 dark:ring-indigo-800"
                    : "border-slate-200 dark:border-slate-600"
                }`}
              >
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

            {/* Send button — pulses when sending */}
            <motion.button
              animate={isSending ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 0.35 }}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-md shrink-0"
            >
              <motion.svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                animate={isSending ? { x: [0, 3, 0], opacity: [1, 0.5, 1] } : {}}
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
      </div>
    </div>
  )
}

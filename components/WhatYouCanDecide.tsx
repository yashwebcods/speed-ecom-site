"use client"

import { motion } from "framer-motion"

const CARDS = [
  {
    color: "violet",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
    title: "Which SKUs deserve more budget",
    desc: "Identify SKUs with healthy real margin, not just high sales value. Allocate ad spend where profit actually exists.",
  },
  {
    color: "emerald",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
    title: "Where cash is leaking every month",
    desc: "Catch hidden charges, fee anomalies and deductions that quietly kill margin. Know the exact rupee amount lost.",
  },
  {
    color: "violet",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Which orders were not settled correctly",
    desc: "Order-to-payment reconciliation highlights unpaid and wrongly settled transactions before they disappear.",
  },
]

const iconBg: Record<string, string> = {
  violet: "bg-violet-100 text-violet-600",
  emerald: "bg-emerald-100 text-emerald-600",
}

export function WhatYouCanDecide() {
  return (
    <section className="w-full bg-background py-20 md:py-28 relative overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, currentColor 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 md:mb-18 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
           
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight">
              What you can{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
                decide
              </span>{" "}
              in the first 10 minutes
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:pb-2"
          >
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              This is not a dashboard for browsing numbers. It is a{" "}
              <span className="text-foreground font-semibold">decision engine</span> that tells you
              where profit is real, where it is leaking, and what to do next.
            </p>
           
          </motion.div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={[
                "group relative rounded-2xl border bg-card p-6 md:p-7 flex flex-col gap-4",
                "hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
                "border-border/60 hover:border-primary/40",
                // last card spans 2 cols on lg if odd count — handled via CSS
                i === CARDS.length - 1 && CARDS.length % 3 !== 0
                  ? "sm:col-span-2 lg:col-span-1"
                  : "",
              ].join(" ")}
            >
              {/* Top accent line */}
              <div
                className={[
                  "absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  card.color === "violet"
                    ? "bg-gradient-to-r from-violet-500 to-indigo-500"
                    : "bg-gradient-to-r from-emerald-400 to-teal-500",
                ].join(" ")}
              />

              {/* Icon */}
              <div
                className={[
                  "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                  iconBg[card.color],
                ].join(" ")}
              >
                {card.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-base md:text-lg font-bold text-foreground leading-snug">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Arrow hint */}
              <div
                className={[
                  "self-start mt-1 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0",
                  card.color === "violet"
                    ? "bg-violet-100 text-violet-600"
                    : "bg-emerald-100 text-emerald-600",
                ].join(" ")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

      

      </div>

    </section>
  )
}
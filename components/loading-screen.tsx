"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp } from "lucide-react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Wait for page to fully load, then animate out
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          {/* Animated background circles */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ scale: 0, opacity: 0.3 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0.2 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ duration: 2.2, ease: "easeOut", delay: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/15 rounded-full"
            />
          </div>

          <div className="relative flex flex-col items-center gap-6">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.1,
              }}
              className="relative"
            >
              <motion.div
                animate={{ boxShadow: ["0 0 0 0 rgba(var(--primary), 0)", "0 0 0 20px rgba(var(--primary), 0)"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-20 h-20 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-2xl shadow-primary/30"
              >
                <TrendingUp className="w-10 h-10" />
              </motion.div>
            </motion.div>

            {/* Brand name with staggered letters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <span className="text-2xl font-bold font-display text-foreground">
                Speed E-Com
              </span>
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="text-sm text-muted-foreground overflow-hidden"
              >
                Solution
              </motion.span>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="w-48 h-1 bg-border rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 bg-gradient-to-r from-primary to-accent rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

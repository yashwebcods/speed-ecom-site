"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

// ─── 🤖 Floating Robot Component ──────────────────────────────────────────────
export function FloatingRobot() {
  const [blink, setBlink] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { scrollYProgress } = useScroll()

  // Smooth scroll progress for rotation and movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Calculate rotation based on scroll
  const rotation = useTransform(smoothProgress, [0, 1], [0, 360])
  // Calculate vertical movement (bouncing/jumping) based on scroll
  const jumpY = useTransform(
    smoothProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, -40, 0, -40, 0, -40]
  )

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

  return (
    <div className="fixed right-8 bottom-8 z-[100] pointer-events-none">
      <motion.div
        className="pointer-events-auto cursor-pointer"
        style={{ 
          y: jumpY,
          rotate: rotation,
          width: 80, 
          height: 90 
        }}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.9 }}
      >
        {/* ── Antenna ── */}
        <div style={{
          position: "absolute", left: "50%", top: -16,
          transform: "translateX(-50%)",
          width: 3, height: 16,
          background: "linear-gradient(to top, #b0bcd0, #dce4f0)",
          borderRadius: 3,
        }} />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          style={{
            position: "absolute", left: "50%", top: -22,
            transform: "translateX(-50%)",
            width: 9, height: 9, borderRadius: "50%",
            background: "radial-gradient(circle at 40% 35%, #a0d8ff, #4090ff)",
            boxShadow: "0 0 8px 4px rgba(100,180,255,0.6)",
          }}
        />

        {/* ── Main Body ── */}
        <div style={{
          position: "absolute", inset: 0,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #f1f5f9 45%, #cbd5e1 85%, #94a3b8 100%)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15), inset -4px -6px 15px rgba(0,0,0,0.08)",
        }}>
          {/* Face Visor */}
          <div style={{
            position: "absolute",
            top: "16%", left: "10%", right: "10%", height: "42%",
            borderRadius: "100px",
            background: "radial-gradient(ellipse at 50% 30%, #1a243d 0%, #020408 100%)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            paddingTop: "4%",
          }}>
            <div style={{ display: "flex", gap: 12 }}>
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scaleY: blink ? 0.1 : 1 }}
                  style={{
                    width: 16, height: 16, borderRadius: "50%",
                    background: "radial-gradient(circle at 45% 40%, #204890, #000408)",
                    boxShadow: "0 0 10px rgba(40,130,255,0.8)",
                  }}
                />
              ))}
            </div>
            <motion.div
              animate={{ scaleY: isHovered ? 1.5 : 1 }}
              style={{
                width: 20, height: 6,
                borderBottom: "2px solid rgba(60,150,255,0.6)",
                borderRadius: "0 0 50% 50%",
                marginTop: 6,
              }}
            />
          </div>
        </div>

        {/* ── Glow Effect ── */}
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: "absolute", bottom: "10%", left: "30%", right: "30%",
            height: 5, borderRadius: "50%",
            background: "rgba(64,144,255,0.6)",
            boxShadow: "0 0 15px 5px rgba(64,144,255,0.4)",
          }}
        />
      </motion.div>
    </div>
  )
}

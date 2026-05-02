"use client"

import React, { useEffect, useRef } from "react"
import { animate, stagger } from "animejs"

interface AnimeTextProps {
  text: string
  className?: string
  animationType?: "fade-up" | "typewriter" | "letters" | "words"
  delay?: number
}

export function AnimeText({ text, className = "", animationType = "letters", delay = 0 }: AnimeTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    if (animationType === "letters" || animationType === "words") {
      const elements = containerRef.current.querySelectorAll(".anime-item")
      if (elements.length === 0) return

      animate(elements, {
        opacity: [0, 1],
        translateY: [20, 0],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 800,
        delay: stagger(animationType === "letters" ? 30 : 100, { start: delay })
      })
    } else if (animationType === "fade-up") {
      animate(containerRef.current, {
        opacity: [0, 1],
        translateY: [30, 0],
        easing: "easeOutExpo",
        duration: 1000,
        delay: delay
      })
    }
  }, [text, animationType, delay])

  const renderText = () => {
    if (animationType === "letters") {
      return text.split("").map((char, index) => (
        <span
          key={index}
          className="anime-item inline-block bg-inherit bg-clip-inherit text-inherit"
          style={{ 
            opacity: 0, 
            whiteSpace: char === " " ? "pre" : "normal",
            WebkitTextFillColor: "inherit"
          }}
        >
          {char}
        </span>
      ))
    } else if (animationType === "words") {
      return text.split(" ").map((word, index) => (
        <span
          key={index}
          className="anime-item inline-block mr-[0.25em] bg-inherit bg-clip-inherit text-inherit"
          style={{ 
            opacity: 0,
            WebkitTextFillColor: "inherit"
          }}
        >
          {word}
        </span>
      ))
    }
    return <span style={{ opacity: animationType === "fade-up" ? 0 : 1 }}>{text}</span>
  }

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {renderText()}
    </span>
  )
}

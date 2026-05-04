"use client"

import { ReactLenis } from "lenis/react"
import { ReactNode } from "react"

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.1, 
      duration: 1.0, 
      smoothWheel: true,
      syncTouch: false, // Disable touch syncing for better mobile performance
      touchMultiplier: 0, // Disable touch smoothing to let native scrolling shine
    }}>
      {children}
    </ReactLenis>
  )
}

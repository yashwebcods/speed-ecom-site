"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent, Variants, AnimatePresence } from "framer-motion"
import { BarChart3, Search, TrendingUp, Bot } from "lucide-react"

// Core Features Data
const coreFeatures = [
  {
    title: "Return Reconciliation",
    description: "Ensure every returned unit is accounted for. We reconcile your returns against settlements to recover lost revenue from missing or damaged items.",
    icon: <BarChart3 className="w-6 h-6 text-indigo-500" />,
    color: "bg-indigo-500/10",
    image: "/img-6.png"
  },
  {
    title: "Return Claim Tracking",
    description: "Automate your claim lifecycle. From filing to settlement, we track every claim to ensure you receive full compensation for marketplace errors.",
    icon: <Search className="w-6 h-6 text-emerald-500" />,
    color: "bg-emerald-500/10",
    image: "/img-2.webp"
  },
  {
    title: "High Shipping Charges",
    description: "Identify and eliminate excessive logistics costs. We audit weight discrepancies and carrier overcharges to protect your profit margins.",
    icon: <TrendingUp className="w-6 h-6 text-amber-500" />,
    color: "bg-amber-500/10",
    image: "/img-4.webp"
  },
  {
    title: "Hidden Charges",
    description: "Expose invisible marketplace fees. Our AI audits commission errors, storage costs, and unexpected deductions that eat into your bottom line.",
    icon: <Bot className="w-6 h-6 text-violet-500" />,
    color: "bg-violet-500/10",
    image: "/img-3.webp"
  },
]

export const StickyCapabilitiesFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const totalFeatures = coreFeatures.length

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      totalFeatures - 1,
      Math.max(0, Math.floor(latest * totalFeatures))
    )
    if (index !== activeIndex) {
      setActiveIndex(index)
    }
  })

  const handleItemClick = (index: number) => {
    if (!containerRef.current) return
    const containerTop = containerRef.current.offsetTop
    const containerHeight = containerRef.current.offsetHeight
    const windowHeight = window.innerHeight

    const scrollableDistance = containerHeight - windowHeight
    const targetScroll = containerTop + (index / totalFeatures) * scrollableDistance

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    })
  }

  return (
    <div ref={containerRef} style={{ height: `${totalFeatures * 80}vh` }} className="relative w-full">
      <section className="sticky top-20 w-full flex flex-col justify-center overflow-hidden min-h-[650px]">
        {/* Sticky Heading */}
        <div className="text-center mb-8 lg:mb-12 shrink-0">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl lg:text-6xl font-bold font-display mb-3 tracking-tight"
          >
            Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Features</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4"
          >
            Smart tools tailored to enhance the success of sellers, D2C brands, and retailers.
          </motion.p>
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">

            {/* Feature Navigation List */}
            <div className="hidden lg:block lg:col-span-3 relative h-[400px] overflow-hidden -ml-4 lg:-ml-8">
              <motion.div
                animate={{ y: -(activeIndex * 80) + 160 }}
                transition={{ type: "spring", stiffness: 200, damping: 30, mass: 0.8 }}
                className="absolute inset-y-0 left-0 flex flex-col space-y-4 transform-gpu will-change-transform"
              >
                {coreFeatures.map((feature, i) => {
                  const isActive = activeIndex === i

                  return (
                    <motion.div
                      key={i}
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0.4,
                        scale: isActive ? 1 : 0.9,
                        x: isActive ? 10 : 0
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className={`flex items-center gap-3 p-2 rounded-xl cursor-pointer transition-all duration-500 w-full ${isActive
                        ? "z-10"
                        : "hover:bg-muted/5"
                        }`}
                      onClick={() => handleItemClick(i)}
                    >
                      <div className={`flex-shrink-0 w-16 h-16 flex items-center justify-center transition-all duration-500 z-20 ${isActive ? "scale-110" : "scale-90 grayscale opacity-40"
                        }`}>
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className={`font-bold transition-all duration-500 leading-tight ${isActive ? "text-slate-900 dark:text-white text-xl" : "text-muted-foreground/40 text-base"
                        }`}>
                        {feature.title}
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Gradient Overlays */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
            </div>

            {/* Combined Image and Content */}
            <div className="w-full lg:col-span-9 relative h-[400px] lg:h-[400px] flex items-center">
              <AnimatePresence mode="wait">
                {coreFeatures.map((feature, i) => {
                  if (activeIndex !== i) return null;
                  
                  const isSmallImage = feature.image === "/img--1.webp" || feature.image === "/img-4.webp" || feature.image === "/img-6.png" || feature.image === "/img-3.webp";
                  const isAdImage = feature.image === "/img-4.webp";
                  
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95, x: 20, filter: "blur(10px)" }}
                      animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 1.05, x: -20, filter: "blur(10px)" }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 flex flex-col lg:grid lg:grid-cols-[1.4fr_1.6fr] gap-0 lg:gap-16 items-center justify-center transform-gpu will-change-transform"
                    >
                      {/* Big Image Section */}
                      <div className="relative aspect-square flex items-center justify-center overflow-visible h-[220px] lg:h-auto mx-auto lg:mx-0 mb-0">
                        <div className={`absolute -inset-10 lg:-inset-20 ${feature.color} blur-[60px] lg:blur-[100px] opacity-30 rounded-full`} />
                        <motion.div
                          animate={{ 
                            y: [0, -15, 0],
                            rotate: [0, 2, 0]
                          }}
                          transition={{ 
                            duration: 5, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                          }}
                          className={`relative z-10 w-full flex items-center justify-center transform-gpu ${isAdImage ? 'scale-75 lg:scale-[0.85]' : (isSmallImage ? 'scale-90 lg:scale-[1.1]' : 'scale-100 lg:scale-125')}`}
                        >
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="max-w-[220px] md:max-w-md lg:max-w-full max-h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] mx-auto will-change-transform"
                          />
                        </motion.div>
                      </div>

                      {/* Text Content */}
                      <div className="flex flex-col justify-center space-y-2 lg:space-y-6 text-center lg:text-left -mt-2">
                        <motion.h3 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] dark:text-white font-display"
                        >
                          {feature.title}
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-[13px] sm:text-lg lg:text-2xl text-muted-foreground leading-relaxed px-4 lg:px-0 font-medium"
                        >
                          {feature.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex lg:hidden gap-3 -mt-4 justify-center relative z-20">
              {coreFeatures.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleItemClick(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${activeIndex === i ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"}`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

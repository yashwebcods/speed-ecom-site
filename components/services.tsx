"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import {
  BarChart3,
  TrendingUp,
  CalendarDays,
  Package,
  AlertCircle,
  DollarSign,
  Warehouse,
  Lightbulb,
  Zap,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: BarChart3,
    title: "Advertising & ROI Understanding",
    description:
      "Maximize return on every ad spend with strategic plans, ROI tracking, and continuous optimization for measurable results.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: TrendingUp,
    title: "Sales-Wise Participant Analysis",
    description:
      "Understand sales trends through detailed analysis. Identify top SKUs, marketplaces, or campaigns and replicate success.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: CalendarDays,
    title: "Discount & Festival Strategy",
    description:
      "Boost seasonal revenue with expert discount structuring, festival sales planning, and smart promotional timing.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Package,
    title: "Shipping & Weight Reports",
    description:
      "Eliminate unnecessary costs by identifying shipping weight mismatches and charges for full transparency.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: AlertCircle,
    title: "Wrong Commission Detection",
    description:
      "We audit platform statements to detect wrong commission charges or settlement issues ensuring accurate payouts.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: DollarSign,
    title: "Pricing Strategy & Profit Analysis",
    description:
      "Stay competitive while protecting margins with dynamic pricing and SKU-wise profit tracking.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Settlement Reports",
    description:
      "Gain clarity into warehouse operations with structured FBA/FBF analysis revealing inefficiencies and profit leaks.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Lightbulb,
    title: "Business Growth Insights",
    description:
      "From sales forecasts to competitor benchmarking, we deliver actionable insights for consistent growth.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Zap,
    title: "Weekend Sales Optimization",
    description:
      "Capitalize on high-traffic days with tailored weekend strategies that drive purchases and improve your bottom line.",
    color: "bg-primary/10 text-primary",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true
  })

  return (
    <section id="services" className="py-12 lg:py-32 bg-card relative overflow-hidden" ref={sectionRef}>
      {/* Parallax background decoration */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 w-full min-w-0"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
          >
            Premium Services
          </motion.span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold font-display mb-4 text-balance">
            Smart E-Commerce Support for {" "}
            <span className="text-primary">Sharp Sellers</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground text-pretty">
            Choose only what grows your business. Our comprehensive suite of services
            is designed to maximize your profits and minimize losses.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="group h-full hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-border hover:border-primary/20 hover:-translate-y-1">
                <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.color} mb-5`}
                  >
                    <service.icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-lg font-semibold font-display mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel (Razorpay Style Stacked Cards) */}
        <div className="sm:hidden -mx-4 overflow-hidden relative" ref={emblaRef}>
          <div className="flex touch-pan-y" style={{ height: "420px" }}>
            {services.map((service, index) => {
              // Dynamic stacked effect classes based on index
              const isFirst = index === 0;
              const isSecond = index === 1;
              const isThird = index === 2;
              
              let bgClass = "bg-card";
              let textClass = "text-foreground";
              let titleClass = "text-foreground group-hover:text-primary";
              let descClass = "text-muted-foreground";
              
              if (index % 3 === 1) {
                 bgClass = "bg-[#2b6cb0]"; // Blue
                 textClass = "text-white";
                 titleClass = "text-white";
                 descClass = "text-blue-100";
              } else if (index % 3 === 2) {
                 bgClass = "bg-[#2d3748]"; // Dark grey
                 textClass = "text-white";
                 titleClass = "text-white";
                 descClass = "text-gray-300";
              }

              return (
                <div 
                  key={service.title} 
                  className="flex-[0_0_85%] min-w-0 pl-4 relative"
                  style={{ 
                    transform: `translate3d(0, 0, 0)`,
                  }}
                >
                  <div className={`h-[380px] rounded-3xl p-6 ${bgClass} shadow-xl border border-border/5 flex flex-col relative overflow-hidden transition-all duration-300`}>
                    
                    {/* Badge */}
                    <div className="mb-8">
                      <span className="inline-flex px-3 py-1 bg-white/90 text-zinc-900 text-xs font-semibold rounded-md shadow-sm">
                        Service {index + 1}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <h3 className={`text-3xl font-semibold font-display mb-4 leading-tight ${titleClass}`}>
                      {service.title}
                    </h3>
                    <p className={`text-base leading-relaxed ${descClass}`}>
                      {service.description}
                    </p>
                    
                    {/* Bottom Decorative Icon (optional) */}
                    <div className="absolute bottom-6 right-6 opacity-20">
                       <service.icon className="w-24 h-24" />
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex-[0_0_4%] min-w-0" /> {/* End padding */}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"

const brandImages = [
  "/b1.jpg",
  "/b2.jpg",
  "/b3.jpg",
  "/b4.jpg",
  "/b5.jpg",
  "/b6.jpg",
  "/b7.jpg",
  "/b8.jpg",
  "/b9.jpg",
  "/b10.jpg",
  "/b11.jpg",
  "/b12.webp",
]

export function TrustedBy() {
  return (
    <section className="w-full bg-background py-12 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold font-display text-foreground mb-3 leading-tight">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
              Leading Online Sellers
            </span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm lg:text-base max-w-xl mx-auto px-4">
            Brands across Amazon, Flipkart, and Meesho rely on us for accurate
            data and profit clarity.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden border-2 border-primary/60 shadow-lg shadow-primary/5"
        >
          {/* Mobile: 3 columns x 4 rows = 12 logos */}
          <div className="grid grid-cols-3 md:hidden">
            {brandImages.map((src, i) => {
              const isLastRow = i >= 9  // 3rd row ke baad (0-2,3-5,6-8,9-11)
              const isLastCol = (i + 1) % 3 === 0
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.02 }}
                  className={[
                    "flex items-center justify-center p-4 sm:p-5 bg-background hover:bg-primary/5 transition-colors duration-200 group cursor-pointer",
                    !isLastRow ? "border-b border-border/50" : "",
                    !isLastCol ? "border-r border-border/50" : "",
                  ].join(" ")}
                >
                  <img
                    src={src}
                    alt={`Client brand ${i + 1}`}
                    className="h-14 sm:h-16 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>
              )
            })}
          </div>

          {/* Tablet: 4 columns x 3 rows = 12 logos */}
          <div className="hidden md:grid lg:hidden grid-cols-4">
            {brandImages.map((src, i) => {
              const isLastRow = i >= 8  // 2nd row ke baad (0-3,4-7,8-11)
              const isLastCol = (i + 1) % 4 === 0
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.02 }}
                  className={[
                    "flex items-center justify-center p-5 bg-background hover:bg-primary/5 transition-colors duration-200 group cursor-pointer",
                    !isLastRow ? "border-b border-border/50" : "",
                    !isLastCol ? "border-r border-border/50" : "",
                  ].join(" ")}
                >
                  <img
                    src={src}
                    alt={`Client brand ${i + 1}`}
                    className="h-14 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>
              )
            })}
          </div>

          {/* Desktop: 6 columns x 2 rows = 12 logos */}
          <div className="hidden lg:grid" style={{ gridTemplateColumns: `repeat(6, minmax(0, 1fr))` }}>
            {brandImages.map((src, i) => {
              const isLastRow = i >= 6
              const isLastCol = (i + 1) % 6 === 0
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className={[
                    "flex items-center justify-center p-5 bg-background hover:bg-primary/5 transition-colors duration-200 group cursor-pointer",
                    !isLastRow ? "border-b border-border/50" : "",
                    !isLastCol ? "border-r border-border/50" : "",
                  ].join(" ")}
                >
                  <img
                    src={src}
                    alt={`Client brand ${i + 1}`}
                    className="h-12 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
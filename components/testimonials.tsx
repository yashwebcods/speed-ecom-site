"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Priya Malhotra",
    role: "Online Seller, Delhi",
    content:
      "I truly appreciate the detailed monthly reports and profit-loss breakdown shared by my Relationship Manager. Her insights have helped me reduce unnecessary expenses and plan ahead. This kind of personal support is rare – thank you so much!",
    rating: 5,
  },
  {
    name: "Amit Shah",
    role: "E-commerce Business Owner, Mumbai",
    content:
      "My dedicated RM takes time every month to explain my store's performance in detail. I never expected such clarity and consistent financial guidance. It's made a real impact on my business decisions. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rakesh Bansal",
    role: "Multi-platform Seller, Surat",
    content:
      "From day one, my Relationship Manager has been proactive in sharing monthly analysis reports and helping me understand profit margins and losses. The personal touch and professional service have exceeded my expectations.",
    rating: 5,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
          >
            Testimonials
          </motion.span>
          <h2 className="text-3xl lg:text-5xl font-bold font-display mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from real sellers who transformed their businesses with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" style={{ perspective: "1000px" }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="h-full bg-card border-border hover:shadow-xl hover:shadow-primary/5 transition-all">
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ opacity: 0, rotate: -20 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                    className="mb-6"
                  >
                    <Quote className="w-10 h-10 text-primary/20" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.5 + index * 0.15 + i * 0.08,
                          type: "spring",
                          stiffness: 300,
                        }}
                      >
                        <Star className="w-4 h-4 text-accent fill-accent" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed flex-grow mb-6">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold"
                    >
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </motion.div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

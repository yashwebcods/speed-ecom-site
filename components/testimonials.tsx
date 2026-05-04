"use client"

import { motion, Variants } from "framer-motion"
import { Star, Quote, CheckCircle2 } from "lucide-react"
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  }),
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any }}
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
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from real sellers who transformed their businesses with us.
          </p>
        </motion.div>

        {/* Testimonials Grid (Desktop) / Chat (Mobile) */}
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
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
                    <Quote className="w-10 h-10 text-primary/20 mb-6" />
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed flex-grow mb-6 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {testimonial.name.split(" ").map((n) => n[0]).join("")}
                      </div>
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

          {/* Mobile WhatsApp-Style Chat */}
          <div className="lg:hidden space-y-6 max-w-md mx-auto relative px-4">
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-primary/10 -z-10" />
            
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10 transform-gpu"
              >
                {/* Profile Pic Indicator */}
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-primary border-4 border-background flex items-center justify-center text-white text-[10px] font-bold shadow-lg z-10">
                  {testimonial.name.split(" ").map((n) => n[0]).join("")}
                </div>

                {/* Chat Bubble */}
                <div className="bg-card border border-border/50 rounded-2xl rounded-tl-none p-4 shadow-sm relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{testimonial.name}</span>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-2 h-2 text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-[13px] text-foreground/80 leading-relaxed mb-2">
                    {testimonial.content}
                  </p>
                  
                  <div className="flex items-center justify-end gap-1.5 opacity-40">
                    <span className="text-[8px] font-medium uppercase tracking-tighter">{testimonial.role}</span>
                    <div className="flex -space-x-1">
                      <CheckCircle2 className="w-3 h-3 text-primary fill-primary/20" />
                      <CheckCircle2 className="w-3 h-3 text-primary fill-primary/20" />
                    </div>
                  </div>

                  {/* Bubble Tail */}
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-card border-l border-t border-border/50 rotate-[-45deg] rounded-sm -z-10" />
                </div>
              </motion.div>
            ))}

            {/* Response Simulation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center pt-2"
            >
              <div className="bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 text-[9px] font-bold text-primary uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                Growth is happening now
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

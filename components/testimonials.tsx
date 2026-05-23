"use client"

import { motion, Variants } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Priya Malhotra",
    role: "Amazon Seller, Mumbai",
    content:
      "The detailed monthly reports and profit-loss breakdown have helped me reduce unnecessary expenses and plan ahead. The personal support from my Relationship Manager is rare — I genuinely know where every rupee goes now.",
    rating: 5,
    badge: "₹ Expenses Reduced",
  },
  {
    name: "Amit Shah",
    role: "Flipkart Seller, Surat",
    content:
      "My dedicated RM explains my store's performance every month in plain language. The financial clarity has completely changed how I make pricing and ad decisions. Revenue up 28% in 3 months.",
    rating: 5,
    badge: "+28% Revenue",
  },
  {
    name: "Rakesh Bansal",
    role: "Meesho Seller, Ahmedabad",
    content:
      "From day one my Relationship Manager proactively shared monthly analysis and helped me understand my profit margins. Speedi AI caught ₹43,000 in wrong commissions in the first audit.",
    rating: 5,
    badge: "₹43K Recovered",
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
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-spacing bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[28px] lg:text-[32px] font-semibold mb-4 text-[var(--color-navy-dark)]">
            What Our Clients Say
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.7]">
            Real stories from real sellers who transformed their businesses with us.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
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
                <Card className="h-full bg-card border-border hover:shadow-xl transition-all">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <Quote className="w-10 h-10 text-primary/20 shrink-0" />
                      <span className="badge-success text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                        {testimonial.badge}
                      </span>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-[#374151] text-[15px] leading-[1.7] flex-grow mb-6 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-[18px]">
                          {testimonial.name}
                        </div>
                        <div className="text-[13px] text-[#6B7280]">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="lg:hidden space-y-6 max-w-md mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-foreground">{testimonial.name}</span>
                      <span className="badge-success text-[10px] font-semibold px-2 py-0.5 rounded-full">
                        {testimonial.badge}
                      </span>
                    </div>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-[14px] text-[#374151] leading-[1.7] mb-3">
                      {testimonial.content}
                    </p>
                    <p className="text-[13px] text-[#6B7280]">{testimonial.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

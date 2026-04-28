"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99133 15809",
    href: "tel:+919913315809",
  },
  {
    icon: Mail,
    label: "Email",
    value: "speedecomsolution@gmail.com",
    href: "mailto:speedecomsolution@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "508, KBC-1 (Karunesh Business Center), Opposite Abhishek Arcade, Kiran Chowk, Surat – 395010",
    href: "https://maps.google.com/?q=Kiran+Chowk+Surat",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 10:00 AM - 7:00 PM",
    href: null,
  },
]

const contactCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  }),
}

export function Contact() {
  return (
    <section id="contact" className="py-12 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
            >
              Contact Us
            </motion.span>
            <h2 className="text-2xl lg:text-5xl font-bold font-display mb-4 text-balance leading-tight">
              Get in Touch With{" "}
              <span className="text-primary">Speed E-Com</span>
            </h2>
            <p className="text-sm lg:text-lg text-muted-foreground mb-8 text-pretty">
              If you&apos;ve faced problems in your online business like cash flow issues,
              settlement delays, or high shipping charges, we&apos;ve got you covered.
              Our experts are here to provide complete support from start to finish.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  custom={index}
                  variants={contactCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <Card className="group hover:border-primary/20 hover:shadow-lg transition-all">
                    <CardContent className="p-5">
                      <div className="flex gap-4">
                        <div className="shrink-0">
                          <motion.div
                            whileHover={{ scale: 1.15, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center"
                          >
                            <item.icon className="w-5 h-5" />
                          </motion.div>
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                            {item.label}
                          </div>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-sm font-medium text-foreground hover:text-primary transition-colors break-words"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-sm font-medium text-foreground">{item.value}</span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: 5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as any }}
            className="flex items-center"
          >
            <div className="w-full p-8 lg:p-12 bg-primary rounded-3xl text-white relative overflow-hidden">
              {/* Decorative Elements */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.25, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"
              />

              <div className="relative z-10">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-xl lg:text-3xl font-bold font-display mb-3 text-balance leading-tight"
                >
                  Enough Talk, Let&apos;s Grow Your Online Business Together!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-white/80 mb-8 text-pretty"
                >
                  Ready to transform your e-commerce business? Book a free demo today
                  and discover how we can help you maximize profits.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                    <Button
                      asChild
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 rounded-full px-8 group h-12 lg:h-11 w-full"
                    >
                      <Link href="https://forms.gle/XHrALZDXNSWV5eyt9" target="_blank">
                        Book Free Demo
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-white/30 text-primary hover:bg-white/10 hover:text-white rounded-full px-8 h-12 lg:h-11 w-full"
                    >
                      <Link href="tel:+919913315809">Call Now</Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

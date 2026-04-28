"use client"
import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Which platforms do you support?",
    answer:
      "We work with all major e-commerce platforms including Flipkart, Amazon, Meesho, JioMart, Myntra, and more. Our team is experienced in handling platform-specific issues and optimizations.",
  },
  {
    question: "How will your services solve my online business problems?",
    answer:
      "We provide complete analysis and reporting on cash flow issues, wrong shipment weight charges, high shipping costs, illegal deductions, and settlement disputes. Our experts identify problem areas and provide actionable solutions.",
  },
  {
    question: "Do I need to share my seller account access?",
    answer:
      "Yes, for accurate analysis we need limited access or data from your seller accounts. However, your data is 100% secure with us. We follow strict security protocols and only access what&apos;s necessary for the analysis.",
  },
  {
    question: "What are your pricing plans?",
    answer:
      "Our plans start from just ₹249/month, which includes detailed reporting and expert support. We have different tiers based on the number of platforms and level of support you need. Contact us for a customized quote.",
  },
  {
    question: "How quickly can I see results?",
    answer:
      "Most clients start seeing improvements within the first month. Our initial audit typically reveals immediate savings from wrong commission recoveries and shipping discrepancy fixes. Long-term strategic improvements build over 2-3 months.",
  },
  {
    question: "What makes you different from other service providers?",
    answer:
      "We provide a dedicated Relationship Manager for personalized support, platform-specific expertise, and transparent financial tracking. We&apos;re not just service providers – we&apos;re your growth partners committed to your success.",
  },
]

const faqItemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  }),
}

export function FAQ() {
  return (
    <section id="faq" className="py-12 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
            >
              FAQ
            </motion.span>
            <h2 className="text-2xl lg:text-5xl font-bold font-display mb-4 text-balance">
              Frequently Asked{" "}
              <span className="text-primary">Questions</span>
            </h2>
            <p className="text-sm lg:text-lg text-muted-foreground mb-6 text-pretty">
              Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for,
              feel free to contact us directly.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-primary/5 rounded-2xl border border-primary/10"
            >
              <h3 className="font-semibold text-foreground mb-2">Still have questions?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Can&apos;t find the answer you&apos;re looking for? Please chat with our friendly team.
              </p>
              <a
                href="tel:+919913315809"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
              
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={faqItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-xl px-4 lg:px-6 data-[state=open]:border-primary/20 data-[state=open]:shadow-lg transition-all"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-4 lg:py-5 hover:no-underline text-sm lg:text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 lg:pb-5 text-[13px] lg:text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

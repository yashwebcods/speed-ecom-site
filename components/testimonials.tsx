"use client";
import { motion, Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Malhotra",
    initials: "PM",
    role: "Amazon Seller, Mumbai",
    resultValue: "",
    rating: 5,
    content:
      "The monthly reports and profit-loss breakdown helped me reduce unnecessary expenses immediately. The personal support from my RM is rare — I genuinely know where every rupee goes now.",
  },
  {
    name: "Amit Shah",
    initials: "AS",
    role: "Flipkart Seller, Surat",
    rating: 5,
    content:
      "My RM explains my store performance every month in plain language. The financial clarity has completely changed how I make pricing and ad decisions. Revenue up 28% in just 3 months.",
  },
  {
    name: "Rakesh Bansal",
    initials: "RB",
    role: "Meesho Seller, Ahmedabad",
    rating: 5,
    content:
      "Speedi AI caught ₹43,000 in wrong commissions in the first audit alone. My RM proactively shared monthly analysis from day one. The personal touch exceeded every expectation.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Exactly like the image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3">
            What our sellers say
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            Real results from real sellers across India.
          </p>
        </motion.div>

        {/* Testimonials Grid - 3 columns like the image */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-4">
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote/Content */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* User Info with Initials Avatar */}
                <div className="flex items-center gap-3 pt-4 mt-2 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
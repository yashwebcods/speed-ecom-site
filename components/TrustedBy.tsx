"use client"

import { motion } from "framer-motion"

const brandImages = [
  { src: "/b1.jpg", name: "signatize®" },
  { src: "/b2.jpg", name: "ELINOR" },
  { src: "/b3.jpg", name: "WRiXYT®" },
  { src: "/b4.jpg", name: "Auromin" },
  { src: "/b5.jpg", name: "NARIYA" },
  { src: "/b6.jpg", name: "AYURVEDA" },
  { src: "/b7.jpg", name: "OFFYX" },
  { src: "/b8.jpg", name: "JDFRESH" },
  { src: "/b9.jpg", name: "SHRESH" },
  { src: "/b10.jpg", name: "SHRESH" },
  { src: "/b11.jpg", name: "SHRESH" },
  { src: "/b12.webp", name: "SHRESH" },
]

export function TrustedBy() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 relative overflow-hidden">
      <div className="w-full px-4 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Leading Online Sellers
            </span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Brands across Amazon, Flipkart, and Meesho rely on us for accurate
            data and profit clarity.
          </p>
        </motion.div>

        {/* Logo Grid - Full Width - Only 2 Rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="w-full"
        >
          
          {/* Mobile: 2 rows x 6 columns - scroll horizontally if needed */}
          <div className="grid grid-cols-3 sm:hidden border border-gray-200 rounded-xl overflow-hidden">
            {/* First 6 logos - Row 1 */}
            {brandImages.slice(0, 6).map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className={`
                  flex items-center justify-center p-4 bg-white
                  ${(i + 1) % 3 !== 0 ? 'border-r border-gray-200' : ''}
                  border-b border-gray-200
                `}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-8 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
              </motion.div>
            ))}
            {/* Next 6 logos - Row 2 */}
            {brandImages.slice(6, 12).map((brand, i) => (
              <motion.div
                key={i + 6}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (i + 6) * 0.02 }}
                className={`
                  flex items-center justify-center p-4 bg-white
                  ${(i + 1) % 3 !== 0 ? 'border-r border-gray-200' : ''}
                `}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-8 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
              </motion.div>
            ))}
          </div>

          {/* Tablet and Above: 2 rows x 6 columns */}
          <div className="hidden sm:block">
            {/* Row 1 - First 6 logos */}
            <div className="grid grid-cols-6 border-x border-t border-gray-200 rounded-t-xl overflow-hidden">
              {brandImages.slice(0, 6).map((brand, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  className={`
                    flex items-center justify-center p-6 bg-white
                    ${(i + 1) % 6 !== 0 ? 'border-r border-gray-200' : ''}
                  `}
                >
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="h-12 sm:h-14 md:h-16 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                  />
                </motion.div>
              ))}
            </div>

            {/* Row 2 - Next 6 logos */}
            <div className="grid grid-cols-6 border-x border-b border-gray-200 rounded-b-xl overflow-hidden">
              {brandImages.slice(6, 12).map((brand, i) => (
                <motion.div
                  key={i + 6}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (i + 6) * 0.02 }}
                  className={`
                    flex items-center justify-center p-6 bg-white
                    ${(i + 1) % 6 !== 0 ? 'border-r border-gray-200' : ''}
                  `}
                >
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="h-12 sm:h-14 md:h-16 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
                  />
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
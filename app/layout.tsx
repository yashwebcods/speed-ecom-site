import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScroll } from '@/components/smooth-scroll'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Speed E-Com Solution | Smart E-Commerce Financial Management',
  description: 'Maximize profits and eliminate hidden losses in your online business. Expert financial analysis for Meesho, Flipkart, Amazon sellers with ROI tracking, commission audits, and growth insights.',
  keywords: ['e-commerce', 'online business', 'financial analysis', 'Meesho', 'Flipkart', 'Amazon', 'profit optimization'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background overflow-x-hidden`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <SmoothScroll>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </SmoothScroll>
      </body>
    </html>
  )
}

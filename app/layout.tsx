import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { ViewTransitions } from 'next-view-transitions'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'The Teleporter',
    template: '%s | The Teleporter',
  },
  description: 'The Teleporter, a skilled design engineer and developer, is known for crafting high-quality web components with an exceptional attention to detail and a focus on user-centered design. Balancing functionality with aesthetic precision, The Teleporter delivers tailored solutions that are both visually engaging and intuitively functional, pushing the boundaries of modern web development.',
  openGraph: {
    title: 'The Teleporter',
    description: 'The Teleporter, a skilled design engineer and developer, is known for crafting high-quality web components with an exceptional attention to detail and a focus on user-centered design. Balancing functionality with aesthetic precision, The Teleporter delivers tailored solutions that are both visually engaging and intuitively functional, pushing the boundaries of modern web development.',
    url: baseUrl,
    siteName: 'The Teleporter',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <ViewTransitions>
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#161616]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
</ViewTransitions>
  )
}

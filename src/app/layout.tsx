import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { generateWebsiteSchema, generateOrganizationSchema } from '@/lib/schema'
import ClientPerformanceMonitor from '@/components/client-performance-monitor'
import ClientBody from '@/components/client-body'

export const metadata: Metadata = {
  title: {
    default: 'ECOM by Mappysoft - Digital Marketing Education Hub',
    template: '%s | ECOM by Mappysoft',
  },
  description: 'Educational hub for meta advertising, Amazon, Flipkart, Meesho, and other marketplace platforms.',
  keywords: ['digital marketing', 'meta advertising', 'facebook ads', 'instagram ads', 'amazon', 'flipkart', 'meesho', 'marketplace management', 'ecommerce'],
  authors: [{ name: 'ECOM by Mappysoft' }],
  creator: 'ECOM by Mappysoft',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ecommappysoft.com',
    title: 'ECOM by Mappysoft - Digital Marketing Education Hub',
    description: 'Educational hub for meta advertising, Amazon, Flipkart, Meesho, and other marketplace platforms.',
    siteName: 'ECOM by Mappysoft',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ECOM by Mappysoft - Digital Marketing Education Hub',
    description: 'Educational hub for meta advertising, Amazon, Flipkart, Meesho, and other marketplace platforms.',
    creator: '@mappysoft',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://ecommappysoft.com',
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Generate JSON-LD schemas
  const websiteSchema = generateWebsiteSchema();
  const organizationSchema = generateOrganizationSchema();
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Uncomment font preload links since we've created placeholder files */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/montserrat.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Uncomment hero image preload since we've created a placeholder file */}
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />
        
        {/* DNS prefetch for third-party domains */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <ClientBody>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        
        {/* Add performance monitor */}
        <ClientPerformanceMonitor />
      </ClientBody>
    </html>
  )
} 
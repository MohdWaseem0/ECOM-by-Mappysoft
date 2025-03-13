import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About Us - ECOM by Mappysoft | E-commerce Marketing Agency',
  description: 'Learn about ECOM by Mappysoft, our mission, vision, and expertise in digital marketing and marketplace management for leading platforms including Meta, Amazon, Flipkart and Meesho. Founded in 2018 with a passion for e-commerce excellence.',
  keywords: 'ecommerce agency, digital marketing team, mappysoft about, ecommerce experts, marketplace management team, e-commerce strategy agency, meta advertising experts, amazon optimization agency, flipkart growth experts, meesho marketing',
  alternates: {
    canonical: 'https://ecommappysoft.com/about',
    languages: {
      'en-US': 'https://ecommappysoft.com/about',
      'en-IN': 'https://ecommappysoft.com/in/about',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'Google-verification-code',
    yandex: 'Yandex-verification-code',
    yahoo: 'Yahoo-verification-code',
    other: {
      me: ['support@mappysoft.com'],
    },
  },
  openGraph: {
    title: 'About ECOM by Mappysoft - Your E-commerce Growth Partner Since 2018',
    description: 'Learn about ECOM by Mappysoft, our mission, vision, and expertise in digital marketing and marketplace management for leading platforms including Meta, Amazon, Flipkart and Meesho. Founded in 2018 with a passion for e-commerce excellence.',
    url: 'https://ecommappysoft.com/about',
    siteName: 'ECOM by Mappysoft',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        width: 2340,
        height: 1560,
        alt: 'ECOM by Mappysoft team collaborating on digital marketing strategies',
        secureUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ECOM by Mappysoft - Your E-commerce Growth Partner Since 2018',
    description: 'Learn about ECOM by Mappysoft, our mission, vision, and expertise in digital marketing and marketplace management for leading platforms including Meta, Amazon, Flipkart and Meesho.',
    images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'],
    creator: '@mappysoft',
    site: '@mappysoft',
  },
  applicationName: 'ECOM by Mappysoft',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'ECOM by Mappysoft Team', url: 'https://ecommappysoft.com/about' }],
  creator: 'ECOM by Mappysoft',
  publisher: 'ECOM by Mappysoft',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://ecommappysoft.com'),
  category: 'E-commerce Marketing',
} 
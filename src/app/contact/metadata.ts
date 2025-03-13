import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact Us - ECOM by Mappysoft | E-commerce Marketing Experts',
  description: 'Get in touch with ECOM by Mappysoft. Reach out for inquiries about our digital marketing services, e-commerce expertise, or collaboration opportunities. We help brands grow on Meta, Amazon, Flipkart & Meesho.',
  keywords: 'contact ecommerce agency, digital marketing contact, mappysoft contact, get in touch, ecommerce consultation, marketplace experts contact, meta advertising help, amazon marketing contact, flipkart growth agency, meesho experts',
  alternates: {
    canonical: 'https://ecommappysoft.com/contact',
    languages: {
      'en-US': 'https://ecommappysoft.com/contact',
      'en-IN': 'https://ecommappysoft.com/in/contact',
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
    title: 'Contact ECOM by Mappysoft - Get in Touch with Our E-commerce Experts',
    description: 'Reach out to ECOM by Mappysoft for inquiries about our digital marketing services, e-commerce expertise, or collaboration opportunities. We specialize in Meta Advertising, Amazon, Flipkart & Meesho growth.',
    url: 'https://ecommappysoft.com/contact',
    siteName: 'ECOM by Mappysoft',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        width: 1169,
        height: 779,
        alt: 'ECOM by Mappysoft office - Contact our e-commerce marketing team',
        secureUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ECOM by Mappysoft - Get in Touch with Our E-commerce Experts',
    description: 'Reach out to ECOM by Mappysoft for inquiries about our digital marketing services, e-commerce expertise, or collaboration opportunities. We specialize in Meta Advertising, Amazon, Flipkart & Meesho growth.',
    images: ['https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'],
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
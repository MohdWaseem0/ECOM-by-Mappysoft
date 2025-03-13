import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookies Policy - ECOM by Mappysoft',
  description: 'Learn about how ECOM by Mappysoft uses cookies and similar technologies to enhance your browsing experience, personalize content, and analyze site traffic.',
  keywords: 'cookies policy, cookie usage, ecommerce cookies, mappysoft cookies, website tracking, data privacy',
  alternates: {
    canonical: 'https://ecommappysoft.com/cookies',
  },
  openGraph: {
    title: 'Cookies Policy - ECOM by Mappysoft',
    description: 'Learn about how ECOM by Mappysoft uses cookies and similar technologies to enhance your browsing experience, personalize content, and analyze site traffic.',
    url: 'https://ecommappysoft.com/cookies',
    siteName: 'ECOM by Mappysoft',
    type: 'website',
  },
}

export default function CookiesPage() {
  return (
    <div className="flex flex-col gap-12 py-12 md:gap-16 md:py-16">
      {/* Schema.org structured data for SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cookies Policy",
            "description": "Learn about how ECOM by Mappysoft uses cookies and similar technologies to enhance your browsing experience.",
            "publisher": {
              "@type": "Organization",
              "name": "ECOM by Mappysoft",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ecommappysoft.com/logo.png"
              }
            },
            "inLanguage": "en-US"
          })
        }}
      />

      {/* Header */}
      <section className="container-narrow">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/80 px-6 py-12 text-center shadow-lg md:px-12">
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          </div>
          <div className="relative">
            <h1 className="text-white">Cookies Policy</h1>
            <p className="mt-4 text-lg text-white/80">
              Understanding how we use cookies to improve your experience
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container-narrow">
        <div className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
          <div className="mb-10 rounded-xl border border-primary/10 bg-primary/5 p-6 shadow-sm">
            <h2 className="mt-0 gradient-text">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They're widely used to make websites work more efficiently and provide valuable information to website owners.
            </p>
          </div>

          <h2 className="text-blue-gradient">How We Use Cookies</h2>
          <p>
            ECOM by Mappysoft uses cookies for several purposes, including:
          </p>
          <ul>
            <li>
              <strong className="text-secondary">Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access.
            </li>
            <li>
              <strong className="text-secondary">Analytics Cookies:</strong> We use analytics cookies to understand how visitors interact with our website, which helps us improve our site and provide better service.
            </li>
            <li>
              <strong className="text-secondary">Functionality Cookies:</strong> These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, personalized features.
            </li>
            <li>
              <strong className="text-secondary">Advertising Cookies:</strong> We use these cookies to deliver advertisements that are relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of our advertising campaigns.
            </li>
          </ul>

          <h2 className="text-blue-gradient">Third-Party Cookies</h2>
          <p>
            In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
          </p>

          <div className="mb-10 rounded-xl border border-secondary/20 bg-secondary/5 p-6 shadow-sm">
            <h2 className="mt-0 gradient-text">Your Cookie Choices</h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may affect your experience on our website.
            </p>
            <p className="mb-0">
              By continuing to use our website, you consent to our use of cookies in accordance with this Cookies Policy.
            </p>
          </div>

          <h2 className="text-blue-gradient">Cookie Management</h2>
          <p>
            You can manage cookies through your web browser settings. Here's how you can do this in different browsers:
          </p>
          <ul>
            <li><strong className="highlight">Google Chrome:</strong> Settings {`>`} Privacy and security {`>`} Cookies and other site data</li>
            <li><strong className="highlight">Microsoft Edge:</strong> Settings {`>`} Cookies and site permissions {`>`} Cookies and site data</li>
            <li><strong className="highlight">Mozilla Firefox:</strong> Options {`>`} Privacy &amp; Security {`>`} Cookies and Site Data</li>
            <li><strong className="highlight">Safari:</strong> Preferences {`>`} Privacy {`>`} Cookies and website data</li>
          </ul>

          <h2 className="text-blue-gradient">Changes to Our Cookies Policy</h2>
          <p>
            We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the "Last Updated" date.
          </p>
          <p>
            You are advised to review this Cookies Policy periodically for any changes. Changes to this Cookies Policy are effective when they are posted on this page.
          </p>

          <div className="mt-12 rounded-xl border p-6 shadow-sm">
            <h2 className="mt-0">Contact Us</h2>
            <p>
              If you have any questions about our Cookies Policy, please contact us:
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2 text-primary" /> Email: <a href="mailto:info@mappysoft.com" className="ml-1 text-primary hover:underline">info@mappysoft.com</a>
            </p>
            <p className="mb-0">
              <Link href="/contact" className="text-primary hover:underline">
                Contact form →
              </Link>
            </p>
          </div>
          
          <p className="mt-10 text-sm text-muted-foreground">
            Last updated: August 1, 2023
          </p>
        </div>
      </section>

      {/* Related Pages */}
      <section className="container-narrow py-8 border-t">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/privacy-policy" className="text-primary hover:underline hover:text-primary/80">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-primary hover:underline hover:text-primary/80">
            Terms of Service
          </Link>
        </div>
      </section>
    </div>
  )
}

// Import the FaEnvelope icon
import { FaEnvelope } from "react-icons/fa" 
import Image from "next/image"
import Link from "next/link"
import { FaCheckCircle, FaQuoteLeft, FaTrophy, FaLightbulb, FaUsers, FaChartLine } from "react-icons/fa"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - ECOM by Mappysoft',
  description: 'Learn about ECOM by Mappysoft, our mission, vision, and expertise in digital marketing and marketplace management for leading platforms including Meta, Amazon, Flipkart and Meesho.',
  keywords: 'ecommerce agency, digital marketing, mappysoft, ecommerce experts, marketplace management, e-commerce strategy, meta advertising, amazon optimization',
  alternates: {
    canonical: 'https://ecommappysoft.com/about',
  },
  openGraph: {
    title: 'About ECOM by Mappysoft - Your E-commerce Growth Partner',
    description: 'Learn about ECOM by Mappysoft, our mission, vision, and expertise in digital marketing and marketplace management for leading platforms including Meta, Amazon, Flipkart and Meesho.',
    url: 'https://ecommappysoft.com/about',
    siteName: 'ECOM by Mappysoft',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        width: 2340,
        height: 1560,
        alt: 'ECOM by Mappysoft team',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ECOM by Mappysoft - Your E-commerce Growth Partner',
    description: 'Learn about ECOM by Mappysoft, our mission, vision, and expertise in digital marketing and marketplace management.',
    images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'],
  },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 py-12 md:gap-24 md:py-16">
      {/* Schema.org structured data for SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ECOM by Mappysoft",
            "url": "https://ecommappysoft.com",
            "logo": "https://ecommappysoft.com/logo.png",
            "description": "A team of digital marketing experts passionate about helping businesses succeed in the ever-evolving e-commerce landscape.",
            "founder": {
              "@type": "Person",
              "name": "Mappysoft Founder"
            },
            "foundingDate": "2018",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Digital Avenue, Tech Park",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "postalCode": "560001",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "telephone": "+91-98765-43210",
              "email": "info@mappysoft.com"
            },
            "sameAs": [
              "https://www.facebook.com/mappysoft",
              "https://www.twitter.com/mappysoft",
              "https://www.linkedin.com/company/mappysoft",
              "https://www.instagram.com/mappysoft"
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="container-wide relative overflow-hidden" id="about-hero" itemScope itemType="http://schema.org/AboutPage">
        <div className="absolute -z-10 top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -z-10 bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl opacity-40"></div>
        
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="animate-slide-in-left">
            <div className="relative mb-4 inline-block">
              <span className="absolute inset-0 translate-x-2 translate-y-2 bg-secondary rounded-md"></span>
              <div className="relative bg-primary text-white px-4 py-2 rounded-md text-sm font-medium">About Us</div>
            </div>
            <h1 className="mb-6 gradient-text" itemProp="name">About ECOM by Mappysoft</h1>
            <p className="mb-8 text-xl text-muted-foreground" itemProp="description">
              We're a team of digital marketing experts passionate about helping businesses succeed in the ever-evolving e-commerce landscape.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-primary btn-lg" aria-label="Contact our team">
                Contact Us
              </Link>
              <Link href="/blog" className="btn btn-secondary btn-lg text-primary" aria-label="Read our digital marketing blog">
                Explore Our Content
              </Link>
            </div>
          </div>
          
          <div className="animate-slide-in-right relative aspect-square overflow-hidden rounded-lg lg:aspect-[4/3]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="ECOM by Mappysoft team collaborating on digital marketing strategies"
              fill
              className="object-cover"
              priority
              itemProp="image"
            />
            <div className="absolute right-4 bottom-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-[200px] z-20">
              <p className="text-sm font-medium text-primary">Founded in 2018</p>
              <p className="text-xs text-muted-foreground">with a passion for e-commerce excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="relative py-20 overflow-hidden" id="our-mission">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-15"></div>
        </div>
        
        <div className="container-wide relative z-10">
          <div className="mx-auto max-w-3xl text-center animate-slide-in-bottom">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <FaLightbulb className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-6 gradient-text" id="mission-heading">Our Mission</h2>
            <p className="text-xl text-muted-foreground">
              To empower businesses with the knowledge, strategies, and tools they need to thrive in the digital marketplace through comprehensive, actionable, and results-driven educational content.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container-wide" id="our-story" itemScope itemType="http://schema.org/Article">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 animate-slide-in-bottom">
            <div className="relative aspect-square overflow-hidden rounded-lg lg:aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/20 z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="ECOM by Mappysoft journey from founding to becoming a leading e-commerce agency"
                fill
                className="object-cover hover-card"
                loading="lazy"
                itemProp="image"
              />
              <div className="absolute left-4 top-4 rounded-full bg-secondary/90 p-3 shadow-lg z-20">
                <FaQuoteLeft className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-slide-in-bottom">
            <div className="relative mb-4 inline-block">
              <span className="absolute inset-0 translate-x-1 translate-y-1 bg-secondary/60 rounded-md"></span>
              <div className="relative bg-primary/90 text-white px-3 py-1 rounded-md text-sm font-medium">EST. 2018</div>
            </div>
            <h2 className="mb-6 text-blue-gradient" id="story-heading" itemProp="headline">Our Story</h2>
            <div itemProp="articleBody" className="space-y-4">
              <p className="text-muted-foreground">
                ECOM by Mappysoft was founded in 2018 by a group of digital marketing professionals who recognized a significant gap in the market: while there were plenty of resources on general digital marketing, there was a lack of comprehensive, practical guidance specifically for e-commerce platforms and marketplace management.
              </p>
              <p className="text-muted-foreground">
                Having worked with hundreds of businesses across various industries, our founders noticed that many entrepreneurs and marketing teams struggled with the complexities of platforms like Facebook Ads, Amazon, Flipkart, and Meesho. They were overwhelmed by the constantly changing algorithms, platform-specific requirements, and the challenge of creating cohesive strategies across multiple channels.
              </p>
              <p className="text-muted-foreground">
                This realization sparked the creation of ECOM by Mappysoft – an educational hub dedicated to demystifying digital marketing for e-commerce and providing actionable, results-driven strategies for businesses of all sizes.
              </p>
            </div>
            <meta itemProp="datePublished" content="2018-01-15" />
            <meta itemProp="author" content="ECOM by Mappysoft" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-secondary/5"></div>
        <div className="container-wide relative z-10">
          <div className="mx-auto max-w-3xl text-center animate-slide-in-bottom">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
              <FaTrophy className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="mb-4 gradient-text">Why Choose Us</h2>
            <p className="mb-12 text-muted-foreground">
              What sets our educational content apart from others in the digital marketing space
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Platform Expertise",
                description: "Our team has specialized knowledge across all major advertising and marketplace platforms, ensuring you get accurate, up-to-date guidance.",
                icon: "expertise"
              },
              {
                title: "Practical Approach",
                description: "We focus on actionable strategies you can implement immediately, not theoretical concepts that don't translate to real-world results.",
                icon: "practical"
              },
              {
                title: "Proven Results",
                description: "Our methodologies have been tested and refined through work with hundreds of businesses, from startups to established enterprises.",
                icon: "results"
              },
              {
                title: "Comprehensive Coverage",
                description: "From account setup to advanced optimization techniques, we cover every aspect of digital marketing and marketplace management.",
                icon: "coverage"
              },
              {
                title: "Industry Updates",
                description: "We stay on top of platform changes and industry trends, ensuring our content reflects the latest best practices and opportunities.",
                icon: "updates"
              },
              {
                title: "Community Support",
                description: "Join a community of like-minded professionals and entrepreneurs who share insights, challenges, and successes.",
                icon: "community"
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="hover-card rounded-lg border border-primary/10 bg-card p-6 shadow-sm transition-all duration-200"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  {feature.icon === "expertise" && <FaUsers className="h-6 w-6 text-primary" />}
                  {feature.icon === "practical" && <FaLightbulb className="h-6 w-6 text-primary" />}
                  {feature.icon === "results" && <FaChartLine className="h-6 w-6 text-primary" />}
                  {feature.icon === "coverage" && <FaCheckCircle className="h-6 w-6 text-primary" />}
                  {feature.icon === "updates" && <FaCheckCircle className="h-6 w-6 text-primary" />}
                  {feature.icon === "community" && <FaUsers className="h-6 w-6 text-primary" />}
                </div>
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="container-wide">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 gradient-text">Our Expertise</h2>
            <p className="mb-8 text-muted-foreground">
              With years of experience in digital marketing and e-commerce, our team brings deep expertise across multiple platforms and strategies. We've helped businesses of all sizes achieve remarkable growth through effective digital marketing and marketplace management.
            </p>

            <div className="space-y-4">
              {[
                "Meta Advertising (Facebook & Instagram)",
                "Amazon Seller Central & Advertising",
                "Flipkart Marketplace Management",
                "Meesho Supplier Optimization",
                "Multi-channel E-commerce Strategy",
                "Conversion Rate Optimization",
                "Product Listing Enhancement",
                "Advertising ROI Maximization",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 animate-pulse-soft">
                  <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg lg:aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Our expertise"
              fill
              className="object-cover hover-card"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden blue-glow">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>
        <div className="container-wide relative z-10">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="mb-4">Ready to Transform Your Digital Marketing?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Explore our comprehensive tutorials and guides to master digital marketing and marketplace management.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/blog" className="btn bg-white text-primary hover:bg-white/90 btn-lg">
                Explore Our Content
              </Link>
              <Link href="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 btn-lg gold-accent-border">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
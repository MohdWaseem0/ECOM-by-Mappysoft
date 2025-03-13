"use client"

import Link from "next/link"
import Image from "next/image"
import { FaArrowRight, FaCheckCircle } from "react-icons/fa"
import FeaturedPosts from "@/components/home/featured-posts"
import CategoryGrid from "@/components/home/category-grid"
import LatestPosts from "@/components/home/latest-posts"
import dynamic from 'next/dynamic'

// Rename these to avoid conflicts
const NewsletterCTADynamic = dynamic(() => import('@/components/shared/newsletter-cta'), {
  loading: () => <div className="h-64 w-full animate-pulse rounded-lg bg-muted"></div>,
  ssr: false
})

const TestimonialsDynamic = dynamic(() => import('@/components/home/testimonials'), {
  loading: () => <div className="h-96 w-full animate-pulse rounded-lg bg-muted"></div>,
  ssr: true
})

export default function HomePage() {
  return (
    <div className="flex flex-col pb-0 md:pb-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/10 to-background py-20 md:py-28 lg:py-32">
        {/* Decorative elements */}
        <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
          <div className="absolute -left-4 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-4 top-1/3 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute right-1/3 top-1/2 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>
        </div>
        
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left animate-slide-in-left">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary"></span>
                  </span>
                  Digital Marketing Specialists
                </div>
                
                <h1 className="mb-0 max-w-4xl gradient-text">
                  Master Digital Marketing & Marketplace Management
                </h1>
                
                <p className="mx-auto mb-0 max-w-2xl text-xl text-muted-foreground md:text-2xl">
                  In-depth tutorials and strategies on Meta advertising, Amazon, Flipkart, Meesho, and other marketplace platforms.
                </p>
              </div>
              
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6 animate-slide-in-bottom">
                <Link href="/blog" className="btn btn-primary btn-lg relative overflow-hidden group">
                  <span className="absolute right-full w-12 h-12 -mt-2 -mr-1 transition-all duration-1000 ease-out rounded-full blur-sm bg-white opacity-10 group-hover:right-0 group-hover:opacity-30"></span>
                  Explore Tutorials
                </Link>
                <Link href="/about" className="btn btn-secondary btn-lg text-primary">
                  Learn About Us
                </Link>
              </div>
              
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground lg:justify-start">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="h-4 w-4 text-secondary" />
                  <span>Expert Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="h-4 w-4 text-secondary" />
                  <span>Proven Strategies</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="h-4 w-4 text-secondary" />
                  <span>Real Results</span>
                </div>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0 animate-slide-in-right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                  alt="Digital marketing dashboard"
                  fill
                  className="object-cover"
                  priority={true}
                />
                
                {/* Floating stats boxes */}
                <div className="absolute -left-6 bottom-16 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-md sm:p-4 max-w-[240px] shadow-xl animate-slide-in-left">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-muted-foreground">Avg. ROAS</div>
                      <div className="text-xl font-bold">320%</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -right-6 top-10 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-md sm:p-4 max-w-[240px] shadow-xl animate-slide-in-right">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-muted-foreground">Conversion Rate</div>
                      <div className="text-xl font-bold">4.8%</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Dots decoration */}
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-xl opacity-50">
                <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:8px_8px]"></div>
              </div>
              
              {/* Dots decoration */}
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-xl opacity-50">
                <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:8px_8px]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands/Platforms Section */}
      <section className="border-y bg-muted/10 py-10">
        <div className="container-wide">
          <p className="mb-6 text-center text-sm font-medium text-muted-foreground">STRATEGIES FOR LEADING PLATFORMS</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {["Meta", "Amazon", "Flipkart", "Meesho", "Google", "Shopify"].map((platform, index) => (
              <div
                key={platform}
                className="text-lg font-bold text-muted-foreground/70 hover:text-primary transition-colors duration-300 hover:text-gold-gradient animate-pulse-soft"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container-wide py-20">
        <div className="mb-12 flex flex-col items-center text-center animate-slide-in-bottom">
          <div className="mb-3 inline-flex items-center rounded-full bg-secondary/20 px-3 py-1 text-sm font-medium text-primary">
            Explore Categories
          </div>
          <h2 className="mb-4 gradient-text">Master Your Digital Marketing</h2>
          <p className="max-w-2xl text-muted-foreground">
            Dive into our comprehensive guides and tutorials across various digital marketing platforms and marketplace management strategies.
          </p>
        </div>
        <CategoryGrid />
      </section>

      {/* Featured Posts */}
      <section className="container-wide py-20">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Featured Content
          </div>
          <h2 className="mb-4">Top-Rated Tutorials</h2>
          <p className="max-w-2xl text-muted-foreground">
            Our most popular and comprehensive guides to help you master digital marketing and marketplace management.
          </p>
        </div>
        <FeaturedPosts />
      </section>

      {/* Stats Section */}
      <section className="container-wide py-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "200+", label: "Tutorials & Guides" },
            { value: "15k+", label: "Monthly Readers" },
            { value: "50+", label: "Case Studies" },
            { value: "5+", label: "Years Experience" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="hover-card flex flex-col items-center rounded-xl border border-primary/10 bg-muted/10 p-6 text-center animate-slide-in-bottom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container-wide">
          <NewsletterCTADynamic />
        </div>
      </section>

      {/* Latest Posts */}
      <section className="container-wide py-20">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <div className="mb-2 inline-flex items-center rounded-full bg-secondary/20 px-3 py-1 text-sm font-medium text-primary">
              New Content
            </div>
            <h2 className="mb-2">Latest Tutorials</h2>
            <p className="text-muted-foreground">
              Stay updated with our newest content
            </p>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-2 text-primary hover:underline"
          >
            View All
            <FaArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <LatestPosts />
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-wide">
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Testimonials
            </div>
            <h2 className="mb-4">What Our Readers Say</h2>
            <p className="max-w-2xl text-muted-foreground">
              Hear from digital marketers and e-commerce professionals who have benefited from our tutorials and guides.
            </p>
          </div>
          <TestimonialsDynamic />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4">Ready to Grow Your E-commerce Business?</h2>
            <p className="mb-8 text-lg text-white/80">
              Explore our comprehensive tutorials and guides to master digital marketing and marketplace management.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/tutorials" className="btn bg-white text-primary hover:bg-white/90 btn-lg">
                Start Learning
              </Link>
              <Link href="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 btn-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
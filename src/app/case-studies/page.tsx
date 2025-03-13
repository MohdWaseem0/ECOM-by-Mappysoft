import Link from "next/link"
import Image from "next/image"
import { FaArrowRight, FaChartLine, FaUsers, FaShoppingCart } from "react-icons/fa"

export const metadata = {
  title: 'Case Studies - ECOM by Mappysoft',
  description: 'Real-world case studies showcasing successful digital marketing and marketplace management strategies.',
}

// Mock data for case studies
const caseStudies = [
  {
    id: "1",
    title: "How Fashion Brand X Increased ROAS by 320% with Facebook Ads",
    excerpt: "Learn how we helped a fashion brand optimize their Facebook ad campaigns to achieve a 320% increase in return on ad spend within 3 months.",
    coverImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Meta Advertising",
    results: [
      { metric: "ROAS Increase", value: "320%" },
      { metric: "Conversion Rate", value: "4.8%" },
      { metric: "CPL Reduction", value: "41%" }
    ],
    slug: "/blog/fashion-brand-facebook-ads-case-study"
  },
  {
    id: "2",
    title: "How Electronics Seller Y Grew Amazon Sales by 215% in 6 Months",
    excerpt: "Discover the strategy we used to help an electronics seller more than double their Amazon sales in just half a year.",
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Amazon",
    results: [
      { metric: "Sales Growth", value: "215%" },
      { metric: "Organic Rank", value: "Top 5" },
      { metric: "PPC ACOS", value: "12%" }
    ],
    slug: "/blog/electronics-seller-amazon-case-study"
  },
  {
    id: "3",
    title: "Scaling a Home Decor Business on Flipkart: A Success Story",
    excerpt: "How we helped a home decor brand become a top seller on Flipkart with optimized listings and strategic promotions.",
    coverImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80",
    category: "Flipkart",
    results: [
      { metric: "Monthly Revenue", value: "₹42L+" },
      { metric: "Growth Rate", value: "183%" },
      { metric: "Customer Rating", value: "4.7/5" }
    ],
    slug: "/blog/home-decor-flipkart-case-study"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="container-wide py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4">Case Studies</h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Real-world success stories and results from our digital marketing and marketplace management strategies.
        </p>
      </div>

      <div className="space-y-16">
        {caseStudies.map((study) => (
          <div 
            key={study.id}
            className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto">
                <Image
                  src={study.coverImage}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/60 md:via-black/30 md:to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <span className="inline-flex items-center rounded-full bg-primary/90 px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                    {study.category}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <h2 className="text-2xl font-bold leading-tight md:text-3xl">
                    <Link href={study.slug} className="hover:text-primary">
                      {study.title}
                    </Link>
                  </h2>
                  
                  <p className="mt-3 text-muted-foreground">
                    {study.excerpt}
                  </p>
                  
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {study.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-primary">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link
                    href={study.slug}
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    Read Case Study
                    <FaArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <div className="rounded-lg bg-muted/30 p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Ready to achieve similar results?</h2>
              <p className="mt-4 text-muted-foreground">
                We've helped businesses of all sizes succeed in digital marketing and marketplace management. Get in touch to discuss how we can help your business grow.
              </p>
              <div className="mt-6">
                <Link href="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-background p-4 text-center shadow-sm">
                <FaChartLine className="mx-auto h-8 w-8 text-primary" />
                <div className="mt-3 text-xl font-bold">200+</div>
                <div className="text-sm text-muted-foreground">Successful Projects</div>
              </div>
              <div className="rounded-lg bg-background p-4 text-center shadow-sm">
                <FaUsers className="mx-auto h-8 w-8 text-primary" />
                <div className="mt-3 text-xl font-bold">150+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="rounded-lg bg-background p-4 text-center shadow-sm">
                <FaShoppingCart className="mx-auto h-8 w-8 text-primary" />
                <div className="mt-3 text-xl font-bold">₹50Cr+</div>
                <div className="text-sm text-muted-foreground">Revenue Generated</div>
              </div>
              <div className="rounded-lg bg-background p-4 text-center shadow-sm">
                <div className="mx-auto h-8 w-8 text-center text-3xl font-bold text-primary">5</div>
                <div className="mt-3 text-xl font-bold">Years</div>
                <div className="text-sm text-muted-foreground">Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
import Link from "next/link"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"

export const metadata = {
  title: 'Guides - ECOM by Mappysoft',
  description: 'Comprehensive guides on digital marketing and marketplace management to help you succeed online.',
}

// Mock data for guides
const guides = [
  {
    id: "1",
    title: "The Complete Guide to Facebook Ads in 2023",
    excerpt: "Everything you need to know about Facebook advertising in 2023, from basic setup to advanced strategies.",
    coverImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Meta Advertising",
    slug: "/blog/complete-guide-to-facebook-ads-2023",
    readTime: "25 min read",
  },
  {
    id: "2",
    title: "Amazon Seller Guide: From Beginner to Pro",
    excerpt: "A comprehensive guide to selling on Amazon, covering everything from account setup to advanced PPC strategies.",
    coverImage: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1215&q=80",
    category: "Amazon",
    slug: "/blog/amazon-seller-guide-beginner-to-pro",
    readTime: "30 min read",
  },
  {
    id: "3",
    title: "Flipkart Seller Central: The Ultimate Guide",
    excerpt: "Master Flipkart Seller Central with our comprehensive guide covering all aspects of selling on India's largest marketplace.",
    coverImage: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    category: "Flipkart",
    slug: "/blog/flipkart-seller-central-complete-walkthrough",
    readTime: "28 min read",
  },
  {
    id: "4",
    title: "Instagram Business Guide: Building Your Brand",
    excerpt: "Learn how to build and grow your brand on Instagram using content, Reels, Stories, and paid advertising.",
    coverImage: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Meta Advertising",
    slug: "/blog/instagram-business-guide-building-brand",
    readTime: "22 min read",
  }
];

export default function GuidesPage() {
  return (
    <div className="container-wide py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4">Comprehensive Guides</h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          In-depth guides to help you master digital marketing and marketplace management strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {guides.map((guide) => (
          <article
            key={guide.id}
            className="group flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={guide.coverImage}
                alt={guide.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center rounded-full bg-primary/90 px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                  {guide.category}
                </span>
              </div>
            </div>
            
            <div className="flex flex-1 flex-col p-6">
              <h2 className="mt-2 text-2xl font-bold leading-tight">
                <Link href={guide.slug} className="hover:text-primary">
                  {guide.title}
                </Link>
              </h2>
              
              <p className="mt-3 text-lg text-muted-foreground">
                {guide.excerpt}
              </p>
              
              <div className="mt-6 flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{guide.readTime}</span>
                <Link
                  href={guide.slug}
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  Read Full Guide
                  <FaArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/blog" className="btn btn-primary">
          Browse All Content
        </Link>
      </div>
    </div>
  )
} 
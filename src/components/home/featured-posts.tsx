"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaCalendarAlt, FaTag } from "react-icons/fa"
import { cn } from "@/utils/cn"

// Mock data for featured posts
const featuredPosts = [
  {
    id: "1",
    title: "Complete Guide to Facebook Ads in 2023",
    excerpt: "Learn how to create high-converting Facebook ad campaigns with our step-by-step guide covering audience targeting, creative best practices, and optimization strategies.",
    coverImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Meta Advertising",
    date: "March 15, 2023",
    slug: "/blog/complete-guide-to-facebook-ads-2023",
  },
  {
    id: "2",
    title: "Amazon PPC Strategy: Boost Your Product Visibility",
    excerpt: "Discover proven Amazon PPC strategies to increase your product visibility, improve organic ranking, and maximize your advertising ROI on the world's largest marketplace.",
    coverImage: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1215&q=80",
    category: "Amazon",
    date: "February 28, 2023",
    slug: "/blog/amazon-ppc-strategy-boost-product-visibility",
  },
  {
    id: "3",
    title: "Flipkart Seller Central: Complete Walkthrough",
    excerpt: "A comprehensive guide to Flipkart Seller Central, covering account setup, product listing optimization, order management, and promotional strategies for Indian e-commerce.",
    coverImage: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    category: "Flipkart",
    date: "January 20, 2023",
    slug: "/blog/flipkart-seller-central-complete-walkthrough",
  },
]

export default function FeaturedPosts() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {featuredPosts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-200 hover:shadow-md"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center rounded-full bg-primary/90 px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                {post.category}
              </span>
            </div>
          </div>
          
          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <FaCalendarAlt className="h-3 w-3" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaTag className="h-3 w-3" />
                <span>{post.category}</span>
              </div>
            </div>
            
            <h3 className="mt-3 text-xl font-bold leading-tight">
              <Link href={post.slug.replace(/^\/blog\//, '/blog/')} className="hover:text-primary">
                {post.title}
              </Link>
            </h3>
            
            <p className="mt-2 line-clamp-3 flex-1 text-muted-foreground">
              {post.excerpt}
            </p>
            
            <Link
              href={post.slug.replace(/^\/blog\//, '/blog/')}
              className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 
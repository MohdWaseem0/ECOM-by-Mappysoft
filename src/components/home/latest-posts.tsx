"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaCalendarAlt, FaUser, FaTag } from "react-icons/fa"

// Mock data for latest posts
const latestPosts = [
  {
    id: "4",
    title: "Instagram Reels for Business: Complete Strategy Guide",
    excerpt: "Learn how to leverage Instagram Reels to grow your business, increase engagement, and reach new audiences with our comprehensive strategy guide.",
    coverImage: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Meta Advertising",
    author: "Sarah Johnson",
    date: "April 5, 2023",
    slug: "/blog/instagram-reels-for-business-strategy-guide",
  },
  {
    id: "5",
    title: "Meesho Supplier Guide: Boost Your Sales",
    excerpt: "A step-by-step guide for Meesho suppliers to optimize listings, improve visibility, and increase sales on this rapidly growing social commerce platform.",
    coverImage: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    category: "Meesho",
    author: "Rahul Sharma",
    date: "April 2, 2023",
    slug: "/blog/meesho-supplier-guide-boost-sales",
  },
  {
    id: "6",
    title: "Amazon A+ Content: Enhance Your Product Listings",
    excerpt: "Discover how to create compelling Amazon A+ Content that converts browsers into buyers and sets your products apart from the competition.",
    coverImage: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Amazon",
    author: "Michael Chen",
    date: "March 28, 2023",
    slug: "/blog/amazon-a-plus-content-enhance-product-listings",
  },
  {
    id: "7",
    title: "Flipkart Advertising: Complete Guide to Success",
    excerpt: "Master Flipkart's advertising platform with our comprehensive guide covering campaign types, targeting options, bidding strategies, and performance optimization.",
    coverImage: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Flipkart",
    author: "Priya Patel",
    date: "March 25, 2023",
    slug: "/blog/flipkart-advertising-complete-guide",
  },
]

export default function LatestPosts() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {latestPosts.map((post, index) => (
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
          
          <div className="flex flex-1 flex-col p-4">
            <h3 className="line-clamp-2 text-lg font-bold leading-tight group-hover:text-primary">
              <Link href={post.slug.replace(/^\/blog\//, '/blog/')}>
                {post.title}
              </Link>
            </h3>
            
            <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <FaCalendarAlt className="h-3 w-3" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaUser className="h-3 w-3" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 
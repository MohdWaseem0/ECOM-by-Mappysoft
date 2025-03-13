"use client"

import Link from "next/link"
import Image from "next/image"
import { FaCalendarAlt, FaTag, FaHashtag } from "react-icons/fa"
import { type Category } from "@/lib/cms"

// Mock data for popular posts
const defaultPopularPosts = [
  {
    id: "1",
    title: "Complete Guide to Facebook Ads in 2023",
    coverImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    date: "March 15, 2023",
    slug: "/blog/complete-guide-to-facebook-ads-2023",
  },
  {
    id: "2",
    title: "Amazon PPC Strategy: Boost Your Product Visibility",
    coverImage: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1215&q=80",
    date: "February 28, 2023",
    slug: "/blog/amazon-ppc-strategy-boost-product-visibility",
  },
  {
    id: "4",
    title: "Instagram Reels for Business: Complete Strategy Guide",
    coverImage: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    date: "April 5, 2023",
    slug: "/blog/instagram-reels-for-business-strategy-guide",
  },
]

// Mock data for categories
const defaultCategories = [
  { name: "Meta Advertising", count: 12, slug: "meta-advertising", description: "" },
  { name: "Amazon", count: 8, slug: "amazon", description: "" },
  { name: "Flipkart", count: 6, slug: "flipkart", description: "" },
  { name: "Meesho", count: 5, slug: "meesho", description: "" },
  { name: "Other Marketplaces", count: 4, slug: "other-marketplaces", description: "" },
  { name: "E-commerce Strategy", count: 7, slug: "ecommerce-strategy", description: "" },
]

// Mock data for tags
const defaultTags = [
  { name: "Facebook Ads", slug: "/tag/facebook-ads", count: 5 },
  { name: "Instagram", slug: "/tag/instagram", count: 3 },
  { name: "PPC", slug: "/tag/ppc", count: 7 },
  { name: "SEO", slug: "/tag/seo", count: 4 },
  { name: "Product Listing", slug: "/tag/product-listing", count: 3 },
  { name: "Advertising", slug: "/tag/advertising", count: 6 },
  { name: "Social Commerce", slug: "/tag/social-commerce", count: 2 },
  { name: "Marketing Strategy", slug: "/tag/marketing-strategy", count: 4 },
  { name: "E-commerce", slug: "/tag/ecommerce", count: 9 },
  { name: "Conversion Rate", slug: "/tag/conversion-rate", count: 3 },
]

interface RecentPost {
  title: string;
  slug: string;
  date: string;
  coverImage?: string;
  id?: string;
}

interface BlogSidebarProps {
  categories?: Category[];
  tags?: string[];
  recentPosts?: RecentPost[];
}

export default function BlogSidebar({ 
  categories = defaultCategories, 
  tags = [], 
  recentPosts = defaultPopularPosts 
}: BlogSidebarProps) {
  return (
    <div className="space-y-10">
      {/* Popular Posts */}
      <div>
        <h3 className="mb-6 text-xl font-bold">Popular Posts</h3>
        <div className="space-y-6">
          {recentPosts.map((post, index) => (
            <div key={post.id || index} className="group flex gap-4">
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                <Image
                  src={post.coverImage || 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="line-clamp-2 text-sm font-medium leading-tight">
                  <Link href={post.slug.startsWith('/') ? post.slug : `/blog/${post.slug}`} className="hover:text-primary">
                    {post.title}
                  </Link>
                </h4>
                <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <FaCalendarAlt className="h-3 w-3" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="mb-6 text-xl font-bold">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.slug} className="flex items-center justify-between">
              <Link
                href={`/category/${category.slug}`}
                className="flex items-center gap-2 text-sm hover:text-primary"
              >
                <FaTag className="h-3 w-3" />
                <span>{category.name}</span>
              </Link>
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="mb-6 text-xl font-bold">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-flex items-center gap-1 rounded-md bg-muted px-2.5 py-1 text-xs font-medium hover:bg-muted/80"
            >
              <FaHashtag className="h-2.5 w-2.5" />
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="rounded-lg bg-muted/30 p-6">
        <h3 className="mb-3 text-lg font-bold">Subscribe to Newsletter</h3>
        <p className="mb-4 text-sm text-muted-foreground">
          Get the latest tutorials and guides delivered straight to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            required
            aria-label="Your email address"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
} 
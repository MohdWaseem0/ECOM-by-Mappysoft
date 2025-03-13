"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { type Post } from "@/lib/cms"

interface RelatedPostsProps {
  posts: Post[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold">Related Posts</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link 
              href={`/blog/${post.slug}`} 
              className="group block h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-200 hover:shadow-md">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h4 className="line-clamp-2 text-base font-bold leading-tight group-hover:text-primary">
                    {post.title}
                  </h4>
                  <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 
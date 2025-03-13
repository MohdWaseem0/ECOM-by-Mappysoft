"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/utils/cn"

const categories = [
  {
    title: "Meta Advertising",
    description: "Master Facebook and Instagram ads for maximum ROI",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    href: "/category/meta-advertising",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    title: "Amazon",
    description: "Optimize your Amazon listings and advertising campaigns",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    href: "/category/amazon",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    title: "Flipkart",
    description: "Grow your business on India's largest e-commerce platform",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    href: "/category/flipkart",
    color: "from-yellow-500/20 to-yellow-500/5",
  },
  {
    title: "Meesho",
    description: "Leverage Meesho's social commerce platform for growth",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    href: "/category/meesho",
    color: "from-pink-500/20 to-pink-500/5",
  },
  {
    title: "Other Marketplaces",
    description: "Strategies for Etsy, eBay, Shopee, and more",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    href: "/category/other-marketplaces",
    color: "from-green-500/20 to-green-500/5",
  },
  {
    title: "E-commerce Strategy",
    description: "Holistic approaches to e-commerce success",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    href: "/category/ecommerce-strategy",
    color: "from-purple-500/20 to-purple-500/5",
  },
]

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={category.href} className="group block h-full">
            <div
              className={cn(
                "relative h-full overflow-hidden rounded-lg bg-gradient-to-b shadow-md transition-all duration-300 group-hover:shadow-lg",
                category.color
              )}
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
} 
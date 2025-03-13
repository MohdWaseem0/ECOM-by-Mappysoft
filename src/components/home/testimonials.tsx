"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaQuoteLeft } from "react-icons/fa"

// Mock data for testimonials
const testimonials = [
  {
    id: "1",
    content: "The Facebook Ads tutorial completely transformed my approach to digital marketing. I was able to reduce my CPA by 40% and increase ROAS by 2.5x following the strategies outlined in the guide.",
    author: "Jessica Williams",
    position: "Marketing Director, TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "2",
    content: "As an Amazon seller, I struggled with PPC campaigns until I found ECOM by Mappysoft. Their step-by-step guide helped me optimize my campaigns, resulting in a 35% increase in sales within just one month.",
    author: "David Chen",
    position: "E-commerce Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "3",
    content: "The Flipkart Seller Central walkthrough was exactly what I needed to navigate the platform efficiently. The insights on inventory management and promotional strategies have been invaluable for my business.",
    author: "Priya Sharma",
    position: "Founder, StyleHub",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
]

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative rounded-lg bg-card p-6 shadow-sm"
        >
          <FaQuoteLeft className="absolute right-6 top-6 h-8 w-8 text-primary/10" />
          
          <p className="mb-6 text-muted-foreground">"{testimonial.content}"</p>
          
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={testimonial.avatar}
                alt={testimonial.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-base font-semibold">{testimonial.author}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.position}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 
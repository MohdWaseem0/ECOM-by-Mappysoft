"use client"

import { useState } from "react"
import { FaPaperPlane } from "react-icons/fa"
import { motion } from "framer-motion"

export default function NewsletterCTA() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1500)
  }

  return (
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:p-12"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4">Stay Updated with Our Latest Tutorials</h2>
          <p className="mb-8 text-muted-foreground">
            Subscribe to our newsletter and get the latest digital marketing strategies, marketplace management tips, and exclusive content delivered straight to your inbox.
          </p>

          {isSubmitted ? (
            <div className="rounded-lg bg-primary/10 p-6 text-center">
              <h3 className="mb-2 text-xl font-semibold text-primary">Thank You for Subscribing!</h3>
              <p>
                You've been added to our newsletter. Get ready for expert digital marketing insights delivered to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary h-12 whitespace-nowrap px-8"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Subscribing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Subscribe
                    <FaPaperPlane className="h-4 w-4" />
                  </span>
                )}
              </button>
            </form>
          )}
          
          <p className="mt-4 text-xs text-muted-foreground">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </motion.div>
    </div>
  )
} 
"use client"

import Link from "next/link"
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-card border-t mt-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-blue-500/50 to-primary/50"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-wide py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary rounded-md"></div>
                <span className="text-lg font-bold text-white z-10">E</span>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">ECOM</span>
                <span className="text-sm font-medium ml-1">by Mappysoft</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A leading ecommerce growth agency specializing in marketplace optimization and advertising solutions for brands looking to scale their online presence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-background hover:bg-primary/10 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-foreground/70 hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-background hover:bg-primary/10 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-foreground/70 hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-background hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-foreground/70 hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-background hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-foreground/70 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/meta-advertising"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Meta Advertising
                </Link>
              </li>
              <li>
                <Link
                  href="/category/amazon"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Amazon Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/category/flipkart"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Flipkart Growth
                </Link>
              </li>
              <li>
                <Link
                  href="/category/meesho"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Meesho Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/category/other-marketplaces"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Other Marketplaces
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/case-studies"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">123 Ecommerce Street, Digital City, 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <a href="mailto:hello@mappysoft.com" className="text-muted-foreground hover:text-primary transition-colors">hello@mappysoft.com</a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Subscribe to our newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-l-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <button
                  type="submit"
                  className="rounded-r-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} ECOM by Mappysoft. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/privacy-policy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Cookies
            </Link>
            <Link
              href="/sitemap"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 
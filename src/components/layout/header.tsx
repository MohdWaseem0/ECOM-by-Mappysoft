"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaBars, FaTimes, FaSearch, FaChevronDown } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/utils/cn"

const mainNavItems = [
  { name: "Home", path: "/" },
  { 
    name: "Services", 
    path: "/services",
    children: [
      { 
        name: "B2B Marketplace Management", 
        path: "/services/b2b",
        description: "Amazon Business, Alibaba, IndiaMART & more"
      },
      { 
        name: "B2C Marketplace Management", 
        path: "/services/b2c",
        description: "Amazon, Flipkart, Myntra & 10+ platforms"
      },
      { 
        name: "Performance Marketing", 
        path: "/services/performance-marketing",
        description: "PPC, Social Ads & ROI Optimization"
      },
      { 
        name: "Creative & Content", 
        path: "/services/creative-content",
        description: "Photography, A+ Content & Copywriting"
      },
    ]
  },
  { 
    name: "Resources", 
    path: "#",
    children: [
      { name: "Tutorials", path: "/tutorials" },
      { name: "Guides", path: "/guides" },
      { name: "Case Studies", path: "/case-studies" },
    ]
  },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [showSearch, setShowSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Set initial scroll state
    setIsScrolled(true)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  const handleNavItemClick = (item: any) => {
    if (item.children) {
      setOpenDropdown(openDropdown === item.name ? null : item.name)
      return
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchTerm)
    setShowSearch(false)
    setSearchTerm("")
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        "bg-background/95 backdrop-blur-md shadow-sm"
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="relative flex items-center space-x-2 z-10 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary rounded-md"></div>
              <span className="text-lg font-bold text-white z-10">E</span>
              <div className="absolute inset-0 bg-primary/50 rounded-md blur-md group-hover:blur-lg transition-all duration-300"></div>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">ECOM</span>
              <span className="text-sm font-medium ml-1">by Mappysoft</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <div key={item.name} className="relative group">
                {!item.children ? (
                  <Link
                    href={item.path}
                    className={cn(
                      "inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent",
                      pathname === item.path
                        ? "text-primary"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                    aria-label={`Navigate to ${item.name} page`}
                    title={item.name}
                    itemProp="url"
                  >
                    <span itemProp="name">{item.name}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavItemClick(item)}
                    className={cn(
                      "inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent",
                      pathname === item.path
                        ? "text-primary"
                        : "text-foreground/70 hover:text-foreground",
                      "gap-1"
                    )}
                    aria-expanded={openDropdown === item.name}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <FaChevronDown 
                      className={cn(
                        "h-3 w-3 transition-transform duration-200",
                        openDropdown === item.name ? "transform rotate-180" : ""
                      )} 
                      aria-hidden="true"
                    />
                  </button>
                )}
                
                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 w-56 origin-top-left rounded-md border bg-card shadow-lg"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <div className="py-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              href={child.path}
                              className={cn(
                                "block px-4 py-2 text-sm transition-colors hover:bg-accent",
                                pathname === child.path
                                  ? "text-primary bg-primary/5"
                                  : "text-foreground/70 hover:text-foreground"
                              )}
                              role="menuitem"
                              itemProp="url"
                            >
                              <span itemProp="name">{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
                
                {/* Hover dropdown for desktop - only shows if openDropdown is not active */}
                {item.children && !openDropdown && (
                  <div 
                    className="absolute left-0 mt-1 w-56 origin-top-left rounded-md border bg-card shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    role="menu"
                    aria-orientation="vertical"
                  >
                    <div className="py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors hover:bg-accent",
                            pathname === child.path
                              ? "text-primary bg-primary/5"
                              : "text-foreground/70 hover:text-foreground"
                          )}
                          role="menuitem"
                          itemProp="url"
                        >
                          <span itemProp="name">{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* Search toggle button */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background hover:bg-accent"
            aria-label="Search"
          >
            <FaSearch className="h-4 w-4" />
          </button>
          
          <ThemeToggle />
          
          <button
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background hover:bg-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="h-4 w-4" />
            ) : (
              <FaBars className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Search overlay */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full border-t bg-background/95 backdrop-blur-md shadow-sm"
          >
            <div className="container-wide py-4">
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <div className="relative flex-1">
                  <FaSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search tutorials, guides, and case studies..."
                    className="w-full rounded-md border border-input bg-background pl-10 pr-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setShowSearch(false)}
                  className="btn btn-ghost btn-sm"
                >
                  Cancel
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t bg-background/95 backdrop-blur-md"
          >
            <div className="container-wide py-4">
              <nav className="flex flex-col space-y-1" itemScope itemType="http://schema.org/SiteNavigationElement">
                {mainNavItems.map((item) => (
                  <div key={item.name} className="py-1">
                    {!item.children ? (
                      <Link
                        href={item.path}
                        className={cn(
                          "flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors",
                          pathname === item.path
                            ? "bg-primary/10 text-primary"
                            : "text-foreground/70 hover:bg-accent hover:text-foreground"
                        )}
                        aria-label={`Navigate to ${item.name} page`}
                        itemProp="url"
                      >
                        <span itemProp="name">{item.name}</span>
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavItemClick(item)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors",
                          pathname === item.path
                            ? "bg-primary/10 text-primary"
                            : "text-foreground/70 hover:bg-accent hover:text-foreground"
                        )}
                        aria-expanded={openDropdown === item.name}
                        aria-haspopup="true"
                      >
                        {item.name}
                        {item.children && (
                          <FaChevronDown 
                            className={cn(
                              "h-3 w-3 transition-transform duration-200",
                              openDropdown === item.name ? "transform rotate-180" : ""
                            )} 
                            aria-hidden="true"
                          />
                        )}
                      </button>
                    )}
                    
                    {item.children && openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-1 ml-4 border-l pl-4 pt-1"
                        role="menu"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            href={child.path}
                            className={cn(
                              "block py-2 text-sm transition-colors",
                              pathname === child.path
                                ? "text-primary"
                                : "text-foreground/70 hover:text-foreground"
                            )}
                            role="menuitem"
                            itemProp="url"
                          >
                            <span itemProp="name">{child.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 
import Link from "next/link"
import Image from "next/image"
import { FaSearch, FaFilter, FaCalendarAlt, FaUser, FaTag, FaArrowRight } from "react-icons/fa"
import BlogSidebar from "@/components/blog/blog-sidebar"
import Pagination from "@/components/shared/pagination"
import type { Metadata } from 'next'
import { getAllPosts, getAllCategories, type Post, type Category } from "@/lib/cms"

export const metadata: Metadata = {
  title: 'Blog - Digital Marketing & E-commerce Tutorials | ECOM by Mappysoft',
  description: 'Explore our collection of in-depth tutorials and guides on Meta advertising, Amazon, Flipkart, Meesho, and other marketplace platforms to grow your e-commerce business.',
  keywords: 'digital marketing tutorials, e-commerce guides, meta advertising, amazon seller, flipkart seller, meesho supplier, marketplace management, ecommerce tips',
  alternates: {
    canonical: 'https://ecommappysoft.com/blog',
  },
  openGraph: {
    title: 'Digital Marketing & E-commerce Tutorials - ECOM by Mappysoft',
    description: 'Explore our collection of in-depth tutorials and guides to master digital marketing and marketplace management for your e-commerce business.',
    url: 'https://ecommappysoft.com/blog',
    siteName: 'ECOM by Mappysoft',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
}

export default async function BlogPage() {
  // Fetch blog posts and categories from CMS
  const blogPosts = await getAllPosts();
  const categories = await getAllCategories();
  
  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags || [])))

  // Generate JSON-LD for blog listing page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": blogPosts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": post.coverImage,
          "author": {
            "@type": "Person",
            "name": post.author.name
          },
          "publisher": {
            "@type": "Organization",
            "name": "ECOM by Mappysoft",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ecommappysoft.com/logo.png"
            }
          },
          "datePublished": post.publishedAt,
          "url": `https://ecommappysoft.com/blog/${post.slug}`
        }
      }))
    },
    "name": "Digital Marketing & E-commerce Tutorials",
    "description": "Explore our collection of in-depth tutorials and guides to master digital marketing and marketplace management."
  }

  return (
    <div className="container-wide py-12 md:py-16">
      {/* Schema.org structured data for SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      
      <div className="mb-12 text-center">
        <h1 className="mb-4 gradient-text">Digital Marketing & Marketplace Tutorials</h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Explore our collection of in-depth tutorials and guides to master digital marketing and marketplace management.
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-10 flex flex-col gap-4 rounded-lg border bg-card p-4 sm:flex-row sm:items-center sm:justify-between shadow-sm">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FaSearch className="h-4 w-4 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search tutorials..."
            className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Search tutorials"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="dropdown-container relative">
            <button 
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <FaFilter className="h-3 w-3" />
              Filter
            </button>
          </div>
          <select 
            className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Filter by category"
          >
            <option value="">All Categories</option>
            {categories.map((category: Category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
          <select 
            className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Sort posts"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {/* Main Content */}
        <div className="lg:col-span-2 xl:col-span-3">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post: Post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-200 hover:shadow-md hover-card"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="relative aspect-[16/9] w-full overflow-hidden block"
                >
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                    itemProp="image"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                    <span className="inline-block rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                      {post.category}
                    </span>
                  </div>
                </Link>

                <div className="flex flex-1 flex-col p-4 pt-5">
                  <h2 className="mb-2 line-clamp-2 text-xl font-bold leading-tight tracking-tight" itemProp="headline">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mb-4 line-clamp-3 flex-1 text-muted-foreground" itemProp="description">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <FaCalendarAlt className="h-3 w-3" />
                      <time dateTime={post.publishedAt} itemProp="datePublished">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaUser className="h-3 w-3" />
                      <span itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">{post.author.name}</span>
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags && post.tags.slice(0, 2).map((tag: string) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                        >
                          <FaTag className="mr-1 h-2 w-2" />
                          {tag}
                        </span>
                      ))}
                      {post.tags && post.tags.length > 2 && (
                        <span className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                    <span className="text-xs">{post.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center justify-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Read more <FaArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12">
            <Pagination totalPages={5} currentPage={1} />
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <BlogSidebar categories={categories} tags={allTags} />
        </div>
      </div>
    </div>
  )
} 
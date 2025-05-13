import Link from "next/link"
import Image from "next/image"
import { FaSearch, FaFilter, FaCalendarAlt, FaUser } from "react-icons/fa"
import BlogSidebar from "@/components/blog/blog-sidebar"
import Pagination from "@/components/shared/pagination"

// Mock data for categories
const categories = {
  "meta-advertising": {
    title: "Meta Advertising",
    description: "Master Facebook and Instagram ads for maximum ROI",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    posts: [
      {
        id: "1",
        title: "Complete Guide to Facebook Ads in 2023",
        excerpt: "Learn how to create high-converting Facebook ad campaigns with our step-by-step guide covering audience targeting, creative best practices, and optimization strategies.",
        coverImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        category: "Meta Advertising",
        author: "John Smith",
        date: "March 15, 2023",
        slug: "/blog/complete-guide-to-facebook-ads-2023",
        readTime: "12 min read",
      },
      {
        id: "4",
        title: "Instagram Reels for Business: Complete Strategy Guide",
        excerpt: "Learn how to leverage Instagram Reels to grow your business, increase engagement, and reach new audiences with our comprehensive strategy guide.",
        coverImage: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        category: "Meta Advertising",
        author: "Sarah Johnson",
        date: "April 5, 2023",
        slug: "/blog/instagram-reels-for-business-strategy-guide",
        readTime: "8 min read",
      },
    ]
  },
  "amazon": {
    title: "Amazon",
    description: "Optimize your Amazon listings and advertising campaigns",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    posts: [
      {
        id: "2",
        title: "Amazon PPC Strategy: Boost Your Product Visibility",
        excerpt: "Discover proven Amazon PPC strategies to increase your product visibility, improve organic ranking, and maximize your advertising ROI on the world's largest marketplace.",
        coverImage: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1215&q=80",
        category: "Amazon",
        author: "Alex Johnson",
        date: "February 28, 2023",
        slug: "/blog/amazon-ppc-strategy-boost-product-visibility",
        readTime: "10 min read",
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
        readTime: "9 min read",
      },
    ]
  },
  "flipkart": {
    title: "Flipkart",
    description: "Grow your business on India's largest e-commerce platform",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    posts: [
      {
        id: "3",
        title: "Flipkart Seller Central: Complete Walkthrough",
        excerpt: "A comprehensive guide to Flipkart Seller Central, covering account setup, product listing optimization, order management, and promotional strategies for Indian e-commerce.",
        coverImage: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        category: "Flipkart",
        author: "Neha Gupta",
        date: "January 20, 2023",
        slug: "/blog/flipkart-seller-central-complete-walkthrough",
        readTime: "15 min read",
      },
    ]
  },
  "meesho": {
    title: "Meesho",
    description: "Leverage Meesho's social commerce platform for growth",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    posts: [
      {
        id: "5",
        title: "Meesho Supplier Guide: Boost Your Sales",
        excerpt: "A step-by-step guide for Meesho suppliers to optimize listings, improve visibility, and increase sales on this rapidly growing social commerce platform.",
        coverImage: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        category: "Meesho",
        author: "Rahul Sharma",
        date: "April 2, 2023",
        slug: "/blog/meesho-supplier-guide-boost-sales",
        readTime: "11 min read",
      },
    ]
  },
  "other-marketplaces": {
    title: "Other Marketplaces",
    description: "Strategies for Etsy, eBay, Shopee, and more",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    posts: []
  },
  "ecommerce-strategy": {
    title: "E-commerce Strategy",
    description: "Holistic approaches to e-commerce success",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    posts: []
  }
};

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const category = categories[params.slug as keyof typeof categories];
  
  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.',
    };
  }
  
  return {
    title: `${category.title} - ECOM by Mappysoft`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const category = categories[slug as keyof typeof categories];
  
  if (!category) {
    return (
      <div className="container-wide py-12 md:py-16">
        <div className="text-center">
          <h1 className="mb-4">Category Not Found</h1>
          <p className="text-muted-foreground">
            The category you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/blog" className="mt-6 inline-block btn btn-primary">
            Browse All Posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-wide py-12 md:py-16">
      {/* Category Header */}
      <div className="mb-12">
        <div className="relative mb-8 aspect-[21/9] w-full overflow-hidden rounded-lg">
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
            <h1 className="text-white">{category.title}</h1>
            <p className="mt-2 max-w-2xl text-lg text-white/80">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-10 flex flex-col gap-4 rounded-lg border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FaSearch className="h-4 w-4 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder={`Search ${category.title} tutorials...`}
            className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
            <FaFilter className="h-3 w-3" />
            Filter
          </button>
          <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {/* Main Content */}
        <div className="lg:col-span-2 xl:col-span-3">
          {category.posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {category.posts.map((post) => (
                  <article
                    key={post.id}
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
                    </div>
                    
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h2 className="mt-3 text-xl font-bold leading-tight">
                        <Link href={post.slug} className="hover:text-primary">
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="mt-2 line-clamp-3 flex-1 text-muted-foreground">
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-4 flex items-center gap-2">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full bg-muted">
                          <Image
                            src={`https://ui-avatars.com/api/?name=${post.author.replace(' ', '+')}&background=random`}
                            alt={post.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium">{post.author}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {category.posts.length > 6 && (
                <div className="mt-12">
                  <Pagination totalPages={1} currentPage={1} />
                </div>
              )}
            </>
          ) : (
            <div className="rounded-lg border bg-card p-8 text-center">
              <h2 className="mb-2 text-xl font-bold">No Posts Yet</h2>
              <p className="text-muted-foreground">
                We're working on creating content for this category. Check back soon!
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <BlogSidebar />
        </div>
      </div>
    </div>
  )
} 
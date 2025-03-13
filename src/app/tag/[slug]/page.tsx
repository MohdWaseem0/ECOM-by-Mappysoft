import Link from "next/link"
import Image from "next/image"
import { FaSearch, FaFilter, FaCalendarAlt } from "react-icons/fa"
import BlogSidebar from "@/components/blog/blog-sidebar"
import Pagination from "@/components/shared/pagination"

// Mock data for tags
const tags = {
  "facebook-ads": {
    name: "Facebook Ads",
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
      }
    ]
  },
  "instagram": {
    name: "Instagram",
    posts: [
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
      }
    ]
  },
  "ppc": {
    name: "PPC",
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
      }
    ]
  },
  "digital-marketing": {
    name: "Digital Marketing",
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
      }
    ]
  }
};

// Default fallback for any other tag
const defaultTag = {
  name: "",
  posts: []
};

export function generateMetadata({ params }: { params: { slug: string } }) {
  const tagInfo = tags[params.slug as keyof typeof tags] || { name: params.slug.replace(/-/g, ' ') };
  const tagName = tagInfo.name || params.slug.replace(/-/g, ' ');
  
  return {
    title: `${tagName} - ECOM by Mappysoft`,
    description: `Explore our tutorials and guides about ${tagName.toLowerCase()}.`,
  };
}

export default function TagPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const tagInfo = tags[slug as keyof typeof tags] || defaultTag;
  const tagName = tagInfo.name || slug.replace(/-/g, ' ');
  const posts = tagInfo.posts || [];

  return (
    <div className="container-wide py-12 md:py-16">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          Tag
        </span>
        <h1 className="mb-4">{tagName}</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Explore our tutorials, guides, and articles about {tagName.toLowerCase()}.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {/* Main Content */}
        <div className="lg:col-span-2 xl:col-span-3">
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {posts.map((post) => (
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
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-primary/90 px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
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
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination - Only show if there are multiple pages */}
              {posts.length > 6 && (
                <div className="mt-12">
                  <Pagination totalPages={1} currentPage={1} />
                </div>
              )}
            </>
          ) : (
            <div className="rounded-lg border bg-card p-8 text-center">
              <h2 className="mb-2 text-xl font-bold">No Posts Found</h2>
              <p className="text-muted-foreground">
                We couldn't find any posts with this tag. Try browsing our categories instead.
              </p>
              <Link href="/blog" className="mt-6 inline-block btn btn-primary">
                Browse All Posts
              </Link>
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
import Link from "next/link"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"

export const metadata = {
  title: 'Tutorials - ECOM by Mappysoft',
  description: 'In-depth tutorials on meta advertising, marketplace platforms, and e-commerce strategies.',
}

// Mock data for tutorials
const tutorials = [
  {
    id: "1",
    title: "Getting Started with Facebook Ads",
    excerpt: "Learn the basics of Facebook advertising and set up your first campaign in this beginner-friendly tutorial.",
    coverImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Meta Advertising",
    slug: "/blog/getting-started-with-facebook-ads",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "Setting Up Your Amazon Seller Account",
    excerpt: "A step-by-step tutorial on how to create and optimize your Amazon seller account for success.",
    coverImage: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1215&q=80",
    category: "Amazon",
    slug: "/blog/setting-up-amazon-seller-account",
    readTime: "10 min read",
  },
  {
    id: "3",
    title: "Flipkart Listing Optimization Tutorial",
    excerpt: "Learn how to optimize your product listings on Flipkart to improve visibility and increase sales.",
    coverImage: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    category: "Flipkart",
    slug: "/blog/flipkart-listing-optimization-tutorial",
    readTime: "12 min read",
  },
  {
    id: "4",
    title: "Creating Engaging Instagram Reels",
    excerpt: "Master the art of creating engaging and converting Instagram Reels for your business.",
    coverImage: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Meta Advertising",
    slug: "/blog/creating-engaging-instagram-reels",
    readTime: "9 min read",
  },
  {
    id: "5",
    title: "Meesho Product Photography Guide",
    excerpt: "Learn professional product photography techniques to make your Meesho listings stand out.",
    coverImage: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    category: "Meesho",
    slug: "/blog/meesho-product-photography-guide",
    readTime: "7 min read",
  },
  {
    id: "6",
    title: "Google Analytics for E-commerce",
    excerpt: "Set up and use Google Analytics to track and improve your e-commerce performance.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    category: "E-commerce Strategy",
    slug: "/blog/google-analytics-for-ecommerce",
    readTime: "15 min read",
  },
];

export default function TutorialsPage() {
  return (
    <div className="container-wide py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4">Tutorials</h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Step-by-step tutorials to help you master digital marketing and marketplace management.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tutorials.map((tutorial) => (
          <article
            key={tutorial.id}
            className="group flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={tutorial.coverImage}
                alt={tutorial.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center rounded-full bg-primary/90 px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                  {tutorial.category}
                </span>
              </div>
            </div>
            
            <div className="flex flex-1 flex-col p-5">
              <h2 className="mt-2 text-xl font-bold leading-tight">
                <Link href={tutorial.slug} className="hover:text-primary">
                  {tutorial.title}
                </Link>
              </h2>
              
              <p className="mt-2 line-clamp-3 flex-1 text-muted-foreground">
                {tutorial.excerpt}
              </p>
              
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs text-muted-foreground">{tutorial.readTime}</span>
                <Link
                  href={tutorial.slug}
                  className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Read Tutorial
                  <FaArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/blog" className="btn btn-primary">
          Browse All Content
        </Link>
      </div>
    </div>
  )
} 
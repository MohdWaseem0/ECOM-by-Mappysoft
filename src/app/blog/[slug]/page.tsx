import Link from "next/link"
import Image from "next/image"
import { FaCalendarAlt, FaUser, FaClock, FaTag, FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa"
import BlogSidebar from "@/components/blog/blog-sidebar"
import RelatedPosts from "@/components/blog/related-posts"
import TableOfContents from '@/components/blog/table-of-contents'
import AuthorBio from "@/components/blog/author-bio"
import CommentSection from "@/components/blog/comment-section"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts, getAllCategories } from "@/lib/cms"
import { generateBlogPostSchema } from "@/lib/schema"
import type { Metadata } from 'next'

// Generate metadata for the page
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.publishedAt,
      authors: [post.author?.name || 'Mappysoft'],
      tags: post.tags,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

// Generate static params for static generation
export async function generateStaticParams() {
  const posts = await getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the post that matches the slug
  const post = await getPostBySlug(params.slug);
  const allPosts = await getAllPosts();
  const categories = await getAllCategories();
  
  // If no post is found, return 404
  if (!post) {
    notFound();
  }
  
  // Get related posts (same category or shared tags)
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug) // Exclude current post
    .filter(p => 
      p.category === post.category || 
      p.tags?.some((tag: string) => post.tags?.includes(tag))
    )
    .slice(0, 3); // Get up to 3 related posts
  
  // Format the date
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Generate JSON-LD for the blog post
  const jsonLd = generateBlogPostSchema(post, `/blog/${post.slug}`);
  
  // Convert tableOfContents to the format expected by the TableOfContents component
  const tocItems = post.tableOfContents?.map(item => ({
    id: item.id,
    text: item.title,
    level: item.level
  }));
  
  return (
    <div className="container-wide py-12 md:py-16">
      {/* Schema.org structured data for SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {/* Main Content */}
        <div className="lg:col-span-2 xl:col-span-3">
          {/* Hero Section */}
          <div className="mb-8">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <Link href={`/category/${post.category}`} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-primary hover:bg-primary/20">
                <FaTag className="h-3 w-3" />
                {post.category}
              </Link>
              <div className="flex items-center gap-1">
                <FaCalendarAlt className="h-3 w-3" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaUser className="h-3 w-3" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaClock className="h-3 w-3" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="mb-6">{post.title}</h1>
            
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Table of Contents (Desktop) */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                {tocItems && tocItems.length > 0 && (
                  <TableOfContents items={tocItems} />
                )}
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert lg:col-span-3">
              {/* Table of Contents (Mobile) */}
              <div className="mb-8 lg:hidden">
                {tocItems && tocItems.length > 0 && (
                  <TableOfContents items={tocItems} />
                )}
              </div>
              
              {/* Render the content */}
              <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
              
              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags && post.tags.map((tag: string) => (
                  <Link
                    key={tag}
                    href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground hover:bg-secondary/80"
                  >
                    <FaTag className="mr-1 h-3 w-3" />
                    {tag}
                  </Link>
                ))}
              </div>
              
              {/* Share Buttons */}
              <div className="mt-8 border-t border-b py-6">
                <h3 className="mb-4 text-lg font-semibold">Share this article</h3>
                <div className="flex gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://ecommappysoft.com/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white hover:bg-opacity-90"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebook className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=https://ecommappysoft.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1DA1F2] text-white hover:bg-opacity-90"
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://ecommappysoft.com/blog/${post.slug}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-white hover:bg-opacity-90"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://pinterest.com/pin/create/button/?url=https://ecommappysoft.com/blog/${post.slug}&media=${encodeURIComponent(post.coverImage)}&description=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E60023] text-white hover:bg-opacity-90"
                    aria-label="Share on Pinterest"
                  >
                    <FaPinterest className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              {/* Author Bio */}
              <AuthorBio
                author={{
                  name: post.author.name,
                  avatar: post.author.avatar,
                  bio: post.author.bio || 'Content writer at ECOM by Mappysoft.'
                }}
              />
            </div>
          </div>
          
          {/* Related Posts */}
          <div className="mt-12">
            <RelatedPosts posts={relatedPosts} />
          </div>
          
          {/* Comments */}
          <div className="mt-12">
            <CommentSection postId={post.slug} />
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <BlogSidebar categories={categories} tags={post.tags || []} />
        </div>
      </div>
    </div>
  )
} 
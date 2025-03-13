import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/utils/date-utils';
import { FaCalendarAlt, FaUser, FaClock, FaTags, FaShareAlt } from 'react-icons/fa';
import TableOfContents from './table-of-contents';
import { analyzeReadability } from '@/utils/reading-time'

interface BlogLayoutProps {
  title: string;
  description: string;
  publishedAt: string;
  author: {
    name: string;
    image?: string;
    bio?: string;
  };
  estimatedReadingTime?: string;
  category?: string;
  tags?: string[];
  coverImage?: string;
  children: React.ReactNode;
  jsonLd: Record<string, any>;
}

export default function BlogLayout({
  title,
  description,
  publishedAt,
  author,
  estimatedReadingTime = '5 min read',
  category,
  tags = [],
  coverImage,
  children,
  jsonLd,
}: BlogLayoutProps) {
  // Format the date for display
  const formattedDate = formatDate(publishedAt);
  
  // Analyze content readability if children is a string
  const readabilityInfo = React.useMemo(() => {
    try {
      if (typeof children === 'string') {
        return analyzeReadability(children)
      }
      return null
    } catch (error) {
      console.error('Error analyzing readability:', error)
      return null
    }
  }, [children])

  return (
    <article className="pb-16 pt-8" itemScope itemType="https://schema.org/BlogPosting">
      {/* Schema.org structured data for SEO */}
      {jsonLd && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      
      {/* Hidden SEO metadata */}
      <meta itemProp="headline" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="datePublished" content={publishedAt} />
      <meta itemProp="author" content={author.name} />
      {category && <meta itemProp="articleSection" content={category} />}
      {tags.length > 0 && <meta itemProp="keywords" content={tags.join(', ')} />}
      {coverImage && <meta itemProp="image" content={coverImage} />}
      
      <div className="container-narrow">
        {/* Blog Header */}
        <header className="mb-8 text-center">
          {/* Category tag */}
          {category && (
            <Link
              href={`/category/${category.toLowerCase().replace(/ /g, '-')}`}
              className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
            >
              {category}
            </Link>
          )}
          
          {/* Blog Title */}
          <h1 className="mb-4 gradient-text" itemProp="name">{title}</h1>
          
          {/* Blog description/excerpt */}
          <p className="mx-auto mb-6 max-w-2xl text-xl text-muted-foreground" itemProp="abstract">
            {description}
          </p>
          
          {/* Author and metadata */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            {/* Author */}
            <div className="flex items-center gap-2" itemProp="author" itemScope itemType="https://schema.org/Person">
              {author.image ? (
                <Image
                  src={author.image}
                  alt={author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                  itemProp="image"
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <FaUser className="h-4 w-4 text-primary" />
                </div>
              )}
              <span itemProp="name">{author.name}</span>
            </div>
            
            {/* Publication date */}
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="h-4 w-4 text-primary" />
              <time dateTime={publishedAt} itemProp="datePublished">{formattedDate}</time>
            </div>
            
            {/* Reading time */}
            <div className="flex items-center gap-2">
              <FaClock className="h-4 w-4 text-primary" />
              <span>{estimatedReadingTime}</span>
            </div>
          </div>
          
          {/* Cover image */}
          {coverImage && (
            <div className="relative mb-10 aspect-video overflow-hidden rounded-xl shadow-lg">
              <Image
                src={coverImage}
                alt={`Cover image for ${title}`}
                fill
                className="object-cover"
                priority
                itemProp="image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          )}
          
          {/* Add readability level indicator if available */}
          {readabilityInfo && (
            <div className="mt-2 flex items-center text-sm text-muted-foreground">
              <span className="mr-2">Difficulty:</span>
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                readabilityInfo.level === 'beginner' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                  : readabilityInfo.level === 'intermediate'
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                {readabilityInfo.level.charAt(0).toUpperCase() + readabilityInfo.level.slice(1)}
              </span>
            </div>
          )}
        </header>
        
        {/* Desktop layout: Content and sidebar */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Table of contents - desktop sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <TableOfContents />
              
              {/* Social sharing */}
              <div className="mt-8 rounded-lg border bg-card p-4">
                <h3 className="mb-3 text-sm font-medium">Share this article</h3>
                <div className="flex items-center space-x-2">
                  <button 
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                    aria-label="Share on Twitter"
                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </button>
                  <button 
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                    aria-label="Share on Facebook"
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </button>
                  <button 
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                    aria-label="Share on LinkedIn"
                    onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(title)}`)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </button>
                  <button 
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                    aria-label="Copy link"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      // You could add a toast notification here
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                  </button>
                </div>
              </div>
              
              {/* Tags section */}
              {tags.length > 0 && (
                <div className="mt-8 rounded-lg border bg-card p-4">
                  <h3 className="mb-3 text-sm font-medium">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <Link
                        key={index}
                        href={`/tag/${tag.toLowerCase().replace(/ /g, '-')}`}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg mx-auto max-w-none dark:prose-invert" itemProp="articleBody">
              {children}
            </div>
            
            {/* Author bio */}
            {author.bio && (
              <div className="mt-12 rounded-lg border bg-card p-6">
                <div className="flex items-start gap-4">
                  {author.image ? (
                    <Image
                      src={author.image}
                      alt={author.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <FaUser className="h-8 w-8 text-primary" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold">{author.name}</h3>
                    <p className="mt-1 text-muted-foreground">{author.bio}</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Mobile: Tags & sharing */}
            <div className="mt-8 flex flex-col gap-4 lg:hidden">
              {/* Tags section - mobile */}
              {tags.length > 0 && (
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-3 text-sm font-medium">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <Link
                        key={index}
                        href={`/tag/${tag.toLowerCase().replace(/ /g, '-')}`}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Social sharing - mobile */}
              <div className="rounded-lg border bg-card p-4">
                <h3 className="mb-3 text-sm font-medium">Share this article</h3>
                <div className="flex items-center space-x-2">
                  <button 
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                    aria-label="Share on Twitter"
                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </button>
                  <button 
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                    aria-label="Share on Facebook"
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </button>
                  <button 
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                    aria-label="Share on LinkedIn"
                    onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(title)}`)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </button>
                  <button 
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                    aria-label="Copy link"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      // You could add a toast notification here
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
} 
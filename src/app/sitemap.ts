import { MetadataRoute } from 'next'
import { getAllPosts, getAllCategories } from '@/lib/cms'

// Define your site URL
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ecommappysoft.com'

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

// Define your routes with their change frequency and priority
const routes = [
  {
    url: '/',
    lastModified: new Date(),
    changeFrequency: 'daily' as ChangeFrequency,
    priority: 1.0,
  },
  {
    url: '/blog',
    lastModified: new Date(),
    changeFrequency: 'daily' as ChangeFrequency,
    priority: 0.9,
  },
  {
    url: '/about',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.8,
  },
  {
    url: '/contact',
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.8,
  },
  {
    url: '/privacy-policy',
    lastModified: new Date(),
    changeFrequency: 'yearly' as ChangeFrequency,
    priority: 0.5,
  },
  {
    url: '/terms-of-service',
    lastModified: new Date(),
    changeFrequency: 'yearly' as ChangeFrequency,
    priority: 0.5,
  },
  {
    url: '/cookies',
    lastModified: new Date(),
    changeFrequency: 'yearly' as ChangeFrequency,
    priority: 0.5,
  },
  {
    url: '/guides',
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.8,
  },
  {
    url: '/tutorials',
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.8,
  },
  {
    url: '/case-studies',
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.8,
  },
]

// Add dynamic category pages
const categories = [
  'amazon', 
  'flipkart', 
  'meesho', 
  'meta-advertising', 
  'social-media', 
  'seo', 
  'content-marketing',
  'email-marketing'
]

// Add dynamic blog posts (in a real app, you would fetch these from your CMS or database)
const blogPosts = [
  'getting-started-with-amazon-fba',
  'meta-advertising-strategies-2023',
  'flipkart-seller-guide',
  'meesho-marketing-tips',
  'social-media-for-ecommerce',
  'seo-best-practices',
  'content-marketing-for-online-stores',
  'email-marketing-automation'
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Get all posts and categories
    const posts = await getAllPosts()
    const categories = await getAllCategories()
    
    // Create sitemap entries for static pages
    const staticPages = [
      {
        url: `${baseUrl}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1.0,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/privacy-policy`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.5,
      },
      {
        url: `${baseUrl}/terms-of-service`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.5,
      },
      {
        url: `${baseUrl}/cookies`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.5,
      },
    ]
    
    // Create sitemap entries for blog posts
    const postEntries = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
    
    // Create sitemap entries for categories
    const categoryEntries = categories.map((category) => ({
      url: `${baseUrl}/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
    
    return [...staticPages, ...postEntries, ...categoryEntries]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Return a minimal sitemap with just the homepage in case of errors
    return [
      {
        url: '/',
        lastModified: new Date(),
        changeFrequency: 'daily' as ChangeFrequency,
        priority: 1.0,
      }
    ]
  }
} 
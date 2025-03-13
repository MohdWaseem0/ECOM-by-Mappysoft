import { Post } from '@/lib/cms'

export function generateBlogPostSchema(post: Post, url: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ecommappysoft.com'
  const postUrl = `${baseUrl}${url}`
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mappysoft',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    keywords: post.tags?.join(', '),
  }
}

export function generateWebsiteSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ecommappysoft.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Mappysoft',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateOrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ecommappysoft.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mappysoft',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      'https://twitter.com/mappysoft',
      'https://www.facebook.com/mappysoft',
      'https://www.linkedin.com/company/mappysoft',
      'https://www.instagram.com/mappysoft',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-234-567-8900',
      contactType: 'customer service',
      email: 'support@mappysoft.com',
      availableLanguage: 'English',
    },
  }
} 
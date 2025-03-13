/**
 * Generates structured data for a blog post in JSON-LD format
 */
export function generateBlogPostSchema(post: {
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  author: {
    name: string
    url?: string
  }
  image?: string
  url: string
  category?: string
  tags?: string[]
}) {
  try {
    const { title, description, publishedAt, updatedAt, author, image, url, category, tags } = post
    
    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description,
      image: image || 'https://ecom.mappysoft.com/images/default-blog-image.jpg',
      datePublished: publishedAt,
      dateModified: updatedAt || publishedAt,
      author: {
        '@type': 'Person',
        name: author.name,
        url: author.url
      },
      publisher: {
        '@type': 'Organization',
        name: 'ECOM by Mappysoft',
        logo: {
          '@type': 'ImageObject',
          url: 'https://ecom.mappysoft.com/images/logo.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url
      },
      ...(category && { articleSection: category }),
      ...(tags && tags.length > 0 && { keywords: tags.join(', ') })
    }
  } catch (error) {
    console.error('Error generating blog post schema:', error)
    return null
  }
}

/**
 * Generates structured data for a product in JSON-LD format
 */
export function generateProductSchema(product: {
  name: string
  description: string
  image: string
  url: string
  brand: string
  price?: number
  currency?: string
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder'
  sku?: string
  reviews?: Array<{
    author: string
    rating: number
    content?: string
    date?: string
  }>
}) {
  try {
    const { name, description, image, url, brand, price, currency, availability, sku, reviews } = product
    
    const schema: any = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name,
      description,
      image,
      brand: {
        '@type': 'Brand',
        name: brand
      },
      url
    }
    
    // Add price if available
    if (price !== undefined) {
      schema.offers = {
        '@type': 'Offer',
        price,
        priceCurrency: currency || 'INR',
        ...(availability && { availability: `https://schema.org/${availability}` }),
        ...(sku && { sku })
      }
    }
    
    // Add reviews if available
    if (reviews && reviews.length > 0) {
      schema.review = reviews.map(review => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: review.author
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.rating,
          bestRating: '5'
        },
        ...(review.content && { reviewBody: review.content }),
        ...(review.date && { datePublished: review.date })
      }))
      
      // Calculate aggregate rating
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
      const averageRating = totalRating / reviews.length
      
      schema.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: averageRating.toFixed(1),
        reviewCount: reviews.length,
        bestRating: '5'
      }
    }
    
    return schema
  } catch (error) {
    console.error('Error generating product schema:', error)
    return null
  }
}

/**
 * Generates structured data for an FAQ page in JSON-LD format
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  try {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }
  } catch (error) {
    console.error('Error generating FAQ schema:', error)
    return null
  }
}

/**
 * Generates structured data for a local business in JSON-LD format
 */
export function generateLocalBusinessSchema(business: {
  name: string
  description: string
  url: string
  logo: string
  image?: string
  telephone?: string
  email?: string
  address: {
    street: string
    locality: string
    region: string
    postalCode: string
    country: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  openingHours?: string[]
}) {
  try {
    const { name, description, url, logo, image, telephone, email, address, geo, openingHours } = business
    
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name,
      description,
      url,
      logo,
      image: image || logo,
      ...(telephone && { telephone }),
      ...(email && { email }),
      address: {
        '@type': 'PostalAddress',
        streetAddress: address.street,
        addressLocality: address.locality,
        addressRegion: address.region,
        postalCode: address.postalCode,
        addressCountry: address.country
      },
      ...(geo && {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: geo.latitude,
          longitude: geo.longitude
        }
      }),
      ...(openingHours && { openingHoursSpecification: openingHours })
    }
  } catch (error) {
    console.error('Error generating local business schema:', error)
    return null
  }
} 
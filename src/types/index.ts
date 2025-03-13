export interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  publishedAt: string
  updatedAt?: string
  category: string
  readTime: number
  tags?: string[]
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
} 
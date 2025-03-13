/**
 * CMS Integration for Dynamic Content
 * 
 * This file provides functions to fetch and manage dynamic content.
 * You can replace this with a real CMS integration like Contentful, Sanity, or Strapi.
 */

import fs from 'fs';
import path from 'path';

// Define types for our content
export interface Author {
  name: string;
  avatar: string;
  role?: string;
  bio?: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  category: string;
  author: Author;
  publishedAt: string;
  readTime: string;
  tags?: string[];
  tableOfContents?: TableOfContentsItem[];
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  count: number;
}

// Path to the content directory (for local development)
const contentDirectory = path.join(process.cwd(), 'content');

// Ensure the content directory exists
try {
  if (!fs.existsSync(contentDirectory)) {
    fs.mkdirSync(contentDirectory, { recursive: true });
    
    // Create subdirectories
    fs.mkdirSync(path.join(contentDirectory, 'posts'), { recursive: true });
    fs.mkdirSync(path.join(contentDirectory, 'categories'), { recursive: true });
    
    // Create example files if they don't exist
    if (!fs.existsSync(path.join(contentDirectory, 'posts', 'example-post.json'))) {
      fs.writeFileSync(
        path.join(contentDirectory, 'posts', 'example-post.json'),
        JSON.stringify({
          title: 'Example Blog Post',
          slug: 'example-blog-post',
          excerpt: 'This is an example blog post to demonstrate the CMS functionality.',
          content: 'This is the full content of the blog post. You can replace this with your actual content.',
          coverImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8',
          category: 'tutorials',
          author: {
            name: 'John Smith',
            avatar: 'https://ui-avatars.com/api/?name=John+Smith&background=random',
            role: 'Content Writer'
          },
          publishedAt: new Date().toISOString(),
          readTime: '5 min read',
          tags: ['example', 'tutorial'],
        }, null, 2)
      );
    }
    
    if (!fs.existsSync(path.join(contentDirectory, 'categories', 'categories.json'))) {
      fs.writeFileSync(
        path.join(contentDirectory, 'categories', 'categories.json'),
        JSON.stringify([
          {
            name: 'Tutorials',
            slug: 'tutorials',
            description: 'Step-by-step guides to help you learn new skills.',
            count: 1
          },
          {
            name: 'Guides',
            slug: 'guides',
            description: 'Comprehensive guides on various topics.',
            count: 0
          },
          {
            name: 'Case Studies',
            slug: 'case-studies',
            description: 'Real-world examples and case studies.',
            count: 0
          }
        ], null, 2)
      );
    }
  }
} catch (error) {
  console.error('Error creating content directory:', error);
}

/**
 * Get all blog posts
 */
export async function getAllPosts(): Promise<Post[]> {
  try {
    const postsDirectory = path.join(contentDirectory, 'posts');
    const filenames = fs.readdirSync(postsDirectory);
    
    const posts = filenames
      .filter(filename => filename.endsWith('.json'))
      .map(filename => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents) as Post;
      })
      .sort((post1, post2) => {
        return new Date(post2.publishedAt).getTime() - new Date(post1.publishedAt).getTime();
      });
    
    return posts;
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}

/**
 * Get a single blog post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const posts = await getAllPosts();
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error);
    return null;
  }
}

/**
 * Get all categories
 */
export async function getAllCategories(): Promise<Category[]> {
  try {
    const categoriesPath = path.join(contentDirectory, 'categories', 'categories.json');
    const fileContents = fs.readFileSync(categoriesPath, 'utf8');
    return JSON.parse(fileContents) as Category[];
  } catch (error) {
    console.error('Error getting all categories:', error);
    return [];
  }
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  try {
    const allPosts = await getAllPosts();
    return allPosts.filter(post => post.category === categorySlug);
  } catch (error) {
    console.error(`Error getting posts by category ${categorySlug}:`, error);
    return [];
  }
}

/**
 * Create a new blog post
 */
export async function createPost(postData: Post): Promise<{ success: boolean; post?: Post; error?: string }> {
  try {
    const { slug } = postData;
    const filePath = path.join(contentDirectory, 'posts', `${slug}.json`);
    
    // Add publishedAt if not provided
    if (!postData.publishedAt) {
      postData.publishedAt = new Date().toISOString();
    }
    
    fs.writeFileSync(filePath, JSON.stringify(postData, null, 2));
    
    // Update category count
    updateCategoryCount(postData.category, 1);
    
    return { success: true, post: postData };
  } catch (error: any) {
    console.error('Error creating post:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Update an existing blog post
 */
export async function updatePost(slug: string, postData: Post): Promise<{ success: boolean; post?: Post; error?: string }> {
  try {
    const existingPost = await getPostBySlug(slug);
    
    if (!existingPost) {
      return { success: false, error: 'Post not found' };
    }
    
    const filePath = path.join(contentDirectory, 'posts', `${slug}.json`);
    
    // If category changed, update category counts
    if (existingPost.category !== postData.category) {
      updateCategoryCount(existingPost.category, -1);
      updateCategoryCount(postData.category, 1);
    }
    
    fs.writeFileSync(filePath, JSON.stringify(postData, null, 2));
    
    return { success: true, post: postData };
  } catch (error: any) {
    console.error(`Error updating post ${slug}:`, error);
    return { success: false, error: error.message };
  }
}

/**
 * Delete a blog post
 */
export async function deletePost(slug: string): Promise<{ success: boolean; error?: string }> {
  try {
    const post = await getPostBySlug(slug);
    
    if (!post) {
      return { success: false, error: 'Post not found' };
    }
    
    const filePath = path.join(contentDirectory, 'posts', `${slug}.json`);
    fs.unlinkSync(filePath);
    
    // Update category count
    updateCategoryCount(post.category, -1);
    
    return { success: true };
  } catch (error: any) {
    console.error(`Error deleting post ${slug}:`, error);
    return { success: false, error: error.message };
  }
}

/**
 * Update category count
 */
function updateCategoryCount(categorySlug: string, change: number): void {
  try {
    const categoriesPath = path.join(contentDirectory, 'categories', 'categories.json');
    const fileContents = fs.readFileSync(categoriesPath, 'utf8');
    const categories = JSON.parse(fileContents) as Category[];
    
    const categoryIndex = categories.findIndex(cat => cat.slug === categorySlug);
    
    if (categoryIndex !== -1) {
      categories[categoryIndex].count = Math.max(0, (categories[categoryIndex].count || 0) + change);
      fs.writeFileSync(categoriesPath, JSON.stringify(categories, null, 2));
    }
  } catch (error) {
    console.error(`Error updating category count for ${categorySlug}:`, error);
  }
} 
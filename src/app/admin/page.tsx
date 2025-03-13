"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'

interface Post {
  title: string
  slug: string
  excerpt: string
  category: string
  publishedAt: string
}

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts')
        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }
        const data = await response.json()
        setPosts(data.posts)
      } catch (err) {
        setError('Error loading posts. Please try again.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this post?')) {
      return
    }

    try {
      const response = await fetch(`/api/posts/${slug}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete post')
      }

      setPosts(posts.filter(post => post.slug !== slug))
    } catch (err) {
      alert('Error deleting post. Please try again.')
      console.error(err)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto py-12">
        <h1 className="mb-8 text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <span className="ml-2">Loading...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto py-12">
        <h1 className="mb-8 text-3xl font-bold">Admin Dashboard</h1>
        <div className="rounded-lg bg-red-50 p-4 text-red-800">
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-2 rounded bg-red-100 px-4 py-2 hover:bg-red-200"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Link 
          href="/admin/posts/new" 
          className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
        >
          <FaPlus className="h-4 w-4" />
          New Post
        </Link>
      </div>

      <div className="mb-8 rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Blog Posts</h2>
        
        {posts.length === 0 ? (
          <p className="py-4 text-center text-muted-foreground">No posts found. Create your first post!</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className="px-4 py-2 text-left">Category</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.slug} className="border-b hover:bg-muted/50">
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-medium">{post.title}</p>
                        <p className="text-sm text-muted-foreground">{post.excerpt.substring(0, 60)}...</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/posts/edit/${post.slug}`}
                          className="rounded-md bg-blue-100 p-2 text-blue-600 hover:bg-blue-200"
                          title="Edit"
                        >
                          <FaEdit className="h-4 w-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(post.slug)}
                          className="rounded-md bg-red-100 p-2 text-red-600 hover:bg-red-200"
                          title="Delete"
                        >
                          <FaTrash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Quick Links</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Link 
            href="/admin/categories" 
            className="rounded-lg border p-4 hover:bg-muted/50"
          >
            <h3 className="font-medium">Manage Categories</h3>
            <p className="text-sm text-muted-foreground">Add, edit, or delete categories</p>
          </Link>
          <Link 
            href="/admin/settings" 
            className="rounded-lg border p-4 hover:bg-muted/50"
          >
            <h3 className="font-medium">Site Settings</h3>
            <p className="text-sm text-muted-foreground">Configure site settings</p>
          </Link>
          <Link 
            href="/" 
            className="rounded-lg border p-4 hover:bg-muted/50"
          >
            <h3 className="font-medium">View Site</h3>
            <p className="text-sm text-muted-foreground">Go to the public website</p>
          </Link>
        </div>
      </div>
    </div>
  )
} 
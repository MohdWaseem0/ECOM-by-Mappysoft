"use client"

import { useState } from "react"
import Image from "next/image"
import { FaReply, FaThumbsUp, FaRegThumbsUp } from "react-icons/fa"

interface CommentProps {
  postId: string
}

// Mock data for comments
const mockComments = [
  {
    id: "1",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    content: "This is such a comprehensive guide! I've been struggling with Facebook Ads for a while, and this has given me a clear roadmap to follow. The section on audience targeting was particularly helpful.",
    date: "March 16, 2023",
    likes: 5,
    replies: [
      {
        id: "1-1",
        author: {
          name: "John Smith",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        content: "Thanks for your feedback, Sarah! I'm glad you found the audience targeting section helpful. Let me know if you have any specific questions about implementing these strategies.",
        date: "March 16, 2023",
        likes: 2,
      },
    ],
  },
  {
    id: "2",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    content: "Great article! I've been running Facebook ads for my e-commerce store for a few months now, and I've been making some of the mistakes you mentioned. I'll definitely be implementing your optimization strategies to improve my ROAS.",
    date: "March 17, 2023",
    likes: 3,
    replies: [],
  },
]

export default function CommentSection({ postId }: CommentProps) {
  const [comments, setComments] = useState(mockComments)
  const [newComment, setNewComment] = useState("")
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState("")
  const [likedComments, setLikedComments] = useState<Record<string, boolean>>({})

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    // In a real app, you would send this to your API
    const newCommentObj = {
      id: `${comments.length + 1}`,
      author: {
        name: "You",
        avatar: "https://ui-avatars.com/api/?name=You&background=random",
      },
      content: newComment,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      likes: 0,
      replies: [],
    }

    setComments([...comments, newCommentObj])
    setNewComment("")
  }

  const handleSubmitReply = (commentId: string) => {
    if (!replyContent.trim()) return

    // In a real app, you would send this to your API
    const newReply = {
      id: `${commentId}-${comments.find((c) => c.id === commentId)?.replies.length ?? 0 + 1}`,
      author: {
        name: "You",
        avatar: "https://ui-avatars.com/api/?name=You&background=random",
      },
      content: replyContent,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      likes: 0,
    }

    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, newReply],
        }
      }
      return comment
    })

    setComments(updatedComments)
    setReplyingTo(null)
    setReplyContent("")
  }

  const toggleLike = (commentId: string, isReply = false, parentId?: string) => {
    const commentKey = isReply ? `${parentId}-${commentId}` : commentId
    const isLiked = likedComments[commentKey]

    // Update liked comments state
    setLikedComments({
      ...likedComments,
      [commentKey]: !isLiked,
    })

    // Update comment likes count
    if (isReply && parentId) {
      const updatedComments = comments.map((comment) => {
        if (comment.id === parentId) {
          const updatedReplies = comment.replies.map((reply) => {
            if (reply.id === commentId) {
              return {
                ...reply,
                likes: isLiked ? reply.likes - 1 : reply.likes + 1,
              }
            }
            return reply
          })
          return { ...comment, replies: updatedReplies }
        }
        return comment
      })
      setComments(updatedComments)
    } else {
      const updatedComments = comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            likes: isLiked ? comment.likes - 1 : comment.likes + 1,
          }
        }
        return comment
      })
      setComments(updatedComments)
    }
  }

  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold">Comments ({comments.length})</h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Leave a comment..."
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Post Comment
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="rounded-lg border bg-card p-4">
            <div className="flex gap-4">
              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  src={comment.author.avatar}
                  alt={comment.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{comment.author.name}</h4>
                  <span className="text-xs text-muted-foreground">{comment.date}</span>
                </div>
                <p className="mt-2 text-sm">{comment.content}</p>
                <div className="mt-3 flex items-center gap-4">
                  <button
                    onClick={() => toggleLike(comment.id)}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"
                  >
                    {likedComments[comment.id] ? (
                      <FaThumbsUp className="h-3 w-3" />
                    ) : (
                      <FaRegThumbsUp className="h-3 w-3" />
                    )}
                    <span>{comment.likes}</span>
                  </button>
                  <button
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"
                  >
                    <FaReply className="h-3 w-3" />
                    <span>Reply</span>
                  </button>
                </div>

                {/* Reply Form */}
                {replyingTo === comment.id && (
                  <div className="mt-4">
                    <textarea
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      placeholder={`Reply to ${comment.author.name}...`}
                      className="mb-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      rows={3}
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setReplyingTo(null)}
                        className="rounded-md border border-input bg-background px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSubmitReply(comment.id)}
                        className="rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground hover:bg-primary/90"
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                )}

                {/* Replies */}
                {comment.replies.length > 0 && (
                  <div className="mt-4 space-y-4 border-l-2 border-muted pl-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex gap-3">
                        <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-full">
                          <Image
                            src={reply.author.avatar}
                            alt={reply.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h5 className="text-sm font-semibold">{reply.author.name}</h5>
                            <span className="text-xs text-muted-foreground">{reply.date}</span>
                          </div>
                          <p className="mt-1 text-sm">{reply.content}</p>
                          <button
                            onClick={() => toggleLike(reply.id, true, comment.id)}
                            className="mt-2 flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"
                          >
                            {likedComments[`${comment.id}-${reply.id}`] ? (
                              <FaThumbsUp className="h-3 w-3" />
                            ) : (
                              <FaRegThumbsUp className="h-3 w-3" />
                            )}
                            <span>{reply.likes}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 
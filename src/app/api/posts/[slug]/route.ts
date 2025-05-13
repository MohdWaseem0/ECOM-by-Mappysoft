import { NextResponse } from 'next/server';
import { getPostBySlug, updatePost, deletePost } from '@/lib/cms';

export const dynamic = 'force-dynamic';

type PostParams = { slug: string };

type PostData = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  readTime: string;
  categories?: string[];
  tags?: string[];
  updatedAt?: string;
  tableOfContents?: Array<{
    id: string;
    title: string;
    level: number;
  }>;
};

type ApiResponse = {
  success: boolean;
  message?: string;
  error?: string;
};

// @ts-ignore - Using custom type definition
export const GET: RouteHandler<PostParams> = async (request, { params }) => {
  try {
    const { slug } = params;
    const post = await getPostBySlug(slug);
    
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ post });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
};

// @ts-ignore - Using custom type definition
export const PUT: RouteHandler<PostParams> = async (request, { params }) => {
  try {
    const { slug } = params;
    const data = await request.json() as PostData;
    
    // Validate required fields
    if (!data.title || !data.content || !data.category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const result = await updatePost(slug, data) as ApiResponse;
    
    if (result.success) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json(
        { error: result.error || 'Failed to update post' },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    );
  }
};

// @ts-ignore - Using custom type definition
export const DELETE: RouteHandler<PostParams> = async (request, { params }) => {
  try {
    const { slug } = params;
    const result = await deletePost(slug) as ApiResponse;
    
    if (result.success) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json(
        { error: result.error || 'Failed to delete post' },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  }
};
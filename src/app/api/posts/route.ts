import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts, createPost } from '@/lib/cms';

export async function GET() {
  try {
    const posts = await getAllPosts();
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.title || !data.slug || !data.content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const result = await createPost(data);
    
    if (result.success) {
      return NextResponse.json({ post: result.post }, { status: 201 });
    } else {
      return NextResponse.json(
        { error: result.error || 'Failed to create post' },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
} 
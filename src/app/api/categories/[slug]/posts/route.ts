import { NextRequest, NextResponse } from 'next/server';
import { getPostsByCategory } from '@/lib/cms';

interface Params {
  params: {
    slug: string;
  };
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { slug } = params;
    const posts = await getPostsByCategory(slug);
    
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts by category' },
      { status: 500 }
    );
  }
} 
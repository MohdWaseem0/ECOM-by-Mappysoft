import { NextResponse } from 'next/server';
import { getPostsByCategory } from '@/lib/cms';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
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

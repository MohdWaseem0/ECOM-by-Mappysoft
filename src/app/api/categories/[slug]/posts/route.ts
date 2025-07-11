import { NextResponse } from 'next/server';
import { getPostsByCategory } from '@/lib/cms';

export const dynamic = 'force-dynamic';

type CategoryParams = { slug: string };

// @ts-ignore - Using custom type definition
export const GET: RouteHandler<CategoryParams> = async (request, { params }) => {
  try {
    const { slug } = params;
    const posts = await getPostsByCategory(slug);
    
    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts by category' },
      { status: 500 }
    );
  }
};;
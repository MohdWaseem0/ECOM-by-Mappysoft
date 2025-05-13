import { NextRequest, NextResponse } from 'next/server';

declare global {
  type RouteHandler<T = Record<string, string>> = (
    request: NextRequest,
    context: { params: T }
  ) => Promise<NextResponse> | NextResponse;
}

export {};

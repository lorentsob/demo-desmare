import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // You can add authentication checks, redirects, etc. here
  return NextResponse.next();
}

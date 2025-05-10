import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // You can add authentication checks, redirects, etc. here
  return NextResponse.next()
}

// Vedere /signup solo se non sei autenticato
// export const config = {
//   matcher: '/signup',
// }
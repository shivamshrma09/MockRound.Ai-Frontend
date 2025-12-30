import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const publicRoutes = ['/login', '/signup', '/singup', '/']
  const isPublicRoute = publicRoutes.includes(pathname)
    const token = request.cookies.get('token')?.value
    if (!isPublicRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
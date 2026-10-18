import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    // no-op, withAuth handles token check via callbacks
    return
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        // protect /dashboard and any subpaths
        const pathname = req.nextUrl.pathname
        if (pathname.startsWith('/dashboard')) return !!token
        return true
      },
    },
  }
)

export const config = { matcher: ['/dashboard/:path*'] }

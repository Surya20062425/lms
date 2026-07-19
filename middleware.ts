import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const path = req.nextUrl.pathname

    // Role-based route protection
    if (path.startsWith("/admin") && token?.role !== "SUPER_ADMIN" && token?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/student", req.url))
    }

    if (path.startsWith("/instructor") && token?.role !== "INSTRUCTOR" && token?.role !== "ADMIN" && token?.role !== "SUPER_ADMIN") {
      return NextResponse.redirect(new URL("/student", req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized({ req, token }) {
        if (req.nextUrl.pathname.startsWith("/api/auth")) return true
        return !!token
      },
    },
  }
)

export const config = {
  matcher: ["/admin/:path*", "/instructor/:path*", "/student/:path*", "/api/protected/:path*"],
}
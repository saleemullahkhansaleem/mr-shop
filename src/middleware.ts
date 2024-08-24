import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const tokenCookie = request.cookies.get("user");
  const token = tokenCookie?.value;

  const user = token ? JSON.parse(token as unknown as string) : null;
  const isAdmin = user?.role === "admin";

  if (
    token &&
    (request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/register")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    !token &&
    (request.nextUrl.pathname === "/profile" ||
      request.nextUrl.pathname.startsWith("/admin"))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && !isAdmin && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/profile", "/admin/:path*"],
};

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the route is for configuration or employees settings
  if (
    request.nextUrl.pathname.startsWith('/settings/configuration') ||
    request.nextUrl.pathname.startsWith('/settings/employees')
  ) {
    // We'll handle the role-based access control at the page level
    // since we can't access Firebase auth in middleware
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/settings/configuration/:path*', '/settings/employees/:path*'],
}; 
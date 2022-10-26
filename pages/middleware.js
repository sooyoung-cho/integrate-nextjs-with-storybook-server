// middleware.ts
import { NextResponse } from 'next/server'
import NextCors from 'nextjs-cors';

// This function can be marked `async` if using `await` inside
export async function middleware(request, response) {

  await NextCors(request, response, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });



  return NextResponse.redirect(new URL('/about-2', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}

'use server'
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const privateRoutes = ['/modules/dashboard']
    const cookie = await cookies()

    const token = cookie.get('token')
    const isPrivateRoute = privateRoutes.includes(request.nextUrl.pathname)

    if (isPrivateRoute && !token) {
        return NextResponse.redirect(new URL('/', request.url))
    }
 
    return NextResponse.next()
}

export const config = {
    matcher: '/:path*'
}
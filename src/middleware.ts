import { jwtVerify } from 'jose';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {

    const token = request.cookies.get('PR_app')?.value;

    if (token === undefined) return NextResponse.redirect(new URL('/login', request.url));

    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(`${process.env.JWT_KEY}`))
        console.log('PAYLOAD MIDDLEWARE', payload);
        return NextResponse.next()
    } catch (error) {
        console.log(error)
        return NextResponse.redirect(new URL('login', request.url))
    }

}

export const config = {
    matcher: [
        '/dashboard/:path*'
    ],
};
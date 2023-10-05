import { authMiddleware } from "@clerk/nextjs";
import { NextResponse, NextRequest } from "next/server";
import { logger } from '@/lib/logger';

const publicRoutes = [
  "/",
  "/about",
  "/consulting",
  "/contact",
  "/events",
  "/landing",
  "/posts",
  "/privacy",
  "/sign-in",
  "/sign-out",
  "/sign-up",
  "/terms",
  "/tracks",
  "/workshops",
  "/feed",
  "/404",
  "/sitemap.xml",
];

export default authMiddleware({
  publicRoutes: publicRoutes,
  beforeAuth: (req: NextRequest) => {
    logger.info("👉withClerkMiddleware: ", req.nextUrl.pathname);
    if (publicRoutes.includes(req.nextUrl.pathname)) {
      return NextResponse.next();
    }
  },
  afterAuth: (auth: any, req: NextRequest) => {
    if (!auth.userId && !auth.isPublicRoute) {
      const signInUrl = new URL("/sign-in", req.url);
      signInUrl.searchParams.set("redirect_url", req.url);
      return NextResponse.redirect(signInUrl);
    }
    return NextResponse.next();
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

import { authMiddleware } from "@clerk/nextjs";
import { NextResponse, NextRequest } from "next/server";
import { logger } from '@/lib/logger';

const publicPaths = [
  "/",
  "/about(/.*)?",
  "/contact(/.*)?",
  "/events(/.*)?",
  "/landing(/.*)?",
  "/posts(/.*)?",
  "/privacy(/.*)?",
  "/sign-(in|out|up)(/.*)?",
  "/terms(/.*)?",
  "/tracks(/.*)?",
  "/feed",
  "/404",
  "/sitemap.xml",
];

const isPublic = (path: string) => publicPaths.some(publicPath => path.match(new RegExp(`^${publicPath}$`.replace("*$", "($|/)"))));


const handleBeforeAuth = (req: NextRequest): NextResponse | void => {
  logger.info("👉withClerkMiddleware: ", req.nextUrl.pathname);

  if (isPublic(req.nextUrl.pathname)) {
    return NextResponse.next();
  }
};

const handleAfterAuth = (auth: any, req: NextRequest): NextResponse | void => {
  if (!auth.userId && !auth.isPublicRoute) {
    const signInUrl = new URL("/sign-in", req.url);
    signInUrl.searchParams.set("redirect_url", req.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
};

export default authMiddleware({
  beforeAuth: handleBeforeAuth,
  afterAuth: handleAfterAuth,
  publicRoutes: publicPaths,
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

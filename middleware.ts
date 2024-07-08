import authConfig from "./auth.config";
import NextAuth from "next-auth";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  privateRoutes,
  publicRoutes,
} from "./routes";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;

  const currentLocation = req.nextUrl.pathname;

  if (currentLocation.startsWith(apiAuthPrefix)) return;

  if (
    publicRoutes.includes(currentLocation) ||
    authRoutes.includes(currentLocation)
  ) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url));
    }

    return;
  }
  console.log("Slicing: ", currentLocation);
  if (privateRoutes.includes(currentLocation)) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/auth/sign-in", req.url));
    }

    return;
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

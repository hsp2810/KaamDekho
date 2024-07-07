import { auth } from "@/auth";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  privateRoutes,
  publicRoutes,
} from "./routes";
import { NextResponse } from "next/server";

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

  if (privateRoutes.includes(currentLocation.slice(0, 5))) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/auth/sign-in", req.url));
    }

    return;
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

import NextAuth, { type DefaultSession } from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/prisma";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      username: string | null;
      email: string | null;
      image: string | null;
      name: string | null;
      password: string | null;
    };
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth-error",
  },

  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user && token.role) {
        session.user.id = token.sub;
        session.user.username = token.username as string;
        session.user.name = token.name as string;
        session.user.password = token.password as string;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await db.user.findUnique({
        where: { id: token.sub },
      });
      if (!existingUser) return token;
      token.username = existingUser.username;
      token.password = existingUser.password;
      token.name = existingUser.name;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});

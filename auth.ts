import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "./lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { loginSchema } from "./lib/validators/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        const { email, password } = await loginSchema.parseAsync(credentials);

        const pwHash = await bcrypt.hash(password, 10);

        user = await db.user.findUnique({
          where: { email },
        });

        if (!user || !user.password) {
          return null;
        }

        const isPasswordsSame = bcrypt.compare(user.password, pwHash);
        if (!isPasswordsSame) {
          return null;
        }

        return user;
      },
    }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
});

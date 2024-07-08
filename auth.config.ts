import { db } from "@/lib/prisma";
import { loginSchema } from "@/lib/validators/auth";
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await db.user.findUnique({
            where: { email },
          });
          if (!user || !user.password) return null;

          const isCorrectPassword = await bcrypt.compare(
            password,
            user.password
          );
          if (isCorrectPassword) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;

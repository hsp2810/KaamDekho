"use server";

import { signIn, signOut } from "@/auth";
import { db } from "@/lib/prisma";
import { loginSchema, registerSchema } from "@/lib/validators/auth";
import { AuthError } from "next-auth";
import * as z from "zod";
import bcrypt from "bcryptjs";

export const actionLogin = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials!" };

        default:
          return { error: "Something went wrong!" };
      }
    }
  }
};

export const actionRegister = async (
  values: z.infer<typeof registerSchema>
) => {
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { username, name, email, password } = validatedFields.data;

  const userExist = await db.user.findUnique({
    where: { email },
  });
  if (userExist) return { error: "Email already taken. Use a different one!" };

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await db.user.create({
    data: {
      username,
      name,
      email,
      password: hashedPassword,
    },
  });
  if (!newUser) return { error: "Something went wrong in creating account!" };

  await signIn("credentials", {
    email,
    password,
    redirectTo: "/dashboard",
  });
};

export const actionLogout = async () => {
  await signOut();
};

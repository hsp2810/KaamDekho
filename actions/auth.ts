"use server";

import { signIn, signOut } from "@/auth";
import { db } from "@/lib/prisma";
import { loginSchema, registerSchema } from "@/lib/validators/auth";
import { AuthError } from "next-auth";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const actionLogin = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { email, password } = validatedFields.data;
  console.log("Redirecting to dashboard");
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
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

  const usernameExist = await db.user.findUnique({
    where: { username },
  });
  if (usernameExist)
    return { error: "Username already taken. Use a different one!" };

  const emailExist = await db.user.findUnique({
    where: { email },
  });
  if (emailExist) return { error: "Email already taken. Use a different one!" };

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
  console.log("Logouting");

  await signOut();
};

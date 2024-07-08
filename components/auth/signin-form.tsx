"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginSchema } from "@/lib/validators/auth";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
// import { signIn } from "@/auth";
import { actionLogin } from "@/actions/auth";
import { Icons } from "@/lib/icons";
import FormError from "./form-error";
import { signIn } from "next-auth/react";

type LoginFormValues = z.infer<typeof loginSchema>;

const defaultValues: Partial<LoginFormValues> = {
  email: "harshit123@gmail.com",
  password: "password",
};

export default function SigninForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: LoginFormValues) {
    setError("");

    startTransition(() => {
      const { email, password } = data;
      signIn("credentials", { email, password, redirectTo: "/dashboard" });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='joe.blow@example.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder='********' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormError message={error} />

        <Button type='submit' className='w-full text-md' disabled={isPending}>
          {isPending ? (
            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
          ) : (
            "Sign-in"
          )}
        </Button>
      </form>
    </Form>
  );
}

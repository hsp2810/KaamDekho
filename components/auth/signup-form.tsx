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
import { registerSchema } from "@/lib/validators/auth";
import { Input } from "@/components/ui/input";
import { useEffect, useState, useTransition } from "react";
import { actionLogin, actionRegister } from "@/actions/auth";
import { Icons } from "@/lib/icons";
import FormError from "./form-error";
import { Checkbox } from "@/components/ui/checkbox";

type RegisterFormValues = z.infer<typeof registerSchema>;

const defaultValues: Partial<RegisterFormValues> = {
  username: "hsptheking",
  email: "harshit123@gmail.com",
  name: "Harshit Patel",
  password: "password",
  isAsRecruiter: false,
};

export default function SignUpForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [isAsRecruiter, setAsRecruiter] = useState<boolean>(false);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues,
    mode: "onChange",
  });

  useEffect(() => {
    console.log("useeffect is running!");
    setAsRecruiter(form.getValues("isAsRecruiter") ? true : false);
  }, [form]);

  function onSubmit(data: RegisterFormValues) {
    setError("");

    startTransition(() => {
      actionRegister(data).then((data) => {
        if (data) {
          setError(data.error);
        }
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='joeblow123' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Jow Blow' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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

        {isAsRecruiter && (
          <>
            <FormField
              control={form.control}
              name='company'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder='Microsoft' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <FormField
          control={form.control}
          name='isAsRecruiter'
          render={({ field }) => (
            <FormItem className='space-y-0 flex items-center gap-1'>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  onChange={(value) => setAsRecruiter(!value)}
                />
              </FormControl>
              <FormLabel>Register as a recruiter</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormError message={error} />

        <Button type='submit' className='w-full text-md' disabled={isPending}>
          {isPending ? (
            <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
          ) : (
            "Sign-up"
          )}
        </Button>
      </form>
    </Form>
  );
}

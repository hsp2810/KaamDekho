import SigninForm from "@/components/auth/signin-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/lib/icons";
import Link from "next/link";

export default function SigninPage() {
  return (
    <Card className='w-[35rem]'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-xl tracking-tighter'>
          Sign in to your account as a Job Seeker/Recruiter
        </CardTitle>
        <CardDescription>
          Enter your email and password below to login or use a authentication
          provider
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='grid grid-cols-2 gap-6'>
          <Button variant='outline'>
            <Icons.gitHub className='mr-2 h-4 w-4' />
            Github
          </Button>
          <Button variant='outline'>
            <Icons.google className='mr-2 h-4 w-4' />
            Google
          </Button>
        </div>
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2 text-muted-foreground'>
              Or continue with
            </span>
          </div>
        </div>
        <SigninForm />
      </CardContent>
      <CardFooter className='flex flex-col gap-5'>
        <p className='text-muted-foreground text-sm'>
          Don't have an account?{" "}
          <Link href={"/auth/sign-up"} className='hover:text-primary'>
            Sign-up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}

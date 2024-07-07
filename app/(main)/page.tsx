import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <main className='h-[86vh] flex items-center justify-center'>
      <div className='w-3/4 flex flex-col items-center'>
        <h1 className='text-primary text-7xl font-bold tracking-tighter leading-snug'>
          Your Next Opportunity Awaits
        </h1>
        <p className='font-semibold text-xl'>Discover Jobs Tailored for You!</p>
        <Link
          className={cn(buttonVariants({ size: "lg" }), "mt-5 text-md")}
          href={"/auth/sign-in"}
        >
          Start using KaamDekho
        </Link>
      </div>
    </main>
  );
}

"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { Icons } from "@/lib/icons";
import { LogOut } from "lucide-react";

export default function LogoutBtn() {
  const [isPending, startTransition] = useTransition();

  const handleLogout = (e: any) => {
    e.preventDefault();
    localStorage.clear();
    startTransition(async () => {
      signOut();
    });
  };

  return (
    <Button
      className='md:w-full text-white bg-crimson hover:bg-[#c10b2d]'
      onClick={handleLogout}
      disabled={isPending}
    >
      {isPending ? (
        <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
      ) : (
        <>
          <LogOut className='h-4 w-4 md:mr-1' />{" "}
          <span className='hidden md:block'>Sign out</span>
        </>
      )}
    </Button>
  );
}

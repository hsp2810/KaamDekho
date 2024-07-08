"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import AvatarProvider from "../providers/avatar-provider";
import Link from "next/link";
import { BookMarked, LogOut, Settings, User } from "lucide-react";
import { useTransition } from "react";
import { signOut } from "next-auth/react";
import { Icons } from "@/lib/icons";

const user = {
  fullName: "Harshit Patel",
  email: "hsp123@gmail.com",
};

export default function UserSettingsModal() {
  const [isPending, startTransition] = useTransition();

  const handleLogout = (e: any) => {
    e.preventDefault();
    localStorage.clear();
    startTransition(async () => {
      signOut();
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AvatarProvider url='/avatars/01.png' fallback='HP' />
      </DropdownMenuTrigger>

      <DropdownMenuContent className='dark:bg-popover' align='end'>
        <div className='flex items-center justify-start gap-2 p-2'>
          <div className='flex flex-col space-y-1 leading-none'>
            {user.fullName && <p className='font-medium'>{user.fullName}</p>}
            {user.email && (
              <p className='w-[200px] truncate text-sm text-muted-foreground'>
                {`${user.email}`}
              </p>
            )}
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild className='my-1 cursor-pointer'>
          <Link href={"/profile"}>
            <User className='h-4 w-4 mr-1' />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className='my-1 cursor-pointer'>
          <Link href={"/settings"}>
            <BookMarked className='h-4 w-4 mr-1' />
            Saved Jobs
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className='my-1 cursor-pointer'>
          <Link href={"/settings"}>
            <BookMarked className='h-4 w-4 mr-1' />
            Applied Jobs
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className='my-1 cursor-pointer'>
          <Link href={"/settings"}>
            <Settings className='h-4 w-4 mr-1' />
            Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className='cursor-pointer'
          style={{ backgroundColor: "crimson", color: "white" }}
        >
          <button
            className='flex justify-center items-center w-full'
            onClick={handleLogout}
            disabled={isPending}
          >
            {isPending ? (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            ) : (
              <>
                <LogOut className='h-4 w-4 mr-1' /> Sign out
              </>
            )}
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

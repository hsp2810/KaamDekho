import NotificationsTag from "@/components/recruiters/notifications/notifications-tag";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/lib/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BriefcaseBusiness, LogOut, User } from "lucide-react";
import LogoutBtn from "./logout-btn";

export function Sidebar() {
  return (
    <div className='w-fit md:w-[20rem] space-y-4 py-4 flex flex-col justify-between items-center md:items-stretch h-full'>
      <div className='px-2 md:px-4 py-2'>
        <Link
          href={"/recruiters"}
          className='px-2 text-xl font-semibold tracking-tight flex items-center'
        >
          <BriefcaseBusiness className='h-6 w-6 mr-1' />
          <span className='hidden md:block'>KaamDekho - Recruiter</span>
        </Link>
        <NotificationsTag />
        <div className='flex flex-col space-y-2 items-center'>
          <Link
            href='/recruiters'
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "w-fit md:w-full justify-start"
            )}
          >
            <Icons.dashboard className='md:mr-2 h-4 w-4' />
            <span className='hidden md:block'>Dashboard</span>
          </Link>
          <Link
            href='/recruiters'
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "w-fit md:w-full justify-start"
            )}
          >
            <Icons.addedPosts className='md:mr-2 h-4 w-4' />
            <span className='hidden md:block'>Posted Jobs</span>
          </Link>
          <Link
            href='/recruiters/post-job'
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "w-fit md:w-full justify-start"
            )}
          >
            <Icons.addPost className='md:mr-2 h-4 w-4' />
            <span className='hidden md:block'>Post a job</span>
          </Link>
          <Link
            href='/recruiters/register-company'
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "w-fit md:w-full justify-start"
            )}
          >
            <Icons.registerCompanyIcon className='md:mr-2 h-5 w-5' />
            <span className='hidden md:block'>Register your company</span>
          </Link>
          <Link
            href='/recruiters/messages'
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "w-fit md:w-full justify-start"
            )}
          >
            <Icons.messages className='md:mr-2 h-4 w-4' />
            <span className='hidden md:block'>Messages</span>
          </Link>
        </div>
      </div>
      <div>
        <Separator orientation='horizontal' />
        <div className='flex flex-col mx-2 md:mx-4 space-y-2 mt-4'>
          <Button className='md:w-full font-semibold' size={"sm"}>
            <User className='h-4 w-4 md:mr-1' />
            <span className='hidden md:block'>Profile</span>
          </Button>
          <LogoutBtn />
        </div>
      </div>
    </div>
  );
}

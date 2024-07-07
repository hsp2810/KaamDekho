import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function ProfilePoster() {
  return (
    <main>
      <p className='text-sm my-3'>
        For editing the personal info like Name and Profile Photo, Visit the
        <Link
          href={"/settings"}
          className='mx-1 hover:underline text-muted-foreground'
        >
          Settings
        </Link>
        page
      </p>
      <div className='flex items-center justify-center gap-3 relative bg-gradient-to-t from-[#000000] to-[#6f6f6f] rounded-lg md:px-20 px-5 m-auto pt-2 md:pt-20 pb-2'>
        <Avatar className='bg-primary text-white w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36'>
          <AvatarImage src={""} />
          <AvatarFallback className='bg-inherit text-3xl'>HP</AvatarFallback>
        </Avatar>

        <div className='space-y-2 text-white'>
          <h1 className='font-semibold text-3xl md:text-4xl lg:text-5xl'>
            Harshit Patel
          </h1>
          <div className='flex gap-2 flex-col md:flex-row tracking-tighter leading-tight md:leading-none'>
            <div className='flex items-center'>
              <Mail className='h-5 w-5 mr-1' />
              <Link href={""} className='hover:underline underline-offset-2'>
                harshit123@gmail.com
              </Link>
            </div>
            <div className='flex items-center'>
              <MapPin className='h-5 w-5 mr-1' />
              <span>Calgary, Alberta</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bookmark, EllipsisVertical } from "lucide-react";

export default function JobCardMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVertical className='text-zinc-600 h-5 w-5' />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel className='cursor-pointer font-normal my-1 flex items-center'>
          <Bookmark className='h-4 w-4 mr-1' />
          Save job
        </DropdownMenuLabel>
        {/* <DropdownMenuLabel className='cursor-pointer font-normal my-1'></DropdownMenuLabel> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

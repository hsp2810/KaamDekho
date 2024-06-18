import {
  ChevronDownIcon,
  CircleIcon,
  PlusIcon,
  SquareArrowOutUpRight,
  Star,
  StarIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import CompanyPostingsTag from "./company-postings-tags";
import AvatarProvider from "@/components/providers/avatar-provider";
import Link from "next/link";

export default function CompanyCard() {
  return (
    <Card>
      <CardHeader className='grid grid-cols-[1fr_110px] items-start gap-4 space-y-0'>
        <div className='flex gap-2 items-center'>
          <AvatarProvider fallback='M' url='' />
          <div className='flex flex-col'>
            <CardTitle className='font-bold text-2xl text-primary'>
              Microsoft
            </CardTitle>
            <CardDescription className='flex gap-4'>
              <p>India</p>
              <p>Infomation Technology</p>
              <p className='flex items-center'>
                <Star className='mr-1 h-4 w-4' /> 4.8
              </p>
            </CardDescription>
          </div>
        </div>
        <div className='flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground'>
          <Button variant='secondary' className='px-3 shadow-none'>
            Visit website <SquareArrowOutUpRight className='h-4 w-4 ml-1' />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <h1 className='my-1 font-semibold text-lg'>Company Postings (10)</h1>
        <div className='flex space-x-4 items-center flex-wrap text-sm text-muted-foreground'>
          <CompanyPostingsTag />
          <CompanyPostingsTag />
          <CompanyPostingsTag />
          <Link href={"/companies/slug/postings"} className='hover:underline'>
            show more
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

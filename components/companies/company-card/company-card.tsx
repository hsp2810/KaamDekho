import { Linkedin, SquareArrowOutUpRight, Star } from "lucide-react";

import AvatarProvider from "@/components/providers/avatar-provider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import CompanyPostingsTag from "./company-postings-tags";

export default function CompanyCard() {
  return (
    <Card>
      <CardHeader className='flex flex-row justify-between gap-4 space-y-0'>
        <div className='flex gap-2 items-center'>
          <AvatarProvider fallback='M' url='' />
          <div className='flex flex-col'>
            <CardTitle className='font-bold text-2xl text-primary'>
              Microsoft
            </CardTitle>
            <CardDescription className='flex gap-2 md:gap-4 text-xs md:text-sm'>
              <p>India</p>
              <p>Infomation Technology</p>
              <p className='flex items-center'>
                <Star className='mr-1 h-4 w-4' /> 4.8
              </p>
            </CardDescription>
          </div>
        </div>
        <div className='flex items-center space-x-1 rounded-md'>
          <Button variant='secondary' className='px-3 shadow-none'>
            <span className='hidden md:block'>Visit website</span>{" "}
            <SquareArrowOutUpRight className='h-4 w-4 ml-1' />
          </Button>
          <Button variant='secondary' className='px-3 shadow-none'>
            <Linkedin className='h-4 w-4 ml-1' />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <h1 className='my-1 font-semibold text-lg'>Company Postings (10)</h1>
        <div className='flex md:space-x-4 items-center flex-wrap text-sm text-muted-foreground'>
          <CompanyPostingsTag />
          <CompanyPostingsTag />
          <CompanyPostingsTag />
          <Link
            href={"/companies/slug/postings"}
            className='hover:underline ml-1'
          >
            show more...
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

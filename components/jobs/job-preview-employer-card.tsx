import React from "react";
import AvatarProvider from "@/components/providers/avatar-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function JobPreviewEmployerCard() {
  return (
    <Card>
      <CardHeader className='space-y-0'>
        <CardTitle className='text-xl'>Meet the hiring team</CardTitle>
        <CardDescription className=''>
          Tip: Message the hiring team directly.
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-6'>
        <div className='flex items-center justify-between space-x-4'>
          <div className='flex items-center space-x-4'>
            <AvatarProvider url='/avatars/01.png' fallback='OM' />
            <div>
              <p className='font-medium leading-none'>Sofia Davis</p>
              <p className='text-sm text-muted-foreground'>
                Senior Recruiter at Microsoft | 1.1 years
              </p>
            </div>
          </div>
          <Button>
            <Mail className='h-4 w-4 mr-1' />
            Send an Email
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

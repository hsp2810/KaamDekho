import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import React from "react";

export default function NotificationsTag() {
  return (
    <Button
      variant='notifications'
      size='sm'
      className='md:w-full w-fit mt-7 md:mt-5 mb-6 justify-between font-bold hover:scale-105 transition'
    >
      <p className='flex items-center'>
        <Bell className='md:mr-2 h-4 w-4' />
        <span className='hidden md:block'>Notifications</span>
      </p>
      <p className='hidden md:block'>5</p>
    </Button>
  );
}

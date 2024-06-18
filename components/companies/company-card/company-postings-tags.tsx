import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

export default function CompanyPostingsTag() {
  return (
    <Card className='flex items-center p-3 gap-5 w-fit justify-between bg-primary text-white'>
      <div className='flex flex-col'>
        <h1 className='text-lg p-0 font-semibold '>Frontend Developer</h1>
        <div className='flex gap-2'>
          <p className='text-xs'>About 20 hours ago</p>
          <p className='text-xs'></p>
          <p className='text-xs'></p>
        </div>
      </div>
      <Button className='p-1 text-primary' size={"sm"} variant={"outline"}>
        View
      </Button>
    </Card>
  );
}

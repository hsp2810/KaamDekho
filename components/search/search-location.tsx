import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchLocation() {
  return (
    <main className='flex gap-2 px-5 md:px-0 md:w-3/4 m-auto'>
      <Input
        className='md:py-7 text-md md:pl-5'
        placeholder='Job title, keywords, or company'
      />
      <Input
        className='md:py-7 text-md md:pl-5'
        placeholder="City, province or 'remote'"
      />
      <Button className='md:py-7'>
        <Search className='h-4 w-4 mr-1' />
        <span className='hidden md:block'>Search</span>
      </Button>
    </main>
  );
}

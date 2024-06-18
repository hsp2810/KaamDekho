"use client";

import { Button } from "@/components/ui/button";
import { MoveUp } from "lucide-react";

export default function ScrollTopProvider() {
  const handleClick = () => {
    window.scrollTo({
      top: window.screenTop,
      behavior: "smooth",
    });
  };

  return (
    <Button
      className='w-fit my-2 text-zinc-600'
      variant={"outline"}
      onClick={handleClick}
    >
      <MoveUp className='w-5 h-5' />
    </Button>
  );
}

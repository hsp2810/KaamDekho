"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";

export default function BackButtonProvider({ className }: { className?: any }) {
  const router = useRouter();

  return (
    <Button
      className={cn(buttonVariants({ size: "sm" }), className)}
      onClick={() => router.back()}
    >
      <ChevronLeft className='h-4 w-4' /> Back
    </Button>
  );
}

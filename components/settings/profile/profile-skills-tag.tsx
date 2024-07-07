"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { TooltipContent } from "@radix-ui/react-tooltip";

interface JobPreviewSkillsTagProps {
  skill: string;
  variant: "outline" | "green";
}

export default function ProfileSkillsTag({
  skill,
  variant,
}: JobPreviewSkillsTagProps) {
  return (
    <Badge
      variant={variant}
      className='flex justify-between gap-1 rounded-lg px-3 py-1 text-md font-light tracking-normal'
    >
      {skill}
      <Button variant={"ghost"} className='p-0 h-auto'>
        <X className='h-4 w-4' />
      </Button>
    </Badge>
  );
}

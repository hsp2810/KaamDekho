import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface JobPreviewSkillsTagProps {
  skill: string;
  variant: "outline" | "green";
}

export default function JobPreviewSkillsTag({
  skill,
  variant,
}: JobPreviewSkillsTagProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Badge
            variant={variant}
            className='rounded-lg px-3 py-1 text-xs font-light tracking-normal'
          >
            {skill}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>Add {skill} to profile</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

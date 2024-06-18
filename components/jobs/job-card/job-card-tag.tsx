"use client";

import { Badge } from "@/components/ui/badge";

export default function JobCardTag({ title }: { title: string }) {
  return (
    <Badge variant='default' className='rounded-lg'>
      {title}
    </Badge>
  );
}

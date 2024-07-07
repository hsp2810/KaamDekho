"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarProviderProps {
  url: string;
  fallback: string;
  className?: any;
}

export default function AvatarProvider({
  url,
  fallback,
  className,
}: AvatarProviderProps) {
  return (
    <Avatar className={`${className} bg-primary text-white dark:bg-secondary`}>
      <AvatarImage src={url} />
      <AvatarFallback className='bg-inherit'>{fallback}</AvatarFallback>
    </Avatar>
  );
}

import React from "react";
import { JobCard } from "./job-card/job-card";
import JobPreviewCard from "./job-preview-card";
import { LoaderCircle } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

export default function JobsSection() {
  return (
    <main className='flex gap-6 mt-10 justify-center sticky top-20'>
      <ScrollArea className='h-[44rem] rounded-md'>
        <div className='flex space-y-4 flex-col  pb-10'>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </ScrollArea>

      <JobPreviewCard />
    </main>
  );
}

import React from "react";
import { JobCard } from "./job-card/job-card";
import JobPreviewCard from "./job-preview-card";
import { LoaderCircle } from "lucide-react";

export default function JobsSection() {
  return (
    <main className='flex gap-6 mt-10 justify-center h-screen overflow-auto'>
      <div className='flex space-y-4 flex-col mt-2 overflow-y-scroll pb-10'>
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
      <div className='sticky top-0 mt-2'>
        <JobPreviewCard />
      </div>
    </main>
  );
}

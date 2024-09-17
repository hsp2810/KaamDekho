import PostJobForm from "@/components/companies/forms/post-job-form";
import React from "react";

export default function PostJobPage() {
  return (
    <main className='ml-5 md:ml-10 my-5 md:my-10 w-3/4 space-y-6 md:space-y-8'>
      <h1 className='font-bold text-2xl md:text-3xl'>Post a job</h1>
      <PostJobForm />
    </main>
  );
}

import { auth } from "@/auth";
import PostJobForm from "@/components/companies/forms/post-job-form";
import { db } from "@/lib/prisma";
import React from "react";

export default async function PostJobPage() {
  const session = await auth();
  if (!session) return null;
  const user = session?.user;

  const loggedInUser = await db.user.findUnique({
    where: { id: user.id },
    include: { Company: true },
  });
  if (!loggedInUser) return null;

  return (
    <main className='ml-5 md:ml-10 my-5 md:my-10 w-3/4 space-y-6 md:space-y-8'>
      <h1 className='font-bold text-2xl md:text-3xl'>Post a job</h1>
      <PostJobForm loggedInUser={loggedInUser} />
    </main>
  );
}

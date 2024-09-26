"use server";

import { db } from "@/lib/prisma";
import { addCompanyFormSchema } from "@/lib/validators/company";
import { postJobFormSchema } from "@/lib/validators/job";
import {
  Company,
  JobLocationType,
  JobType,
  SalaryType,
  User,
} from "@prisma/client";
import * as z from "zod";

export const actionAddJob = async (
  values: z.infer<typeof postJobFormSchema>
) => {
  const {
    title,
    company,
    recruiter,
    job_type,
    job_location_type,
    salary_range,
    salary_type,
    location,
    skills,
    description,
  } = values;

  const companyObj = await db.company.findFirst({
    where: { name: company },
  });
  if (!companyObj) return { error: "Company not found" };

  const recruiterObj = await db.user.findFirst({
    where: { name: recruiter, companyId: companyObj?.id },
  });
  if (!recruiterObj) return { error: "Recruiter information not found" };

  const jobTypeObj = JobType[job_type as keyof typeof JobType];
  const jobLocationTypeObj =
    JobLocationType[job_location_type as keyof typeof JobLocationType];
  const salaryTypeObj = SalaryType[salary_type as keyof typeof SalaryType];

  console.log(description);
  console.log(skills);

  return await db.job.create({
    data: {
      title: values.title,
      companyId: companyObj?.id,
      recruiterId: recruiterObj?.id,
      job_type: jobTypeObj,
      job_location_type: jobLocationTypeObj,
      location: location,
      salary_range: salary_range,
      salary_type: salaryTypeObj,
      // description: description
      // skills: skil,
    },
  });
};

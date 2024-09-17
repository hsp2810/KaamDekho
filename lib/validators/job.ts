import * as z from "zod";

export const postJobFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Job Title must be atleast 2 characters",
    })
    .max(30, {
      message: "Job title must not be longer than 50 characters.",
    }),
  company: z
    .string()
    .min(2, {
      message: "Company name must be atleast 2 characters",
    })
    .max(30, {
      message: "Company name must not be longer than 50 characters.",
    }),
  recruiter: z
    .string()
    .min(2, {
      message: "Recruiter name must be atleast 2 characters",
    })
    .max(30, {
      message: "Recruiter name must not be longer than 50 characters.",
    }),
  job_type: z.string().min(1, { message: "Must select" }),
  job_location_type: z.string().min(1, { message: "Must select" }),
  salary_range: z.string().min(1, { message: "Must select" }),
  salary_type: z.string().min(1, { message: "Must select" }),
  location: z.string().min(1, { message: "Must select" }),
  skills: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid skill." }),
      })
    )
    .optional(),

  description: z.array(
    z.object({
      value: z
        .string()
        .url({ message: "Please enter a valid description point." }),
    })
  ),
  responsibilities: z.string().optional(),
  qualifications: z.string().optional(),
  footer_message: z.string().optional(),
  skills_description: z.string().optional(),
});

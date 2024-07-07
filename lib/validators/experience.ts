import * as z from "zod";

export const addExpFormSchema = z.object({
  position: z
    .string()
    .min(2, {
      message: "Job position must be at least 2 characters.",
    })
    .max(30, {
      message: "Job position must not be longer than 50 characters.",
    }),
  employment_type: z.string().min(1, { message: "Must select" }),
  company: z.string().min(1, { message: "Must select" }),
  start_month: z.string().min(1, { message: "Must select" }),
  start_year: z.string().min(1, { message: "Must select" }),
  end_month: z.string().min(1, { message: "Must select" }),
  end_year: z.string().min(1, { message: "Must select" }),
  location: z.string().min(1, { message: "Must select" }),
  location_type: z.string().min(1, { message: "Must select" }),
  description: z
    .string()
    .max(30, {
      message: "Description must not be longer than 2000 characters.",
    })
    .optional(),
  skills: z.array(
    z.object({
      value: z.string().url({ message: "Please enter a valid skill." }),
    })
  ),
});

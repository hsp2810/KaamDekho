import * as z from "zod";

export const addEducationFormSchema = z.object({
  institute: z.string().min(2, {
    message: "Institution name must be at least 2 characters.",
  }),
  course_type: z.string().min(1, { message: "Must select" }),
  gpa: z.number(),
  start_month: z.string().min(1, { message: "Must select" }),
  start_year: z.string().min(1, { message: "Must select" }),
  end_month: z.string().min(1, { message: "Must select" }),
  end_year: z.string().min(1, { message: "Must select" }),
  location: z.string().min(1, { message: "Must select" }),
  skills: z.array(
    z.object({
      value: z.string().url({ message: "Please enter a valid skill." }),
    })
  ),
});

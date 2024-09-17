import * as z from "zod";

export const addCompanyFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Company name must be at least 2 characters.",
    })
    .max(30, {
      message: "Company name must not be longer than 30 characters.",
    }),
  about: z.string().max(2000).optional(),
  country: z
    .string()
    .min(1, { message: "Adding a location is a MUST" })
    .max(100, { message: "Location should not exceed 100 characters" }),
  industry: z.string().min(1),
  website_url: z.string().optional(),
});

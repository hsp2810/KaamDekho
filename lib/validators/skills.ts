import * as z from "zod";

export const addSkillsFormSchema = z.object({
  skill: z.string().min(2, {
    message: "Skill must be at least 2 characters.",
  }),
});

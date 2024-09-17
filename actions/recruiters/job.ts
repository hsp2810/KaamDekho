"use server";

import { db } from "@/lib/prisma";
import { addCompanyFormSchema } from "@/lib/validators/company";
import { postJobFormSchema } from "@/lib/validators/job";
import { revalidatePath } from "next/cache";
import * as z from "zod";

export const actionAddJob = async (
  values: z.infer<typeof postJobFormSchema>
) => {
  return await db.job.create({ data: {} });
};

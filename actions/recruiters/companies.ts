"use server";

import { db } from "@/lib/prisma";
import { addCompanyFormSchema } from "@/lib/validators/company";
import { revalidatePath } from "next/cache";
import * as z from "zod";

export const actionAddCompany = async (
  values: z.infer<typeof addCompanyFormSchema>
) => {
  return await db.company.create({ data: values });
};

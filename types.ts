import { User, Company } from "@prisma/client";

export type UserWithCompany = User & {
  company?: Company | null;
};

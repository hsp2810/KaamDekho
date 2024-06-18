import { auth } from "@clerk/nextjs/server";

export const getServerSession = () => {
  try {
    const { userId } = auth();
    if (!userId) return null;

    //find the user from prisma

    // return user
  } catch (error) {
    return null;
  }
};

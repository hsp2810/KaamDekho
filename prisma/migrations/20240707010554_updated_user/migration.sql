/*
  Warnings:

  - You are about to drop the column `profile_photo_url` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `job_type` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('RECRUITER', 'JOBSEEKER');

-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('SELF_EMPLOYED', 'CONTRACT', 'FREELANCE', 'PART_TIME', 'FULL_TIME');

-- DropForeignKey
ALTER TABLE "_applied_jobs" DROP CONSTRAINT "_applied_jobs_B_fkey";

-- DropForeignKey
ALTER TABLE "_saved_jobs" DROP CONSTRAINT "_saved_jobs_B_fkey";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "profile_photo_url",
ADD COLUMN     "User_photo_url" TEXT;

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "job_type" "JobType" NOT NULL;

-- DropTable
DROP TABLE "Profile";

-- DropEnum
DROP TYPE "ProfileType";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "imageUrl" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "User_type" "UserType" NOT NULL DEFAULT 'JOBSEEKER',
    "skills" TEXT[],
    "experience" TEXT,
    "socials" JSONB[],
    "isOpenToWork" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "_applied_jobs" ADD CONSTRAINT "_applied_jobs_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_saved_jobs" ADD CONSTRAINT "_saved_jobs_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

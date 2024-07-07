-- CreateEnum
CREATE TYPE "ProfileType" AS ENUM ('RECRUITER', 'JOBSEEKER');

-- CreateEnum
CREATE TYPE "JobLocationType" AS ENUM ('REMOTE', 'ONSITE', 'HYBRID');

-- CreateEnum
CREATE TYPE "SalaryType" AS ENUM ('HOURLY', 'ANNUALLY');

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profile_type" "ProfileType" NOT NULL DEFAULT 'JOBSEEKER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "about" TEXT,
    "country" TEXT NOT NULL,
    "industries" TEXT[],
    "ratings" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "website_url" TEXT,
    "linkedin_url" TEXT,
    "profile_photo_url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "recruiter" TEXT,
    "job_location_type" "JobLocationType" NOT NULL,
    "salary_range" TEXT,
    "salary_type" "SalaryType",
    "location" TEXT,
    "skills" TEXT[],
    "description" TEXT NOT NULL,
    "responsibilities" TEXT,
    "qualifications" TEXT,
    "footer_message" TEXT,
    "skills_description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CompanyToJob" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_applied_jobs" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_saved_jobs" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyToJob_AB_unique" ON "_CompanyToJob"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyToJob_B_index" ON "_CompanyToJob"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_applied_jobs_AB_unique" ON "_applied_jobs"("A", "B");

-- CreateIndex
CREATE INDEX "_applied_jobs_B_index" ON "_applied_jobs"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_saved_jobs_AB_unique" ON "_saved_jobs"("A", "B");

-- CreateIndex
CREATE INDEX "_saved_jobs_B_index" ON "_saved_jobs"("B");

-- AddForeignKey
ALTER TABLE "_CompanyToJob" ADD CONSTRAINT "_CompanyToJob_A_fkey" FOREIGN KEY ("A") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyToJob" ADD CONSTRAINT "_CompanyToJob_B_fkey" FOREIGN KEY ("B") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_applied_jobs" ADD CONSTRAINT "_applied_jobs_A_fkey" FOREIGN KEY ("A") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_applied_jobs" ADD CONSTRAINT "_applied_jobs_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_saved_jobs" ADD CONSTRAINT "_saved_jobs_A_fkey" FOREIGN KEY ("A") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_saved_jobs" ADD CONSTRAINT "_saved_jobs_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

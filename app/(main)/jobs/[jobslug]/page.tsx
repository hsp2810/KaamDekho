import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, Bookmark, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import JobPreviewSkillsTag from "@/components/jobs/job-preview-skills-tag";
import JobPreviewEmployerCard from "@/components/jobs/job-preview-employer-card";
import Link from "next/link";
import BackButtonProvider from "@/components/providers/back-btn-provider";
import ScrollTopProvider from "@/components/providers/scroll-top-provider";

export default function JobPage() {
  return (
    <Card className='w-3/4 m-auto group border-none py-10'>
      <BackButtonProvider className={"ml-6"} />
      <CardHeader className=''>
        <CardTitle className='font-bold text-4xl'>Frontend Developer</CardTitle>
        <CardDescription className='flex flex-col gap-1'>
          <div className='flex gap-1'>
            <span className='flex items-center hover:underline cursor-pointer'>
              Microsoft <ArrowUpRight className='h-4 w-4' />
            </span>
            •<span>Remote</span>•<span>4.5</span>
          </div>

          <div className='flex gap-1'>
            <span className='text-black'>$60,000 - $80,000 a year</span>•
            <span>Part-time</span>
          </div>

          <div className='flex gap-1'>
            <span>Norwich, Ontario</span>
          </div>

          <div className='flex gap-1'>
            <Button className='w-fit my-2'>Apply</Button>
            <Button className='w-fit my-2 text-zinc-600' variant={"outline"}>
              <Bookmark className='w-5 h-5' />
            </Button>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-5 py-5'>
        {/* About the recrutier */}
        <JobPreviewEmployerCard />
        {/* Skills for the job */}
        <div>
          <h1 className='text-lg font-semibold'>Skills:</h1>
          <div className='flex gap-1 flex-wrap'>
            <JobPreviewSkillsTag skill='Python' variant='green' />
            <JobPreviewSkillsTag skill='SQL' variant='green' />
            <JobPreviewSkillsTag skill='ReactJS' variant='outline' />
            <JobPreviewSkillsTag skill='NextJS' variant='green' />
            <JobPreviewSkillsTag skill='Docker' variant='green' />
            <JobPreviewSkillsTag skill='Git' variant='outline' />
            <JobPreviewSkillsTag skill='Github' variant='outline' />
            <JobPreviewSkillsTag skill='OOPS' variant='green' />
            <JobPreviewSkillsTag
              skill='Data Structures and Algorithms'
              variant='green'
            />
            <JobPreviewSkillsTag skill='JavaScript' variant='green' />
            <JobPreviewSkillsTag skill='TypeScript' variant='green' />
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h1 className='text-lg font-semibold -mb-1'>Benefits:</h1>
          <span className='text-muted-foreground text-xs'>
            Pulled from the full job description
          </span>
          <ul className='pl-2 text-sm'>
            <li>• Dental Carde</li>
            <li>• RRSP match</li>
            <li>• Vision care</li>
          </ul>
        </div>

        {/* Full Job Description */}
        {/* 1. About the company */}
        <div>
          <h1 className='text-lg font-semibold'>About the company:</h1>
          <p className='text-muted-foreground text-base leading-tight'>
            VDK Group is an industry leading company in the Windows, Doors, and
            Garage Doors sector of the construction industry, prides itself on
            its commitment to selling top-quality products and delivering
            uncompromising installations. With a stellar production team in our
            factory and highly skilled installers in the field, we've cultivated
            a reputation for excellence in our craft. Our projects range from
            custom homes to mid-rise commercial ventures. To support our
            expanding operations, VDK Group Inc. is actively seeking a full-time
            Full Stack Software Developer. We're looking for someone versatile
            and passionate about creating high-quality software solutions to
            enhance and automate our business processes.
          </p>
        </div>

        {/* 2. Responsibilities */}
        <div>
          <h1 className='text-lg font-semibold'>Your Responsibilities:</h1>
          <ul className='leading-tighter pl-3 text-muted-foreground'>
            <li>
              • Collaborate with fellow developers to translate product concepts
              into tangible releases.
            </li>
            <li>
              • Operate across the entire stack, from front-end code driving
              user interfaces to backend logic and architecture.
            </li>
            <li>
              • Design, develop, test, document, and deploy new software
              products and features.
            </li>
          </ul>
        </div>

        {/* 3.  Qualifications*/}
        <div>
          <h1 className='text-lg font-semibold'>
            Qualifications We'are Looking For:
          </h1>
          <ul className='leading-tighter pl-3 text-muted-foreground'>
            <li>• Proficient in PHP, SQL, HTML, CSS, and JavaScript.</li>
            <li>
              • Experience with PHP MVC Frameworks and JS frontend frameworks is
              advantageous.
            </li>
            <li>
              • Demonstrated experience in building flexible and scalable
              web-based applications.
            </li>
            <li>
              • Results-driven mindset with excellent problem-solving skills,
              thriving in a fast-paced and agile environment.
            </li>
            <li>
              • Self-motivated team player with a passion for continuous
              learning.
            </li>
          </ul>
        </div>
        {/* Additional Note from the employer*/}
        <p className='text-muted-foreground'>
          If you're passionate about software development and eager to
          contribute to a dynamic team environment while pushing the boundaries
          of technology in the construction industry, we want to hear from you.
          Join us at VDK Group Inc. and be part of our journey to redefine
          excellence in construction technology.
        </p>
      </CardContent>

      <div className='flex gap-1 ml-6'>
        <Button className='w-fit my-2'>Apply</Button>
        <Button className='w-fit my-2 text-zinc-600' variant={"outline"}>
          <Bookmark className='w-5 h-5' />
        </Button>
        <ScrollTopProvider />
      </div>
    </Card>
  );
}

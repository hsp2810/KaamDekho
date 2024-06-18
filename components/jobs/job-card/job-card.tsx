import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import JobCardTag from "./job-card-tag";
import JobCardMenu from "./job-card-menu";

export function JobCard() {
  return (
    <Link href={`/jobs/123`}>
      <Card className='mx-5 md:mx-0 md:w-[450px] group'>
        <CardHeader className='relative'>
          <div className='absolute right-5 top-8'>
            <JobCardMenu />
          </div>
          <CardTitle className='group-hover:underline font-semibold text-xl'>
            Frontend Developer
          </CardTitle>
          <CardDescription className='flex gap-1'>
            <span>Microsoft</span>•<span>Remote</span>•<span>4.5</span>
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <div className='flex flex-wrap gap-1'>
            <JobCardTag title='Flexible Hours' />
            <JobCardTag title='From $35 an hour' />
            <JobCardTag title='Part-time' />
          </div>
          <ul className='leading-tighter text-zinc-600 text-sm'>
            <li>
              • Provide leadership, expertise and creative solutions for UI and
              UX design, while following corporate strategies.
            </li>
            <li>
              • Share UX best practices, new technologies and methodologies with
              teams.
            </li>
            <li>
              • Effectively communicate information in order to seek buy-in for
              UX design approach from senior management.
            </li>
          </ul>
        </CardContent>
        {/* <CardFooter>
        <Button className='w-full'>
          <Check className='mr-2 h-4 w-4' /> Mark all as read
        </Button>
      </CardFooter> */}
      </Card>
    </Link>
  );
}

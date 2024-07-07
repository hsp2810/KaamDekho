import AvatarProvider from "@/components/providers/avatar-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import ProfileEducationModalForm from "./education/profile-education-modal-form";
import ProfileEducationModal from "./education/profile-education-modal";

export default function ProfileEducation() {
  return (
    <Card>
      <CardHeader className='grid grid-cols-[1fr_110px] items-start gap-4 space-y-0'>
        <div className='space-y-1'>
          <CardTitle>Education</CardTitle>
        </div>
      </CardHeader>
      <CardContent className='text-sm md:text-base'>
        <div className='grid gap-3 mt-5'>
          <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-5 '>
            <div className='flex justify-between mb-2'>
              <div className='flex gap-2 items-center'>
                <AvatarProvider fallback='MS' url='' />
                <div className='flex flex-col leading-tight flex-wrap'>
                  <h1 className='font-semibold text-lg tracking-tighter'>
                    Southern Alberta Institute of Technology
                  </h1>
                  <div className='flex flex-wrap gap-1 md:gap-2 text-xs md:text-sm'>
                    <p className='text-muted-foreground tracking-tighter'>
                      Diploma
                    </p>{" "}
                    <p>|</p>
                    <p className='text-muted-foreground tracking-tighter'>
                      Calgary, AB
                    </p>
                    <p>|</p>
                    <p className='text-muted-foreground tracking-tighter'>
                      Grade: 3.8
                    </p>
                    <p className='block md:hidden'>|</p>
                    <p className='block md:hidden text-muted-foreground tracking-tighter'>
                      Jan 2021-Current
                    </p>
                  </div>
                </div>
              </div>
              <p className='tracking-tighter hidden md:block'>
                Jan 2021 - Current
              </p>
            </div>
            <div className='flex gap-1 mt-3'>
              <h1 className='font-semibold'>Skills: </h1>
              <p>ReactJS, NextJS, NodeJS, Prisma</p>
            </div>
          </div>

          {/* Modal is gonna be open */}
          <ProfileEducationModal />
        </div>
      </CardContent>
    </Card>
  );
}

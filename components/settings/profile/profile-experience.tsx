import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AvatarProvider from "@/components/providers/avatar-provider";
import ProfileExperienceModal from "./experience/profile-experience-modal";

export default function ProfileExperience() {
  return (
    <Card>
      <CardHeader className='grid grid-cols-[1fr_110px] items-start gap-4 space-y-0'>
        <div className='space-y-1'>
          <CardTitle className='text-2xl'>Experience</CardTitle>
        </div>
      </CardHeader>
      <CardContent className='text-sm md:text-base'>
        <div className='grid gap-3 mt-5'>
          <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-5 '>
            <div className='flex justify-between mb-2'>
              <div className='flex gap-2 items-center'>
                <AvatarProvider fallback='MS' url='' />
                <div className='flex flex-col gap-1 md:gap-0'>
                  <h1 className='font-semibold text-lg tracking-tighter leading-none md:leading-7'>
                    Software Developer
                  </h1>
                  <div className='flex gap-1 md:gap-2 text-xs md:text-sm'>
                    <p className='text-muted-foreground tracking-tighter'>
                      Microsoft
                    </p>
                    <p>|</p>
                    <p className='text-muted-foreground tracking-tighter'>
                      Calgary, AB
                    </p>
                    <p>|</p>
                    <p className='text-muted-foreground tracking-tighter'>
                      Remote
                    </p>
                    <p className='block md:hidden'>|</p>
                    <p className='block md:hidden text-muted-foreground tracking-tighter'>
                      Jan 2021 - Current
                    </p>
                  </div>
                </div>
              </div>
              <p className='hidden md:block tracking-tighter'>
                Jan 2021 - Current
              </p>
            </div>
            <ul className='text-sm md:text-base'>
              <li>
                • Overhauled front-end code using React.js to create a
                responsive web application that works across 10 devices,
                including desktops and tablets.
              </li>
              <li>
                • Streamlined deployment processes by containerizing
                applications with Docker, resulting in a 40% reduction in
                deployment time.
              </li>
              <li>
                • Networked with cross-functional teams to implement RESTful
                APIs, enabling efficient data communication, and reducing
                application loading times by 20%.
              </li>
              <li>
                • Improved SEO performance by optimising website configuration,
                leading to a 10% increase in organic search traffic and higher
                search engine rankings.
              </li>
              <li>
                • Orchestrated AWS services including EC2, S3, and Lambda,
                reducing infrastructure costs by 20% through optimization and
                auto-scaling.
              </li>
            </ul>
            <div className='flex gap-1 mt-3'>
              <h1 className='font-semibold'>Skills: </h1>
              <p>ReactJS, NextJS, NodeJS, Prisma</p>
            </div>
          </div>

          {/* Modal is gonna be open */}
          <ProfileExperienceModal />
        </div>
      </CardContent>
    </Card>
  );
}

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProfileSkillsTag from "./profile-skills-tag";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { badgeVariants } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import ProfileSkillsModal from "./skills/profile-skills-modal";

export default function ProfileSkills() {
  return (
    <Card>
      <CardHeader className='gap-4 space-y-0'>
        <div className='flex gap-3 items-center'>
          <CardTitle>Skills</CardTitle>
          <p className='text-sm'>
            (Recruiters searches profiles based on skills. So make sure to add
            each skill in the profile)
          </p>
        </div>
      </CardHeader>
      <CardContent className='text-sm md:text-base gap-2 flex flex-wrap'>
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsTag skill='ReactJS' variant='green' />
        <ProfileSkillsModal />
      </CardContent>
    </Card>
  );
}

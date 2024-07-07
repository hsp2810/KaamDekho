import ProfileAbout from "@/components/settings/profile/profile-about";
import ProfileEducation from "@/components/settings/profile/profile-education";
import ProfileExperience from "@/components/settings/profile/profile-experience";
import ProfilePoster from "@/components/settings/profile/profile-poster";
import ProfileSkills from "@/components/settings/profile/profile-skills";
import React from "react";

export default function ProfilePage() {
  return (
    <main className='flex flex-col gap-4 lg:w-3/4 lg:m-auto px-3 md:p-0'>
      <ProfilePoster />
      <ProfileAbout />
      <ProfileExperience />
      <ProfileEducation />
      <ProfileSkills />
    </main>
  );
}

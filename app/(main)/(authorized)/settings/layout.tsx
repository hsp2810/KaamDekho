import { Metadata } from "next";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { SettingsSidebarNav } from "@/components/navigation/settings-side-nav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KaamDekho - Settings",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/settings",
  },
  {
    title: "Account",
    href: "/settings/account",
  },
  //   {
  //     title: "Appearance",
  //     href: "/examples/forms/appearance",
  //   },
  //   {
  //     title: "Notifications",
  //     href: "/examples/forms/notifications",
  //   },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className='md:w-3/4 m-auto space-y-6 p-10 pb-16 md:block'>
        <div className='space-y-0.5'>
          <h2 className='text-2xl font-bold tracking-tight'>Settings</h2>
          <p className='text-black text-sm'>
            Edit your personal information such as name, account type etc. here.
            If you want to add experience or education or any skills visit
            <Link href={"/profile"} className='mx-1 text-muted-foreground'>
              Profile
            </Link>
            page
          </p>
        </div>
        <Separator className='my-6' />
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <aside className='-mx-4 lg:w-1/5'>
            <SettingsSidebarNav items={sidebarNavItems} />
          </aside>
          <div className='flex-1 lg:max-w-2xl'>{children}</div>
        </div>
      </div>
    </>
  );
}

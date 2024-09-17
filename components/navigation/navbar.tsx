import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import UserSettingsModal from "./user-settings-modal";
import { ToggleThemeProvider } from "../providers/toggle-theme-provider";
import { User } from "next-auth";
import { auth } from "@/auth";

export default async function Navbar() {
  const session = await auth();
  const user = session?.user;
  const isRecruiter = user?.user_type === "RECRUITER";

  return (
    <nav className='flex items-center justify-between md:justify-around bg-zinc-100 dark:bg-inherit w-full p-5'>
      {/* Logo */}
      <h1 className='font-bold text-2xl text-primary'>
        <Link href={"/"} className='flex items-center gap-1'>
          <BriefcaseBusiness className='h-7 w-7' />
          KaamDekho
        </Link>
      </h1>

      {/* Links */}
      {user && (
        <>
          {isRecruiter ? (
            <div className='space-x-4 lg:space-x-6'>
              <NavLink title='Posted Jobs' href='/' />
              <NavLink title='Post a Job' href='/companies' />
            </div>
          ) : (
            <div className='space-x-4 lg:space-x-6'>
              <NavLink title='Jobs' href='/' />
              <NavLink title='Companies' href='/companies' />
            </div>
          )}
        </>
      )}
      {/* User Settings Modal with Button*/}
      <div className='flex gap-2'>
        {user && <UserSettingsModal />}
        <ToggleThemeProvider />
      </div>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink = ({ title, href }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className='text-sm transition rounded-md p-2 font-medium hover:bg-primary text-primary hover:text-white dark:hover:text-black'
    >
      {title}
    </Link>
  );
};

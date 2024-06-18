import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import UserSettingsModal from "./user-settings-modal";

export default async function Navbar() {
  return (
    <nav className='flex items-center justify-between md:justify-around bg-zinc-100 w-full p-5'>
      {/* Logo */}
      <h1 className='font-bold text-2xl text-primary'>
        <Link href={"/"} className='flex items-center gap-1'>
          <BriefcaseBusiness className='h-7 w-7' />
          KaamDekho
        </Link>
      </h1>

      {/* Links */}
      <div className='space-x-4 lg:space-x-6'>
        <NavLink title='Jobs' href='/' />
        <NavLink title='Companies' href='/companies' />
      </div>

      {/* User Settings Modal with Button*/}
      <UserSettingsModal />
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
      className='text-sm transition rounded-md p-2 font-medium hover:bg-primary text-primary hover:text-white'
    >
      {title}
    </Link>
  );
};

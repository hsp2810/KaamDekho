import { BriefcaseBusiness } from "lucide-react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex items-center h-screen justify-around bg-gradient-to-r from-gray-900 to-gray-700'>
      <h1 className='text-5xl text-primary font-bold text-center flex item-center gap-1'>
        <BriefcaseBusiness className='h-10 w-10' />
        KaamDekho
      </h1>
      {children}
    </main>
  );
}

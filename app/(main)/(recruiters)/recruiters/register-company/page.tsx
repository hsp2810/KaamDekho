import CompanyRegistration from "@/components/companies/forms/company-registration";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export default function RegisterCompanyPage() {
  return (
    <main className='ml-5 md:ml-10 my-5 md:my-10 w-3/4 space-y-6 md:space-y-8'>
      <h1 className='font-bold text-2xl md:text-3xl'>
        Register your company to KaamDekho
      </h1>
      <CompanyRegistration />
    </main>
  );
}

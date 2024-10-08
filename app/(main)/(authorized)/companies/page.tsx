import CompaniesList from "@/components/companies/companies-list";
import React from "react";

export default function CompaniesListPage() {
  return (
    <main className='py-10 mx-5 md:w-3/4 md:m-auto'>
      <h1 className='font-bold text-3xl'>Companies that are on KaamDekho</h1>
      <CompaniesList />
    </main>
  );
}

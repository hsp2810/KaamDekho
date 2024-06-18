import React from "react";
import CompanyCard from "./company-card/company-card";

export default function CompaniesList() {
  return (
    <main className='grid gap-2 my-5'>
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
    </main>
  );
}

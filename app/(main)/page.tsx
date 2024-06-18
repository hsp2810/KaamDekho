import JobsSection from "@/components/jobs/jobs-section";
import SearchLocation from "@/components/search/search-location";

export default function Home() {
  return (
    <main className='mt-10'>
      <SearchLocation />
      <JobsSection />
    </main>
  );
}

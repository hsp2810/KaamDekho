import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=''>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

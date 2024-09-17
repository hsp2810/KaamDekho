import { Sidebar } from "@/components/navigation/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function RecruiterMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex h-screen'>
      <Sidebar />
      <Separator orientation='vertical' className='mr-3' />
      <ScrollArea className='flex-1'>{children}</ScrollArea>
    </main>
  );
}

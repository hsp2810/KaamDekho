import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfileAbout() {
  return (
    <Card>
      <CardHeader className='grid grid-cols-[1fr_110px] items-start gap-4 space-y-0'>
        <div className='space-y-1'>
          <CardTitle>About Me</CardTitle>
        </div>
      </CardHeader>
      <CardContent className='text-sm md:text-base'>
        Graduated with a degree in IT Software Development from the Southern
        Alberta Institute of Technology in 2023, I have acquired a robust
        foundation in coding, system architecture, and software engineering.
        With over 2 years of hands-on experience in software development, I
        excel in languages such as JavaScript, Python, and Java, proficiently
        utilizing frameworks like React.js, Node.js, Next.js, Spring Boot for
        web application development. My expertise extends to database management
        with MongoDB and deployment on cloud platforms like AWS and Digital
        Ocean. I am adept at employing Agile methodologies and tools like Jira
        for efficient project management and collaboration. As a member of Phi
        Theta Kapa, I mentored over 50 international students at SAIT, guiding
        them through their learning journey and ensuring a smooth transition
        into the academic environment. Driven by a passion for leveraging
        technology to drive positive change, I am eager to collaborate with
        like-minded professionals to make meaningful contributions and drive
        innovation. Let's connect and explore how we can create impactful
        solutions together.
      </CardContent>
    </Card>
  );
}

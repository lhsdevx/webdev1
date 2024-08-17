import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar'; // Adjust the path according to your project structure
import Footer from "@/components/Footer";

import TeamMemberCard from '@/components/TeamMemberCard';


import Image from "next/image";

const teamMembers = [
  {
    name: 'Jane Doe',
    photo: 'person.png',
    description: 'a person',
  },
  {
    name: 'Doe Jane',
    photo: 'person.png',
    description: 'another person',
  },
  {
    name: 'Doe Doe',
    photo: 'person.png',
    description: 'another person',
  },
  // Add more members as needed
];

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
      <main >
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
          <div className="max-w-2xl xl:max-w-5xl">
            <h1 className="relative font-semibold text-4xl xl:text-6xl/tight tracking-tight mt-5">
            "Coding is fun you guys"
            </h1>
            <p className="max-w-[44rem] text-muted-foreground text-sm md:text-xl whitespace-pre-line mt-4 md:mt-6">
              DevX club is the best club at Lynbrook to start cool coding projects!
            </p>
            <div className="flex justify-between flex-col md:flex-row mt-12 gap-y-10">
              <div className="flex items-center text-center  space-x-3">
                <a className="flex-1 md:flex-none hover:bg-primary-foreground transition-colors duration-200 xl:text-lg font-medium ring-1 ring-gray-300 rounded-lg shadow py-3 xl:py-4 md:px-7" href="https://tally.so/r/3yxPX8">
                  Learn More
                </a>
                <a target="_blank" className="flex-1 md:flex-none relative bg-primary hover:bg-primary/90 text-white transition-colors duration-200 xl:text-lg font-medium ring-1 ring-gray-300 rounded-lg shadow py-3 xl:py-4 md:px-7" href="/sign-up">
                  Join Now
                </a>
              </div>
            </div>
          </div>

          {/* Responsive Image and Text Layout */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Image
                src="/prog1.png"
                alt="Example Image"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">What is DevX Club?</h2>
              <p className="text-lg text-gray-700 mb-4">
                {/* Wordware combines the best aspects of software with the power of natural language. Remove constraints of traditional no-code tools and empower every team member to iterate independently. */}
                DevX club is a project-based coding club....... blank blank blank blank blank blank blank blank blank blank blank blank blank blank blank blank blank blank blank 
              </p>
              <Button className="mt-4" href="/learn-more">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">

        <h2 className="text-5xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer/>
      
    </>
  );
}

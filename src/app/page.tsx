import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar'; // Adjust the path according to your project structure

import Footer from "@/components/Footer";

import TeamMemberCard from '@/components/TeamMemberCard';

import { IterationCcw } from 'lucide-react';
import { Apple } from 'lucide-react';



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
  {
    name: 'Doe Doe',
    photo: 'person.png',
    description: 'another person',
  },
  {
    name: 'Doe Doe',
    photo: 'person.png',
    description: 'another person',
  },
  {
    name: 'Doe Doe',
    photo: 'person.png',
    description: 'another person',
  },
  {
    name: 'Doe Doe',
    photo: 'person.png',
    description: 'another person',
  },
];

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
      <main className="bg-gray-900 text-white ">
      <section className="bg-gray-900 text-white max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20">
      {/* Left Content Block */}
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <a
          href="#"
          target="_blank"
          className="-mb-4 md:-mb-6 group"
          title="Explore our product"
        >
          {/* Optional: Replace with your logo or badge */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122 37"
            className="w-32 md:w-36 fill-white group-hover:fill-gray-300"
          >
            {/* SVG content here */}
          </svg>
        </a>
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight flex flex-col gap-3 items-center lg:items-start">
          <span className="relative">Build your projects</span>
          <span className="whitespace-nowrap relative">
            <span className="mr-3 sm:mr-4 md:mr-5">Faster,</span>
            <span className="relative whitespace-nowrap">
              <span className="absolute bg-gray-700 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
              <span className="relative text-cyan-300">together</span>
            </span>
          </span>
        </h1>
        <p className="text-lg text-gray-300 opacity-80 leading-relaxed">
        DevX club is the best club at Lynbrook to start cool coding projects!
        </p>
        <div className="space-y-4">
          <Button className="text-lg	 px-20 py-7 text-center btn-wide group bg-cyan-400 hover:bg-cyan-300 text-gray-900">
          <IterationCcw/> 
            Get Started
          </Button>

          <p className="text-sm md:text-base flex justify-center items-center gap-2 md:text-sm text-gray-300">
            <svg
              className="w-5 h-5 fill-yellow-400 animate-pulse"
              viewBox="0 0 161 154"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG content */}
            </svg>
          </p>
          <div className="text-base text-gray-300">
              <span className="font-semibold text-white"></span> Beginner-Experienced are all welcome
            </div>
        </div>
        
      </div>

      {/* Right Image Block */}
      <div className="relative max-md:-m-4 lg:w-full">
        <Image
          alt="Feature Image"
          src="/placeholderthing.png"
          width={1080}
          height={1080}
          className="w-full max-w-xl ml-auto"
        />
      </div>
    </section>


    {/* heres a section???  */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16  bg-gradient-to-t from-blue-600 to-blue-900 rounded-lg	">
          <div className="max-w-2xl xl:max-w-5xl">
            <h1 className="relative font-semibold text-4xl xl:text-6xl/tight tracking-tight mt-5">
            What is DevX??? 
            </h1>
            <p className="text-white max-w-[44rem] text-muted-foreground text-sm md:text-xl whitespace-pre-line mt-4 md:mt-6">
              DevX club is the best club at Lynbrook to start cool coding projects!
            </p>
            <div className="flex justify-between flex-col md:flex-row mt-12 gap-y-10">
              <div className="flex items-center text-center  space-x-3">
              <Button className="space-x-2 text-lg	 px-20 py-7 text-center btn-wide group bg-cyan-100 hover:bg-cyan-50 text-gray-900">
          <IterationCcw/> 
            Get Started
          </Button>
          <Button className="space-x-2 text-lg px-20 py-7 text-center btn-wide group bg-cyan-100 hover:bg-cyan-50 text-gray-900">
          <Apple/> 
            Learn More
          </Button>
              </div>
            </div>
          </div>

          
          {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
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
                DevX club is a project-based coding club....... blank blank blank blank blank blank blank blank blank blank blank blank blank blank blank blank blank blank blank 
              </p>
              <Button className="mt-4" href="/learn-more">
                Learn More
              </Button>
            </div>
          </div> */}
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

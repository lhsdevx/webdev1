import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar"; // Adjust the path according to your project structure

import Footer from "@/components/Footer";

import TeamMemberCard from "@/components/TeamMemberCard";

import { IterationCcw } from "lucide-react";
import { Apple } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const teamMembers = [
  {
    name: "Snehil Kakani",
    photo: "/snehil.jpeg",
    description: "coder, producer, actor",
    position: "president",
  },
  {
    name: "Abhiram Bhavaraju",
    photo: "/abhiram.jpg",
    description: "magician",
    position: "vice president",
  },
  {
    name: "Tanay Ubale",
    photo: "/tanay.jpg",
    description: "water polo",
    position: "vice president",
  },
  {
    name: "Rohan Fernandes",
    photo: "/rohan.jpeg",
    description: "bball 4 life",
    position: "head of frontend",
  },
  {
    name: "Anping Huang",
    photo: "/anping.jpg",
    description: "code + design",
    position: "head of frontend",
  },
  {
    name: "Woojin Yoon",
    photo: "/woojin.jpg",
    description: "instant ramen",
    position: "head of backend",
  },
  {
    name: "Aarush Tiwari",
    photo: "/aarush.png",
    description: "it's a me, baba t",
    position: "public relations",
  },
];

const programming = [
  { src: "/html.png", alt: "Logo 1" },
  { src: "/javascript-logo.png", alt: "Logo 2" },
  { src: "/svelte.png", alt: "Logo 3" },
  { src: "/typescript.png", alt: "Logo 4" },
  { src: "/css.png", alt: "Logo 4" },
  { src: "/flask.png", alt: "Logo 4" },
  { src: "/react.png", alt: "Logo 4" },
  // Add more logos as needed
];

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="bg-black text-white">
        <section className="bg-black text-white max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-5 lg:items-start px-8 py-8 lg:py-20">
          {/* Left Content Block */}
          <div className="flex flex-col gap-5 lg:gap-8 items-center justify-center text-center lg:text-left lg:items-start">
            <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight flex flex-col gap-2 items-center lg:items-start">
              <span className="relative whitespace-nowrap">
                Build your passion projects
              </span>
              <span className="whitespace-nowrap relative">
                <span className="mr-0 sm:mr-1 md:mr-2">faster,</span>
                <span className="relative whitespace-nowrap">
                  <span className="absolute bg-black -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
                  {/* <span className="relative text-cyan-300">together</span> */}
                  <span className="relative bg-gradient-to-r from-cyan-300 to-sky-600 bg-clip-text text-transparent">
                    together.
                  </span>
                </span>
              </span>
            </h1>
            <div className="flex-col flex gap-2">
              <p className="text-lg text-gray-300 opacity-80 leading-relaxed">
                The only club at Lynbrook focused on project portfolio and
                resume building.
                <br />
                <span className="text-cyan-300">No experience required.</span>
              </p>
              <p className="text-2xl text-gray-300 opacity-80 leading-relaxed">
                <span className="font-bold">Tuesday Lunches, Room 608</span>
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfpuMjTimum3c3g8Cx0Va6CW-676ywDxlgS41aK4qTSO6ZUXQ/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="text-lg px-20 py-7 text-center btn-wide group bg-cyan-400 hover:bg-cyan-300 flex gap-2 items-center justify-center text-gray-900">
                  <IterationCcw />
                  Get Started
                </Button>
              </a>
            </div>
          </div>

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
        <section
          id="philosophy"
          className="scroll-m-10 max-w-7xl mx-auto px-6 md:px-8 py-16 bg-gradient-to-t from-blue-600 to-blue-900 rounded-none"
        >
          <h2 className="text-white text-center text-xl mb-1 uppercase">
            Core Philosophy
          </h2>
          <h1 className="text-6xl font-bold text-center pb-5 mb-5 bg-gradient-to-r from-indigo-100 to-cyan-300 bg-clip-text text-transparent">
            Learning By Doing
          </h1>
          <div className="grid grid-cols-8 gap-5">
            <p className="col-span-5 text-white text-muted-foreground text-sm md:text-lg whitespace-pre-line py-16">
              {
                "From learning important concepts to building powerful projects, everything we do is hands-on. We teach the basics of web development, mobile development, and more, and let members develop their skills by completing real-world projects. The unique approach we bring to teaching computer science and software development has empowered our members to build amazing and meaningful projects that contribute to the community."
              }
            </p>
            <div className="col-span-3 relative">
              <Image
                src="/teaching.jpg"
                alt="Teaching Image"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="team"
          className="scroll-m-10 my-5 max-w-7xl mx-auto px-6 md:px-8 py-16"
        >
          <h2 className="text-6xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-300 to-sky-600 bg-clip-text text-transparent">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </section>
        {/* heres a section???  */}
        <section
          id="projects"
          className="scroll-m-28 my-14 max-w-7xl mx-auto px-6 md:px-8 py-16w"
        >
          <h2 className="text-6xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-300 to-sky-600 bg-clip-text text-transparent">
            What We{"'"}ve Built
          </h2>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-cyan-100 font-semibold text-center text-4xl">
                Coding Contest
              </h1>
              <Image
                src="/proco.jpg"
                width={300}
                height={150}
                className="w-full h-full rounded-xl"
                alt="Proco Contest"
              ></Image>
            </div>
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-cyan-100 font-semibold text-center text-4xl">
                Club Websites
              </h1>
              <Image
                src="/clubwebsites.png"
                width={300}
                height={150}
                className="w-full h-full rounded-xl"
                alt="Proco Contest"
              ></Image>
            </div>
          </div>
        </section>
        {/* heres a section???  */}
        <section className="my-14 max-w-7xl mx-auto px-6 md:px-8 py-16">
          <h1 className="text-5xl font-bold text-center mb-12">
            TECHNOLOGIES WE USE
          </h1>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <img
                  src="javascript-logo.png"
                  alt="Javascript Logo"
                  className="w-20 h-20"
                />
                <h1 className="mt-4 text-center">Javascript</h1>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="typescript.png"
                  alt="Typescript Logo"
                  className="w-20 h-20"
                />
                <h1 className="mt-4 text-center">Typescript</h1>
              </div>
              <div className="flex flex-col items-center">
                <img src="html.png" alt="HTML5 Logo" className="w-20 h-20" />
                <h1 className="mt-4 text-center">HTML5</h1>
              </div>
              <div className="flex flex-col items-center">
                <img src="css.png" alt="CSS3 Logo" className="w-20 h-20" />
                <h1 className="mt-4 text-center">CSS3</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 max-w-7xl mx-auto px-6 md:px-8 py-16w">
          <h2 className="text-6xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-300 to-sky-600 bg-clip-text text-transparent">
            Contact Us!
          </h2>
          <div className="">
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

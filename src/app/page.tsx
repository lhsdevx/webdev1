import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar"; // Adjust the path according to your project structure

import Footer from "@/components/Footer";

import TeamMemberCard from "@/components/TeamMemberCard";

import { IterationCcw } from "lucide-react";
import { Apple } from "lucide-react";

import Image from "next/image";

const teamMembers = [
  {
    name: "Jane Doe",
    photo: "meme.jpg",
    description: "a person",
    position: "hello world",
  },
  {
    name: "Doe Jane",
    photo: "meme.jpg",
    description: "another person",
    position: "hello world",
  },
  {
    name: "Doe Doe",
    photo: "meme.jpg",
    description: "another person",
    position: "hello world",
  },
  // Add more members as needed
  {
    name: "Doe Doe",
    photo: "meme.jpg",
    description: "another person",
    position: "hello world",
  },
  {
    name: "Doe Doe",
    photo: "meme.jpg",
    description: "another person",
    position: "hello world",
  },
  {
    name: "Doe Doe",
    photo: "meme.jpg",
    description: "another person",
    position: "hello world",
  },
  {
    name: "Doe Doe",
    photo: "meme.jpg",
    description: "another person",
    position: "hello world",
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
      <main className="bg-black text-white ">
        <section className="bg-black text-white max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20">
          {/* Left Content Block */}
          <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
            <a
              href="#"
              target="_blank"
              className="-mb-4 md:-mb-6 group"
              title="Explore our product"
            >
              {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122 37"
            className="w-32 md:w-36 fill-white group-hover:fill-gray-300"
          >
            {/* SVG content here */}
              {/*</svg> */}
            </a>
            <h1 className="font-extrabold text-3xl lg:text-6xl tracking-tight flex flex-col gap-3 items-center lg:items-start">
              <span className="relative">
                The only club at Lynbrook focused on{" "}
              </span>
              <span className="whitespace-nowrap relative">
                <span className="relative whitespace-nowrap">
                  <span className="relative bg-gray-700 px-2 text-cyan-300">
                    Passion Project Development!
                  </span>
                </span>
              </span>
            </h1>
            <p className="text-lg text-gray-300 opacity-80 leading-relaxed">
              DevX club is the best club at Lynbrook to start cool coding
              projects!
            </p>
            <p className="text-2xl text-gray-300 opacity-80 leading-relaxed">
              We meet{" "}
              <span className="font-bold">
                Tuesday Lunches in Room 608 (CS Room)
              </span>
            </p>
            <div className="space-y-4">
              <Button className="text-lg	 px-20 py-7 text-center btn-wide group bg-cyan-400 hover:bg-cyan-300 text-gray-900">
                <IterationCcw />
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
                <span className="font-semibold text-white"></span>{" "}
                Beginner-Experienced are all welcome
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
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16  bg-gradient-to-t from-blue-600 to-blue-900 rounded-lg	flex flex-row">
          <div className="max-w-2xl xl:max-w-5xl">
            <h1 className="relative font-semibold text-4xl xl:text-6xl/tight tracking-tight mt-5 uppercase">
              Learning by Doing
            </h1>
            <div>
              <p className="text-white max-w-[44rem] text-muted-foreground text-sm md:text-xl whitespace-pre-line mt-4 md:mt-6">
                DevX club is the best club at Lynbrook to start cool coding
                projects!
              </p>
              <div className="flex justify-between flex-col md:flex-row mt-12 gap-y-10">
                <div className="flex items-center text-center  space-x-3">
                  <Button className="space-x-2 text-lg	 px-20 py-7 text-center btn-wide group bg-cyan-100 hover:bg-cyan-50 text-gray-900">
                    <IterationCcw />
                    Get Started
                  </Button>
                  <Button className="space-x-2 text-lg px-20 py-7 text-center btn-wide group bg-cyan-100 hover:bg-cyan-50 text-gray-900">
                    <Apple />
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            <div className="mx-8">
              <Image
                src="/prog1.png"
                alt="Example Image"
                width={300}
                height={150}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="my-14 max-w-7xl mx-auto px-6 md:px-8 py-16">
          <h2 className="text-7xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-300 to-sky-600 bg-clip-text text-transparent">
            our team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </section>
        {/* heres a section???  */}
        <section className="my-14 max-w-7xl mx-auto px-6 md:px-8 py-16w">
          <h1 className="text-5xl font-bold text-center mb-12">GET INVOLVED</h1>
          <div className="">
            <p className="text-white max-w-[44rem] font-semibold text-muted-foreground text-sm md:text-xl whitespace-pre-line mt-4 md:mt-6">
              Contact us here:
            </p>
            <div className="flex justify-around flex-col md:flex-row mt-12 gap-y-10">
              <div>
                <img src="" />
                <h1>YouTube</h1>
              </div>
              <div>
                <img src="" />
                <h1>GitHub</h1>
              </div>
              <div>
                <img src="" />
                <h1>Discord</h1>
              </div>
            </div>
          </div>
        </section>
        {/* heres a section???  */}
        <section className="my-14 max-w-7xl mx-auto px-6 md:px-8 py-16w">
          <h1 className="text-5xl font-bold text-center mb-12">
            TECHNOLOGIES WE USE
          </h1>
          <div className="">
            <p className="text-white max-w-[44rem] text-muted-foreground text-sm font-semibold md:text-xl whitespace-pre-line mt-4 md:mt-6">
              Technologies:
            </p>
            <div className="flex justify-around flex-col md:flex-row mt-12 gap-y-10">
              <div>
                <img src="" />
                <h1>Javascript</h1>
              </div>
              <div>
                <img src="" />
                <h1>Typescript</h1>
              </div>
              <div>
                <img src="" />
                <h1>HTML5</h1>
              </div>
              <div>
                <img src="" />
                <h1>CSS3</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-14 max-w-7xl mx-auto px-6 md:px-8 py-16w">
          <h1 className="text-5xl font-bold text-center mb-12">Contact Us:</h1>
          <div className="">
            <form className="flex flex-col space-y-4">
              <input
                className="rounded-lg py-3 px-5"
                type="text"
                placeholder="Email..."
              />
              <input
                className="rounded-lg py-8 px-5"
                type="textarea"
                placeholder="Question..."
              />
              <button className="px-5 py-2 rounded-lg text-xl bg-gray-700">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

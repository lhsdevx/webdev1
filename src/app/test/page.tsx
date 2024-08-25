import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
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
          <span className="relative">Launch your project</span>
          <span className="whitespace-nowrap relative">
            <span className="mr-3 sm:mr-4 md:mr-5">in days,</span>
            <span className="relative whitespace-nowrap">
              <span className="absolute bg-gray-700 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
              <span className="relative text-yellow-400">not weeks</span>
            </span>
          </span>
        </h1>
        <p className="text-lg text-gray-300 opacity-80 leading-relaxed">
          The ultimate toolkit to build and launch your SaaS or AI-powered app fast.
        </p>
        <div className="space-y-4">
          <Button className="text-center btn-wide group bg-yellow-500 hover:bg-yellow-400 text-gray-900">
            <svg
              className="w-5 h-5 fill-gray-900 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out"
              viewBox="0 0 375 509"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG content */}
            </svg>
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
              <span className="font-semibold text-white">5000+</span> makers ship faster
            </div>
        </div>
        
      </div>

      {/* Right Image Block */}
      <div className="relative max-md:-m-4 lg:w-full">
        <Image
          alt="Feature Image"
          src="/prog.png"
          width={1080}
          height={1080}
          className="w-full max-w-xl ml-auto"
        />
      </div>
    </section>
  );
}

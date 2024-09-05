"use client";

import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Instagram, MenuIcon } from "lucide-react";
import { Rocket } from "lucide-react";
import Link from "next/link";

function isMobile() {
  return true;
}


function MobileNavbar() {

  const [show, setShow] = React.useState(false);

  return (
    <header className="bg-[#111113] text-white w-full py-3 sticky top-0 z-50">
      <nav className="flex-col w-screen flex justify-between px-6 md:px-8 py-4.5">
        <div className="space-between flex flex-row">
          <a className="block mr-auto relative w-[125px] h-[44px] " href="/">
            <Image src="/devxlogoblue.png" alt="my logo" layout="fill" />
          </a>
          <button className="ml-auto" onClick={() => setShow(s => !s)}>
            <MenuIcon className="text-xl" />
          </button>
        </div>
        {show && (
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="py-2" />
              <a className="text-xl text-white py-1" href="#philosophy">Our Philosophy</a>
              <a className="text-xl text-white py-1" href="#team">Officer Team</a>
              <a className="text-xl text-white py-1" href="#projects">What We&apos;ve Built</a>
              <div className="py-2" />
            </div>
            <a
                href="https: docs.google.com/forms/d/e/1FAIpQLSfpuMjTimum3c3g8Cx0Va6CW-676ywDxlgS41aK4qTSO6ZUXQ/viewform?usp=sf_link"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button className="space-x-2 ring-1 ring-primary rounded-lg duration-300 shadow-sm py-6 px-7 btn-wide group bg-indigo-600 hover:bg-indigo-500	 text-white text-lg">
                  <span>
                    <Rocket></Rocket>
                  </span>
                  <span>JOIN US!</span>
                </Button>
            </a>
            <div className="py-2" />
            <div className="flex flex-col">
              <span className="font-semibold text-xl">Contact Us:</span> 
              <div className="flex py-2 space-x-4 flex-row">
              <a
                href="https://github.com/lhsdevx"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button className="ring-1 ring-primary rounded-xl duration-300 shadow-sm py-6 px-3 btn-wide group border border-indigo-500 text-indigo-500 text-lg">
                  <span>
                    <Github></Github>
                  </span>
                </Button>
              </a>
              <a
                href="https://discord.gg/smQk9XVN3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="ring-1 ring-primary rounded-xl duration-300 shadow-sm py-6 px-3 btn-wide group border border-indigo-500 text-indigo-500 text-lg">
                  <span>
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Discord</title>
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                    </svg>
                  </span>
                </Button>
              </a>
              <a
                href="https://instagram.com/lynbrookdevx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="ring-1 ring-primary rounded-xl duration-300 shadow-sm py-6 px-3 btn-wide group border border-indigo-500 text-indigo-500 text-lg">
                  <span>
                    <Instagram></Instagram>
                  </span>
                </Button>
              </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

function DesktopNavbar() {
  return (
    <header className="bg-[#111113] text-white w-full py-3 sticky top-0 z-50 lg:py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4.5">
        <a className="block relative w-[125px] h-[44px] " href="/">
          <Image src="/devxlogoblue.png" alt="my logo" layout="fill" />
        </a>
        <div className="flex items-center font-medium space-x-11">
          <div className="flex items-center gap-6">
            <a href="#philosophy">Our Philosophy</a>
            <a href="#team">Officer Team</a>
            <a href="#projects">What We&apos;ve Built</a>
            <div className="flex items-center gap-2">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfpuMjTimum3c3g8Cx0Va6CW-676ywDxlgS41aK4qTSO6ZUXQ/viewform?usp=sf_link"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button className="space-x-2 ring-1 ring-primary rounded-lg duration-300 shadow-sm py-6 px-7 btn-wide group bg-indigo-600 hover:bg-indigo-500	 text-white text-lg">
                  <span>
                    <Rocket></Rocket>
                  </span>
                  <span>Join Us</span>
                </Button>
              </a>
              <a
                href="https://github.com/lhsdevx"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button className="ring-1 ring-primary rounded-xl duration-300 shadow-sm py-6 px-3 btn-wide group border border-indigo-500 text-indigo-500 text-lg">
                  <span>
                    <Github></Github>
                  </span>
                </Button>
              </a>
              <a
                href="https://discord.gg/smQk9XVN3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="ring-1 ring-primary rounded-xl duration-300 shadow-sm py-6 px-3 btn-wide group border border-indigo-500 text-indigo-500 text-lg">
                  <span>
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Discord</title>
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                    </svg>
                  </span>
                </Button>
              </a>
              <a
                href="https://instagram.com/lynbrookdevx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="ring-1 ring-primary rounded-xl duration-300 shadow-sm py-6 px-3 btn-wide group border border-indigo-500 text-indigo-500 text-lg">
                  <span>
                    <Instagram></Instagram>
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

const Navbar = () => {
  return (
    <>
    <div className="block md:hidden">
      <MobileNavbar />
    </div>
    <div className="hidden md:block">
      <DesktopNavbar />
    </div>
    </>
  );
};

export default Navbar;

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Github } from 'lucide-react';
import { Rocket } from 'lucide-react';



const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white w-full py-3 lg:py-4">
  <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4.5">
    <a className="block relative w-[125px] h-[44px] " href="/">
      <Image src="/devxlogoblue.png" alt="my logo" layout="fill"
      />
    </a>
    <div className="hidden lg:flex items-center font-medium space-x-11">
      <div className="flex items-center space-x-8">
        <a
          href="/explore"
        >
          Explore
        </a>
        <a
          href="/about-us"
        >
          About Us
        </a>
        <a
          href="/get-involved"
        >
          Get Involved
        </a>
      </div>
      <div className="flex items-center space-x-3">
        <Button className=" space-x-2 ring-1 ring-primary rounded-lg duration-300 shadow-sm py-6 px-7 btn-wide group bg-indigo-600 hover:bg-indigo-500 text-white text-lg">
        <span><Github></Github></span>
        <a
          target="_blank"
          href="https://github.com/lhswebdev?type=source"
        >
          Github
        </a>
        </Button>
        
        <Button className="space-x-2 ring-1 ring-primary rounded-lg duration-300 shadow-sm py-6 px-7 btn-wide group bg-indigo-600 hover:bg-indigo-500	 text-white text-lg">
        <span><Rocket></Rocket></span>
        <a
          target="_blank"
          href="https://github.com/lhswebdev?type=source"
        >
          Join Us
        </a>
        </Button>
      </div>
    </div>
  </nav>
</header>

  );
};

export default Navbar;

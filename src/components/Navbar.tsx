import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="bg-white w-full sticky top-0 left-0 border-b border-gray-200 z-[99] py-3 lg:py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4.5">
        <a className="block relative h-7 w-40 lg:w-48" href="/">
          <Image src="/logo-black.png" alt="Wordware logo" layout="fill" />
        </a>
        <div className="hidden lg:flex items-center font-medium space-x-11">
          <div className="flex items-center space-x-8">
            <a
              className="text-wordware-black hover:text-gray-900 transition-colors duration-300"
              href="/explore"
            >
              Explore
            </a>
            <a
              className="text-wordware-black hover:text-gray-900 transition-colors duration-300"
              href="/about-us"
            >
              About Us
            </a>
            <a
              className="text-wordware-black hover:text-gray-900 transition-colors duration-300"
              href="/get-involved"
            >
              Get Involved
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a
              target="_blank"
              className="hover:bg-black hover:text-white ring-1 ring-primary rounded-lg transition-colors duration-300 shadow-sm py-2.5 px-5"
              href="https://github.com/lhswebdev?type=source"
            >
              Github
            </a>
            <a
              target="_blank"
              className="bg-primary hover:bg-primary/90 text-white ring-1 ring-primary rounded-lg transition-colors duration-300 py-2.5 px-5"
              href="mailto:lynbrookwebdevclub@gmail.com"
            >
              Join Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

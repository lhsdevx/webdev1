import Image from 'next/image';

const Footer = () => {
    return (

        <footer className="bg-primary py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="relative max-w-48 h-7 mx-auto">
            <Image src="/logo-white.png" alt="Wordware logo white" layout="fill" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center text-gray-200 font-medium gap-8 mt-12 lg:mt-8">
            <a target="_blank" href="https://discord.gg/hQkDk87vjJ">Join Discord</a>
            <a target="_blank" href="mailto:lynbrookwebdevclub@gmail.com">Email Us</a>
            <a target="_blank" href="https://github.com/lhsdevx">Github</a>
          </div>
          <hr className="border-[#475467] mt-10 lg:mt-16" />
          <div className="md:flex items-center justify-between text-center md:text-left mt-8">
            <p className="text-gray-400 text-sm/7 lg:text-base mt-5 md:mt-0">
              Copyright © DevX Club 2024
            </p>
          </div>
        </div>
      </footer>

    );
};


export default Footer;
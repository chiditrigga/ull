import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#F9F9F9] py-6 px-6 lg:px-20">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <img src={Logo} width={70} alt="Logo" />
        </span>
      </div>
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow text-[#212121] font-medium">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            About
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            SIP
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0">
            Studio
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            SEEQ
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0">
            Platform
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            Initiatives
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0">
            More
          </a>
        </div>
        <div>
          <a href="#" className="inline-block text-sm px-5 py-3 leading-none border text-white border-white hover:border-transparent hover:text-teal-500 bg-[#20888F] font-semibold hover:bg-white mt-4 lg:mt-0 rounded-3xl mr-4">
            SINC With Us
          </a>
          <a href="#" className="inline-block text-sm px-5 py-3 leading-none border text-white border-white hover:border-transparent hover:text-teal-500 bg-[#303030] font-semibold hover:bg-white mt-4 lg:mt-0 rounded-3xl">
            Apply to SIP 1.0
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

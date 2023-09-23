"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav className="w-[95%] mx-auto p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href={'/'}>
            <div className="navlinks">Government College Danyore</div>
        </Link>
        
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black">
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 7h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`hidden md:flex md:items-center md:justify-center gap-4`}
      >
        <Link href="#" className="navlinks hover:text-gray-600">
            Home
        </Link>
        <Link href="#" className="navlinks hover:text-gray-600">
            Campus
        </Link>
        <Link href="/admission" className="navlinks hover:text-gray-600">
            Admission
        </Link>
        <Link href="#" className="navlinks hover:text-gray-600">
            Faculty
        </Link>
        <Link href="#" className="navlinks hover:text-gray-600 border py-2 px-3">
            Learn More
        </Link>
        
      </div>
    </nav>

    <div
        className={`flex bg-gray-200 px-10 py-5 rounded-md items-start justify-center flex-col gap-3 absolute right-5 top-15 z-10 ${isMenuOpen? 'hidden':'block'} md:hidden `}
      >
        <Link href="#" className="navlinks hover:text-gray-600">
            Home
        </Link>
        <Link href="#" className="navlinks hover:text-gray-600">
            Campus
        </Link>
        <Link href="#" className="navlinks hover:text-gray-600">
            Admission
        </Link>
        <Link href="#" className="navlinks hover:text-gray-600">
            Faculty
        </Link>
        <Link href="#" className="navlinks hover:text-gray-600">
            Learn More
        </Link>
        
      </div>
    </>
  );
};

export default Navbar;
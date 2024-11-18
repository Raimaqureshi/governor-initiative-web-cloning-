"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      
      <header className="bg-custom-blue p-6 text-white relative z-10">
        <div className="flex justify-between items-center px-2 shadow-xl">
         
          <div className="absolute top-1/2 left-0 transform p-6 -translate-y-1/4 z-10">
            <Link href="/">
              <Image
                src="https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png"
                alt="Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Link>
          </div>

          <p className="text-center text-blue-200 font-bold mx-auto text-sm sm:text-base lg:text-lg">
            <span className="md:hidden">Tuition Free Program</span>
            <span className="hidden md:inline">
              Tuition Free Education Program on Latest Technologies
            </span>
          </p>

          <ul className="hidden sm:flex items-center gap-6 sm:gap-4 md:gap-7 lg:gap-5 xl:gap-8 text-sm sm:text-base md:text-lg lg:text-base ml-2">
            <li>
              <Link className="hover:text-gray-500" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200" href="/Apply">
                Apply
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" href="/Jobs">
                Jobs
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" href="/Results">
                Results
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-gray-200"
              >
                Courses
              </button>

              {isDropdownOpen && (
                <div className="absolute bg-white text-black text-xs shadow-md rounded mt-2 w-64 z-20 right-0">
                  <ul className="p-2 space-y-2">
                    <li className="font-extrabold text-lg px-2 py-1">
                      Core Courses
                    </li>
                    <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                      Programming Fundamentals
                    </li>
                    <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                      Web2 Using NextJS
                    </li>
                    <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                      Earn as You Learn
                    </li>
                    <hr />
                    <li className="font-extrabold text-lg px-2 py-1">
                      Advanced Courses
                    </li>
                    <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                      Web 3 and Metaverse
                    </li>
                    <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                      Cloud-Native Computing
                    </li>
                    <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                      Artificial Intelligence (AI) and Deep Learning
                    </li>
                    <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                      Ambient Computing and IoT
                    </li>
                    <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                      Genomics and Bioinformatics
                    </li>
                    <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                      Network Programmability and Automation
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>

          <button
            className="block sm:hidden p-2 text-white hover:text-gray-200 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden bg-white text-black shadow-md rounded mt-2 p-4 space-y-4">
            <Link className="block hover:text-gray-500" href="/">
              Home
            </Link>
            <Link className="block hover:text-gray-500" href="/Apply">
              Apply
            </Link>
            <Link className="block hover:text-gray-500" href="/Jobs">
              Jobs
            </Link>
            <Link className="block hover:text-gray-500" href="/Results">
              Results
            </Link>
            <div>
              <p className="font-bold text-lg">Courses</p>
              <ul className="space-y-2 mt-2">
                <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                  Programming Fundamentals
                </li>
                <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                  Web2 Using NextJS
                </li>
                <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                  Earn as You Learn
                </li>
                <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                  Web 3 and Metaverse
                </li>
                <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                  Cloud-Native Computing
                </li>
                <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">
                  Artificial Intelligence
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

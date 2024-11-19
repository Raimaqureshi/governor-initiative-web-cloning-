"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">

      <header className="bg-custom-blue text-white p-4 fixed top-0 left-0 w-full z-20">
        <div className="flex justify-between items-center">

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

          <div className="flex-1 text-center">
            <p className="text-center text-blue-200 font-bold mx-auto text-sm sm:text-lg lg:text-lg max-w-xs sm:max-w-md lg:max-w-lg">
              <span className="md:hidden">Tuition Free Program</span>
              <span className="hidden md:inline-block">
                Tuition Free Education Program on Latest Technologies
              </span>
            </p>
          </div>


          <div className="flex-shrink-0">

            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link href="/apply" className="hover:text-gray-300">
                Apply
              </Link>
              <Link href="/jobs" className="hover:text-gray-300">
                Jobs
              </Link>
              <Link href="/results" className="hover:text-gray-300">
                Results
              </Link>
              <Link href="/courses" className="hover:text-gray-300">
                Courses
              </Link>
            </nav>

            <button
              className="md:hidden p-2 text-white hover:text-gray-300 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-custom-blue text-white flex flex-col z-20 md:hidden">

          <button
            className="absolute top-4 right-6 p-2 text-white hover:text-gray-300 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="space-y-6 text-center text-lg font-bold mt-16">
            <li>
              <Link
                href="/"
                className="hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/apply"
                className="hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply
              </Link>
            </li>
            <li>
              <Link
                href="/jobs"
                className="hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                href="/results"
                className="hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Results
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

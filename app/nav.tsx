"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Logo from "@/public/Images/Logo.svg";
import Image from "next/image";
import Dropdown from "./components/dropdown";
import { Button } from "./components/button";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure
      as="nav"
      className="bg-white decoration-slate-200 shadow-slate-250 shadow-sm py-2 fixed w-full z-50"
    >
      <div className="px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[6rem]">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex gap-[3rem] items-center">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                <Image src={Logo} alt="VirtuDigiTech" height={70} />
              </Link>
            </div>
          </div>

          {/* BUTTON */}
          <div className="hidden lg:block md:hidden sm:hidden">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex items-center gap-[2rem]">
                <Link
                  href="/WhyVirtudigitech"
                  className="decoration-slate-950 text-[14px] font-medium green"
                >
                  Why VirtuDigiTech
                </Link>
                <Dropdown />

                <Link
                  href="/articles"
                  className="decoration-slate-950 text-[14px] font-medium green"
                >
                  Blog Articles
                </Link>
                <Link
                  href="/about"
                  className="decoration-slate-950 text-[14px] font-medium green"
                >
                  About Us
                </Link>
                <Link href="/contact">
                  <Button background="dark" width="">
                    Get in touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          <div className="block lg:hidden md:block sm:block">
            <button onClick={() => setIsOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-9"
                color="#036666"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div>
        <div
          className={`absolute top-0 ${
            isOpen ? "right-0" : "right-[-100rem]"
          } bg-white border py-[1rem] rounded-xl shadow-sm w-full transition-all duration-300 h-screen`}
        >
          <div className="flex items-center justify-between px-[1rem]">
            <div>
              <Image src={Logo} alt="Logo" height={70} />
            </div>

            <button onClick={() => setIsOpen(false)}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 green"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </button>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <div className="grid items-center justify-center w-full">
              <ul className="grid gap-[2rem]">
                <li
                  className="text-center text-2xl font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/WhyVirtudigitech">Why VirtuDigiTech</Link>
                </li>
                <li
                  className="text-center text-2xl font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/">Solutions</Link>
                </li>
                <li
                  className="text-center text-2xl font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/articles">Blog Articles</Link>
                </li>
                <li
                  className="text-center text-2xl font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/about">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}

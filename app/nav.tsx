"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Logo from "@/public/Images/Logo.svg";
import Image from "next/image";
import Dropdown from "./components/dropdown";
import { Button } from "./components/button";

export default function Nav() {
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
                <Image src={Logo} alt="VirtuDigiTech" height={80} />
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
          </div>
        </div>
      </div>
    </Disclosure>
  );
}

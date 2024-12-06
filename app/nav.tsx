"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Logo from "@/public/Images/Logo.svg";
import Image from "next/image";
import { Button } from "./components/button";
import { useState } from "react";
import Footer_Logo from "../public/Images/Footer_Logo.svg";
import { Solutions } from "./components/navMenu";
import { navigationMenuTriggerStyle } from "./components/ui/navigation-menu";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);

  const solutionToggle = () => {
    setIsSolutionOpen(!isSolutionOpen);
  };

  const solution = [
    {
      id: 1,
      title: "Web Development",
    },
    {
      id: 2,
      title: "Virtual Solutions",
    },
    {
      id: 3,
      title: "App Development",
    },
    {
      id: 4,
      title: "Domain Management System",
    },
    {
      id: 5,
      title: "Automation Services",
    },
    {
      id: 6,
      title: "Server Setup And Configuration",
    },
  ];

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
              <div className="flex items-center gap-[1rem]">
                <Link
                  href="/WhyVirtudigitech"
                  className={`decoration-slate-950 text-[14px] font-medium green ${navigationMenuTriggerStyle()}`}
                >
                  Why VirtuDigiTech
                </Link>
                <Link href="/">
                  <Solutions />
                </Link>
                <Link
                  href="/articles"
                  className={`decoration-slate-950 text-[14px] font-medium green ${navigationMenuTriggerStyle()}`}
                >
                  Blog Articles
                </Link>
                <Link
                  href="/about"
                  className={`decoration-slate-950 text-[14px] font-medium green ${navigationMenuTriggerStyle()}`}
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
          } bg-green py-[1rem] w-full transition-all duration-300 h-screen`}
        >
          <div className="flex items-center justify-between px-[1rem]">
            <div>
              <Image src={Footer_Logo} alt="Logo" height={80} />
            </div>

            <button onClick={() => setIsOpen(false)}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 text-white"
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

          <div className="mt-[4rem] w-full">
            <div className="grid px-[2rem] w-full">
              <ul className="grid gap-[1rem]">
                <li
                  className="text-start text-white  text-[18px] font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/WhyVirtudigitech">Why VirtuDigiTech</Link>
                </li>
                <li className="text-start text-white text-[20px] font-medium flex justify-between items-center">
                  <button onClick={solutionToggle}>
                    {isSolutionOpen ? "Solutions" : "Solutions"}
                  </button>
                  {!isSolutionOpen ? (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                    </span>
                  )}
                </li>
                {isSolutionOpen && (
                  <div className="pl-[1.4rem] pb-4">
                    <ul className="grid gap-[.7rem]">
                      {solution.map((solution) => {
                        return (
                          <li key={solution.id}>
                            <Link
                              href="/contact"
                              onClick={() => setIsOpen(false)}
                              className="text-white text-[14px] font-medium"
                            >
                              {solution.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                <li
                  className="text-start text-white text-[20px] font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/articles">Blog Articles</Link>
                </li>
                <li
                  className="text-start text-white text-[20px] font-medium"
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

"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Logo from "@/public/Images/Logo.svg";
import Image from "next/image";
import { Button } from "./components/button";
import { useState } from "react";
import Footer_Logo from "../public/Images/Footer_Logo.svg";
import LogoLight from "../public/Images/LogoLight.svg";
import { NavbarMenu } from "./components/navbarMenu";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const solutionToggle = () => {
    setIsSolutionOpen(!isSolutionOpen);
  };

  const resourcesToggle = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const solution = [
    {
      id: 1,
      title: "Web Development",
      link: "/",
    },
    {
      id: 2,
      title: "Email Solutions",
      link: "/",
    },
    {
      id: 3,
      title: "Campaign Management Services",
    },
    {
      id: 4,
      title: "Automation Services",
    },
  ];

  const resources = [
    {
      id: 2,
      title: "FAQs",
      link: "#FAQs",
    },
  ];
  return (
    <Disclosure
      as="nav"
      className="absolute decoration-slate-200 shadow-slate-250 py-2 w-full z-50"
    >
      <div className="px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[6rem]">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex gap-[3rem] items-center">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                <Image src={LogoLight} alt="VirtuDigiTech" height={55} />
              </Link>
            </div>
          </div>

          {/* BUTTON */}
          <div className="hidden lg:block md:hidden sm:hidden">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex items-center gap-[2.4rem]">
                <Link
                  href="#services"
                  className="text-[14px] text-white hover:text-black font-medium p-2 hover:bg-teal-100 transition-all rounded-lg"
                >
                  Services
                </Link>
                <Link
                  href="/"
                  className="text-[14px] text-white hover:text-black font-medium p-2 hover:bg-teal-100 transition-all rounded-lg"
                >
                  Portfolio
                </Link>
                <Link
                  href="/"
                  className={`text-white font-medium text-[15px] hover:bg-teal-100 hover:text-black transition-all rounded-lg p-2`}
                >
                  About Us
                </Link>

                <Link
                  href="https://calendly.com/admin-virtudigitech/30min"
                  target="_blank"
                >
                  <Button background="light" width="">
                    Book a call
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
            isOpen ? "right-0" : "right-[-340rem]"
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
                  className="text-start text-white  text-[17px] font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="#services" className="flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                      </svg>
                    </span>
                    Services
                  </Link>
                </li>
                <li className="text-start text-white text-[20px] font-medium flex justify-between items-center">
                  <button
                    onClick={solutionToggle}
                    className={`flex items-center justify-between gap-2 w-full ${
                      isSolutionOpen ? "dark-green" : "text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      Solutions
                    </div>

                    <div>
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
                    </div>
                  </button>
                </li>
                {isSolutionOpen && (
                  <div className="pl-[1.4rem] pb-4">
                    <ul className="grid gap-[.7rem]">
                      {solution.map((solution) => {
                        return (
                          <li key={solution.id}>
                            <Link
                              href={solution.link ?? ""}
                              onClick={() => setIsOpen(false)}
                              className="text-white text-[16px] font-medium"
                            >
                              {solution.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                <li className="text-start text-white text-[20px] font-medium">
                  <button
                    onClick={resourcesToggle}
                    className={`flex items-center justify-between w-full ${
                      isResourcesOpen ? "dark-green" : "text-white"
                    }`}
                  >
                    <div className="flex gap-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      Resources
                    </div>

                    <div>
                      {!isResourcesOpen ? (
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
                    </div>
                  </button>
                </li>
                {isResourcesOpen && (
                  <div className="pl-[1.4rem] pb-4">
                    <ul className="grid gap-[.7rem]">
                      {resources.map((resources) => {
                        return (
                          <li key={resources.id}>
                            <Link
                              href={resources.link ?? ""}
                              onClick={() => setIsOpen(false)}
                              className="text-white text-[16px] font-medium"
                            >
                              {resources.title}
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
                  <Link href="/about" className="flex items-center gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                        />
                      </svg>
                    </span>
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}

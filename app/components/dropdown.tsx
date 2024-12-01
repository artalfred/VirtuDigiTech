import { useState } from "react";
import { Menu, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative inline-block text-left"
    >
      <div className="flex items-center">
        <Link
          href="/"
          className="inline-flex w-full text-[14px] justify-center px-1 py-[2rem] font-medium green"
        >
          Solutions
        </Link>
        <span>
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 dark-green"
          />
        </span>
      </div>

      {isOpen && (
        <Menu>
          <div>
            <MenuItems
              transition
              static
              className="absolute mt-[-2px] bg-[#FBFBF6] w-[30rem] border-none outline-none right-[0rem] rounded-b-lg"
            >
              <div className="px-[1rem] py-[1rem]">
                <ul className="grid gap-[0rem]">
                  <li className="flex gap-[1rem]">
                    <Link href="/contact">
                      <div className="p-[1rem] hover:bg-slate-200 rounded-lg transition ease-in">
                        <h4 className="green font-semibold text-[18px]">
                          Website Design and Development
                        </h4>
                        <p className="text-[15px]">
                          Transform the way you work with our professional
                          virtual assistant
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li className="flex gap-[1rem]">
                    <Link href="/contact">
                      <div className="p-[1rem] hover:bg-slate-200 rounded-lg transition ease-in">
                        <h4 className="green font-semibold text-[18px]">
                          E-commerce Development
                        </h4>
                        <p className="text-[15px]">
                          Transform the way you work with our professional
                          virtual assistant
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li className="flex gap-[1rem]">
                    <Link href="/contact">
                      <div className="p-[1rem] hover:bg-slate-200 rounded-lg transition ease-in">
                        <h4 className="green font-semibold text-[18px]">
                          Virtual Assistant
                        </h4>
                        <p className="text-[15px]">
                          Transform the way you work with our professional
                          virtual assistant
                        </p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </MenuItems>
          </div>
        </Menu>
      )}
    </div>
  );
}

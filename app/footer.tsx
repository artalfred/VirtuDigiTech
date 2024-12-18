import React from "react";
import Image from "next/image";
import Logo from "@/public/Images/Logo.png";
import Link from "next/link";
import Facebook from "@/public/Images/Icons/facebook.png";
import Linkedin from "@/public/Images/Icons/linkedin.png";
import Container from "./components/container";

export const Footer = () => {
  return (
    <footer className="pt-[4rem] ashGray">
      <div className="px-[1rem] sm:px-[2rem] md:px-[2rem] lg:px-[6rem]">
        <div className="flex items-center gap-[4rem] pb-[1.5rem]">
          <div>
            <h5 className="font-medium text-sm]">Follow Us On</h5>
          </div>

          <div className="flex gap-[1.6rem]">
            <Image src={Facebook} alt="facebook" height={25} />
            <Image src={Linkedin} alt="linkedin" height={25} />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[2rem] border-t-2 py-[2rem]">
          <div className="lg:mt-[0rem] md:mt-[2rem] sm:mt-[1rem] mt-[0rem]">
            <h4 className="text-[16px] font-medium green lg:pb-[1.6rem] pb-[0rem]">
              Solutions
            </h4>
            <ul className="lg:mt-[0rem] md:mt-[1.8rem] sm:mt-[1rem] mt-[1rem] grid gap-3">
              <li>
                <Link href="/solutions/web-development" className="text-[15px]">
                  Web Development
                </Link>
              </li>

              <li>
                <Link
                  href="/solutions/virtual-solutions"
                  className="text-[15px]"
                >
                  Virtual Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/domain-management-services"
                  className="text-[15px]"
                >
                  Domain Management Services
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/automation-services"
                  className="text-[15px]"
                >
                  Automation Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:mt-[0rem] md:mt-[2rem] sm:mt-[1rem] mt-[0rem]">
            <h4 className="text-[16px] font-medium green lg:pb-[1.6rem] pb-[0rem]">
              VirtuDigiTech
            </h4>
            <ul className="lg:mt-[0rem] md:mt-[1.8rem] sm:mt-[1rem] mt-[1rem] grid gap-3">
              <li>
                <Link href="/" className="text-[15px]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/WhyVirtudigitech" className="text-[15px]">
                  Why VirtuDigiTech
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-[15px]">
                  Blog Articles
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[15px]">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:mt-[0rem] md:mt-[2rem] sm:mt-[1rem] mt-[0rem]">
            <h4 className="text-[16px] font-medium green lg:pb-[1.6rem] pb-[0rem]">
              Resources
            </h4>
            <ul className="lg:mt-[0rem] md:mt-[1.8rem] sm:mt-[1rem] mt-[1rem] grid gap-3">
              <li>
                <Link href="/" className="text-[15px]">
                  Blogs
                </Link>
              </li>

              <li>
                <Link href="/WhyVirtudigitech" className="text-[15px]">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-[15px]">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:mt-[0rem] md:mt-[2rem] sm:mt-[1rem] mt-[0rem]">
            <h4 className="text-[16px] font-medium green lg:pb-[1.6rem] pb-[0rem]">
              VirtuDigiTech
            </h4>
            <ul className="lg:mt-[0rem] md:mt-[1.8rem] sm:mt-[1rem] mt-[1rem] grid gap-3">
              <li>
                <Link href="/" className="text-[15px]">
                  hello@virtudigitech.com
                </Link>
              </li>

              <li>
                <Link href="/WhyVirtudigitech" className="text-[15px]">
                  support@virtudigitech.com
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-[15px]">
                  WhatsApp: +63 967 1348 488
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[15px]">
                  Taguig City, Philippines
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 py-2 lg:flex md:flex sm:grid grid items-center lg:justify-between md:justify-center sm:justify-center justify-center">
          <div className="lg:flex md:flex sm:grid grid justify-center items-center lg:gap-[3rem] gap-[0rem]">
            <Image src={Logo} alt="VirtuDigiTech" height={70} />

            <div className="lg:text-start md:text-start sm:text-center text-center py-3">
              <Link href="/" className="text-[14px]">
                Terms
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[14px] lg:text-start md:text-start sm:text-center text-center">
              © Copyright 2024 VirtuDigiTech - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

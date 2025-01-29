import React from "react";
import Image from "next/image";
import Logo from "@/public/Images/LogoLight.svg";
import Link from "next/link";
import Facebook from "@/public/Images/Icons/facebook.png";
import Linkedin from "@/public/Images/Icons/linkedin.png";
import Container from "./components/container";

export const Footer = () => {
  return (
    <footer className="pt-[4rem] hero border-t-2">
      <div className="px-[1rem] sm:px-[2rem] md:px-[2rem] lg:px-[6rem]">
        <div className="flex items-center gap-[4rem] pb-[1.5rem]">
          <div>
            <h5 className="font-medium text-sm] text-slate-200">
              Follow Us On
            </h5>
          </div>

          <div className="flex gap-[1.6rem]">
            <Link
              href="https://www.facebook.com/profile.php?id=61570831358110"
              target="_blank"
            >
              <Image src={Facebook} alt="facebook" height={25} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/virtudigitech-va/"
              target="_blank"
            >
              <Image src={Linkedin} alt="linkedin" height={25} />
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[2rem] py-[2rem]">
          <div className="lg:mt-[0rem] md:mt-[2rem] sm:mt-[1rem] mt-[0rem]">
            <h4 className="text-[16px] font-medium text-slate-200 lg:pb-[1.6rem] pb-[0rem]">
              Solutions
            </h4>
            <ul className="lg:mt-[0rem] md:mt-[1.8rem] sm:mt-[1rem] mt-[1rem] grid gap-3">
              <li>
                <Link
                  href="/solutions/web-development"
                  className="text-[15px] text-slate-200"
                >
                  Web Development
                </Link>
              </li>

              <li>
                <Link
                  href="/solutions/virtual-solutions"
                  className="text-[15px] text-slate-200"
                >
                  Email Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/domain-management-services"
                  className="text-[15px] text-slate-200"
                >
                  Campaign Management Services
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/automation-services"
                  className="text-[15px] text-slate-200"
                >
                  Automation Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:mt-[0rem] md:mt-[2rem] sm:mt-[1rem] mt-[0rem]">
            <h4 className="text-[16px] font-medium text-slate-200 lg:pb-[1.6rem] pb-[0rem]">
              VirtuDigiTech
            </h4>
            <ul className="lg:mt-[0rem] md:mt-[1.8rem] sm:mt-[1rem] mt-[1rem] grid gap-3">
              <li>
                <Link href="/" className="text-[15px] text-slate-200">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/WhyVirtudigitech"
                  className="text-[15px] text-slate-200"
                >
                  Why VirtuDigiTech
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-[15px] text-slate-200">
                  Blog Articles
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[15px] text-slate-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:mt-[0rem] md:mt-[2rem] sm:mt-[1rem] mt-[0rem]">
            <h4 className="text-[16px] font-medium text-slate-200 lg:pb-[1.6rem] pb-[0rem]">
              Resources
            </h4>
            <ul className="lg:mt-[0rem] md:mt-[1.8rem] sm:mt-[1rem] mt-[1rem] grid gap-3">
              <li>
                <Link href="/" className="text-[15px] text-slate-200">
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  href="/WhyVirtudigitech"
                  className="text-[15px] text-slate-200"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-[15px] text-slate-200">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:mt-[0rem] md:mt-[2rem] sm:mt-[1rem] mt-[0rem]">
            <h4 className="text-[16px] font-medium lg:pb-[1.6rem] pb-[0rem] text-slate-200">
              VirtuDigiTech
            </h4>
            <ul className="lg:mt-[0rem] md:mt-[1.8rem] sm:mt-[1rem] mt-[1rem] grid gap-3">
              <li>
                <span className="text-[15px] text-slate-200">
                  info@virtudigitech.com
                </span>
              </li>

              <li>
                <span className="text-[15px] text-slate-200">
                  support@virtudigitech.com
                </span>
              </li>
              <li>
                <span className="text-[15px] text-slate-200">
                  WhatsApp: +63 991 791 2427
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 py-4 lg:flex md:flex sm:grid grid items-center lg:justify-between md:justify-center sm:justify-center justify-center">
          <div className="lg:flex md:flex sm:grid grid justify-center items-center lg:gap-[3rem] gap-[0rem]">
            <Image src={Logo} alt="VirtuDigiTech" height={50} />

            <div className="lg:text-start md:text-start sm:text-center text-center py-3">
              <Link href="/" className="text-[14px] text-slate-200">
                Terms
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[14px] lg:text-start md:text-start sm:text-center text-center text-slate-200">
              © Copyright 2024 VirtuDigiTech - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

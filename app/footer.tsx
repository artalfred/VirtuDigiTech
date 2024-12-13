import React from "react";
import Image from "next/image";
import Logo from "@/public/Images/Logo.png";
import Link from "next/link";
import Facebook from "@/public/Images/Icons/facebook.png";
import Linkedin from "@/public/Images/Icons/linkedin.png";

export const Footer = () => {
  return (
    <footer className="py-[4rem] ashGray">
      <div className="px-[1rem] sm:px-[2rem] md:px-[2rem] lg:px-[6rem]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[2rem]">
          <div>
            <div className="flex shrink-0 items-center">
              <Image src={Logo} alt="VirtuDigiTech" height={80} />
            </div>

            <div className="mt-4">
              <h3 className="text-[18px] font-semibold green">About Us</h3>
              <p className="mt-2">
                Delivering top-notch web development and virtual assistant
                services to help businesses thrive in a digital-first world.
              </p>

              <div className="flex gap-[1rem] mt-6">
                <Image src={Facebook} alt="facebook" height={30} />
                <Image src={Linkedin} alt="linkedin" height={30} />
              </div>
            </div>
          </div>

          <div className="lg:mt-[2rem] md:mt-[2rem] sm:mt-[1rem] mt-[0rem] grid lg:justify-center md:justify-center sm:justify-start justify-start">
            <h4 className="text-[20px] font-semibold green">Quick Links</h4>
            <ul className="lg:mt-[2rem] md:mt-[1.8rem] sm:mt-[1rem] mt-[1rem] grid gap-[1rem]">
              <li className="text-[16px] font-medium">
                <Link href="/">Home</Link>
              </li>

              <li className="text-[16px] font-medium">
                <Link href="/WhyVirtudigitech">Why VirtuDigiTech</Link>
              </li>
              <li className="text-[16px] font-medium">
                <Link href="/articles">Blog Articles</Link>
              </li>
              <li className="text-[16px] font-medium">
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>

          <div className="lg:mt-[2rem] md:mt-[2rem] sm:mt-[1rem] mt-[0rem] grid lg:justify-end md:justify-center sm:justify-start justify-start">
            <h4 className="text-[20px] font-semibold green">Contact Us</h4>
            <ul className="lg:mt-[2rem] md:mt-[1.8rem] sm:mt-[1rem] mt-[1rem] grid gap-[1rem]">
              <li className="text-[16px] font-medium">
                <Link href="/">hello@virtudigitech.com</Link>
              </li>
              <li className="text-[16px] font-medium">
                <Link href="/">support@virtudigitech.com</Link>
              </li>
              <li className="text-[16px] font-medium">
                <Link href="/">+63 967 1348 488</Link>
              </li>
              <li className="text-[16px] font-medium">
                <Link href="/">Taguig City, Philippines</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

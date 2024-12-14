"use client";

import { Button } from "@/app/components/button";
import Container from "@/app/components/container";
import LeftTitle from "@/app/components/leftTitle";
import SectionTitle from "@/app/components/sectionTitle";
import TitlePages from "@/app/components/titlePages";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

import WebDev from "@/public/Images/Section/WebDev.jpg";
import { MovingCards } from "@/app/components/movingCards";

const WebDevelopment = () => {
  return (
    <div>
      <Container>
        <section className="WebDev px-[1rem] rounded-2xl mt-[6rem] py-[6rem] lg:h-[35rem] h-[35rem] flex items-center">
          <div>
            <div className="grid gap-[1rem]">
              <div className="flex justify-center">
                <TitlePages>
                  <span className="text-white">
                    Transform Your Digital Presence with Expert Web Development
                  </span>
                </TitlePages>
              </div>
              <div className="flex justify-center">
                <p className="text-white text-center lg:w-[70%] md:w-[80%] sm:w-[100%] w-[100%]">
                  At VirtuDigiTech, we create high-performance websites tailored
                  to your business needs. Whether you&apos;re starting from
                  scratch or looking to improve an existing site, we&apos;ve got
                  you covered with modern, user-friendly solutions that drive
                  results.
                </p>
              </div>

              <div className="flex justify-center mt-[1rem]">
                <Link href="/contact">
                  <Button background="light" width="">
                    Get Your Free Consultation Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:py-[4rem] py-[0rem]">
          <div className="grid items-center lg:gap-[4rem] md:gap-[3rem] sm:gap-[2rem] gap-[2rem] grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:mt-[4rem] md:mt-[3rem] sm:mt-[2rem] mt-[2rem]">
            <div className="grid gap-4 lg:mt-0 md:mt-0 sm:mt-[2rem] mt-[2rem]">
              <LeftTitle>
                Why Choose VirtuDigiTech for Web Development
              </LeftTitle>
              <h3 className="font-medium dark-green text-xl lg:text-start sm:text-center text-center">
                Affordable & High-Quality Solutions
              </h3>
              <p className="lg:text-start sm:text-center text-center">
                At VirtuDigiTech, we believe in providing top-tier web
                development services at prices that won't break the bank. We
                focus on delivering excellent results within your budget.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="green">
                    Cheaper than Other Companies
                  </AccordionTrigger>
                  <AccordionContent className="green">
                    Get the best value for your money with our cost-effective
                    solutions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="green">
                    Affordable
                  </AccordionTrigger>
                  <AccordionContent className="green">
                    We work within your budget while delivering high-quality
                    websites.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="green">
                    4 Months of Support After the Contract
                  </AccordionTrigger>
                  <AccordionContent className="green">
                    Enjoy peace of mind with 4 months of post-launch support.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="rounded-lg overflow-hidden">
              <Image
                src={WebDev}
                alt="Website Developer"
                className="w-full h-full z-auto"
              />
            </div>
          </div>
        </section>

        <section className="lg:py-[4rem] py-[4rem]">
          <div className="flex justify-center">
            <div className="grid gap-4">
              <SectionTitle>Advantages of Choosing VirtuDigiTech</SectionTitle>
              <div className="flex justify-center">
                <p className="text-center lg:w-[70%] md:w-[80%] sm:w-[100%] w-[100%]">
                  We provide comprehensive digital solutions to help businesses
                  thrive. From crafting stunning websites to providing reliable
                  virtual assistance, we&rsquo;re dedicated to helping you
                  achieve your goals.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 mt-[3rem]">
            <div className="grid gap-3 border rounded-xl p-[2rem] bg-green shadow-md">
              <div className="flex justify-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    className="size-20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <h1 className="text-center text-white text-xl font-medium">
                Custom-Tailored Web Solutions
              </h1>
              <p className="text-center text-white text-[14px]">
                We don&rsquo;t believe in one-size-fits-all. Our team works
                closely with you to design and develop websites that reflect
                your brand&rsquo;s unique identity, ensuring a personalized
                experience for every visitor.
              </p>
            </div>
            <div className="grid gap-3 border rounded-xl p-[2rem] bg-green shadow-md">
              <div className="flex justify-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    className="size-20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <h1 className="text-center text-white text-xl font-medium">
                Responsive Design for Every Device
              </h1>
              <p className="text-center text-white text-[14px]">
                Your website will look stunning and function seamlessly on any
                device. We prioritize responsive design to ensure your site
                performs well on smartphones, tablets, and desktops, reaching a
                wider audience effortlessly.
              </p>
            </div>
            <div className="grid gap-3 border rounded-xl p-[2rem] bg-green shadow-md">
              <div className="flex justify-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    className="size-20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <h1 className="text-center text-white text-xl font-medium">
                SEO-Optimized Websites
              </h1>
              <p className="text-center text-white text-[14px]">
                What’s a great website if no one sees it? Our development
                process includes SEO best practices to ensure your site ranks
                well on search engines, driving organic traffic and increasing
                visibility for your business.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-[3rem]">
            <Link href="/contact">
              <Button background="dark" width="">
                Request a Free Consultation
              </Button>
            </Link>
          </div>
        </section>
      </Container>

      <div>
        <MovingCards />
      </div>
    </div>
  );
};

export default WebDevelopment;

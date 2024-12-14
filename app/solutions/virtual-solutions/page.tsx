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

import Virtual from "@/public/Images/Section/Virtual.jpg";
import { MovingCards } from "@/app/components/movingCards";

const VirtualSolutions = () => {
  return (
    <div>
      <Container>
        <section className="VirtualSolutions px-[1rem] rounded-2xl mt-[6rem] py-[6rem] lg:h-[35rem] h-[35rem] flex items-center">
          <div>
            <div className="grid gap-[1rem]">
              <div className="flex justify-center">
                <TitlePages>
                  <span className="text-white">
                    Empower Your Business with Our Expert Virtual Assistant
                    Services
                  </span>
                </TitlePages>
              </div>
              <div className="flex justify-center">
                <p className="text-white text-center lg:w-[70%] md:w-[80%] sm:w-[100%] w-[100%]">
                  Streamline your daily operations and focus on what truly
                  matters. At VirtuDigiTech, our Virtual Assistants are ready to
                  support you with a range of services, from email management to
                  scheduling and beyond. With our reliable, dedicated virtual
                  assistants, you can optimize productivity, reduce stress, and
                  take your business to the next level.
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

        <section className="lg:py-[4rem] py-[4rem]">
          <div className="flex justify-center">
            <div className="grid gap-4">
              <SectionTitle>
                Why Choose VirtuDigiTech for Virtual Assistant Services?
              </SectionTitle>
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
            <div className="grid gap-3 border rounded-xl p-[2rem] dark-bg-green shadow-md">
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
                Expert in Email and Scheduling Management
              </h1>
              <p className="text-center text-white text-[14px]">
                Let us take care of your inbox and calendar, so you can stay on
                top of everything without the stress. We handle email
                management, scheduling, and even follow-ups, ensuring you never
                miss an important task.
              </p>
            </div>
            <div className="grid gap-3 border rounded-xl p-[2rem] dark-bg-green shadow-md">
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
                Domain Management Expertise
              </h1>
              <p className="text-center text-white text-[14px]">
                Our team is skilled in managing domain registrations, renewals,
                and DNS configurations. With us, you can trust that your online
                presence is always up-to-date and secure.
              </p>
            </div>
            <div className="grid gap-3 border rounded-xl p-[2rem] dark-bg-green shadow-md">
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
                Dedicated, Tailored Assistance
              </h1>
              <p className="text-center text-white text-[14px]">
                We work closely with you to understand your specific needs,
                providing personalized support that matches your business goals.
                Whether it&apos;s managing tasks or providing creative input,
                we&apos;re here to help you thrive.
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

        <section className="lg:py-[4rem] py-[2rem]">
          <div className="grid items-center lg:gap-[4rem] md:gap-[3rem] sm:gap-[2rem] gap-[2rem] grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:mt-[4rem] md:mt-[3rem] sm:mt-[2rem] mt-[2rem]">
            <div className="grid gap-4 lg:mt-0 md:mt-0 sm:mt-[2rem] mt-[2rem]">
              <LeftTitle>
                Key Advantages of Having a Virtual Assistant
              </LeftTitle>
              <h3 className="font-medium dark-green text-xl lg:text-start sm:text-center text-center">
                Why VirtuDigiTech is Your Ideal Virtual Assistant Partner
              </h3>
              <p className="lg:text-start sm:text-center text-center">
                We streamline your operations with expert services in email
                management, scheduling, and domain oversight, helping you save
                time, reduce costs, and stay focused on growing your business.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="green">
                    Increased Productivity
                  </AccordionTrigger>
                  <AccordionContent className="green">
                    With a Virtual Assistant handling routine tasks, you can
                    focus on high-value work that drives growth for your
                    business. We manage the day-to-day operations, freeing up
                    your time to innovate and scale.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="green">
                    Cost-Effective Solution
                  </AccordionTrigger>
                  <AccordionContent className="green">
                    Hiring a full-time employee for every task can be costly. A
                    Virtual Assistant is an affordable alternative, providing
                    expert support without the overhead expenses of a
                    traditional employee.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="green">
                    Flexibility and Scalability
                  </AccordionTrigger>
                  <AccordionContent className="green">
                    Our Virtual Assistant services are flexible and can be
                    scaled up or down based on your business needs. Whether you
                    require daily support or project-based assistance,
                    we&apos;re ready to adjust as you grow.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="green">
                    Work-Life Balance
                  </AccordionTrigger>
                  <AccordionContent className="green">
                    Say goodbye to burnout. With our help, you can offload
                    tasks, reduce stress, and reclaim your time, improving both
                    your productivity and overall well-being.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="rounded-lg overflow-hidden">
              <Image
                src={Virtual}
                alt="Website Developer"
                className="w-full h-full z-auto"
              />
            </div>
          </div>
        </section>
      </Container>

      <div>
        <MovingCards />
      </div>
    </div>
  );
};

export default VirtualSolutions;

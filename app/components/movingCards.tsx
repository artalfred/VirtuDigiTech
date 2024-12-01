"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import SectionTitle from "./sectionTitle";

export function MovingCards() {
  return (
    <div className="h-[35rem] flex flex-col antialiased tools items-center justify-center relative overflow-hidden">
      <div className="pb-[2rem] lg:w-[60%] md:w-[100%] sm:w-[100%] w-[95%]">
        <SectionTitle>
          See Why <span className="dark-green">Business</span> Rely on Us for
          <span className="dark-green">Web Solutions </span>
          and <span className="dark-green">Virtual Support!</span>
        </SectionTitle>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Working with this team has been a game-changer for my business. They built a sleek and modern website that perfectly represents my brand. The attention to detail and quick turnaround were impressive. My customers constantly compliment the website's functionality and design!",
    name: "Maria Gonzalez",
    title: "Business Owner",
  },
  {
    quote:
      "I can’t recommend their web development services enough! They transformed my vision into a stunning website that’s user-friendly and optimized for all devices. They also made sure everything was scalable for future growth. Exceptional work!",
    name: "James Carter",
    title: "Startup Founder",
  },
  {
    quote:
      "Their team revamped my online store, and sales have skyrocketed since! The site's speed, design, and overall experience are outstanding. They were always professional and responsive throughout the project. I'm beyond satisfied!",
    name: "Sarah Lim",
    title: "E-commerce Entrepreneur",
  },
  {
    quote:
      "Their virtual assistants have been an incredible asset to my team. From managing my calendar to handling customer inquiries, they’ve been efficient and reliable. I’ve saved so much time and can now focus on scaling my business.",
    name: " Michael Lee",
    title: "CEO",
  },
  {
    quote:
      "I hired their virtual assistant services for administrative tasks, and it was one of the best decisions I’ve made. Their assistants are professional, organized, and proactive in finding solutions. My productivity has doubled thanks to them!",
    name: "Angela Davis",
    title: "Freelance Consultant",
  },
];

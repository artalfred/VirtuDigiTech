"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import SectionTitle from "./sectionTitle";

export function MovingCards() {
  return (
    <div className=" flex flex-col antialiased items-center justify-center relative overflow-hidden">
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
      "Switching to this email service was a game-changer. It's incredibly affordable, fast, and reliable. Perfect for our campaign needs without breaking the budget!",
    name: "David R., ",
    title: "Small Business Owner",
  },
  {
    quote:
      "The email service is quick, easy to use, and fits perfectly within our budget. It's been a hassle-free solution for managing our campaigns.",
    name: "James Carter",
    title: "Startup Founder",
  },
  {
    quote:
      "Great value for money! The emails are delivered fast, and the service is dependable. It has made our campaign management much simpler.",
    name: "Mark L.",
    title: "E-commerce Store Owner",
  },
];

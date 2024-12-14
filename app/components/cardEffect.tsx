import { HoverEffect } from "./ui/card-hover-effect";
import BudgetFriendly from "@/public/Images/WhyChooseUs/BudgetFriendly.png";
import CustomerSupport from "@/public/Images/WhyChooseUs/CustomerSupport.png";
import Focused from "@/public/Images/WhyChooseUs/Focused.png";
import Technology from "@/public/Images/WhyChooseUs/Technology.png";
import Trusted from "@/public/Images/WhyChooseUs/Trusted.png";
import WebDevelopment from "@/public/Images/WhyChooseUs/WebDevelopment.png";

export function CardEffect() {
  return (
    <div className="lg:px-[4rem] px-[1rem]">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: WebDevelopment,
    title: "Web Development",
    description:
      "Customized solutions designed to boost your digital footprint.",
    link: "/contact",
  },
  {
    icon: CustomerSupport,
    title: "Trusted Virtual Assistance",
    description:
      "Personalized, efficient support for your administrative and technical needs.",
    link: "/contact",
  },
  {
    icon: Focused,
    title: "Focused Project Management",
    description:
      "Streamlined execution to ensure projects are completed on time.",
    link: "/contact",
  },
  {
    icon: Technology,
    title: "Cutting-Edge Technology",
    description: "Utilizing advanced tools and strategies to stay ahead.",
    link: "/contact",
  },
  {
    icon: Trusted,
    title: "Outstanding Customer Support",
    description:
      "Dedicated to client satisfaction and fostering lasting partnerships.",
    link: "/contact",
  },
  {
    icon: BudgetFriendly,
    title: "Budget-Friendly Services",
    description: "High-quality results that fit your budget.",
    link: "/contact",
  },
];

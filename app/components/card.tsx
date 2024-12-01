import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CardProps {
  title: string;
  description: string;
  buttonName: string;
  image: string | StaticImport;
}

export const Card = ({ title, description, buttonName, image }: CardProps) => {
  return (
    <div className="bg-[#F8F8F8] shadow-sm rounded-lg w-full">
      <div className="grid gap-[1rem] lg:p-[3rem] sm:p-[1rem] p-[1rem]">
        <div className="flex lg:justify-start justify-center">
          <Image className="rounded-2xl" height={100} src={image} alt="Icon" />
        </div>
        <h2 className="lg:text-[18px] text-[16px] font-bold green lg:text-start text-center">
          {title}
        </h2>

        <p className="green text-[14px] lg:text-start text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

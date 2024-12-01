import React, { ReactNode } from "react";

interface ButtonProps {
  background: string;
  width: string;
  children: ReactNode;
}

export const Button = ({ background, children, width }: ButtonProps) => {
  return (
    <button
      className={`${background}-button rounded-xl text-[14px] font-medium ${width} lg:px-[2rem] md:px-[2rem] sm:px-[2rem] px-[.8rem] lg:py-[.7rem] md:py-[1rem] sm:py-[.9rem] py-[.9rem]`}
    >
      {children}
    </button>
  );
};

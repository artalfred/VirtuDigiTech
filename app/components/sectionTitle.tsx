import React, { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div>
      <h1
        className={`lg:text-4xl font-semibold green md:text-[45px] sm:text-[26px] text-[24px] lg:text-center md:text-center sm:text-center text-center`}
      >
        {children}
      </h1>
    </div>
  );
};

export default SectionTitle;

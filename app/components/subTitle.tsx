import React, { ReactNode } from "react";

interface SubTitleProps {
  children: ReactNode;
}

const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <div>
      <h1
        className={`lg:leading-[4.5rem] md:leading-[3rem] sm:leading-[2.8rem] leading-[2rem] font-semibold green lg:text-4xl md:text-[40px] sm:text-[24px] text-[24px]`}
      >
        {children}
      </h1>
    </div>
  );
};

export default SubTitle;

import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <div>
      <h1
        className={`lg:leading-[4.5rem] md:leading-[3rem] sm:leading-[2.8rem] leading-[2rem] font-bold green lg:text-6xl md:text-[45px] sm:text-[28px] text-[26px]`}
      >
        {children}
      </h1>
    </div>
  );
};

export default Title;

import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <div>
      <h1
        className={`lg:leading-[4.5rem] md:leading-[3rem] sm:leading-[2.8rem] leading-[2rem] font-semibold green lg:text-6xl md:text-[45px] sm:text-[28px] text-[26px] lg:text-start md:text-start sm:text-center text-center`}
        // style={{ lineHeight: "4.5rem" }}
      >
        {children}
      </h1>
    </div>
  );
};

export default Title;

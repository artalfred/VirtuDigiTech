import React, { ReactNode } from "react";

interface TitleCenterProps {
  children: ReactNode;
}

const TitleCenter = ({ children }: TitleCenterProps) => {
  return (
    <div>
      <h1
        className={`lg:text-5xl font-normal text-white md:text-[45px] sm:text-[26px] text-[28px]`}
      >
        {children}
      </h1>
    </div>
  );
};

export default TitleCenter;

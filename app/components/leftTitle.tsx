import React, { ReactNode } from "react";

interface LeftTitleProps {
  children: ReactNode;
}

const LeftTitle = ({ children }: LeftTitleProps) => {
  return (
    <div>
      <h1
        className={`lg:text-4xl font-semibold green md:text-[45px] sm:text-[26px] text-[24px] lg:text-start md:text-start sm:text-center text-center`}
      >
        {children}
      </h1>
    </div>
  );
};

export default LeftTitle;

import React, { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div className="container mx-auto px-[1rem] sm:px-[2rem] md:px-[2rem] lg:px-[6rem] grid">
      {children}
    </div>
  );
};

export default MainContainer;

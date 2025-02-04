import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container mx-auto px-[1rem] sm:px-[2rem] md:px-[2rem] lg:px-[8rem] grid lg:justify-start">
      {children}
    </div>
  );
};

export default Container;

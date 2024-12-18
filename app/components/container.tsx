import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container mx-auto px-[1rem] sm:px-[2rem] md:px-[2rem] lg:px-[6rem] grid lg:justify-center md:justify-center sm:justify-center justify-center">
      {children}
    </div>
  );
};

export default Container;

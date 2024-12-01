import React from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle";
import { Button } from "./button";

interface BottomAdsProps {
  title: string;
  description: string;
}

const BottomAds = ({ title, description }: BottomAdsProps) => {
  return (
    <section className="py-[6rem] card-gradient">
      <Container>
        <div className="flex justify-center">
          <div className="grid gap-4">
            <SectionTitle>
              <span className="text-white">{title}</span>
            </SectionTitle>
            <div className="flex justify-center">
              <p className="text-white text-center lg:w-[70%] md:w-[80%] sm:w-[100%] w-[100%]">
                {description}
              </p>
            </div>

            <div className="flex justify-center mt-4">
              <Button background="light" width="">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BottomAds;

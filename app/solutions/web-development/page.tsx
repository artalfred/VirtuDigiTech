import { Button } from "@/app/components/button";
import Container from "@/app/components/container";
import TitlePages from "@/app/components/titlePages";
import React from "react";

const WebDevelopment = () => {
  return (
    <div>
      <Container>
        <section className="whyVirtuDigiTech px-[1rem] rounded-2xl mt-[6rem] py-[6rem] lg:h-[30rem] h-[35rem] flex items-center">
          <div>
            <div className="grid gap-[1rem]">
              <h4 className="font-medium text-white uppercase text-center">
                Your Partner in Innovation and Growth
              </h4>
              <div className="flex justify-center">
                <TitlePages>
                  <span className="text-white">
                    The VirtuDigiTech Advantage
                  </span>
                </TitlePages>
              </div>
              <div className="flex justify-center">
                <p className="text-white text-center lg:w-[70%] md:w-[80%] sm:w-[100%] w-[100%]">
                  VirtuDigiTech is your go-to solution for all your digital
                  needs. Our team of skilled professionals is dedicated to
                  providing top-notch web development and virtual assistance
                  services. We combine technical expertise with a passion for
                  innovation to deliver exceptional results.
                </p>
              </div>

              <div className="flex justify-center mt-[1rem]">
                <Button background="light" width="">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default WebDevelopment;

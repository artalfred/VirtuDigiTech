"use client";

import React from "react";
import Container from "../components/container";
import { Button } from "../components/button";
import SectionTitle from "../components/sectionTitle";
import BottomAds from "../components/bottomAds";
import { CardEffect } from "../components/cardEffect";
import { MovingCards } from "../components/movingCards";
import TitlePages from "../components/titlePages";

function WhyVirtuDigiTech() {
  return (
    <>
      <Container>
        <div>
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
        </div>

        <section className="lg:py-[4rem] py-[4rem] lg:px-[4rem]">
          <div>
            <SectionTitle>Why Choose Us?</SectionTitle>
          </div>
          <div className="mt-[2rem]">
            <CardEffect />
          </div>
        </section>
      </Container>

      <div>
        <MovingCards />
      </div>

      <div>
        <BottomAds
          title="More Affordable, More Effective"
          description="At VirtuDigiTech, we believe in providing high-quality services without breaking the bank. Our efficient processes and dedicated team allow us to offer competitive pricing without compromising on quality."
        />
      </div>
    </>
  );
}

export default WhyVirtuDigiTech;

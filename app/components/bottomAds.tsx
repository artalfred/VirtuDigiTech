import React from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle";
import { Button } from "./button";
import Link from "next/link";
import { PopUp } from "./PopUp";

const BottomAds = () => {
  return (
    <section className="py-[6rem] rounded-xl bg-black/10 ads">
      <Container>
        <div className="flex justify-center">
          <div className="grid gap-4">
            <SectionTitle>
              <span className="text-white">
                Earn $300 for Every Client You Refer!
              </span>
            </SectionTitle>
            <div className="flex justify-center">
              <p className="text-white text-center lg:w-[70%] md:w-[80%] sm:w-[100%] w-[100%]">
                Know someone who could benefit from our services? Refer them to
                us and earn $300 for every successful client you bring! It's
                that simple—no sign-ups, just real referrals.
              </p>
            </div>

            <div className="flex justify-center mt-4">
              <PopUp />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BottomAds;

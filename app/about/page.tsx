import Image from "next/image";
import React from "react";
import Container from "../components/container";
import SectionTitle from "../components/sectionTitle";
import MainContainer from "../components/mainContainer";
import Tree from "@/public/Images/Background/Tree.jpg";
import BottomAds from "../components/bottomAds";
import TitlePages from "../components/titlePages";

const About = () => {
  return (
    <div>
      <Container>
        <div className="">
          <section className="about px-[1rem] rounded-2xl mt-[6rem] py-[6rem] h-[25rem] flex items-center">
            <div>
              <div className="grid gap-[1rem]">
                <div className="flex justify-center">
                  <TitlePages>
                    <span className="text-white">
                      Your Trusted Growth Partner
                    </span>
                  </TitlePages>
                </div>
                <div className="flex justify-center">
                  <p className="text-white text-center lg:w-[70%] md:w-[80%] sm:w-[100%] w-[100%]">
                    VirtuDigiTech connects local and international clients with
                    expert web development and virtual assistant services. From
                    IT support and email management to building impactful online
                    presences, we&apos;re here to empower businesses of all
                    sizes.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>

      <section className="py-[4rem]">
        <MainContainer>
          <div className="grid gap-[1rem]">
            <div>
              <SectionTitle>The Story Behind the Journey</SectionTitle>
            </div>
            <div className="flex justify-center">
              <div className="lg:mt-[2rem] md:mt-[2rem] sm:mt-[1rem] mt-[1rem] lg:w-[70%] md:w-[80%] sm:w-[90%] w-[100%]">
                <p className="text-center text-gray-700  leading-8">
                  <span className="green leading-8 text-center font-bold">
                    Lester,
                  </span>
                  an IT professional with several years in the field, has been
                  the founder of VirtuDigiTech since 2022. Now VirtuDigiTech is
                  a growing company that guarantees quality in web development
                  and virtual assistant services.
                </p>
                <br></br>
                <p className="text-gray-700 leading-8 text-center">
                  Lester's background as a call center agent and virtual
                  assistant has equipped him with a deep understanding of client
                  needs and the ability to deliver exceptional customer service.
                  This, combined with his technical expertise, has allowed
                  VirtuDigiTech to grow into a trusted partner for businesses of
                  all sizes.
                </p>
                <br></br>
                <p className="text-gray-700 leading-8 text-center">
                  Based in the Philippines, VirtuDigiTech leverages the
                  country&rsquo;s skilled workforce to offer remote web
                  development and virtual assistant services. By working
                  remotely, we are able to provide flexible and cost-effective
                  solutions without compromising on quality.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:px-[6rem] sm:px-[0rem] px-[0rem] lg:mt-[4rem] md:mt-[3rem] sm:mt-[2rem] mt-[2rem]">
            <Image src={Tree} alt="Tree" className="rounded-2xl" />
          </div>
        </MainContainer>
      </section>
      <BottomAds
        title="Stay Connected: Let&rsquo;s Start the Conversation"
        description="We&rsquo;re here to listen, assist, and collaborate. Reach out to us today and let&rsquo;s create something extraordinary together!"
      />
    </div>
  );
};

export default About;

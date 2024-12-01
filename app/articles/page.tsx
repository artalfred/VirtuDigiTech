import React from "react";
import Title from "../components/title";
import MainContainer from "../components/mainContainer";
import LeftTitle from "../components/leftTitle";

const Articles = () => {
  return (
    <>
      <MainContainer>
        <div>
          <section className="about px-[1rem] rounded-2xl mt-[6rem] py-[6rem] h-[30rem] flex items-center justify-center">
            <div>
              <div className="grid gap-[1rem]">
                <div className="grid justify-center">
                  <Title>
                    <span className="text-white">Stories and Strategies</span>
                  </Title>
                </div>

                <div className="flex justify-center">
                  <p className="text-white text-center lg:w-[70%] md:w-[80%] sm:w-[100%] w-[100%]">
                    Explore a curated collection of insightful articles designed
                    to inform, inspire, and empower. From expert tips to
                    in-depth guides, our content covers a range of topics to
                    keep you informed and ahead of the curve.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="lg:py-[4rem] py-[4rem]">
          <div>
            <LeftTitle>Featured Articles</LeftTitle>
          </div>
        </section>
      </MainContainer>
    </>
  );
};

export default Articles;

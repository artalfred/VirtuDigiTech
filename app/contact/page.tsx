"use client";
import ContactForm from "../components/contactForm";
import Container from "../components/container";
import MainContainer from "../components/mainContainer";
import Title from "../components/title";

const Contact = () => {
  return (
    <>
      <div className="tools pt-[4rem]">
        <Container>
          <section className="px-[1rem] rounded-2xl py-[6rem] flex items-center justify-center">
            <div>
              <div className="grid gap-[1rem]">
                <div className="grid justify-center">
                  <Title>
                    <span className="green">Chat Now</span>
                  </Title>
                </div>

                <div className="flex justify-center">
                  <p className="green text-center lg:w-[70%] md:w-[100%] sm:w-[100%] w-[100%]">
                    Explore a curated collection of insightful articles designed
                    to inform, inspire, and empower. From expert tips to
                    in-depth guides, our content covers a range of topics to
                    keep you informed and ahead of the curve.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Container>

        <MainContainer>
          <div className="flex justify-center w-full pb-[3rem] mt-[-2rem]">
            <ContactForm />
          </div>
        </MainContainer>
      </div>
    </>
  );
};

export default Contact;

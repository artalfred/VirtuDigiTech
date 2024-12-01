"use client";

import ContactForm from "../components/contactForm";
import Container from "../components/container";
import Title from "../components/title";

const Contact = () => {
  return (
    <>
      <div className="tools pt-[4rem]">
        <Container>
          <section className="px-[1rem] rounded-2xl py-[6rem] flex items-center justify-center">
            <div>
              <div className="grid gap-[1rem]">
                <div className="grid justify-start">
                  <Title>
                    <span className="green">Chat Now</span>
                  </Title>
                </div>

                <div className="flex justify-start">
                  <p className="green lg:w-[70%] md:w-[80%] sm:w-[100%] w-[100%]">
                    Explore a curated collection of insightful articles designed
                    to inform, inspire, and empower. From expert tips to
                    in-depth guides, our content covers a range of topics to
                    keep you informed and ahead of the curve.
                  </p>
                </div>
                <div className="lg:w-[40rem] md:w-[30rem] sm:w-[100%] w-full">
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
};

export default Contact;

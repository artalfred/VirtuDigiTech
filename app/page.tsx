import Image from "next/image";
import Container from "./components/container";
import { Button } from "./components/button";
import Title from "./components/title";
import SectionTitle from "./components/sectionTitle";
import List from "./components/list";
import Web from "@/public/Images/Web.jpg";
import EmailMarketing from "@/public/Images/Expertise/EmailManagement.jpg";
import ITSupport from "@/public/Images/Expertise/ITSupport.jpg";
import Planning from "@/public/Images/Expertise/Planning.jpg";
import ProblemSolving from "@/public/Images/Expertise/ProblemSolving.jpg";
import SoftwareDevelopment from "@/public/Images/Expertise/SoftwareDevelopment.jpg";
import StrategicCommunication from "@/public/Images/Expertise/StrategicCommunication.jpg";
import BottomAds from "./components/bottomAds";
import { MovingCards } from "./components/movingCards";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="py-[6rem] lg:h-[50rem] md:h-[45rem] sm:h-[35rem] h-[40rem] flex items-center hero">
        <Container>
          <div className=" mt-[4rem] lg:w-[65%] md:w-[100%] sm:w-[100%] w-[100%] grid gap-4">
            <h4 className="font-semibold dark-green uppercase lg:text-start md:text-start sm:text-center text-center">
              Your Digital Growth Partner
            </h4>
            <Title>
              Empowering Your <span className="dark-green">Business</span> with
              <span className="dark-green"> Virtual Solutions</span>
            </Title>
            <p className="lg:text-start md:text-start sm:text-center text-center">
              Transform the way you work with our professional virtual assistant
              and web development services. From streamlining your daily tasks
              to building high-performing websites, we provide tailored
              solutions that help your business thrive in the digital era.
            </p>
            <div className="mt-3 flex gap-[2rem] lg:justify-start md:justify-start sm:justify-center justify-center">
              <Link href="/contact">
                <Button width="" background="dark">
                  Reach Out
                </Button>
              </Link>
              <Link href="/about">
                <Button width="" background="light">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </main>

      {/* SECTION 2 */}
      <section className="tools lg:py-[6rem] py-[3rem]">
        <Container>
          <div className="grid gap-[1rem]">
            <SectionTitle>Our Expertise, Your Advantage</SectionTitle>
            <div className="flex justify-center">
              <p className="text-center lg:w-[70%] md:w-[80%] sm:w-[100%] w-[100%]">
                Specializing in Web Development, Email Marketing, Strategic
                Planning, and IT Support, we deliver solutions to help your
                business thrive in the digital age.
              </p>
            </div>

            <div className="lg:px-[6rem] md:px-[4rem] sm:mx-[3rem] mx-[1rem]">
              <div className="grid mt-[2rem] gap-[2rem] lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-2">
                <div className="grid gap-[1rem]">
                  <div className="rounded-lg overflow-hidden">
                    <Image src={EmailMarketing} alt="Email Management" />
                  </div>
                  <h4 className="text-center">Email</h4>
                </div>
                <div className="grid gap-[1rem]">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src={SoftwareDevelopment}
                      alt="Software Development"
                    />
                  </div>
                  <h4 className="text-center">Software</h4>
                </div>
                <div className="grid gap-[1rem]">
                  <div className="rounded-lg overflow-hidden">
                    <Image src={Planning} alt="Email Management" />
                  </div>
                  <h4 className="text-center">Planning</h4>
                </div>
                <div className="grid gap-[1rem]">
                  <div className="rounded-lg overflow-hidden">
                    <Image src={ProblemSolving} alt="Email Management" />
                  </div>
                  <h4 className="text-center">Problem Solving</h4>
                </div>
                <div className="grid gap-[1rem]">
                  <div className="rounded-lg overflow-hidden">
                    <Image src={ITSupport} alt="IT Support" />
                  </div>
                  <h4 className="text-center">IT Support</h4>
                </div>
                <div className="grid gap-[1rem]">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src={StrategicCommunication}
                      alt="Email Management"
                    />
                  </div>
                  <h4 className="text-center">Communication</h4>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3 */}
      <section className="lg:py-[6rem] py-[3rem] ashGray">
        <Container>
          <div className="flex justify-center">
            <div className="grid gap-4">
              <SectionTitle>Services we offer</SectionTitle>
              <div className="flex justify-center">
                <p className="text-center lg:w-[70%] md:w-[80%] sm:w-[100%] w-[100%]">
                  We provide comprehensive digital solutions to help businesses
                  thrive. From crafting stunning websites to providing reliable
                  virtual assistance, we're dedicated to helping you achieve
                  your goals.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-[2rem] grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-[4rem]">
            <div className="bg-white shadow-md rounded-lg w-full">
              <div className=" p-[2rem] border-b-2">
                <h2 className="text-2xl mb-4 font-bold green">
                  Web Development
                </h2>
                <div className="flex gap-3">
                  <p className="text-5xl font-bold mb-4 tracking-wide green">
                    $350
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    8 - 10 Pages <br></br> w/ SEO optimization
                  </p>
                </div>
                <p className="text-sm dark-green text-[16px] mt-3">
                  Our expert web developers craft stunning, responsive, and
                  user-friendly websites tailored to your specific needs.
                </p>

                <div className="mt-6">
                  <Link href="/contact">
                    <Button width="w-full" background="dark">
                      Request a Quote
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="p-[2rem]">
                <h3 className="lg:text-[22px] md:text-[20px] sm:text-[18px] text-[18px] mb-0 font-bold green">
                  Features
                </h3>
                <p className="text-sm dark-green text-[16px]">
                  Elevate Your Online Presence with Custom Web Solutions...
                </p>
                <ul className="grid gap-2 mt-4">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#237a57"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="">Custom Website Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#237a57"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Responsive Design
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#237a57"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    E-commerce Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#237a57"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    SEO Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#237a57"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Ongoing Maintenance and Support
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg w-full">
              <div className=" p-[2rem] border-b-2">
                <h2 className="text-2xl mb-4 font-bold green">
                  Virtual Assistant
                </h2>
                <div className="flex gap-3">
                  <p className="text-4xl font-bold mb-4 tracking-wide green">
                    $900-$1500
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    Per <br></br> month
                  </p>
                </div>
                <p className="text-sm dark-green text-[16px] mt-3">
                  Our Virtual Assistant Services are designed to help
                  entrepreneurs, small businesses, and busy professionals
                  streamline their daily tasks.
                </p>

                <div className="mt-6">
                  <Link href="/contact">
                    <Button width="w-full" background="dark">
                      Start Saving Time
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="p-[2rem]">
                <h3 className="lg:text-[22px] md:text-[20px] sm:text-[18px] text-[18px] font-bold  green">
                  Features
                </h3>
                <p className="text-sm dark-green text-[16px]">
                  We provide reliable, efficient, and personalized support to
                  save you time and boost your productivity...
                </p>
                <ul className="grid gap-2 mt-4">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#237a57"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="">Email management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#237a57"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Calendar scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#237a57"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Customer support (email/chat handling)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#237a57"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Customer support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#237a57"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Simple task management
                  </li>
                </ul>
              </div>
            </div>

            <div className="card-gradient shadow-md rounded-lg w-full h-[23rem] lg:block md:hidden sm:block block">
              <div className=" p-[2rem]">
                <h2 className="text-2xl mb-4 font-bold text-white">
                  Why Choose Us?
                </h2>

                <p className="text-white text-sm text-[16px] mt-3">
                  We deliver expert web development and reliable virtual
                  assistant services to boost your business. Modern websites,
                  efficient support—your success is our goal!
                </p>

                <h3 className="text-5xl mt-[2rem] text-white">Let's Talk!</h3>

                <div className="mt-[2rem]">
                  <Link href="/contact">
                    <Button width="w-full" background="light">
                      Book a Call
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4 */}
      <section className="lg:py-[6rem] py-[3rem]">
        <Container>
          <div className="flex justify-center">
            <div className="grid gap-4">
              <SectionTitle>
                Digital Presence with Bespoke Web Development
              </SectionTitle>
              <div className="flex justify-center">
                <p className="text-center lg:w-[70%] md:w-[80%] sm:w-[100%] w-[100%]">
                  We provide comprehensive digital solutions to help businesses
                  thrive. From crafting stunning websites to providing reliable
                  virtual assistance, we&rsquo;re dedicated to helping you
                  achieve your goals.
                </p>
              </div>
            </div>
          </div>

          <div className="grid items-center lg:gap-[4rem] md:gap-[3rem] sm:gap-[2rem] gap-[2rem] grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:mt-[4rem] md:mt-[3rem] sm:mt-[2rem] mt-[2rem]">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={Web}
                alt="Website Developer"
                className="w-full h-full z-auto"
              />
            </div>

            <div className="grid gap-4 lg:mt-0 md:mt-0 sm:mt-[2rem] mt-[2rem]">
              <ul className="grid gap-3">
                <List
                  name="Personalized Development:"
                  description="Solutions tailored to your unique needs and goals."
                />
                <List
                  name="Intuitive UI/UX Design:"
                  description="A visually stunning and user-friendly interface that ensures seamless navigation and optimal customer satisfaction."
                />
                <List
                  name="Scalable & Secure:"
                  description="Robust architecture with scalability and cutting-edge security integrated from day one."
                />
                <List
                  name="Responsive Across Devices:"
                  description="Flawless performance and adaptability on all devices, from smartphones to desktops."
                />
                <List
                  name="Captivating Visuals:"
                  description="High-quality imagery that aligns with your brand and engages your audience."
                />
                <List
                  name="Continuous Maintenance & Support:"
                  description="Reliable updates and support to keep your website running smoothly over time."
                />
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <div>
        <MovingCards />
      </div>

      <BottomAds
        title="Let&rsquo;s Build Your Success Together"
        description="Simplify your tasks and elevate your online presence with our
                expert web development and reliable virtual assistant services
                designed to help your business grow."
      />
    </>
  );
}

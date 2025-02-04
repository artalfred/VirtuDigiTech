import Image from "next/image";
import Container from "./components/container";
import { Button } from "./components/button";
import Title from "./components/title";
import Web from "@/public/Images/Web.png";
import BottomAds from "./components/bottomAds";
import { MovingCards } from "./components/movingCards";
import Link from "next/link";
import TitleCenter from "./components/titleCenter";
import { FAQs } from "./components/accordion";

export default function Home() {
  return (
    <>
      <main className="lg:pt-[12rem] md:pt-[8rem] sm:pt-[8rem] pt-[8rem] pb-[0] lg:h-[50rem] md:h-[45rem] sm:h-[35rem] h-[40rem] grid items-center hero">
        <Container>
          <div className="overflow-hidden">
            <div className="mt-[2rem] lg:w-[65%] md:w-[100%] sm:w-[100%] w-[100%] grid gap-4">
              <Title>
                <span className="text-white">Transform Leads Into Revenue</span>
              </Title>
              <p className="text-white text-[20px]">
                Innovative strategies that amplify growth, boost engagement, and
                transform opportunities into measurable success for your
                business.
              </p>
              <div className="mt-3 flex gap-[2rem]">
                <Link
                  href="https://calendly.com/admin-virtudigitech/30min"
                  target="_blank"
                >
                  <Button width="" background="light">
                    Book a call
                  </Button>
                </Link>
                {/* <Link href="/about">
                <Button width="" background="light">
                Learn More
                </Button>
                </Link> */}
              </div>
            </div>

            <div className="p-[1rem] bg-slate-200/5 rounded-[16px] mt-[3rem]">
              <MovingCards />
            </div>
          </div>
        </Container>
      </main>

      {/* SECTION 2 */}
      <section className="tools lg:pb-[0rem] pb-[2rem]">
        <Container>
          <div className="grid gap-[1rem] mt-[8rem]">
            <div className="grid items-center lg:gap-[4rem] md:gap-[3rem] sm:gap-[2rem] gap-[2rem] grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:mt-[4rem] md:mt-[3rem] sm:mt-[2rem] mt-[2rem]">
              <div className="rounded-lg overflow-hidden">
                <TitleCenter>
                  Setup Your Next Winning Campaign In Minutes:
                </TitleCenter>
                <div className="mt-[2rem]">
                  <ul>
                    <li className="text-white text-[20px]">1. Buy a domain</li>
                    <li className="text-white text-[20px]">
                      2. Set up the domain
                    </li>
                    <li className="text-white text-[20px]">
                      3. Add your users
                    </li>
                    <li className="text-white text-[20px]">
                      4. Begin sending emails
                    </li>
                  </ul>
                </div>

                <div className="mt-[2rem]">
                  <Link
                    href="https://calendly.com/admin-virtudigitech/30min"
                    target="_blank"
                  >
                    <Button width="" background="light">
                      Book a call
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={Web}
                  alt="Website Developer"
                  className="w-full h-full z-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3 */}
      {/* <section className="lg:py-[6rem] py-[2rem] tools" id="services">
        <Container>
          <div className="grid gap-[2rem] grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className="bg-slate-100/5 shadow-lg rounded-lg w-full">
              <div className=" p-[2rem] border-b-2">
                <h2 className="text-2xl mb-4 font-normal text-slate-200">
                  Web Development
                </h2>
                <div className="flex gap-3">
                  <p className="text-5xl font-semibold mb-4 tracking-wide text-slate-200">
                    $800
                  </p>
                  <p className="text-sm text-slate-200 mt-4">
                    14 - 20 Pages <br></br> w/ SEO optimization
                  </p>
                </div>
                <p className="text-sm text-slate-200 text-[16px] mt-3">
                  Our expert web developers craft stunning, responsive, and
                  user-friendly websites tailored to your specific needs.
                </p>

                <div className="mt-6">
                  <Link
                    href="https://calendly.com/admin-virtudigitech/30min"
                    target="_blank"
                  >
                    <Button width="w-full" background="light">
                      Get a free consultation
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="p-[2rem]">
                <h3 className="lg:text-[22px] md:text-[20px] sm:text-[18px] text-[18px] mb-0 font-bold text-slate-200">
                  Features
                </h3>
                <p className="text-sm text-slate-200 text-[16px]">
                  Elevate Your Online Presence with Custom Web Solutions...
                </p>
                <ul className="grid gap-2 mt-4">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white">Custom Website Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-200">Responsive Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-200">E-commerce Solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-200">SEO Optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-200">
                      Ongoing Maintenance and Support
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-100/5 shadow-lg rounded-lg w-full">
              <div className="p-[2rem] border-b-2">
                <h2 className="text-2xl mb-4 font-normal text-slate-200">
                  Maximize Your Marketing Impact
                </h2>
                <p className="text-sm text-slate-200 text-[16px] mt-[2.2rem]">
                  Elevate your business performance with our tailored email
                  strategies that efficiently turn leads into measurable,
                  substantial revenue.
                </p>
                <div className="mt-[3rem]">
                  <Link
                    href="https://calendly.com/admin-virtudigitech/30min"
                    target="_blank"
                  >
                    <Button width="w-full" background="light">
                      Book a call
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="p-[2rem]">
                <h3 className="lg:text-[22px] md:text-[20px] sm:text-[18px] text-[18px] mb-0 font-normal text-slate-200">
                  Boost Business Performance:
                </h3>

                <ul className="grid gap-2 mt-4">
                  <li className="flex gap-2">
                    <span className="text-slate-200">
                      1. Scale your outreach with thousands of targeted emails
                      for effective lead generation.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-200">
                      2. Convert opportunities into measurable success for your
                      business.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-slate-200">
                      3. Send between 3,000 to 10,000 emails per month.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card-gradient shadow-md rounded-lg w-full h-[23rem] lg:block md:hidden sm:block block">
              <div className=" p-[2rem]">
                <h2 className="text-2xl mb-4 font-normal text-white">
                  Why Choose Us?
                </h2>

                <p className="text-white text-sm text-[16px] mt-3">
                  We deliver expert web development and reliable virtual
                  assistant services to boost your business. Modern websites,
                  efficient support—your success is our goal!
                </p>

                <h3 className="text-5xl mt-[2rem] text-white">Let's Talk!</h3>

                <div className="mt-[2rem]">
                  <Link
                    href="https://calendly.com/admin-virtudigitech/30min"
                    target="_blank"
                  >
                    <Button width="w-full" background="light">
                      Book a Call
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section> */}

      <section className="lg:py-[6rem] py-[2rem] tools" id="services">
        <div className="rounded-lg overflow-hidden">
          <div className="items-center lg:mt-[4rem] md:mt-[3rem] sm:mt-[2rem] mt-[2rem] pb-[3rem]">
            <div>
              <p className="text-white text-center text-[24px] mt-3">
                How it works
              </p>
            </div>
            <div className="lg:mt-[2rem] md:mt-[1rem] sm:mt-[0] mt-0">
              <TitleCenter>
                <h1 className="text-center">Simplifying your inbox setup</h1>
              </TitleCenter>
            </div>
          </div>
        </div>
        <Container>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 lg:pb-[4rem] md:pb-[2rem] sm:pb-[1rem] pb-[1rem]">
            <div className="p-[2rem] text-slate-200">
              <div className="flex justify-center">
                <h1 className="bg-slate-100/5 shadow-lg text-center lg:text-5xl md:text-4xl sm:text-4xl text-4xl rounded-full lg:py-[.8rem] md:py-[.8rem] sm:py-[.7rem] py-[.8rem] px-[1.7rem]">
                  1
                </h1>
              </div>
              <h2 className="lg:text-[30px] md:text-[26px] sm:text-[24px] text-[24px] text-center mt-[1rem] ">
                Easy Inbox Setup
              </h2>
              <p className="text-center text-md mt-[1rem]">
                We create Google Workspace Business Accounts and connect them to
                your desired domains.
              </p>
            </div>

            <div className="p-[2rem] text-slate-200">
              <div className="flex justify-center">
                <h1 className="bg-slate-100/5 shadow-lg text-center lg:text-5xl md:text-4xl sm:text-4xl text-4xl rounded-full lg:py-[.8rem] md:py-[.8rem] sm:py-[.9rem] py-[.9rem] px-[1.5rem]">
                  2
                </h1>
              </div>
              <h2 className="lg:text-[30px] md:text-[26px] sm:text-[24px] text-[24px] text-center mt-[1rem] ">
                Insert DNS records
              </h2>
              <p className="text-center text-md mt-[1rem]">
                We will insert relevant DNS records such as DMARC, DKIM, MX and
                SPF to maximize your deliverability.
              </p>
            </div>
            <div className="p-[2rem] text-slate-200">
              <div className="flex justify-center">
                <h1 className="bg-slate-100/5 shadow-lg text-center lg:text-5xl md:text-4xl sm:text-4xl text-4xl rounded-full lg:py-[.8rem] md:py-[.8rem] sm:py-[.9rem] py-[.9rem] px-[1.5rem]">
                  3
                </h1>
              </div>
              <h2 className="lg:text-[30px] md:text-[26px] sm:text-[24px] text-[24px] text-center mt-[1rem] ">
                Import the inboxes
              </h2>
              <p className="text-center text-md mt-[1rem]">
                You can now import your inboxes directly into your preferred
                software, including Smartleads, Instantly, and more.
              </p>
            </div>
          </div>

          <div className="grid gap-[2rem] grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className="bg-slate-100/5 shadow-lg rounded-lg w-full relative h-[38rem]">
              <div className=" p-[2rem] border-b-[1px] border-l-cyan-200">
                <h2 className="text-2xl mb-4 font-normal text-slate-200">
                  Basic plan
                </h2>
                <div className="flex items-center gap-3">
                  <p className="text-5xl font-semibold mb-4 tracking-wide text-slate-200">
                    $1.<span className="text-6xl">6</span>
                  </p>
                  <div className="flex gap-3">
                    <p className="text-lg text-slate-200 mt-4">/ inbox</p>
                  </div>
                </div>

                <p className="text-xl text-slate-200 text-[16px] mt-3">
                  50 - 299 inboxes
                </p>
              </div>

              <div className="p-[2rem]">
                <h3 className="lg:text-[26px] md:text-[20px] sm:text-[18px] text-[18px] mb-0 font-semibold text-slate-200">
                  Features
                </h3>
                <ul className="grid gap-2 mt-4">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-200 text-md">
                      US Google Workspace business
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-200 text-md">
                      Done for you DKIM
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-200 text-md">
                      Done for you DMARC
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-200 text-md">
                      Done for you SPF
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-200 text-md">
                      Done for you MX
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 absolute w-full px-[2rem] bottom-[2rem]">
                <Link
                  href="https://calendly.com/admin-virtudigitech/30min"
                  target="_blank"
                >
                  <Button width="w-full" background="light">
                    Get started now
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-slate-100/5 shadow-lg rounded-lg w-full relative h-[38rem]">
              <div className="p-[2rem] border-b-[1px] border-l-cyan-200">
                <h2 className="text-2xl mb-4 font-normal text-slate-200">
                  Business Plan
                </h2>
                <div className="flex items-center gap-3">
                  <p className="text-5xl font-semibold mb-4 tracking-wide text-slate-200">
                    $1.<span className="text-6xl">4</span>
                  </p>
                  <div className="flex gap-3">
                    <p className="text-lg text-slate-200 mt-4">/ inbox</p>
                  </div>
                </div>

                <p className="text-xl text-slate-200 text-[16px] mt-3">
                  200 - 499 inboxes
                </p>
              </div>

              <div className="p-[2rem]">
                <h3 className="lg:text-[26px] md:text-[20px] sm:text-[18px] text-[18px] mb-0 font-semibold text-slate-200">
                  Features
                </h3>
                <ul className="grid gap-2 mt-4">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-200 text-md">
                      US Google Workspace business
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-200 text-md">
                      Done for you DKIM
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-200 text-md">
                      Done for you DMARC
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-200 text-md">
                      Done for you SPF
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-200 text-md">
                      Done for you MX
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 absolute w-full px-[2rem] bottom-[2rem]">
                <Link
                  href="https://calendly.com/admin-virtudigitech/30min"
                  target="_blank"
                >
                  <Button width="w-full" background="light">
                    Get a free consultation
                  </Button>
                </Link>
              </div>
            </div>

            <div className="card-gradient h-[38rem] shadow-md rounded-lg w-full lg:block md:hidden sm:block block relative">
              <div className="p-[2rem] ">
                <h2 className="text-2xl mb-4 font-normal text-slate-200">
                  Enterprise Plan
                </h2>
                <div className="flex items-center gap-3">
                  <p className="text-5xl font-semibold mb-4 tracking-wide text-slate-200">
                    $1,<span className="text-6xl">400</span>
                  </p>
                  <div className="flex gap-3">
                    <p className="text-lg text-slate-200 mt-4">/ Lifetime</p>
                  </div>
                </div>

                <p className="text-xl text-slate-200 text-[16px] mt-3">
                  700 inboxes
                </p>

                <h6 className="mt-[2rem] text-slate-200 text-xl font-semibold">
                  Special offer:
                </h6>
                <p className="text-white text-md text-[16px] mt-3">
                  Get setup for 700 inboxes and complete DNS configuration for
                  just $1,400. Optimize your email system with our reliable and
                  secure service. Start today!
                </p>
              </div>

              <div className="mt-6 absolute w-full px-[2rem] bottom-[2rem]">
                <h3 className="text-5xl mt-[2rem] text-white pb-[2rem]">
                  Let's Talk!
                </h3>
                <Link
                  href="https://calendly.com/admin-virtudigitech/30min"
                  target="_blank"
                >
                  <Button width="w-full" background="light">
                    Book a call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="tools lg:pb-[6rem] pb-[2rem]" id="FAQs">
        <Container>
          <div className="grid gap-[1rem]">
            <div className="grid items-center lg:gap-[4rem] md:gap-[3rem] sm:gap-[2rem] gap-[2rem] grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:mt-[4rem] md:mt-[3rem] sm:mt-[2rem] mt-[2rem]">
              <div className="rounded-lg overflow-hidden">
                <TitleCenter>Frequently asked questions</TitleCenter>

                <div className="mt-[2rem]">
                  <p className="text-white text-sm text-[16px] mt-3">
                    Explore our comprehensive FAQ section to quickly find
                    detailed responses to common inquiries and gain better
                    insights into our services.
                  </p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-sm">
                <FAQs />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="ads pt-[3rem] pb-[4rem]">
        <div>
          <BottomAds />
        </div>
      </div>
    </>
  );
}

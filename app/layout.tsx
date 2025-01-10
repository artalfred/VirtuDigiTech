import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./nav";
import { Footer } from "./footer";

const Park = localFont({
  src: "./fonts/Park.ttf",
  variable: "--font-geist-sans",
  weight: "100 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Your Digital Growth Partner",
  description:
    "Specializing in Web Development, Email Marketing, Strategic Planning, and IT Support, we deliver solutions to help your business thrive in the digital age.",
  openGraph: {
    title: "VirtuDigiTech - Your Digital Growth Partner",
    description:
      "Specializing in Web Development, Email Marketing, Strategic Planning, and IT Support, we deliver solutions to help your business thrive in the digital age.",
    type: "website",
    locale: "en_US",
    url: "https://www.virtudigitech.com/",
    siteName: "VirtuDigiTech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.jpeg" sizes="any" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Parkinsans:wght@300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ysabeau+SC:wght@1..1000&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={Park.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

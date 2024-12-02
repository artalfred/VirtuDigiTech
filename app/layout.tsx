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
        <link rel="icon" href="/icon.jpeg" sizes="any" />
      </head>
      <body className={Park.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

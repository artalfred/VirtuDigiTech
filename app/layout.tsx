import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./nav";
import { Footer } from "./footer";
import icons from "../app/favicon.ico";

const DMsans = localFont({
  src: "./fonts/DMSans.ttf",
  variable: "--font-geist-sans",
  weight: "100 300 400 500 600 700 800 900",
});

const Park = localFont({
  src: "./fonts/Park.ttf",
  variable: "--font-geist-sans",
  weight: "100 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "VirtuDigiTech",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Icon.jpeg" sizes="any" />
      </head>
      <body className={Park.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

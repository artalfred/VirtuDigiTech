"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface HoveredLinkProps {
  children: ReactNode;
}

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p transition={{ duration: 0.3 }} className="cursor-pointer green">
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="ashGray backdrop-blur-sm rounded-2xl overflow-hidden shadow-md"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4 ashGray"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full dark:bg-black dark:border-white/[0.2] bg-white shadow-input py-6"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string | StaticImport;
}) => {
  return (
    <Link href={href} className="flex gap-4">
      <div>
        <div
          className="p-3 shadow-sm rounded-full"
          style={{ background: "#F8F7F4" }}
        >
          <Image
            src={src}
            height={20}
            width={20}
            alt={title}
            className="rounded-md "
          />
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium leading-none mb-1 green dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[20rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: HoveredLinkProps) => {
  return (
    <Link
      {...rest}
      href={""}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};

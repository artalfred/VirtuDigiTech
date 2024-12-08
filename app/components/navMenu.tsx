"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/app/components/ui/navigation-menu";
import Link from "next/link";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Web Development",
    href: "/solutions/web-development",
    description: "Elevate Your Online Presence with Custom Web Solutions",
  },
  {
    title: "Virtual Solutions",
    href: "/solutions/virtual-solutions",
    description:
      "We provide reliable, efficient, and personalized support to save you time and boost your productivity",
  },
  {
    title: "App Development",
    href: "/contact",
    description:
      "Transform your ideas into powerful mobile and web applications with our expert app development services.",
  },
  {
    title: "Domain Management Services",
    href: "/contact",
    description:
      " Simplify domain operations with expert registration, DNS configuration, and seamless domain hosting services.",
  },
  {
    title: "Automation Services",
    href: "/contact",
    description:
      "Streamline workflows and boost efficiency with custom automation solutions, including task scheduling, email triggers, and integration across platforms.",
  },
  {
    title: "Server Setup and Configuration",
    href: "/contact",
    description:
      "Reliable server setup services, including configuration, optimization, and security enhancements, ensuring robust performance and seamless scalability for your applications.",
  },
];

export function Solutions() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <span className="green">Solutions</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((list) => {
                return (
                  <Link
                    href={list.href}
                    key={list.title}
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                  >
                    <div className="text-sm font-medium leading-none">
                      {list.title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {list.description}
                    </p>
                  </Link>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
// import { Icons } from "@/app/components/ui/Icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Web Development",
    href: "/contact",
    description: "Elevate Your Online Presence with Custom Web Solutions",
  },
  {
    title: "Virtual Solutions",
    href: "/docs/primitives/hover-card",
    description:
      "We provide reliable, efficient, and personalized support to save you time and boost your productivity",
  },
  {
    title: "App Development",
    href: "/docs/primitives/progress",
    description:
      "Transform your ideas into powerful mobile and web applications with our expert app development services.",
  },
  {
    title: "Domain Management Services",
    href: "/docs/primitives/scroll-area",
    description:
      " Simplify domain operations with expert registration, DNS configuration, and seamless domain hosting services.",
  },
  {
    title: "Automation Services",
    href: "/docs/primitives/tabs",
    description:
      "Streamline workflows and boost efficiency with custom automation solutions, including task scheduling, email triggers, and integration across platforms.",
  },
  {
    title: "Server Setup and Configuration",
    href: "/docs/primitives/tooltip",
    description:
      "Reliable server setup services, including configuration, optimization, and security enhancements, ensuring robust performance and seamless scalability for your applications.",
  },
];

export function Solutions() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

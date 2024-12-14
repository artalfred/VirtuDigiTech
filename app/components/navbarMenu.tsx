"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "@/app/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

import Web from "@/public/Images/Icons/Web.png";
import App from "@/public/Images/Icons/App.png";
import Automation from "@/public/Images/Icons/Automation.png";
import Virtual from "@/public/Images/Icons/Virtual.png";
import Domain from "@/public/Images/Icons/Domain.png";
import Server from "@/public/Images/Icons/Server.png";

export function NavbarMenu() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Solutions">
          <div className="text-sm grid grid-cols-2 gap-10 p-5">
            <ProductItem
              title="Web Development"
              href="https://algochurn.com"
              src={Web}
              description="Elevate Your Online Presence with Custom Web Solutions..."
            />
            <ProductItem
              title="Virtual Solutions"
              href="https://tailwindmasterkit.com"
              src={Virtual}
              description="We provide reliable, efficient, and personalized support to save you time..."
            />
            <ProductItem
              title="App Development"
              href="https://gomoonbeam.com"
              src={App}
              description="Transform your ideas into powerful mobile and web applications with our expert..."
            />
            <ProductItem
              title="Domain Management Services"
              href="https://userogue.com"
              src={Domain}
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI..."
            />
            <ProductItem
              title="Automation Services"
              href="https://userogue.com"
              src={Automation}
              description="Streamline workflows and boost efficiency with custom automation solutions..."
            />
            <ProductItem
              title="Server Setup Configuration"
              href="https://userogue.com"
              src={Server}
              description="Reliable server setup services, including configuration, optimization, and security..."
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

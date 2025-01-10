"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "@/app/components/ui/navbar-menu";

import Web from "@/public/Images/Icons/Web.png";
import Automation from "@/public/Images/Icons/Automation.png";
import Virtual from "@/public/Images/Icons/Virtual.png";
import Domain from "@/public/Images/Icons/Domain.png";

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
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="text-sm grid grid-cols-1 gap-10 p-5">
            <ProductItem
              title="Web Development"
              href="/solutions/web-development"
              src={Web}
              description="Elevate Your Online Presence with Custom Web Solutions..."
            />
            <ProductItem
              title="Virtual Solutions"
              href="/solutions/virtual-solutions"
              src={Virtual}
              description="We provide reliable, efficient, and personalized support to save you time..."
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

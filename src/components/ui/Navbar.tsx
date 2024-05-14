"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

export function NavbarSticky() {
  const navItems = [
    {
      name: "Hello",
      link: "/",
      
    },
    {
      name: "Baby",
      link: "/",
      
    },
    {
      name: "What's up",
      link: "/",
      
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      
    </div>
  );
}


/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";

import Link from "next/link";

const navData = [
  {
    id: "1",
    name: "Home",
    href: "#home",
  },
  {
    id: "2",
    name: "Projects",
    href: "#projects",
  },
  {
    id: "3",
    name: "Contact",
    href: "#contact",
  },
];

export default function NavComponent() {

  return (
    <nav className="flex backdrop-blur-md bg-black/50 py-5 sticky top-0 z-50 justify-between px-10 w-full items-center">
      
      
      <div className="hidden sm:flex items-center justify-center flex-grow">
        {navData.map((n) => {
          return (
            <Link key={n.id} href={n.href}>
              <button className="text-xl mx-6 text-[#E3E4E6] hover:text-[#BC3CD8] active:text-[#BC3CD8] focus:text-[#BC3CD8]">
                {n.name}
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

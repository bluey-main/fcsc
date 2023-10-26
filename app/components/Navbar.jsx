"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full  flex lg:flex-row flex-col justify-between items-center lg:px-10 lg:gap-y-0 gap-y-7 fixed top-0 z-50">
      <div className="lg:w-[50%] w-full justify-between lg:px-0 px-10  flex">
        <Image
          src={"/images/fcscLogo.png"}
          width={1000}
          height={1000}
          alt="fcsc logo"
          className="w-[25rem] h-[6rem] lg:ml-0 ml-[-3rem] scale-75 "
        />
        <Image
          src={isOpen ? "/close.svg" : "/hamburgerMenu.svg"}
          width={40}
          height={40}
          alt="HAMBURGER MENU"
          className="lg:hidden transition ease-in-out "
          onClick={toggle}
        />
      </div>
      <div
        className={`lg:w-[40%] w-full lg:px-0 px-8 lg:flex ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <ul className="p-6 rounded-lg lg:bg-transparent bg-customBlack  w-full flex justify-around lg:flex-row flex-col text-lg text-white lg:text-customBlack font-medium gap-y-5">
          <Link href={'/'}>
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link href={"/about"}>
            <li className="cursor-pointer">About Us</li>
          </Link>
          <li className="cursor-pointer">Gallery</li>
          <li className="cursor-pointer">Testimonial</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

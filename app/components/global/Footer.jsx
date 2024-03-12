import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-[60vh] w-full bg-[#181818] flex items-center lg:px-14">
      <div className="w-full h-[70%]  flex flex-col justify-center items-center text-sm">
        <div className="lg:w-[50%] w-full flex flex-col justify-center items-center">
          <Link href={"/"}>
            <div className="w-full flex justify-center items-center pt-3">
              {/* <Image
                src={"/images/coatofarms.png"}
                width={1000}
                height={1000}
                alt="fcsc logo"
                className="w-[6rem] h-full lg:ml-0 ml-[-3rem] scale-75 "
              /> */}

              <div>
                <p className="lg:text-xl  font-extrabold text-[#2D7E3C]">
                  {" "}
                  <span>
                    {" "}
                    Federal Civil Service Club, <br /> Yaba
                  </span>{" "}
                </p>
                <p className="text-xs text-[#B1302B] pr-8">
                  ...building a productive and ethical civil service
                </p>
              </div>
            </div>
          </Link>
          <ul className="p-6 rounded-lg   w-full flex justify-around items-center lg:flex-row flex-col  text-white  gap-y-5">
            <Link href={"/"}>
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link href={"/about"}>
              <li className="cursor-pointer">About Us</li>
            </Link>
            <Link href={"/gallery"}>
              <li className="cursor-pointer">Gallery</li>
            </Link>

            <Link href={"#testimonial"}>
              <li className="cursor-pointer">Testimonial</li>
            </Link>
          </ul>
        </div>

        <div className="w-full  flex justify-between items-center lg:flex-row flex-col text-white py-6 border-t-2 border-t-[#ffffff85]">
          <p className="lg:text-left text-center">
            © Copyright 2023, All Rights Reserved
          </p>
          <div className="flex gap-x-6 flex-row my-5 lg:my-0 gap-y-5 lg:gap-y-0">
            <Link href={"/contact"}>
              <p>Support</p>
            </Link>
            <p>Terms & Conditions</p>
            <p>Back to top</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import FadeInBox from "../animatedComponents/FadeInBox";
import FadeUpBox from "../animatedComponents/FadeUpBox";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const Section1 = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <div className="w-full  lg:h-[140vh]   bg-[#F5F5DC] relative overflow-hidden pb-20">
      <Image
        src={"/Lines.svg"}
        width={2000}
        height={10}
        alt="lines"
        className="translate-y-20 absolute top-0 bottom-0 hidden lg:block  "
      />

      <div
        className={
          'w-[18rem] h-[18rem] bg-green-500 rounded-full lg:translate-x-[-8rem] translate-x-[-10rem] hidden translate-y-28 absolute  lg:block bg-[url("/images/event1.jpg")] bg-cover'
        }
        data-aos="fade-right"
        data-aos-duration="1000"
      ></div>
      {/* <div className='w-[18rem] h-[18rem] bg-green-500 rounded-full translate-x-[-8rem] translate-y-28 absolute hidden lg:block bg-[url("/images/event1.jpg")] bg-cover'></div> */}
      <div
        className={
          'w-[18rem] h-[18rem] bg-red-500 rounded-full absolute right-0 translate-x-[5rem] translate-y-48 hidden lg:block bg-[url("/images/event2.jpg")] bg-cover'
        }
        data-aos="fade-right"
        data-aos-duration="1200"
      ></div>

      <div
        className={
          'w-[45rem] h-[8rem] bg-indigo-500 absolute bottom-24 rounded-r-full hidden lg:block bg-[url("/images/event3.jpg")] bg-cover'
        }
      ></div>

      <Image
        src={"/Polygon6.svg"}
        width={100}
        height={100}
        alt="polygon"
        className="absolute translate-x-96 translate-y-40 hidden lg:block"
      />
      <Image
        src={"/Star1.svg"}
        width={100}
        height={100}
        alt="polygon"
        className="absolute translate-x-56 translate-y-96  lg:block"
      />
      <Image
        src={"/Ellipse1.svg"}
        width={100}
        height={100}
        alt="polygon"
        className="absolute translate-x-[-10rem] translate-y-28 right-12  lg:block"
      />
      <Image
        src={"/Vector4.svg"}
        width={250}
        height={250}
        alt="polygon"
        className="absolute translate-x-[-15rem] translate-y-60 right-12  lg:block"
      />

      <div className="w-full h-full flex justify-center items-center z-10 relative">
        <div className="lg:w-[70%] w-full h-full flex flex-col pt-36 items-center gap-y-10">
          <div
            className={
              "w-[16rem] h-[2rem] text-customBlack outline outline-2 rounded-3xl flex justify-center items-center gap-x-6"
            }
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <Image
              src={"/ri-rocket-fill.svg"}
              width={25}
              height={25}
              alt="rocket"
            />
            <p className="text-sm">the best you can get</p>
          </div>

          <div className={"flex flex-col gap-y-10 px-5"}>
            <h1
              className="lg:text-7xl text-4xl text-center font-bold text-customBlack"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Elevate Your Occasion: <br />A Venue as Grand as Your Dreams{" "}
              <br />{" "}
              <span
                className={`${dancingScript.className} lg:text-5xl text-3xl`}
                data-aos="fade-up"
              data-aos-duration="1400"
              >
                {" "}
                Moderate and Accessible
              </span>
            </h1>
            <p
              className="lg:text-2xl text-xl font-semibold text-center lg:px-44 px-10 text-customBlackFaded"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              Discover Our Premier Event Center, Tailored for Unforgettable
              Moments
            </p>

            <div data-aos="fade-up" data-aos-duration="1400" delay={0.1}>
              <div className="w-full flex gap-x-5 justify-center items-center">
                <Link href={"/contact"}>
                  <div className="lg:w-[11rem] h-[4rem] w-[10rem]  text-white bg-customGreen flex p-5 justify-center items-center gap-x-3 rounded-2xl lg:text-lg text-base font-semibold">
                    <p>Contact Us</p>
                    <Image
                      src={"/plane.svg"}
                      width={20}
                      height={20}
                      alt="plane"
                    />
                  </div>
                </Link>

                <Link href={"/#gallery"}>
                  <div className="lg:w-[11rem] w-[10rem] h-[4rem] text-customBlack  border-black border-2 flex p-5 justify-center items-center gap-x-3 rounded-2xl lg:text-lg text-base font-semibold">
                    <p>View Gallery</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;

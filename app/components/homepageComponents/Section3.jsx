import React from "react";
import Image from "next/image";
import FadeRightBox from "../animatedComponents/FadeRightBox";
import FadeLeftBox from "../animatedComponents/FadeLeftBox";
import FadeUpBox from "../animatedComponents/FadeUpBox";
import Link from "next/link";

const Section3 = () => {
  return (
    <div className="w-full lg:h-screen h-[80vh] bg-[#F5F5DC]  flex justify-center items-center overflow-hidden py-[80rem]">
      <div className="w-full lg:h-[80%] h-[30rem]  flex relative">
        <FadeRightBox
          styles={
            'lg:w-[55%] w-full  h-full  lg:rounded-r-[10rem] bg-[url("/images/main-center-images/img13.jpg")] bg-cover overflow-hidden'
          }
        >
          <div className="w-full h-full bg-[#0000006b]"></div>
        </FadeRightBox>

        <div className="lg:w-[45%] w-full h-full  flex flex-col justify-center lg:px-16 px-6 lg:gap-y-6 gap-y-9 lg:static absolute">
          <FadeLeftBox>
            <div className="w-[11rem] h-[2rem] lg:text-customBlack text-white outline outline-1 rounded-3xl flex justify-center items-center gap-x-3">
              <Image
                src={"/ri-rocket-fill.svg"}
                width={25}
                height={25}
                alt="rocket"
                className="hidden lg:block"
              />
              <p className="text-xs">the best you can get</p>
            </div>
          </FadeLeftBox>

          <div>
          <FadeLeftBox delay={0.2}>
            <h1 className="lg:text-5xl text-4xl font-bold lg:text-customBlack text-white">
              Elevate Your Event at Our Grand Hall
            </h1>
            
          </FadeLeftBox>
          <FadeRightBox delay={0.5}>
          <p className="lg:text-xl text-lg font-medium lg:text-customBlackFaded text-white">
              Secure your special occasion today. Our Grand Hall is in high
              demand
            </p>
          </FadeRightBox>
          </div>
        

          <FadeUpBox yaxis={50} delay={0.3}>
            <Link href={"/contact"}>
              <div className="w-[11rem] h-[4rem] text-white bg-customGreen flex p-5 justify-center items-center gap-x-3 rounded-2xl text-lg font-semibold">
                <p>Contact Us</p>
                <Image src={"/plane.svg"} width={20} height={20} alt="plane" />
              </div>
            </Link>
          </FadeUpBox>
        </div>
      </div>
    </div>
  );
};

export default Section3;

import React from "react";
import Image from "next/image";
import FadeUpBox from "../animatedComponents/FadeUpBox";

const AboutSection1 = () => {
  return (
    <div className="w-full min-h-[150vh] flex flex-col justify-center items-center gap-y-8 pt-20 lg:px-36 mb-14 overflow-hidden">
      <div className="w-full flex flex-col justify-center gap-y-5 items-center">
        <FadeUpBox yaxis={50}>
          <p className="text-5xl text-customBlack">About Us</p>
        </FadeUpBox>

        <FadeUpBox delay={0.5} yaxis={50}>
          <p className="text-xl text-customBlackFaded text-center">
            Crafting Memories, Shaping Elegance, Celebrating Life
          </p>
        </FadeUpBox>
      </div>

      <FadeUpBox styles={"w-full h-[40rem]"} yaxis={50} delay={0.7}>
        <Image
          src={"/images/event5.jpg"}
          width={1000}
          height={1000}
          alt="event hall"
          className="w-full h-full rounded-xl"
        />
      </FadeUpBox>
      <FadeUpBox styles={"w-full lg:text-left text-center"}>
        <p className="text-xl">
          Federal Civil Service Club,Yaba is one of the federal clubs in Nigeria
          under the office of the Head of the civil service of the federation of
          nigeria the past chairmen of Federal Civil Sevice Club Yaba
        </p>

        <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-x-8 lg:gap-y-0 gap-y-11  py-10">
          <div className="w-[16rem]">
            <div className="w-[16rem] h-[16rem] object-cover overflow-hidden rounded-full">
              <Image src={'/images/directorImages/dir1.jpg'} width={1000} height={1000} alt="image" className="w-full h-full"/>
            </div>
            <p className="text-center text-lg mt-4">
              Dr. Chukwu emeka
            </p>
          </div>

          <div className="w-[16rem] ">
          <div className="w-[16rem] h-[16rem] object-cover overflow-hidden rounded-full">
              <Image src={'/images/directorImages/dir2.jpg'} width={1000} height={1000} alt="image" className="w-full h-full"/>
            </div>
            <p className="text-center text-lg mt-4">
              Dr. Williams stone
            </p>
          </div>
        </div>
      </FadeUpBox>
    </div>
  );
};

export default AboutSection1;

import React from "react";
import Image from "next/image";
import FadeRightBox from "../animatedComponents/FadeRightBox";
import FadeUpBox from "../animatedComponents/FadeUpBox";

const Section2 = () => {
  return (
    <div className='w-full lg:h-screen h-[50vh] bg-pink-400 bg-[url("/images/main-center-images/img5.jpg")] bg-cover bg-center overflow-hidden'>
      <div className="w-full h-full bg-[#00000086] flex lg:items-end items-center">
        <div className="w-full lg:h-[50%]  lg:px-24 flex flex-col gap-y-7 text-white lg:justify-start lg:items-start justify-center items-center px-9  ">
          <FadeRightBox>
            <h1 className="lg:text-5xl text-4xl font-bold text-center lg:text-start">
              Our Grand Event Center
            </h1>
          </FadeRightBox>

          <FadeRightBox delay={0.4}>
          <p className="text-xl font-medium text-center lg:text-start">
            Step into our Grand Hall and experience timeless{" "}
            <br className="hidden lg:block" /> elegance
          </p>
          </FadeRightBox>

          <FadeUpBox delay={0.5} yaxis={50}>
          <div className="lg:w-[5rem] lg:h-[5rem] w-[3rem] h-[3rem] rounded-full bg-white flex justify-center items-center">
            <div className="w-1/2 h-1/2">
            <Image src={"/arrow.svg"} width={40} height={40} alt="arrow icon" className="w-full h-full"/>

            </div>
          </div>
          </FadeUpBox>
      
         
        </div>
      </div>
    </div>
  );
};

export default Section2;

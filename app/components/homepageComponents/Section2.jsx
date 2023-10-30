import React from "react";
import Image from "next/image";
import FadeRightBox from "../animatedComponents/FadeRightBox";
import FadeUpBox from "../animatedComponents/FadeUpBox";

const Section2 = () => {
  return (
    <div className='w-full h-screen bg-pink-400 bg-[url("/images/event5.jpg")] bg-cover bg-center overflow-hidden'>
      <div className="w-full h-full bg-[#00000086] flex items-end">
        <div className="w-full h-[50%] lg:px-24 flex flex-col gap-y-7 text-white lg:justify-start lg:items-start justify-center items-center px-9  ">
          <FadeRightBox>
            <h1 className="text-5xl font-bold text-center lg:text-start">
              Our Grand Hall
            </h1>
          </FadeRightBox>

          <FadeRightBox delay={0.4}>
          <p className="text-2xl font-medium text-center lg:text-start">
            Step into our Grand Hall and experience timeless{" "}
            <br className="hidden lg:block" /> elegance
          </p>
          </FadeRightBox>

          <FadeUpBox delay={0.5} yaxis={50}>
          <div className="w-[5rem] h-[5rem] rounded-full bg-white flex justify-center items-center">
            <Image src={"/arrow.svg"} width={40} height={40} alt="arrow icon" />
          </div>
          </FadeUpBox>
      
         
        </div>
      </div>
    </div>
  );
};

export default Section2;

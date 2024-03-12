import React from "react";
import Image from "next/image";
import FadeRightBox from "../animatedComponents/FadeRightBox";
import FadeUpBox from "../animatedComponents/FadeUpBox";

const Section2 = () => {
  return (
    <div className='w-full lg:h-[70vh] h-[80vh] bg-pink-400 bg-[url("/images/main-center-images/img5.jpg")] bg-fixed bg-cover bg-center overflow-hidden'>
      <div className="w-full h-full bg-[#00000086] flex lg:items-center items-center">
        <div className="w-full lg:h-[50%]  lg:px-24 flex flex-col gap-y-7 text-white lg:justify-center lg:items-center justify-center items-center px-9  ">
          <div data-aos="fade-up" data-aos-duration="1200">
            <h1 className="lg:text-5xl text-4xl font-bold text-center lg:text-start">
              Our Grand Event Center
            </h1>
          </div>

          <div data-aos="fade-up" data-aos-duration="1400" delay={0.4}>
            <p className="text-xl font-medium text-center lg:text-start">
              Step into our Grand Hall and experience timeless elegance
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <div className="lg:w-[5rem] lg:h-[5rem] w-[3rem] h-[3rem] rounded-full bg-white flex justify-center items-center">
              <div className="w-1/2 h-1/2">
                <Image
                  src={"/arrow.svg"}
                  width={40}
                  height={40}
                  alt="arrow icon"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;

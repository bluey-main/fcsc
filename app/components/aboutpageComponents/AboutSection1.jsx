import React from "react";
import Image from "next/image";
import FadeUpBox from "../animatedComponents/FadeUpBox";

const AboutSection1 = () => {
  return (
    <div className="w-full h-[150vh] flex flex-col justify-center items-center gap-y-8 pt-20 lg:px-36 mb-14 overflow-hidden">
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

      <FadeUpBox styles={"w-full h-[50%]"} yaxis={50} delay={0.7}>
        <Image
          src={"/images/event5.jpg"}
          width={1000}
          height={1000}
          alt="event hall"
          className="w-full h-full rounded-xl"
        />
      </FadeUpBox>
      <FadeUpBox styles={"w-full lg:text-left text-center"}>
        <p>
          Lorem ipsum dolor sit amet consectetur. Lectus aliquam mi aliquet odio
          pulvinar ornare egestas. In vitae tempus amet nunc dictum.Lorem ipsum
          dolor sit amet consectetur. Lectus aliquam mi aliquet odio pulvinar
          ornare egestas. In vitae tempus amet nunc dictum.Lorem ipsum dolor sit
          amet consectetur. Lectus aliquam mi aliquet odio pulvinar ornare
          egestas. In vitae tempus amet nunc dictum.Lorem ipsum dolor sit amet
          consectetur. Lectus aliquam mi aliquet odio pulvinar ornare egestas.
          In vitae tempus amet nunc dictum.
        </p>
      </FadeUpBox>
    </div>
  );
};

export default AboutSection1;

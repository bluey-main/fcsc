"use client";
import React, { useState } from "react";
import Image from "next/image";
import FadeLeftBox from "../animatedComponents/FadeLeftBox";
const Section5 = () => {
  let [index, setIndex] = useState(0);

  const incrementIndex = () => {
    setIndex((index + 1) % testimonials.length);

    console.log(index);
  };

  const decrementIndex = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);

    console.log(index);
  };

  const testimonials = [
    {
      name: "Adam",
      role: "Event planner",
      comment:
        "I would recommend fcsc for anyone trying to get the word out about their business. It has saved me so much time!",
    },
    {
      name: "James",
      role: "Student",
      comment:
        "If you are a business owner, and you don't have fcsc in your toolkit just yet, I highly recommend that you check it out.!",
    },
    {
      name: "Glory",
      role: "Worker",
      comment:
        "We don’t need to spend as much time in meetings now that we use fcsc..!",
    },
    {
      name: "Maryjane",
      role: "Student",
      comment:
        "I recently attended an event at FCSC and was incredibly satisfied with the experience. The event was perfectly organized and ran smoothly. I would highly recommend FCSC for any event!",
    },
  ];
  return (
    <div className="w-full h-screen   bg-[url('/images/main-center-images/img13.jpg')] bg-cover overflow-hidden" id="testimonial">
      <div className="w-full h-full bg-[#0000006b] py-16 flex justify-end ">
        <FadeLeftBox
          styles={
            "lg:w-[55%] w-full  h-full  rounded-l-[10rem]   overflow-hidden "
          }
        >
          <div className="w-full h-full   bg-[#000000ab] lg:px-32 px-10 flex justify-center flex-col text-white gap-y-20">
            <FadeLeftBox delay={0.3}>
              <p className="text-4xl font-bold lg:text-left text-center">
                What Our Clients Say
              </p>
            </FadeLeftBox>

            <FadeLeftBox delay={0.5}>
              <div className="lg:h-1/2 h-[40%] flex   flex-col gap-y-8">
                <Image
                  src={"/quote.svg"}
                  width={50}
                  height={50}
                  alt="quote icon"
                />
                <div className="w-full h-[6rem] ">
                  <p className="lg:text-left text-center">
                    {testimonials[index].comment}
                  </p>
                </div>

                <div className="w-full h-[30%]  flex">
                  <div className="w-1/2 h-full  flex flex-col gap-y-1">
                    <Image
                      src={"/Star.svg"}
                      width={90}
                      height={90}
                      alt="stars icon"
                    />
                    <p>{testimonials[index].name}</p>
                    <p className="text-sm">{testimonials[index].role}</p>
                  </div>
                  <div className="w-1/2 h-full flex gap-x-2 justify-end items-center ">
                    <div
                      className="w-[2rem] h-[2rem] border-white border-2 rounded-full flex justify-center items-center cursor-pointer"
                      onClick={decrementIndex}
                    >
                      <p>-</p>
                    </div>
                    <div
                      className="w-[2rem] h-[2rem] bg-gray-50 rounded-full flex justify-center items-center text-customBlack cursor-pointer "
                      onClick={incrementIndex}
                    >
                      <p>+</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeLeftBox>
          </div>
        </FadeLeftBox>
      </div>
    </div>
  );
};

export default Section5;

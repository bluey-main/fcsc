import React from 'react'
import Image from 'next/image'
import BrickComponent from './BrickComponent'
import FadeUpBox from '../animatedComponents/FadeUpBox'
import FadeRightBox from '../animatedComponents/FadeRightBox'

const AboutSection2 = () => {
  return (
    <div className="w-full lg:h-[130vh]   flex justify-center items-center flex-col gap-y-12 lg:pt-0 pt-10 mb-10 bg-[#F5F5DC] overflow-hidden">
    <div className="w-full flex flex-col  justify-center gap-y-5 items-center">
        <FadeUpBox yaxis={50}>
        <p className="text-5xl text-customBlack">Why Choose Us</p>

        </FadeUpBox>

        <FadeUpBox yaxis={50} delay={0.4}>
        <p className="text-xl text-customBlackFaded text-center">
        Where Excellence and Elegance Unite to Elevate Your Event
      </p>
        </FadeUpBox>

    </div>

    <div className="w-full lg:h-[70%] h-[90%] flex lg:flex-row gap-y-9 flex-col lg:px-28 lg:gap-x-6">
        <FadeRightBox styles={"lg:w-1/2 w-full lg:h-full h-1/2  overflow-hidden rounded-3xl py-3 lg:px-0 px-5"}>
        <Image
          src={"/images/event4.jpg"}
          width={1000}
          height={1000}
          alt="a hall image"
          className="w-full h-full rounded-3xl"
        />
        </FadeRightBox>
  
      <div className="lg:w-1/2 w-full lg:h-full lg:gap-y-0 gap-y-6 lg:px-0 pr-7  flex flex-col justify-around">
        <BrickComponent mainColor={'bg-[#AAE2CD]'} miniBoxColor={'bg-[#2BB682]'} title={'Elegant Celebrations'} subtitle={"Elevate your special moments with our venue's timeless elegance. Discover a space designed to make your event shine"} delay={0.2}/>

        <BrickComponent mainColor={'bg-[#FFE1AA]'} miniBoxColor={'bg-[#FFB42B]'} title={'Exceptional Service'} subtitle={"Experience exceptional service from inquiry to farewell. We're committed to your vision and making your event extraordinary"} delay={0.3}/>

        <BrickComponent mainColor={'bg-[#AAE2CD]'} miniBoxColor={'bg-[#2BB682]'} title={'Versatility and Adaptability'} subtitle={"Our space adapts to your needs, whether it's a wedding, seminar, or celebration. "} delay={0.4}/>

        <BrickComponent mainColor={'bg-[#FFE1AA]'} miniBoxColor={'bg-[#FFB42B]'} title={'Unforgettable Memories'} subtitle={"We craft events that leave lasting memories. Every detail is designed to make your celebration truly unforgettable"} delay={0.5}/>
       
      </div>
    </div>
  </div>
  )
}

export default AboutSection2
import React from 'react'
import Image from 'next/image'

const Section3 = () => {
  return (
    <div className='w-full h-screen bg-[#F5F5DC]  flex justify-center items-center'>
    <div className='w-full h-[80%]  flex relative'>
      <div className='lg:w-[55%] w-full  h-full  rounded-r-[10rem] bg-[url("/images/event4.jpg")] bg-cover overflow-hidden'>
        <div className='w-full h-full bg-[#0000006b]'></div>
      </div>
      <div className='lg:w-[45%] w-full h-full  flex flex-col justify-center lg:px-16 px-6 gap-y-6 lg:static absolute'>
        <div className='w-[11rem] h-[2rem] lg:text-customBlack text-white outline outline-1 rounded-3xl flex justify-center items-center gap-x-3'>
          <Image src={'/ri-rocket-fill.svg'} width={25} height={25} alt='rocket' className='hidden lg:block' />
          <p className='text-xs'>the best you can get</p>
        </div>

        <h1 className='text-5xl font-bold lg:text-customBlack text-white'>Elevate Your Event at Our Grand Hall</h1>
        <p className='text-xl font-medium lg:text-customBlackFaded text-white'>Secure your special occasion today. Our Grand Hall is in high demand</p>
        <div className='w-[11rem] h-[4rem] text-white bg-customGreen flex p-5 justify-center items-center gap-x-3 rounded-2xl text-lg font-semibold'>
          <p>Contact Us</p>
          <Image src={'/plane.svg'} width={20} height={20} alt='plane' />
        </div>
      </div>
    </div>

  </div>

  )
}

export default Section3
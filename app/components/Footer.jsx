import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="h-[60vh] w-full bg-[#181818] flex items-end lg:px-14">
    <div className="w-full h-[70%]  flex flex-col justify-center items-center">
      <div className="lg:w-[50%] w-full flex flex-col justify-center items-center">
        <Image
          src={"/images/fcscLogo.png"}
          width={1000}
          height={1000}
          alt="fcsc logo"
          className="w-[25rem] h-[6rem] lg:ml-0 ml-[-3rem] scale-75 "
        />
        <ul className="p-6 rounded-lg   w-full flex justify-around flex-row   text-lg text-white lfont-medium gap-y-5">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Gallery</li>
          <li className="cursor-pointer">Testimonial</li>
        </ul>
      </div>

      <div className="w-full  flex justify-between items-center text-white py-6 border-t-2 border-t-[#ffffff85]">
        <p className="lg:text-left text-center">© Copyright 2023, All Rights Reserved</p>
        <div className="flex gap-x-6 lg:flex-row flex-col gap-y-5 lg:gap-y-0">
          <p>Support</p>
          <p>Terms & Conditions</p>
          <p>Back to top</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer
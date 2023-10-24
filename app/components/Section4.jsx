import React from 'react'

const Section4 = () => {
  return (
    <div className='w-full lg:h-[150vh] h-[200vh] '>
    <div className='w-full  flex flex-col justify-center items-center gap-y-6 pt-24 pb-7'>
      <h1 className='text-5xl font-bold text-center text-customBlack'>Our Gallery</h1>
      <p className='text-xl font-semibold text-center text-customBlackFaded'>Explore our gallery featuring unforgettable events hosted in our Main Hall</p>
    </div>

    <div className='w-full h-[60%]  grid grid-rows-4 grid-flow-col gap-4 py-5'> 
      <div class="row-span-4 col-span-1 bg-purple-500  rounded-2xl bg-[url('/images/event1.jpg')] bg-cover bg-center"></div>
      <div class="row-span-2 col-span-1  bg-purple-500 rounded-2xl bg-[url('/images/event2.jpg')] bg-cover bg-center"></div>
      <div class="row-span-2 col-span-1  bg-purple-500 rounded-2xl bg-[url('/images/event3.jpg')] bg-cover bg-center"></div>
      <div class="row-span-3 col-span-1  bg-purple-500 rounded-2xl bg-[url('/images/event4.jpg')] bg-cover bg-center hidden lg:block"></div>
      <div class="row-span-1 col-span-4  bg-purple-500 rounded-2xl bg-[url('/images/event5.jpg')] bg-cover bg-center hidden lg:block"></div>
      <div class="row-span-1 col-span-3  bg-purple-500 rounded-2xl bg-[url('/images/event2.jpg')] bg-cover bg-center hidden lg:block"></div>
      <div class="row-span-2 col-span-1  bg-purple-500 rounded-2xl bg-[url('/images/event3.jpg')] bg-cover bg-center hidden lg:block"></div>
      <div class="row-span-2 col-span-2  bg-purple-500 rounded-2xl bg-[url('/images/event1.jpg')] bg-cover bg-center hidden lg:block"></div>
    </div>

    <div className='w-full  flex justify-center items-center py-10'>
    <div className='lg:w-[11rem] w-[10rem] h-[4rem] text-customBlack  border-black border-2 flex p-5 justify-center items-center gap-x-3 rounded-2xl lg:text-lg text-base font-semibold'>
        <p>See More</p>
     
      </div>
    </div>
  </div>

  )
}

export default Section4
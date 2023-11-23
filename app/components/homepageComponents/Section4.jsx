"use client";
import React from "react";
import FadeUpBox from "../animatedComponents/FadeUpBox";
import FadeRightBox from "../animatedComponents/FadeRightBox";
import FadeLeftBox from "../animatedComponents/FadeLeftBox";
import FadeInBox from "../animatedComponents/FadeInBox";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Section4 = () => {
  const image1 = "/images/main-center-images/img2.jpg";
  const image2 = "/images/main-center-images/img3.jpg";
  const image3 = "/images/main-center-images/img4.jpg";
  const image4 = "/images/main-center-images/img5.jpg";
  const image5 = "/images/main-center-images/img6.jpg";
  const image6 = "/images/main-center-images/img7.jpg";
  const image7 = "/images/main-center-images/img8.jpg";
  const image8 = "/images/main-center-images/img9.jpg";

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const showImage = (image, index) => {
    //set imageToShow to be the one that's been clicked on
    setImageToShow(image);

    setCurrentIndex(index);
    //set lightbox visibility to true
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);

     // Remove the 'overflow: hidden' style when the lightbox is closed
     document.body.style.overflow = "visible";
  };

  useEffect(() => {
    // Add the 'overflow: hidden' style when the lightbox is displayed
    if (lightboxDisplay) {
      document.body.style.overflow = "hidden";
    }
    // Remove the 'overflow: hidden' style when the component is unmounted or lightbox is closed
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [lightboxDisplay]);

  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    let nextImage = images[currentIndex + 1];
    setImageToShow(nextImage);

    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <>
      {lightboxDisplay ? (
        <div
          className="z-50 fixed top-0 left-0 w-full h-full bg-[#000000b2] flex items-center justify-between"
          onClick={hideLightBox}
        >
          <div className="w-full h-full flex items-center justify-between px-4">
            {/* //previous button */}
            <button
              onClick={showPrev}
              className="border-2 text-white text-7xl bg-[#00000086] pt-1 lg:static absolute left-0 w-[5rem] rounded-lg"
            >
              &lt;
            </button>
            <div className="lg:max-w-[90vw]  lg:h-[80vh] w-[30rem] h-[30rem] object-cover">
              <Image
                src={imageToShow}
                width={1000}
                height={1000}
                alt="image"
                className="w-full h-full"
              />
            </div>
            {/* //next button */}
            <button
              onClick={showNext}
              className="border-2 text-white text-7xl bg-[#00000086] pt-1 lg:static absolute right-0 w-[5rem] rounded-lg"
            >
            &gt;
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <div
        className="w-full lg:h-[150vh] min-h-[90vh] overflow-hidden pb-24 "
        id="gallery"
      >
        <div className="w-full  flex flex-col justify-center items-center gap-y-6 lg:pt-24 pt-10 pb-10 px-6">
          <FadeUpBox>
            <h1 className="lg:text-5xl text-4xl font-bold text-center text-customBlack">
              Our Gallery
            </h1>
          </FadeUpBox>

          <FadeUpBox delay={0.2} yaxis={50}>
            <p className="lg:text-xl text-lg font-semibold text-center text-customBlackFaded">
              Explore our gallery featuring unforgettable events hosted in our
              Main Hall
            </p>
          </FadeUpBox>
        </div>

        <div className="w-full h-[60%]  grid grid-rows-4 grid-flow-col gap-4 py-5 lg:px-0 px-6">
          <FadeRightBox
            styles={`row-span-4 col-span-1 bg-purple-500 relative rounded-2xl hidden  overflow-hidden`}
          >
            <Image
              src={images[0]}
              width={1000}
              height={1000}
              alt="image"
              className="w-full h-full"
              onClick={() => showImage(images[0], 0)}
            />
          </FadeRightBox>
          <FadeUpBox
            styles={
              "row-span-2 col-span-1  bg-purple-500 rounded-2xl overflow-hidden bg-cover bg-center"
            }
          >
            <Image
              src={images[1]}
              width={1000}
              height={1000}
              alt="image"
              className="w-full h-full"
              onClick={() => showImage(images[1], 1)}
            />
          </FadeUpBox>
          <FadeLeftBox
            styles={
              "row-span-2 col-span-1  bg-purple-500 rounded-2xl overflow-hidden bg-cover bg-center"
            }
          >
            <Image
              src={images[2]}
              width={1000}
              height={1000}
              alt="image"
              className="w-full h-full"
              onClick={() => showImage(images[2], 2)}
            />
          </FadeLeftBox>
          <FadeInBox
            styles={
              "row-span-3 col-span-1  bg-purple-500 rounded-2xl overflow-hidden bg-cover bg-center hidden lg:block"
            }
          >
            <Image
              src={images[3]}
              width={1000}
              height={1000}
              alt="image"
              className="w-full h-full"
              onClick={() => showImage(images[3], 3)}
            />
          </FadeInBox>
          <FadeRightBox
            styles={
              "row-span-1 col-span-4  bg-purple-500 rounded-2xl overflow-hidden flex justify-center items-center hidden lg:block"
            }
          >
            <Image
              src={images[4]}
              width={1000}
              height={1000}
              alt="image"
              className="w-full h-screen"
              onClick={() => showImage(images[4], 4)}
            />
          </FadeRightBox>
          <FadeUpBox
            styles={
              "row-span-1 col-span-3  bg-purple-500 rounded-2xl overflow-hidden bg-cover bg-center hidden lg:block"
            }
          >
            <Image
              src={images[5]}
              width={1000}
              height={1000}
              alt="image"
              className="w-full h-screen"
              onClick={() => showImage(images[5], 5)}
            />
          </FadeUpBox>
          <FadeLeftBox
            styles={
              "row-span-2 col-span-1  bg-purple-500 rounded-2xl overflow-hidden bg-cover bg-center hidden lg:block"
            }
          >
            <Image
              src={images[6]}
              width={1000}
              height={1000}
              alt="image"
              className="w-full h-full"
              onClick={() => showImage(images[6], 6)}
            />
          </FadeLeftBox>
          <FadeInBox
            styles={
              "row-span-2 col-span-2  bg-purple-500 rounded-2xl overflow-hidden bg-cover bg-center hidden lg:block"
            }
          >
            <Image
              src={images[7]}
              width={1000}
              height={1000}
              alt="image"
              className="w-full h-full "
              onClick={() => showImage(images[7], 7)}
            />
          </FadeInBox>

          {/* <div class="row-span-4 col-span-1 bg-purple-500  rounded-2xl bg-[url('/images/event1.jpg')] bg-cover bg-center"></div>
        <div class="row-span-2 col-span-1  bg-purple-500 rounded-2xl bg-[url('/images/event2.jpg')] bg-cover bg-center"></div>
        <div class="row-span-2 col-span-1  bg-purple-500 rounded-2xl bg-[url('/images/event3.jpg')] bg-cover bg-center"></div>
        <div class="row-span-3 col-span-1  bg-purple-500 rounded-2xl bg-[url('/images/event4.jpg')] bg-cover bg-center hidden lg:block"></div>
        <div class="row-span-1 col-span-4  bg-purple-500 rounded-2xl bg-[url('/images/event5.jpg')] bg-cover bg-center hidden lg:block"></div>
        <div class="row-span-1 col-span-3  bg-purple-500 rounded-2xl bg-[url('/images/event2.jpg')] bg-cover bg-center hidden lg:block"></div>
        <div class="row-span-2 col-span-1  bg-purple-500 rounded-2xl bg-[url('/images/event3.jpg')] bg-cover bg-center hidden lg:block"></div>
        <div class="row-span-2 col-span-2  bg-purple-500 rounded-2xl bg-[url('/images/event1.jpg')] bg-cover bg-center hidden lg:block"></div> */}
        </div>

        <FadeUpBox
          styles={"w-full  flex justify-center items-center py-10"}
          yaxis={50}
        >
          <Link href={"/gallery"}>
            <div className="lg:w-[11rem] w-[10rem] h-[4rem] text-customBlack  border-black border-2 flex p-5 justify-center items-center gap-x-3 rounded-2xl lg:text-lg text-base font-semibold">
              <p>See More</p>
            </div>
          </Link>
        </FadeUpBox>
      </div>
    </>
  );
};

export default Section4;

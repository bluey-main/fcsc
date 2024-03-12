"use client";
import React from "react";
import FadeUpBox from "../animatedComponents/FadeUpBox";
import FadeRightBox from "../animatedComponents/FadeRightBox";
import FadeLeftBox from "../animatedComponents/FadeLeftBox";
import FadeInBox from "../animatedComponents/FadeInBox";
import { useState, useEffect } from "react";
import { register } from "swiper/element/bundle";
import { FaCaretLeft,FaCaretRight } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import Footer from "../global/Footer";

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
    image1,

    // image6,
    // image7,
    // image8,
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
    register();
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
          <div className="w-full h-full flex items-center justify-between gap-x-5 px-4">
            {/* //previous button */}
            <FaCaretLeft onClick={showPrev} className="text-white lg:w-[8rem] lg:h-[8rem] w-[3rem] h-[8rem]"/>
            <div className="lg:w-[70vw]  lg:h-[80vh] w-[70rem] h-[30rem] object-cover">
              <Image
                src={imageToShow}
                width={1000}
                height={1000}
                alt="image"
                className="w-full h-full"
              />
            </div>
            {/* //next button */}
            <FaCaretRight  onClick={showNext} className="text-white lg:w-[8rem] lg:h-[8rem] w-[3rem] h-[8rem]"/>

          </div>
        </div>
      ) : (
        ""
      )}

      <div className="w-full lg:h-screen bg-red py-9 flex justify-center lg:flex-row flex-col items-center overflow-hidden">
        <div className="lg:w-[40%] w-full h-full  flex flex-col justify-center bg-blue lg:items-start items-center  gap-y-6 lg:pt-24 pt-10 pb-10 lg:px-12">
          <div data-aos="fade-right" data-aos-duration="1400">
            <h1 className="lg:text-6xl text-4xl font-bold lg:text-left text-center text-customBlack">
              Our Gallery
            </h1>
          </div>

          <div data-aos="fade-right" data-aos-duration="1400">
            <p className="lg:text-xl text-lg font-semibold lg:text-left text-center lg:px-0 px-9 text-customBlackFaded">
              Explore our gallery featuring unforgettable events hosted in our
              Main Hall
            </p>
          </div>

          <div
            styles={"w-full  flex justify-center items-center py-10"}
            yaxis={50}
          >
            <Link href={"/gallery"}>
              <div
                className="lg:w-[11rem] w-[10rem] h-[4rem] text-white bg-customGreen flex p-5 justify-center items-center gap-x-3 rounded-2xl lg:text-lg text-base font-semibold"
                data-aos="fade-right"
                data-aos-duration="1400"
              >
                <p>See More</p>
              </div>
            </Link>
          </div>
        </div>

        <div
          className="lg:w-[60%] w-full lg:h-full  bg-blue-"
          data-aos="fade-left"
          data-aos-duration="1400"
        >
          <swiper-container
            style={{
              height: "100%",
              "--swiper-navigation-color": "#a12f27ff",
              "--swiper-pagination-color": "#008000ff",
            }}
            pagination="false"
            navigation="true"
            space-between="30"
            centered-slides="true"
            autoplay-delay="3000"
            autoplay-disable-on-interaction="false"
          >
            {images.map((image, index) => (
              <swiper-slide key={index} >
                <div className="w-full h-full flex justify-center items-center rounded-xl overflow-hidden" onClick={() => showImage(image)}>
                  <Image
                    src={image}
                    width={1000}
                    height={1000}
                    alt=""
                    className="w-[70%] h-[70%]"
                    objectFit="contain"
                  />
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>

    </>
  );
};

export default Section4;

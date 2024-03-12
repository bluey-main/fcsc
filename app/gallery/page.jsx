"use client";
import Image from "next/image";
import Masonry from "react-layout-masonry";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { register } from "swiper/element/bundle";
import { MdVisibility,MdPartyMode } from "react-icons/md";
import { FaCaretLeft,FaCaretRight } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";


import React from "react";
import { useState, useEffect } from "react";
const Gallery = () => {
  const image1 = "/images/main-center-images/img2.jpg";
  const image2 = "/images/main-center-images/img3.jpg";
  const image3 = "/images/main-center-images/img4.jpg";
  const image4 = "/images/main-center-images/img5.jpg";
  const image5 = "/images/main-center-images/img6.jpg";
  const image6 = "/images/main-center-images/img7.jpg";
  const image7 = "/images/main-center-images/img8.jpg";
  const image8 = "/images/main-center-images/img9.jpg";
  const image9 = "/images/main-center-images/img10.jpg";
  const image10 = "/images/main-center-images/img11.jpg";
  const image11 = "/images/main-center-images/img12.jpg";
  const image12 = "/images/main-center-images/img13.jpg";
  const image13 = "/images/main-center-images/img14.jpg";
  const image14 = "/images/main-center-images/img15.jpg";
  const image15 = "/images/main-center-images/img16.jpg";
  const image16 = "/images/main-center-images/img17.jpg";
  const image17 = "/images/main-center-images/img18.jpg";

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
  ];

  const headerSlider = [image13, image17, image4, image13];

  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  // const [currentIndex, setCurrentIndex] = useState(0);

  const showImage = (image) => {
    //set imageToShow to be the one that's been clicked on
    setImageToShow(image);

    //set lightbox visibility to true
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
    // Remove the 'overflow: hidden' style when the lightbox is closed
    document.body.style.overflow = "visible";
  };

  useEffect(() => {
    AOS.init({
      once: false,
    });
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
      <div className="">
        <div className="w-full h-[80vh] bg-green-500 relative overflow-hidden">
          <div className="w-full h-full bg-[#00000079] absolute px-7 top-0 z-20 flex flex-col justify-center items-center">
            <p className="lg:text-8xl text-5xl text-white divide-y divide-solid">Gallery</p>
            <div className="flex justify-center items-center">
              <div className="w-[10rem] h-1 bg-white"></div>
              <MdPartyMode className="text-red-500 h-[3rem] w-[3rem]"/>
              <div className="w-[10rem] h-1 bg-white"></div>
            </div>
            <p className="text-white lg:px-96 text-center lg:font-bold text-lg">Discover Unforgettable Moments at Our Event Center Where Every Celebration Feels Like Your Own Party</p>

            
          </div>
          <div className=" w-full h-full  bg-blue-">
            <swiper-container
              style={{
                height: "100%",
                width: "100%",
                "--swiper-navigation-color": "#a12f27ff",
                "--swiper-pagination-color": "#008000ff",
              }}
              pagination="true"
              pagination-clickable="false"
              navigation="false"
              space-between="30"
              centered-slides="true"
              autoplay-delay="2500"
              autoplay-disable-on-interaction="false"
              effect="cards"
            >
              {headerSlider.map((image, index) => (
                <swiper-slide key={index}>
                  <div
                    className="w-full h-full flex justify-center items-center rounded-xl overflow-hidden"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* <Image
                      src={image}
                      width={1000}
                      height={1000}
                      alt=""
                      className="w-full h-full"
                      objectFit="cover"
                    /> */}
                  </div>
                </swiper-slide>
              ))}
            </swiper-container>
          </div>
        </div>
        <div className="pt-10 container mx-auto flex flex-wrap w-full gap-3 justify-center items-center">
          {images.map((image, index) => {
            return (
              <div
                className="w-[20rem] h-[20rem] relative rounded-2xl bg-red-400 group/imagecard overflow-hidden"
                onClick={() => showImage(image)}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                data-aos="fade-up"
                data-aos-duration={index % 2 == 0 ? "1900" : "1200"}
              >
                <div className="w-full h-full bg-[#000000ce] group-hover/imagecard:opacity-100 opacity-0 transition-all flex justify-center items-center" > 
                <MdVisibility className="w-[5rem] h-[5rem] text-white"/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;

'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
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
  const image13= "/images/main-center-images/img14.jpg";
  const image14= "/images/main-center-images/img15.jpg";
  const image15= "/images/main-center-images/img16.jpg";
  const image16= "/images/main-center-images/img17.jpg";
  const image17= "/images/main-center-images/img18.jpg";





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
  };

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
    e.stopPropagation()
    let currentIndex = images.indexOf(imageToShow)
      if(currentIndex <= 0) {
      setLightBoxDisplay(false)
    }
    else {
      let nextImage = images[currentIndex - 1]
      setImageToShow(nextImage)
    }
  };


  return (
    <>
    {lightboxDisplay ? (
        <div
          className="z-50 fixed top-0 left-0 w-full h-full bg-[#000000b2] flex items-center justify-center lg:justify-between"
          onClick={hideLightBox}
        >
          {/* //previous button */}
          <button onClick={showPrev} className="border-2 text-white lg:text-7xl text-2xl bg-customGreen pt-1">⭠</button>
          <div className="max-w-[90vw] h-[80vh] object-cover">
            <Image
              src={imageToShow}
              width={1000}
              height={1000}
              alt="image"
              className="w-full h-full"
            />
          </div>
          {/* //next button */}
          <button onClick={showNext} className="border-2 text-white lg:text-7xl text-2xl bg-customGreen pt-1">⭢</button>
        </div>
      ) : (
        ""
      )}
      <div className="">
        <div className="p-6 pt-10 container mx-auto">
        
          <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {images.map((image) => {
              return (
                <>
                  <article
                    key={image}
                    className="p-6 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                    onClick={() => showImage(image)}
                  >
                
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={400}
                        height={400}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={image}
                        alt=""
                      />
                      
                    </div>
                    <h3 className="font-medium text-xl leading-8">
                     
                    </h3>
                  </article>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
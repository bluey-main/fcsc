import React from "react";
import Image from "next/image";
import AboutSection1 from "../components/aboutpageComponents/AboutSection1";

import AboutSection2 from "../components/aboutpageComponents/AboutSection2";
import Footer from "../components/global/Footer";
const page = () => {
  return (
    <>
      <div className="overflow-hidden">
        {/* <AboutSection1 /> */}
        <AboutSection2 />
      </div>

      <Footer />
    </>
  );
};

export default page;

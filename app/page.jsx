import Image from "next/image";
import Section1 from "./components/homepageComponents/Section1";
import Section2 from "./components/homepageComponents/Section2";
import Section3 from "./components/homepageComponents/Section3";
import Section4 from "./components/homepageComponents/Section4";
import Section5 from "./components/homepageComponents/Section5";
import Section6 from "./components/homepageComponents/Section6";
import Footer from "./components/global/Footer";

export default function Home() {
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer/>


    </main>
  );
}

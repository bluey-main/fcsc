import Image from "next/image";
import FadeLeftBox from "../animatedComponents/FadeLeftBox";

const BrickComponent = ({
  title,
  subtitle,
  mainColor,
  miniBoxColor,
  delay,
}) => {
  return (
    <FadeLeftBox
      styles={"w-full h-[14rem] py-4 flex justify-end relative"}
      delay={delay}
    >
      <div
        className={`w-[90%] h-full ${mainColor} rounded-2xl flex flex-col justify-center pl-12 pr-10 gap-y-1`}
      >
        <p className="font-medium text-customBlack">{title}</p>
        <p className="text-sm text-customBlackFaded">{subtitle}</p>
      </div>
      <div
        className={`w-[4rem] h-[4rem] ${miniBoxColor} absolute left-4 top-10 rounded-xl flex justify-center items-center`}
      >
        <Image
          src={"/gridbricks.svg"}
          width={10}
          height={10}
          alt="grid icon"
          className="w-1/2 h-1/2"
        />
      </div>
    </FadeLeftBox>
  );
};

export default BrickComponent;

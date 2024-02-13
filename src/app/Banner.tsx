import React from "react";
import "./globals.css";

interface BannerProps {
  // props definition
}

const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <>
      <div
        className=" relative bg-cover bg-center h-96 md:w-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), url("LabBanner.jpg")`,
        }}
      >
        <div className="flex justify-center items-center h-96 text-4xl md:text-9xl text-white">
          APPARATUS
        </div>
      </div>
    </>
  );
};

export default Banner;

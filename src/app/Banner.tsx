import React from "react";
import "./globals.css";

interface BannerProps {
  // props definition
}

const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <>
      <div
        className=" relative bg-cover bg-center h-96 w-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), url("LabBanner.jpg")`,
        }}
      >
        <div className="absolute bottom-5 left-5 text-5xl text-orange-300">
          {" "}
          INFRAST LABORATORIES{" "}
        </div>
      </div>
    </>
  );
};

export default Banner;

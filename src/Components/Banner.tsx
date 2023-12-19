import React from "react";
import LabBanner from "../../public/images/LabBanner.jpg";

interface BannerProps {
  // props definition
}

const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <>
      <div
        className=" relative bg-cover bg-center h-72"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), url("https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU")`,
        }}
      >
        <div className="absolute bottom-10 left-10 text-5xl text-orange-300">
          {" "}
          INFRAST LABORATORIES{" "}
        </div>
      </div>
    </>
  );
};

export default Banner;

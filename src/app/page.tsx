"use client";
import React, { useState } from "react";
import Banner from "@/app/Banner";
import Physics from "@/app/Physics";
import "./globals.css";
import UnityBuild from "./UnityBuild";
import CustomButton from "./CustomButton";

export default function Home() {
  const [showUnityScene, setShowUnityScene] = useState(false);
  const handleButtonClick = () => {
    setShowUnityScene(!showUnityScene);
  };
  return (
    <>
      <nav className=" bg-black flex items-center justify-center p-5 w-screen">
        <CustomButton
          ButtonName={!showUnityScene ? "To Game" : " To Home"}
          onClick={handleButtonClick}
        />
      </nav>

      <div
        style={{ visibility: !showUnityScene ? "visible" : "hidden" }}
        className="absolute z-10 bg-white"
      >
        <Banner />
        <div className=" p-14 ">
          <Physics />
        </div>
        <div className=" p-14">
          <Physics />
        </div>
      </div>
      <div className="absolute z-0 bg-black">
        <UnityBuild />
      </div>
    </>
  );
}

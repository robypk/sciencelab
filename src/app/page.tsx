"use client";
import React, { useState } from "react";
import Banner from "@/app/Banner";
import Physics from "@/app/Physics";
import "./globals.css";
import UnityBuild from "./UnityBuild";

export default function Home() {
  const [showUnityScene, setShowUnityScene] = useState(false);
  const handleButtonClick = () => {
    setShowUnityScene(!showUnityScene);
  };
  return (
    <>
      <button onClick={handleButtonClick}>Toggle Unity Scene</button>
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
      <div className="absolute z-0">
        <UnityBuild />
      </div>
    </>
  );
}

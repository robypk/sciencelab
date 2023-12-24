"use client";
import React, { useState } from "react";
import Banner from "@/app/Banner";
import Physics from "@/app/Physics";
import "./globals.css";
import UnityBuild from "./UnityBuild";
import CustomButton from "./CustomButton";

export default function Home() {
  /**
   * Global Variables
   */
  const [showUnityScene, setShowUnityScene] = useState(false);
  const [data, setData] = useState(0);
  const [isUnityLoaed, setIsUnityLoaed] = useState(false);
  const [unityfullScreen, setunityfullScreen] = useState(false);

  /**
   * Global Functions
   */
  function ForUnityLoading(newData: number, unityloaded: boolean) {
    setData(newData);
    setIsUnityLoaed(unityloaded);
  }
  function handleButtonClick() {
    setunityfullScreen(!unityfullScreen);
    setShowUnityScene(!showUnityScene);
  }

  /**
   * Main Returns
   */
  return (
    <>
      <div
        style={{ visibility: !showUnityScene ? "visible" : "hidden" }}
        className="absolute z-10 bg-white"
      >
        <Banner />
        <div className=" p-14 ">
          <Physics
            unityLoading={data}
            isunityloaded={isUnityLoaed}
            forOpenUnityFromPhysics={handleButtonClick}
          />
        </div>
        <div className=" p-14">
          <Physics unityLoading={data} isunityloaded={isUnityLoaed} />
        </div>
      </div>
      <div className="absolute z-0 bg-black">
        <div className=" flex justify-center">
          <CustomButton
            ButtonName={!showUnityScene ? "To Game" : " To Home"}
            onClick={handleButtonClick}
          />
        </div>

        <UnityBuild
          onDataUpdate={ForUnityLoading}
          fullscreen={unityfullScreen}
        />
      </div>
    </>
  );
}

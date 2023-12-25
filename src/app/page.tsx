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
  const [unityLoadingPercentage, setunityLoadingPercentage] = useState(0);
  const [isUnityLoaed, setIsUnityLoaed] = useState(false);
  const [unityfullScreen, setunityfullScreen] = useState(false);

  /**
   * Global Functions
   */
  function ForUnityLoading(loadingPercentage: number, unityloaded: boolean) {
    setunityLoadingPercentage(loadingPercentage);
    setIsUnityLoaed(unityloaded);
  }
  function onUnityReactSwitch() {
    setShowUnityScene(!showUnityScene);
    if (isUnityLoaed) {
      setunityfullScreen(!unityfullScreen);
    }
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
            unityLoading={unityLoadingPercentage}
            isunityloaded={isUnityLoaed}
            forOpenUnityFromPhysics={onUnityReactSwitch}
          />
        </div>
        <div className=" p-14">
          <Physics
            unityLoading={unityLoadingPercentage}
            isunityloaded={isUnityLoaed}
            forOpenUnityFromPhysics={onUnityReactSwitch}
          />
        </div>
      </div>
      <div className="absolute z-0 bg-black">
        <div className=" absolute left-1/2">
          <CustomButton
            ButtonName={!showUnityScene ? "To Game" : " To Home"}
            onClick={onUnityReactSwitch}
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

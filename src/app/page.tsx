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
  const [unitySceneIndex, setUnitySceneIndex] = useState(0);

  /**
   * Global Functions
   */
  function ForUnityLoading(loadingPercentage: number) {
    setunityLoadingPercentage(loadingPercentage);
  }

  function unityisLoaded(isloaded: boolean) {
    setIsUnityLoaed(isloaded);
  }

  function onUnityReactSwitch() {
    setShowUnityScene(!showUnityScene);
    if (isUnityLoaed) {
      setunityfullScreen(!unityfullScreen);
    }
  }

  function ForUnitySceneChange(SceneIndex: number) {
    setShowUnityScene(!showUnityScene);
    if (isUnityLoaed) {
      setunityfullScreen(!unityfullScreen);
    }
    setUnitySceneIndex(SceneIndex);
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
            forUnitySceneChange={ForUnitySceneChange}
          />
        </div>
        <div className=" p-14">
          <Physics
            unityLoading={unityLoadingPercentage}
            isunityloaded={isUnityLoaed}
            forUnitySceneChange={ForUnitySceneChange}
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
          unityLoaded={unityisLoaded}
          unityToReact={onUnityReactSwitch}
          fullscreen={unityfullScreen}
          toOpenUnityScene={unitySceneIndex}
        />
      </div>
    </>
  );
}

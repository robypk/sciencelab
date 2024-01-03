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
  const [unityLoadingPercentage, setunityLoadingPercentage] = useState(0);
  const [isUnityLoaed, setIsUnityLoaed] = useState(false);
  const [unitySceneIndex, setUnitySceneIndex] = useState(Number);
  const [isunitySceneChanged, setIsunitySceneChanged] = useState(false);

  /**
   * Global Functions
   */
  function percentageUnityLoading(loadingPercentage: number) {
    setunityLoadingPercentage(loadingPercentage);
  }

  function unityisLoaded(isloaded: boolean) {
    setIsUnityLoaed(isloaded);
  }

  function ForUnitySceneChange(SceneIndexx: number) {
    setIsunitySceneChanged(!isunitySceneChanged);
    setUnitySceneIndex(SceneIndexx);
  }

  /**
   * Main Returns
   */
  return (
    <>
      <div className=" absolute z-10 bg-white">
        <Banner />
        <div className=" p-14 ">
          <Physics
            unityLoading={unityLoadingPercentage}
            isunityloaded={isUnityLoaed}
            UnitySceneChange_Physics={ForUnitySceneChange}
          />
        </div>
        {/* <div className=" p-14">
          <Physics
            unityLoading={unityLoadingPercentage}
            isunityloaded={isUnityLoaed}
            UnitySceneChange_Physics={ForUnitySceneChange}
          />
        </div> */}
      </div>
      <div className=" absolute z-0">
        <UnityBuild
          unityLoadingPercentage={percentageUnityLoading}
          unityLoaded={unityisLoaded}
          SceneIndex={unitySceneIndex}
          isUnitySceneChanged={isunitySceneChanged}
        />
      </div>
    </>
  );
}

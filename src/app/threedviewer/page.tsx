"use client";
import React, { useState } from "react";
import UnityBuild from "../UnityBuild";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface ThreeDViewerProps {
  // Define props here
}

const ThreeDViewer: React.FC<ThreeDViewerProps> = () => {
  const [unityLoadingPercentage, setunityLoadingPercentage] = useState(0);
  const [isUnityLoaed, setIsUnityLoaed] = useState(false);
  const [isContinueButtonClick, setIsContinueButtonClick] = useState(false);
  const [isHomeButtonClick, setIsHomeButtonClick] = useState(false);
  const [showButtons, setshowButtons] = useState(false);

  const searchParams = useSearchParams();

  function GetButtonName(): string {
    let buttonNa: string = "No Data";
    if (isUnityLoaed) {
      buttonNa = "Continue";
      setshowButtons(true);
    } else {
      buttonNa =
        "Please wait. Do not navigate away or close the browser. Loading...  " +
        Math.round(unityLoadingPercentage * 100).toString() +
        " %";
    }
    return buttonNa;
  }

  /**
   * Global Functions
   */
  function onHomeButtonClick() {
    setIsHomeButtonClick(!isHomeButtonClick);
  }
  function onContinueButtonClick() {
    setIsContinueButtonClick(!isContinueButtonClick);
  }

  function percentageUnityLoading(loadingPercentage: number) {
    setunityLoadingPercentage(loadingPercentage);
  }

  function unityisLoaded(isloaded: boolean) {
    setIsUnityLoaed(isloaded);
  }
  return (
    <>
      <div className=" absolute z-10 bg-white">
        <div className="fixed inset-0 flex justify-center items-center bg-cover bg-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Loading...</h1>
            <div className="w-full h-4 bg-gray-300 rounded-full mb-4">
              <div className="h-full bg-blue-500 rounded-full"></div>
            </div>
            <div className="flex justify-between">
              {showButtons ? (
                <div>
                  <Link
                    className=" bg-white border-2 border-cyan-600 hover:bg-teal-400 text-black font-semibold py-2 px-4 rounded-full transition duration-300 ml-10 mr-32 "
                    href="/"
                    onClick={onHomeButtonClick}
                  >
                    Home
                  </Link>
                  <button
                    className=" bg-white border-2 border-cyan-600 hover:bg-teal-400 text-black font-semibold py-2 px-4 rounded-full transition duration-300 mr-10 ml-32"
                    onClick={onContinueButtonClick}
                  >
                    Continue
                  </button>
                </div>
              ) : (
                <div>{GetButtonName()}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute z-0">
        <UnityBuild
          unityLoadingPercentage={percentageUnityLoading}
          unityLoaded={unityisLoaded}
          SceneIndex={searchParams.get("SceneIndex")}
          UnityBuildName={searchParams.get("UnityBuildName")}
          isContinueButtonClick={isContinueButtonClick}
          unloadScene={isHomeButtonClick}
        />
      </div>
    </>
  );
};

export default ThreeDViewer;

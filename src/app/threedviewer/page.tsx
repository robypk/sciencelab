"use client";
import React, { useEffect, useState } from "react";
import UnityBuild from "../UnityBuild";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Banner from "../Banner";

interface ThreeDViewerProps {
  // Define props here
}

const ThreeDViewer: React.FC<ThreeDViewerProps> = () => {
  const [unityLoadingPercentage, setunityLoadingPercentage] = useState(0);
  const [isUnityLoaed, setIsUnityLoaed] = useState(false);
  const [isContinueButtonClick, setIsContinueButtonClick] = useState(false);
  const [isHomeButtonClick, setIsHomeButtonClick] = useState(false);
  const [showButtons, setshowButtons] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const searchParams = useSearchParams();

  function GetButtonName(): string {
    let buttonNa: string = "No Data";
    if (isUnityLoaed) {
      buttonNa = "Continue";
      setshowButtons(true);
    } else {
      buttonNa =
        "Please wait. Do not navigate away or close the window. Loading: " +
        Math.round(unityLoadingPercentage * 100).toString() +
        "%";
    }
    return buttonNa;
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let TrialTime = 0.2;
    if (timerStarted) {
      timer = setTimeout(() => {
        setShowOverlay(true);
      }, TrialTime * 60000); // 2 minutes in milliseconds
    }
    return () => clearTimeout(timer);
  }, [timerStarted]);
  /**
   * Global Functions
   */
  function onHomeButtonClick() {
    setIsHomeButtonClick(!isHomeButtonClick);
  }
  function onContinueButtonClick() {
    setIsContinueButtonClick(!isContinueButtonClick);
    let trial = searchParams.get("Trial");
    if (trial === "false") {
      setTimerStarted(true);
    } else {
      setTimerStarted(false);
    }
  }

  function percentageUnityLoading(loadingPercentage: number) {
    setunityLoadingPercentage(loadingPercentage);
  }

  function unityisLoaded(isloaded: boolean) {
    setIsUnityLoaed(isloaded);
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <img
          src={searchParams.get("ImageURL")?.toString()}
          alt="ExpImage"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-10 left-24 right-24 flex justify-between px-4 pb-4">
          {showButtons ? (
            <div className=" w-screen flex flex-wrap justify-evenly">
              <Link href="/">
                <div
                  className="bg-white h-10 md:h-14 w-24 md:w-28 border-2 border-cyan-600 hover:bg-teal-400 text-black text-sm font-semibold flex justify-center items-center rounded-full transition duration-300 m-1"
                  onClick={onHomeButtonClick}
                >
                  Home
                </div>
              </Link>
              <button
                className="bg-white h-10 md:h-14 w-24 md:w-28 border-2 border-cyan-600 hover:bg-teal-400 text-black text-sm font-semibold flex justify-center items-center rounded-full transition duration-300 m-1"
                onClick={onContinueButtonClick}
              >
                Continue
              </button>
            </div>
          ) : (
            <div className="fixed bottom-0 left-0 w-full px-6 flex flex-col items-center justify-end text-white font-semibold mb-10">
              <div className="text-xs md:text-3xl text-center mb-2">
                {GetButtonName()}
              </div>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{
                    width: `${Math.round(unityLoadingPercentage * 100)}%`,
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
      {!showOverlay && (
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
      )}
    </>
  );
};

export default ThreeDViewer;

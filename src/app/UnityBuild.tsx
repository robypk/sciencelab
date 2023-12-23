import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import CustomButton from "./CustomButton";

interface UnityBuildProps {
  onDataUpdate: (data: number, unityLoaded: boolean) => void;
}

const UnityBuild: React.FC<UnityBuildProps> = ({ onDataUpdate }) => {
  const { unityProvider, loadingProgression, isLoaded, requestFullscreen } =
    useUnityContext({
      loaderUrl: "Build/MuseumWeb.loader.js",
      dataUrl: "Build/MuseumWeb.data",
      frameworkUrl: "Build/MuseumWeb.framework.js",
      codeUrl: "Build/MuseumWeb.wasm",
    });

  useEffect(() => {
    onDataUpdate(loadingProgression, isLoaded);
    return () => {
      console.log("Component unmounted");
    };
  }, [loadingProgression, isLoaded]);

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }
  return (
    <>
      <CustomButton
        ButtonName={
          !isLoaded
            ? "Please Wait.." +
              Math.round(loadingProgression * 100).toString() +
              " %"
            : "Full Screen"
        }
        onClick={handleClickEnterFullscreen}
        intaractable={!isLoaded}
      ></CustomButton>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
        className="w-screen flex justify-center "
      />

      {/* <button onClick={handleClickEnterFullscreen}>Enter Fullscreen</button> */}
    </>
  );
};

export default UnityBuild;

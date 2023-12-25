import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import CustomButton from "./CustomButton";

interface UnityBuildProps {
  onDataUpdate: (data: number, unityLoaded: boolean) => void;
  fullscreen: boolean;
}

const UnityBuild: React.FC<UnityBuildProps> = ({
  onDataUpdate,
  fullscreen,
}) => {
  /**
   *
   *
   * Unity Context
   *
   *
   */
  const { unityProvider, loadingProgression, isLoaded, requestFullscreen } =
    useUnityContext({
      loaderUrl: "Build/MuseumWeb.loader.js",
      dataUrl: "Build/MuseumWeb.data",
      frameworkUrl: "Build/MuseumWeb.framework.js",
      codeUrl: "Build/MuseumWeb.wasm",
    });
  /**
   *
   *
   * useEffect
   *
   *
   */
  useEffect(() => {
    onDataUpdate(loadingProgression, isLoaded);
    return () => {
      console.log("Component unmounted");
    };
  }, [loadingProgression, isLoaded]);

  // useEffect(() => {
  //   requestFullscreen(fullscreen);
  //   return () => {
  //     console.log("Component unmounted");
  //   };
  // }, [fullscreen]);
  /**
   *
   *
   * Functions
   *
   *
   */
  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }

  /**
   *
   *
   * Main Return
   *
   *
   */
  return (
    <>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
        className="w-screen flex justify-center "
      />
    </>
  );
};

export default UnityBuild;

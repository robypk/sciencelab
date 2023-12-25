import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import CustomButton from "./CustomButton";

interface UnityBuildProps {
  onDataUpdate(data: number, unityLoaded: boolean): void;
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
  }, [loadingProgression, isLoaded]);

  useEffect(() => {
    requestFullscreen(fullscreen);
    console.log("Full Screen  useEffect");
  }, [fullscreen]);

  /**
   *
   *
   * Main Return
   *
   *
   */
  return (
    <>
      <Unity unityProvider={unityProvider} className="w-screen" />
    </>
  );
};

export default UnityBuild;

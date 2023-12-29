import React, { useCallback, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

interface UnityBuildProps {
  unityLoadingPercentage(data: number): void;
  unityLoaded(isunityLoaded: boolean): void;
  unityToReact(): void;
  SceneIndex: number;
  fullscreen: boolean;
}

const UnityBuild: React.FC<UnityBuildProps> = ({
  unityLoadingPercentage,
  unityLoaded,
  unityToReact,
  SceneIndex,
  fullscreen,
}) => {
  /**
   *
   *
   * Unity Context
   *
   *
   */
  const {
    unityProvider,
    loadingProgression,
    isLoaded,
    requestFullscreen,
    sendMessage,
    addEventListener,
    removeEventListener,
  } = useUnityContext({
    loaderUrl: "unity/Build/unity.loader.js",
    dataUrl: "unity/Build/unity.data",
    frameworkUrl: "unity/Build/unity.framework.js",
    codeUrl: "unity/Build/unity.wasm",
  });

  /**
   * Functions
   */
  const unityExitFullScreen = useCallback(() => {
    console.log("exit Full Screen Callback");
    //sendMessage("ReactListener", "selectSceene", 0);
    unityToReact();
  }, []);

  const unityisReady = useCallback(() => {
    unityLoaded(true);
  }, []);

  /**
   *
   *
   * useEffect
   *
   *
   */

  useEffect(() => {
    sendMessage("ReactListener", "selectSceene", SceneIndex);
  }, [SceneIndex]);

  useEffect(() => {
    unityLoadingPercentage(loadingProgression);
    //sendMessage("ReactListener", "selectSceene", 0);
  }, [loadingProgression]);

  useEffect(() => {
    requestFullscreen(fullscreen);
    console.log("Full Screen  useEffect");
  }, [fullscreen]);

  useEffect(() => {
    addEventListener("unityFullScreen", unityExitFullScreen);
    return () => {
      removeEventListener("unityFullScreen", unityExitFullScreen);
    };
  }, [unityExitFullScreen]);

  useEffect(() => {
    addEventListener("unityReady", unityisReady);
    return () => {
      removeEventListener("unityReady", unityisReady);
    };
  }, [unityisReady]);
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

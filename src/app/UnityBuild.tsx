import React, { useCallback, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

interface UnityBuildProps {
  unityLoadingPercentage(data: number): void;
  unityLoaded(isunityLoaded: boolean): void;
  SceneIndex: number;
  isUnitySceneChanged: boolean;
}

const UnityBuild: React.FC<UnityBuildProps> = ({
  unityLoadingPercentage,
  unityLoaded,
  SceneIndex,
  isUnitySceneChanged,
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
    requestFullscreen,
    sendMessage,
    addEventListener,
    removeEventListener,
  } = useUnityContext({
    loaderUrl: "unity/Build/unity.loader.js",
    dataUrl: "unity/Build/unity.data.unityweb",
    frameworkUrl: "unity/Build/unity.framework.js.unityweb",
    codeUrl: "unity/Build/unity.wasm.unityweb",
  });

  /**
   * Functions
   */

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
    requestFullscreen(true);
  }, [isUnitySceneChanged]);

  useEffect(() => {
    unityLoadingPercentage(loadingProgression);
  }, [loadingProgression]);

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
      <Unity unityProvider={unityProvider} className=" w-1" />
    </>
  );
};

export default UnityBuild;

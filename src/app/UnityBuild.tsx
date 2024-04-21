import React, { useCallback, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

interface UnityBuildProps {
  unityLoadingPercentage(data: number): void;
  unityLoaded(isunityLoaded: boolean): void;
  isContinueButtonClick: boolean;
  unloadScene: boolean;
  SceneIndex: any;
  UnityBuildName: any;
}

const UnityBuild: React.FC<UnityBuildProps> = ({
  unityLoadingPercentage,
  unityLoaded,
  isContinueButtonClick,
  SceneIndex,
  UnityBuildName,
  unloadScene,
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
    unload,
  } = useUnityContext({
    loaderUrl: `Experiments//${UnityBuildName}/Build//${UnityBuildName}.loader.js`,
    dataUrl: `Experiments//${UnityBuildName}/Build//${UnityBuildName}.data.unityweb`,
    frameworkUrl: `Experiments//${UnityBuildName}/Build//${UnityBuildName}.framework.js.unityweb`,
    codeUrl: `Experiments//${UnityBuildName}/Build//${UnityBuildName}.wasm.unityweb`,
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
    unload();
    console.log("Scene unloaded");
  }, [unloadScene]);

  useEffect(() => {
    requestFullscreen(true);
    sendMessage("ReactListener", "selectSceene", parseInt(SceneIndex));
  }, [isContinueButtonClick]);

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

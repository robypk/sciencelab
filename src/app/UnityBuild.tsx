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

  // We'll use a state to store the device pixel ratio.
  const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );

  useEffect(
    function () {
      // A function which will update the device pixel ratio of the Unity
      // Application to match the device pixel ratio of the browser.
      const updateDevicePixelRatio = function () {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      // A media matcher which watches for changes in the device pixel ratio.
      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`
      );
      // Adding an event listener to the media matcher which will update the
      // device pixel ratio of the Unity Application when the device pixel
      // ratio changes.
      mediaMatcher.addEventListener("change", updateDevicePixelRatio);
      return function () {
        // Removing the event listener when the component unmounts.
        mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
      };
    },
    [devicePixelRatio]
  );

  /**
   *
   *
   * Main Return
   *
   *
   */
  return (
    <>
      <Unity
        unityProvider={unityProvider}
        devicePixelRatio={1.01}
        className=" w-1"
      />
    </>
  );
};

export default UnityBuild;

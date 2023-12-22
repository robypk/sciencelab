import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import CustomButton from "./CustomButton";

interface UnityBuildProps {
  // props definition
}

const UnityBuild: React.FC<UnityBuildProps> = ({}) => {
  const { unityProvider, loadingProgression, isLoaded, requestFullscreen } =
    useUnityContext({
      loaderUrl: "Build/MuseumWeb.loader.js",
      dataUrl: "Build/MuseumWeb.data",
      frameworkUrl: "Build/MuseumWeb.framework.js",
      codeUrl: "Build/MuseumWeb.wasm",
    });

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }
  return (
    <>
      <CustomButton
        ButtonName={
          !isLoaded
            ? Math.round(loadingProgression * 100).toString()
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
        className="w-screen"
      />

      {/* <button onClick={handleClickEnterFullscreen}>Enter Fullscreen</button> */}
    </>
  );
};

export default UnityBuild;

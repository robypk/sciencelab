import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

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
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
        className="h-screen w-screen"
      />
      <button onClick={handleClickEnterFullscreen}>Enter Fullscreen</button>
    </>
  );
};

export default UnityBuild;

import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

interface UnityBuildProps {
  // props definition
}

const UnityBuild: React.FC<UnityBuildProps> = ({}) => {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "Build/MuseumWeb.loader.js",
    dataUrl: "Build/MuseumWeb.data",
    frameworkUrl: "Build/MuseumWeb.framework.js",
    codeUrl: "Build/MuseumWeb.wasm",
  });
  return (
    <div>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        className=" w-screen h-screen"
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
      />
    </div>
  );
};

export default UnityBuild;

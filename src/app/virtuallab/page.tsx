"use client";
import React from "react";
import Scene from "./Scene";
interface virtuallabProps {
  // Define props here
}

const virtuallab: React.FC<virtuallabProps> = (
  {
    /* Destructure props here */
  }
) => {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <main className="flex flex-col justify-center items-center w-full">
          <h1 className="text-4xl mb-8">Welcome to My Three.js Scene</h1>
          <div className="w-full h-screen">
            <Scene />
          </div>
        </main>
      </div>
    </div>
  );
};

export default virtuallab;

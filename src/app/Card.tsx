// src/components/Card.tsx
import React from "react";
import "./globals.css";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  title: string;
  SubTitle?: string;
  UnityBuildName: string;
  SceneIndex: number;
  isDisabled: boolean;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  SubTitle,
  UnityBuildName,
  SceneIndex,
  isDisabled,
}) => {
  return (
    <div className=" m-5">
      <div className=" relative h-52 w-72 rounded-xl overflow-hidden shadow-gray-600 shadow-xl">
        <div
          className="bg-cover bg-center h-52 md:h-52"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), url(${imageUrl})`,
          }}
        >
          <h1 className=" bottom-0 left-0 p-4 text-white text-3xl font-semibold">
            {title}
            <div className="text-white text-lg font-semibold">{SubTitle}</div>
          </h1>
          <div className="absolute bottom-0 left-0 p-4">
            {!isDisabled ? (
              // Link is disabled
              <span className=" bg-black from-teal-500 to-cyan-600 border-2 border-cyan-600 hover:scale-105 text-gray-100 font-semibold py-2 px-4 rounded-full transition duration-300 inline-block">
                <span className="mr-2">Coming Soon</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </span>
            ) : (
              // Link is enabled
              <Link
                className="bg-gradient-to-r from-teal-500 to-cyan-600 border-2 border-cyan-600 hover:scale-105 text-white font-semibold py-2 px-4 rounded-full transition duration-300 inline-block"
                href={{
                  pathname: "/threedviewer",
                  query: {
                    SceneIndex: SceneIndex,
                    UnityBuildName: UnityBuildName,
                    ImageURL: imageUrl,
                  },
                }}
              >
                Launch
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

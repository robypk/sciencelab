// src/components/Card.tsx
import React from "react";
import "./globals.css";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  title: string;
  UnityBuildName: string;
  SceneIndex: number;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  UnityBuildName,
  SceneIndex,
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
          </h1>
          <div className="absolute bottom-0 left-0 p-4">
            <Link
              className=" bg-inherit border-2 border-cyan-600 hover:bg-teal-400 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
              href={{
                pathname: "/threedviewer",
                query: {
                  SceneIndex: SceneIndex,
                  UnityBuildName: UnityBuildName,
                  ImageURL: imageUrl,
                },
              }}
            >
              Start
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

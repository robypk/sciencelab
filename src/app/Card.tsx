// src/components/Card.tsx
import React from "react";
import "./globals.css";
import CustomButton from "./CustomButton";

interface CardProps {
  imageUrl: string;
  title: string;
  ButtonName: string;
  UnitySceneChange_card?(SceneIndex: number): void;
  ButtonInteractable?: boolean;
  SceneIndex: number;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  ButtonName,
  UnitySceneChange_card,
  ButtonInteractable,
  SceneIndex,
}) => {
  function onCardButtonClick() {
    if (UnitySceneChange_card) {
      UnitySceneChange_card(SceneIndex);
    }
  }
  return (
    <div className=" m-5">
      <div className=" relative h-52 w-72 rounded-xl overflow-hidden shadow-gray-600 shadow-xl">
        <div
          className="bg-cover bg-center h-52 md:h-52"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), url(${imageUrl})`,
          }}
        >
          <h1 className=" bottom-0 left-0 p-4 text-white  md:text-3xl font-semibold">
            {title}
          </h1>
          <div className="absolute bottom-0 left-0 p-4">
            <button
              className=" bg-inherit border-2 border-cyan-600 hover:bg-teal-400 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
              onClick={onCardButtonClick}
              disabled={ButtonInteractable}
            >
              {ButtonName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

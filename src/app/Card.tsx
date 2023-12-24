// src/components/Card.tsx
import React from "react";
import "./globals.css";
import CustomButton from "./CustomButton";

interface CardProps {
  imageUrl: string;
  title: string;
  ButtonName: string;
  forUnityOpenFromCard?: () => void;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  ButtonName,
  forUnityOpenFromCard,
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
          <h1 className=" bottom-0 left-0 p-4 text-white  md:text-3xl font-semibold">
            {title}
          </h1>
          <div className="absolute bottom-0 left-0 p-4">
            <CustomButton
              ButtonName={ButtonName}
              onClick={forUnityOpenFromCard}
            ></CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import "./globals.css";

interface CustomButtonProps {
  // props definition
  ButtonName: string;
  onClick?: () => void;
  intaractable?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  ButtonName,
  onClick,
  intaractable,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div>
      <button
        className=" bg-inherit border-2 border-cyan-600 hover:bg-teal-400 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
        onClick={handleClick}
        disabled={intaractable}
      >
        {ButtonName}
      </button>
    </div>
  );
};

export default CustomButton;

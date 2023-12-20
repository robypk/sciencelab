import React from "react";
import "./globals.css";

interface CustomButtonProps {
  // props definition
  ButtonName: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ ButtonName }) => {
  return (
    <div>
      <button className=" bg-inherit border-2 border-cyan-600 hover:bg-teal-400 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
        {ButtonName}
      </button>
    </div>
  );
};

export default CustomButton;

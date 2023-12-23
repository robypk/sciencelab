import React from "react";
import Card from "./Card";
import "./globals.css";

interface PhysicsProps {
  unityLoading: number;
  isunityloaded: boolean;
}

const Physics: React.FC<PhysicsProps> = ({ unityLoading, isunityloaded }) => {
  return (
    <>
      <div className=" p-2 text-left font-extrabold text-5xl">Physics</div>
      <div className="flex flex-wrap justify-start">
        <div>
          <Card
            imageUrl="potentiometer.jpg"
            title="PotentioMeter"
            ButtonName={
              !isunityloaded
                ? "Please Wait.." +
                  Math.round(unityLoading * 100).toString() +
                  " %"
                : "To Start"
            }
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="Convex Lens"
            ButtonName={
              !isunityloaded
                ? "Please Wait.." +
                  Math.round(unityLoading * 100).toString() +
                  " %"
                : "To Start"
            }
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName={
              !isunityloaded
                ? "Please Wait.." +
                  Math.round(unityLoading * 100).toString() +
                  " %"
                : "To Start"
            }
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName={
              !isunityloaded
                ? "Please Wait.." +
                  Math.round(unityLoading * 100).toString() +
                  " %"
                : "To Start"
            }
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName={
              !isunityloaded
                ? "Please Wait.." +
                  Math.round(unityLoading * 100).toString() +
                  " %"
                : "To Start"
            }
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName={
              !isunityloaded
                ? "Please Wait.." +
                  Math.round(unityLoading * 100).toString() +
                  " %"
                : "To Start"
            }
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName={
              !isunityloaded
                ? "Please Wait.." +
                  Math.round(unityLoading * 100).toString() +
                  " %"
                : "To Start"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Physics;

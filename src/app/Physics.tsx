import React from "react";
import Card from "./Card";
import "./globals.css";

interface PhysicsProps {
  // props definition
}

const Physics: React.FC<PhysicsProps> = ({}) => {
  return (
    <>
      <div className=" p-2 text-left font-extrabold text-5xl">Physics</div>
      <div className="flex flex-wrap justify-start">
        <div>
          <Card
            imageUrl="potentiometer.jpg"
            title="PotentioMeter"
            ButtonName="To Start"
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="Convex Lens"
            ButtonName="To Start"
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName="To Start"
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName="To Start"
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName="To Start"
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName="To Start"
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName="To Start"
          />
        </div>
      </div>
    </>
  );
};

export default Physics;

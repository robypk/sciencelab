import React from "react";
import Card from "./Card";
import "./globals.css";
import { debug } from "console";

interface PhysicsProps {
  unityLoading: number;
  isunityloaded: boolean;
  forOpenUnityFromPhysics?(): void;
}

const Physics: React.FC<PhysicsProps> = ({
  unityLoading,
  isunityloaded,
  forOpenUnityFromPhysics,
}) => {
  /**
   * SUMMARY
   *   Create a button name with unity loading Progress
   */
  function GetButtonName(): string {
    let buttonNa: string = "No Data";
    if (isunityloaded) {
      buttonNa = "Let's head to the lab!";
    } else {
      buttonNa =
        "Please Wait.." + Math.round(unityLoading * 100).toString() + " %";
    }
    return buttonNa;
  }

  function forUnityLoadingForCard() {
    if (forOpenUnityFromPhysics) {
      forOpenUnityFromPhysics();
    }
  }

  /**
   * SUMMARY
   * Main return
   */
  return (
    <>
      <div className=" p-2 text-left font-extrabold text-5xl">Physics</div>
      <div className="flex flex-wrap justify-start">
        <div>
          <Card
            imageUrl="potentiometer.jpg"
            title="PotentioMeter"
            ButtonName={GetButtonName()}
            forUnityOpenFromCard={forUnityLoadingForCard}
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="Convex Lens"
            ButtonName={GetButtonName()}
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName={GetButtonName()}
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName={GetButtonName()}
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName={GetButtonName()}
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName={GetButtonName()}
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName={GetButtonName()}
          />
        </div>
      </div>
    </>
  );
};

export default Physics;

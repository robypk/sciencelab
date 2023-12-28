import React from "react";
import Card from "./Card";
import "./globals.css";

interface PhysicsProps {
  unityLoading: number;
  isunityloaded: boolean;
  forUnitySceneChange?(SceneIndex: number): void;
}

const Physics: React.FC<PhysicsProps> = ({
  unityLoading,
  isunityloaded,
  forUnitySceneChange,
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

  function forUnityLoadingForCard(SceneIndex: number) {
    if (forUnitySceneChange) {
      forUnitySceneChange(SceneIndex);
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
            ButtonInteractable={!isunityloaded}
            forUnityOpenFromCard={forUnityLoadingForCard}
            SceneIndex={1}
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="Convex Lens"
            ButtonName={GetButtonName()}
            ButtonInteractable={!isunityloaded}
            forUnityOpenFromCard={forUnityLoadingForCard}
            SceneIndex={2}
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName={GetButtonName()}
            SceneIndex={0}
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName={GetButtonName()}
            SceneIndex={0}
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName={GetButtonName()}
            SceneIndex={0}
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName={GetButtonName()}
            SceneIndex={0}
          />
        </div>
        <div>
          <Card
            imageUrl={"potentiometer.jpg"}
            title="VoltMeter"
            ButtonName={GetButtonName()}
            SceneIndex={0}
          />
        </div>
      </div>
    </>
  );
};

export default Physics;

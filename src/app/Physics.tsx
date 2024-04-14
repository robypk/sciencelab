import React from "react";
import Card from "./Card";
import "./globals.css";

interface PhysicsProps {
  unityLoading: number;
  isunityloaded: boolean;
  UnitySceneChange_Physics?(SceneIndex: number): void;
}

const Physics: React.FC<PhysicsProps> = ({
  unityLoading,
  isunityloaded,
  UnitySceneChange_Physics,
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
        "Please Wait: " + Math.round(unityLoading * 100).toString() + " %";
    }
    return buttonNa;
  }

  function unitySceneChage(SceneIndex: number) {
    if (UnitySceneChange_Physics) {
      UnitySceneChange_Physics(SceneIndex);
    }
  }

  /**
   * SUMMARY
   * Main return
   */
  return (
    <>
      <div className=" p-2 text-left font-extrabold text-5xl">
        Civil Engineering
      </div>
      <div className="flex flex-wrap justify-start">
        <div>
          <Card
            imageUrl="Theodolite.jpg"
            title="Theodolite"
            ButtonName={GetButtonName()}
            ButtonInteractable={!isunityloaded}
            UnitySceneChange_card={unitySceneChage}
            SceneIndex={1}
          />
        </div>
        <div>
          <Card
            imageUrl={"Brick.jpg"}
            title="Brick Bonds"
            ButtonName={GetButtonName()}
            ButtonInteractable={!isunityloaded}
            UnitySceneChange_card={unitySceneChage}
            SceneIndex={2}
          />
        </div>
        <div>
          <Card
            imageUrl={"Dam.jpg"}
            title="Dams"
            ButtonName={GetButtonName()}
            ButtonInteractable={!isunityloaded}
            UnitySceneChange_card={unitySceneChage}
            SceneIndex={3}
          />
        </div>
        <div>
          <Card
            imageUrl={"slab.jpg"}
            title="RCC-Slabs"
            ButtonName={GetButtonName()}
            ButtonInteractable={!isunityloaded}
            UnitySceneChange_card={unitySceneChage}
            SceneIndex={4}
          />
        </div>
        <div>
          <Card
            imageUrl={"stair.jpg"}
            title="Stair"
            ButtonName={GetButtonName()}
            ButtonInteractable={!isunityloaded}
            UnitySceneChange_card={unitySceneChage}
            SceneIndex={5}
          />
        </div>
      </div>
    </>
  );
};

export default Physics;

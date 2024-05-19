import React from "react";
import Card from "./Card";
import "./globals.css";
import ThreejsCard from "./ThreejsCard";

interface PhysicsProps {}

const Physics: React.FC<PhysicsProps> = ({}) => {
  /**
   * SUMMARY
   *   Create a button name with unity loading Progress
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
            UnityBuildName="Theodolite"
            SceneIndex={1}
            isDisabled={true}
            isTrial={true}
          />
        </div>
        <div>
          <Card
            imageUrl={"Brick.jpg"}
            title="Brick Bonds"
            UnityBuildName="Brick"
            SceneIndex={1}
            isDisabled={true}
            isTrial={true}
          />
        </div>
        <div>
          <Card
            imageUrl={"Dam.jpg"}
            title="Dams"
            UnityBuildName="Dam"
            SceneIndex={1}
            isDisabled={true}
            isTrial={false}
          />
        </div>
        <div>
          <Card
            imageUrl={"slab.jpg"}
            title="RCC-Slabs"
            UnityBuildName="Slab"
            SceneIndex={1}
            isDisabled={true}
            isTrial={false}
          />
        </div>
        <div>
          <Card
            imageUrl={"stair.jpg"}
            title="Stair"
            UnityBuildName="Stair"
            SceneIndex={1}
            isDisabled={true}
            isTrial={true}
          />
        </div>
        <div>
          <Card
            imageUrl={"PlaneTable_3PointProblem.jpg"}
            title="Plane Table: "
            SubTitle="Three Point Problem "
            UnityBuildName="PlaneTable_3PointProblem"
            SceneIndex={1}
            isDisabled={true}
            isTrial={true}
          />
        </div>
        <div>
          <Card
            imageUrl={"PlaneTable_3PointProblem.jpg"}
            title="Plane Table:"
            SubTitle=" Orientation-BS "
            UnityBuildName="PlaneTable_BS"
            SceneIndex={1}
            isDisabled={true}
            isTrial={true}
          />
        </div>
        <div>
          <ThreejsCard
            imageUrl={"Development.jpg"}
            title="Experiment"
            SubTitle="Under Development"
            isDisabled={false}
          />
        </div>
      </div>
    </>
  );
};

export default Physics;

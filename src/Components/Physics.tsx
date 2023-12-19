import React from "react";
import potentiometer from "../images/potentiometer.jpg";
import Card from "./Card";

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
            imageUrl="https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
            title="PotentioMeter"
            ButtonName="To Start"
          />
        </div>
        <div>
          <Card
            imageUrl={
              "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
            }
            title="Convex Lens"
            ButtonName="To Start"
          />
        </div>
        <div>
          <Card
            imageUrl={
              "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
            }
            title="VoltMeter"
            ButtonName="To Start"
          />
        </div>
        <div>
          <Card
            imageUrl={
              "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
            }
            title="VoltMeter"
            ButtonName="To Start"
          />
        </div>
        <div>
          <Card
            imageUrl={
              "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
            }
            title="VoltMeter"
            ButtonName="To Start"
          />
        </div>
        <div>
          <Card
            imageUrl={
              "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
            }
            title="VoltMeter"
            ButtonName="To Start"
          />
        </div>
        <div>
          <Card
            imageUrl={
              "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
            }
            title="VoltMeter"
            ButtonName="To Start"
          />
        </div>
      </div>
    </>
  );
};

export default Physics;

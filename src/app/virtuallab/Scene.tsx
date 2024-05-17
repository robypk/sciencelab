import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface GLTFResult {}

function Model() {
  const gltf = useGLTF("Planetablegltftest.glb");

  // Debugging output to check if the GLTF is loaded correctly
  console.log(gltf);

  const { nodes, materials } = gltf;

  if (!nodes || !materials) {
    console.error("GLTF nodes or materials are not loaded correctly");
    return null;
  }

  return <primitive object={gltf.scene} />;
}

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;

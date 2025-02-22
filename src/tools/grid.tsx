import React from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

const GridPlane: React.FC = () => {
  const { scene } = useThree();

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} /> {/* Adjust size here */}
      <meshStandardMaterial color="white" />
      <gridHelper args={[20, 20, "gray", "lightgray"]} position={[0, 0.01, 0]} />
    </mesh>
  );
};

export default GridPlane;

import React from "react";
import * as THREE from "three";
import { SpotLight } from "@react-three/drei";

interface SpotLightProps {
  position?: [number, number, number]; // Light source position
  targetPosition?: [number, number, number]; // Where the light points to
  intensity?: number; // Light intensity
  angle?: number; // Beam spread
  penumbra?: number; // Soft edge of the light
  distance?: number; // How far the light reaches
}

const SpotLightComponent: React.FC<SpotLightProps> = ({
  position = [0, 10, 0], // Default above the scene
  targetPosition = [0, 0, 0], // Default pointing straight down
  intensity = 1,
  angle = Math.PI / 6, // Spotlight beam angle
  penumbra = 0.3,
  distance = 15, // Light reach
}) => {
  const target = new THREE.Object3D();
  target.position.set(...targetPosition);

  return (
    <>
      <primitive object={target} />
      <SpotLight
        position={position}
        target={target}
        intensity={intensity}
        angle={angle}
        penumbra={penumbra}
        distance={distance}
        castShadow
      />
    </>
  );
};

export default SpotLightComponent;
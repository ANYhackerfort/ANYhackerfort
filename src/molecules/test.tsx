import React from "react";
import { Canvas } from "@react-three/fiber";

const H2OMolecule: React.FC = () => {
  return (
    <group position={[0, 4, 0]}>
      {/* Oxygen (Red) */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Hydrogen 1 (White) */}
      <mesh position={[-1, 0.5, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Hydrogen 2 (White) */}
      <mesh position={[1, 0.5, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Bond 1 (Cylinder) */}
      <mesh position={[-0.5, 0.25, 0]} rotation={[0, 0, Math.PI / 8]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Bond 2 (Cylinder) */}
      <mesh position={[0.5, 0.25, 0]} rotation={[0, 0, -Math.PI / 8]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </group>
  );
};

const WaterMoleculeScene: React.FC = () => {
  return (
      <H2OMolecule />
  );
};

export default WaterMoleculeScene;

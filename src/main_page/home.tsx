import React, {useEffect, useState } from "react";
import Lab1Camera from "../camera/camera";
import { Canvas, useLoader } from "@react-three/fiber";
import { DjangoProvider } from "../context_providers/django_provider";
import * as THREE from "three";
import { Environment, OrbitControls } from "@react-three/drei";
import "./Space.css"; // Ensure this file makes the canvas full-screen
import GridPlane from "../tools/grid";
import WaterMoleculeScene from "../molecules/test";

const Earth = () => {
  const texture = useLoader(THREE.TextureLoader, "/earth10k.jpg"); // Load texture inside React
  return (
    <mesh position={[0, 0, 0]} castShadow receiveShadow>
      <sphereGeometry args={[4, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const Space: React.FC = () => {
  return (
    <div className="space-container">

          <DjangoProvider>
            <Canvas
              shadows
              gl={{ antialias: true }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight
                castShadow
                position={[5, 5, 5]}
                intensity={1}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />
              <Environment files={["/environments/nebula.hdr"]} background={true} />
              <Lab1Camera />
              <GridPlane />
              <WaterMoleculeScene />
            </Canvas>
          </DjangoProvider>
   </div>
  );
};

export default Space;

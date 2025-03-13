import React, { useEffect, useState, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import * as THREE from "three";
import SpotLightComponent from "./spot_light";

const Lamp: React.FC<{ scale: [number, number, number]; position: [number, number, number]; rotation?: [number, number, number] }> = ({ scale, position, rotation = [0, 0, 0] }) => {
    const gltf = useLoader(GLTFLoader, "/lamp/street_light.glb");
    const [model, setModel] = useState<THREE.Object3D | null>(null);
    const lampRef = useRef<THREE.Group>(null);

    useEffect(() => {
        if (gltf.scene) {
            const clonedScene = gltf.scene.clone();
            clonedScene.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                    (child as THREE.Mesh).userData.unique_id = "lamp";
                }
            });
            setModel(clonedScene);
        }
    }, [gltf]);

    return (
        <group ref={lampRef} position={position} rotation={rotation} scale={scale}>
            {model && <primitive object={model} />}
            
            {/* Spotlight attached to the lamp */}
            {lampRef.current && (
                <SpotLightComponent 
                    position={[0, 5.5, 1.5]} // 2 units above the lamp's center
                    targetPosition={[0, -2, 4]} // Pointing downward
                    intensity={2}
                    angle={Math.PI / 3}
                    penumbra={0.5}
                />
            )}
        </group>
    );
};

export default Lamp;

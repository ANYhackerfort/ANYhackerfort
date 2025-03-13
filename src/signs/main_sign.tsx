import React, { useEffect, useState, useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const Main_Sign: React.FC<{ scale: [number, number, number]; position: [number, number, number]; rotation?: [number, number, number] }> = ({ scale, position, rotation = [0, 0, 0] }) => {
    const gltf = useLoader(GLTFLoader, "/signs/road_sign.glb");
    const [model, setModel] = useState<THREE.Object3D | null>(null);
    const signRef = useRef<THREE.Group>(null);
    const textRef = useRef<THREE.Mesh>(null);
    const linkTextRef = useRef<THREE.Mesh>(null);
    const [glowIntensity, setGlowIntensity] = useState(1);
    const [linkGlowIntensity, setLinkGlowIntensity] = useState(1);

    useEffect(() => {
        if (gltf.scene) {
            const clonedScene = gltf.scene.clone();
            clonedScene.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                    (child as THREE.Mesh).userData.unique_id = "sign";
                }
            });
            setModel(clonedScene);
        }
    }, [gltf]);

    // Animate glow effect
    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        const intensity = (Math.sin(time * Math.PI / 4) + 1) / 2; // Cycles between 0 and 1 every ~4 seconds
        setGlowIntensity(0.5 + intensity * 0.5); // Adjust min/max glow effect
        setLinkGlowIntensity(0.5 + intensity * 0.5); // Adjust min/max glow effect for link
    });

    // Handle link click
    const handleLinkClick = () => {
        window.open("youtube.com", "_blank"); // Replace with your link
    };

    return (
        <group ref={signRef} position={position} rotation={rotation} scale={scale}>
            {model && <primitive object={model} />}

            {/* Main Text */}
            <Text
                ref={textRef}
                position={[0, 3.2, -0.2]} // Adjust position above sign
                color={`rgb(${255 * glowIntensity}, ${255 * glowIntensity}, ${255 * glowIntensity})`} // Dynamic glow color
                anchorX="center"
                anchorY="middle"
                font="/fonts/robo.ttf"
                scale={[-0.7, 0.7, 0.7]} // Flip text
            >
                Virtual Lab
            </Text>

            {/* Clickable "Open Project" Text */}
            <Text
                ref={linkTextRef}
                position={[0, 2.6, -0.2]} // Positioned below main text
                color={`rgb(${255 * linkGlowIntensity}, ${100 * linkGlowIntensity}, ${100 * linkGlowIntensity})`} // Dynamic red glow
                anchorX="center"
                anchorY="middle"
                font="/fonts/robo.ttf"
                scale={[-0.4, 0.4, 0.4]} // Flip text
                onClick={handleLinkClick} // Makes it clickable
                onPointerOver={() => document.body.style.cursor = "pointer"} // Show pointer on hover
                onPointerOut={() => document.body.style.cursor = "default"} // Reset cursor on leave
            >
                Open Project
            </Text>
        </group>
    );
};

export default Main_Sign;
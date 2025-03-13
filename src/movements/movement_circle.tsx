import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Vector3 } from "three";
import { useCamera } from "../camera/camera_context";

interface HollowCircleProps {
    position?: [number, number, number];
    scale?: [number, number, number];
    jumpTo?: [number, number, number];
}

const HollowCircle: React.FC<HollowCircleProps> = ({ position = [0, 0, 0], scale = [0.5, 0.5, 0.5], jumpTo }) => {
    const meshRef = useRef<Mesh>(null);
    const { setCameraPosition } = useCamera(); // Access camera position updater

    useFrame(({ clock }) => {
        if (meshRef.current) {
            // Make scale "breathe" over time
            const scaleFactor = 0.1 * Math.sin(clock.getElapsedTime() * 2) + 1;
            meshRef.current.scale.set(scale[0] * scaleFactor, scale[1] * scaleFactor, scale[2]);
        }
    });

    const logPosition = () => {
        console.log("HELLO");
        console.log("Position:", position);
        
        // Update the camera position to match the clicked object's position
        if (jumpTo) {
            setCameraPosition(new Vector3(...jumpTo));
        }
    };

    return (
        <mesh 
            ref={meshRef}
            position={position} 
            rotation={[-Math.PI / 2, 0, 0]} // Keep it flat
            userData={{
                type: "hollow_circle",
                logPosition: logPosition
            }}
        >
            <ringGeometry args={[0.1, 1, 64]} /> 
            <meshStandardMaterial color="white" side={2} /> {/* Double-sided */}
        </mesh>
    );
};

export default HollowCircle;
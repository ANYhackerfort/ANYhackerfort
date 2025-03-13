import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

interface PhysicsLabInfoProps {
    position?: [number, number, number];
    rotation?: [number, number, number];
    backgroundSize?: [number, number]; // Width & height of background
    images?: string[]; // Array of image URLs
}

const PhysicsLabImage: React.FC<PhysicsLabInfoProps> = ({
    position = [0, 2, 0],
    rotation = [0, 0, 0],
    backgroundSize = [6, 4], // Default background size
    images = ["/test.png"], // Example images
}) => {
    const textures = images.map((img) => useLoader(THREE.TextureLoader, img));

    return (
        <group position={position} rotation={rotation}>
            {/* Background Panel */}
            <mesh position={[0, -1.25, -0.05]}>
                <planeGeometry args={backgroundSize} />
                <meshStandardMaterial color="black" transparent opacity={0.8} />
            </mesh>

            {/* Display Images */}
            {textures.map((texture, index) => (
                <mesh key={index} position={[-1.5 + index * 2, -0.5, 0.05]}>
                    <planeGeometry args={[1.5, 1.5]} /> {/* Adjust size */}
                    <meshBasicMaterial map={texture} toneMapped={false} />
                </mesh>
            ))}
        </group>
    );
};

export default PhysicsLabImage;

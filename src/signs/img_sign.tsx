import React from "react";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface PhysicsLabInfoProps {
    position?: [number, number, number];
    rotation?: [number, number, number];
    backgroundSize?: [number, number]; // Width & height of background
}

const PhysicsLabInfo: React.FC<PhysicsLabInfoProps> = ({
    position = [0, 2, 0],
    rotation = [0, 0, 0],
    backgroundSize = [6, 4], // Default background size
}) => {
    return (
        <group position={position} rotation={rotation}>
            {/* Background Panel */}
            <mesh position={[0, -1.25, -0.05]}>
                <planeGeometry args={backgroundSize} />
                <meshStandardMaterial color="black" transparent opacity={0.8} />
            </mesh>

            {/* Title */}
            <Text fontSize={0.2} color="#FFD700" anchorX="center" anchorY="middle">
                🔬 Quantum Robotics Physics Lab
            </Text>

            {/* Bullet Points */}
            <Text position={[0, -0.5, 0]} fontSize={0.2} color="white">
                • Interactive 3D models for real-time experiments
            </Text>
            <Text position={[0, -1, 0]} fontSize={0.2} color="#ADD8E6">
                • Remote control of lab equipment from anywhere
            </Text>
            <Text position={[0, -1.5, 0]} fontSize={0.2} color="#FFA07A">
                • Real-time data visualization & analysis
            </Text>
            <Text position={[0, -2, 0]} fontSize={0.2} color="#98FB98">
                • Multi-user collaboration & networking
            </Text>
            <Text position={[0, -2.5, 0]} fontSize={0.2} color="#FF69B4">
                • AI-assisted learning & guidance
            </Text>
        </group>
    );
};

export default PhysicsLabInfo;
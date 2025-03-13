import React from "react";
import { Text } from "@react-three/drei";

interface TextLabel3DProps {
  text: string;
  position?: [number, number, number]; // X, Y, Z position in 3D space
  size: number;
}

const TextLabel3D: React.FC<TextLabel3DProps> = ({ text, position = [0, 1, 0], size}) => {
  return (
    <Text
      position={position}
      rotation={[-Math.PI / 2, 0, 0]} // Rotate -90 degrees along X-axis
      fontSize={size} // Adjust size as needed
      color="#F9F7F7"
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
};

export default TextLabel3D;

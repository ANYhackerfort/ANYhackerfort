import React from "react";
import { Grid } from "@react-three/drei";
import { Plane } from "@react-three/drei";

const XYZGrid: React.FC = () => {
  return (
    <group name="Complete3DGrid">
      {/* Grid */}
      <Grid 
        position={[0, 0, 0]} 
        rotation={[0, Math.PI / 2, 0]} 
        cellSize={10} 
        cellThickness={0.5} 
        sectionSize={50}  
        sectionThickness={1.5} 
        cellColor={"white"} 
        sectionColor={"white"} 
        fadeDistance={100}  
        infiniteGrid 
      />

      {/* Transparent Layer on top */}
      <Plane 
        args={[500, 500]} // Large enough to cover the entire grid
        position={[0, -10, 0]} // Slightly above the grid
        rotation={[-Math.PI / 2, 0, 0]} // Align with the grid
      >
        <meshStandardMaterial 
          transparent 
          opacity={0.00} // Adjust transparency (0 = fully invisible)
        />
      </Plane>
    </group>
  );
};

export default XYZGrid;

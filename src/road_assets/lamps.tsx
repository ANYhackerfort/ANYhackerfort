import Lamp from "./lamp";
import React from "react";

const Lamps: React.FC = () => {
    const lampPositions: { position: [number, number, number]; rotation: [number, number, number] }[] = [
      { position: [-35, 0, -8], rotation: [0, 0, 0] },
      { position: [-8, 0, -15], rotation: [0, Math.PI / 2, 0] },
      { position: [-19, 0, -8], rotation: [0, 0, 0] },
      { position: [-4, 0, 16.5], rotation: [0, Math.PI / 2, 0] },
      { position: [4, 0, -20], rotation: [0, (3 * Math.PI) / 2, 0] },
      { position: [19, 0, -8], rotation: [0, 0, 0] },
      { position: [4, 0, 10], rotation: [0, (3 * Math.PI) / 2, 0] },
      { position: [4, 0, 25], rotation: [0, (3 * Math.PI) / 2, 0] },
    ];
  
    return (
      <>
        {lampPositions.map((lamp, index) => (
          <Lamp key={index} position={lamp.position} scale={[1.5, 1.5, 1.5]} rotation={lamp.rotation} />
        ))}
      </>
    );
  };
  
  export default Lamps;
  
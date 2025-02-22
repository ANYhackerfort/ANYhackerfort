import React, { useEffect, useRef } from "react";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Lab1Camera: React.FC = () => {
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

    const setCameraRef = (camera: THREE.PerspectiveCamera | null) => {
        if (camera) {
            cameraRef.current = camera;
        }
    };

    return (
        <>
            <PerspectiveCamera
                ref={setCameraRef} // Attach the callback ref to ensure proper synchronization
                makeDefault
                position={[0, 2, 5]} // Moved camera slightly to see the scene
                fov={65}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={1000}
            />
            <OrbitControls 
                enableDamping={true} // Smooth camera movement
                dampingFactor={0.1} 
                rotateSpeed={0.7} // Adjust rotation speed
                panSpeed={0.7} // Adjust panning speed
                minDistance={1} 
                maxDistance={50} 
                enablePan={true} // Allow panning
                screenSpacePanning={false} // Allows panning only with right-click
                mouseButtons={{ MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.ROTATE }}
            />
        </>
    );
};

export default Lab1Camera;

import React, { useRef, useEffect } from "react";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useCamera } from "./camera_context";

const Lab1Camera: React.FC = () => {
    const { position } = useCamera(); // Get camera position from context
    const cameraRef = useRef<any>(null);
    const controlsRef = useRef<any>(null);
    const { scene } = useThree();

    // Update camera position when context position changes
    useEffect(() => {
        if (cameraRef.current) {
            cameraRef.current.position.set(position.x, position.y, position.z + 0.1);
            cameraRef.current.updateProjectionMatrix(); // Ensure matrix updates
        }

        if (controlsRef.current) {
            controlsRef.current.target.set(position.x, position.y, position.z);
            controlsRef.current.update(); // Ensure controls update
        }
    }, [position]); // React when position changes

    return (
        <>
            <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                position={[position.x, position.y, position.z + 0.1]} // Use context-provided position
                fov={70}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={1000}
            />
            <OrbitControls 
                target={[position.x, position.y, position.z]} 
                ref={controlsRef} // Store reference for manual updates
                enableDamping={true} // Smooth camera movement
                dampingFactor={0.1} 
                rotateSpeed={0.3} // Adjust rotation speed
                panSpeed={0.7} // Adjust panning speed
                minDistance={1} 
                maxDistance={50} 
                enablePan={false} // Allow panning
                screenSpacePanning={true} // Allows panning only with right-click
                mouseButtons={{ MIDDLE: 2, RIGHT: 0 }} 
            />
        </>
    );
};

export default Lab1Camera;
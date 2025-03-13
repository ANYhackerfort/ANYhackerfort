import React from "react";
import Lab1Camera from "../camera/camera";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import "./Space.css"; // Ensure this file makes the canvas full-screen
import Raycaster from "../raycasters/raycasting";
import Road from "../Plane/road_plane";
import TextLabel3D from "../texts/text";
import Lamp from "../road_assets/lamp";
import Lamps from "../road_assets/lamps";
import Grass from "../Plane/grass_plane";
import Main_Sign from "../signs/main_sign";
import { CameraProvider } from "../camera/camera_context";
import HollowCircle from "../movements/movement_circle";
import WoodPlain from "../Plane/grass_plane";
import PhysicsLabInfo from "../signs/img_sign";
import PhysicsLabImage from "../signs/physics_lab";

const Space: React.FC = () => {
  return (
    <CameraProvider>
      <div className="space-container">
        <Canvas
          shadows
          gl={{ antialias: true, alpha: false }} // `alpha: false` ensures solid background
          camera={{ position: [0, 10, 10], fov: 65 }}
        >
          {/* Set Background Color */}
          <Environment files="/environments/pure_sky.hdr" background />

          {/* <TextLabel3D text="Hello, " position={[0, 0.8, -22]} size={2}/>
          <TextLabel3D text="My name is Matthew." position={[-27.5, 0, -17.5]} size={3}/> */}
          
          <Lab1Camera />
          <Raycaster />

          <Road position={[0, 0, 25]} scale={[1, 1, 0.2]} rotation={[0, Math.PI / 2, 0]} />
          <Road position={[0, 0, -31.8]} scale={[1, 1, 0.2]} rotation={[0, Math.PI / 2, 0]} />
          <Road position={[-31.8, 0, 0]} scale={[1, 1, 0.2]} rotation={[0, 0, 0]} />
          <Road position={[31.85, 0, 0]} scale={[1, 1, 0.2]} rotation={[0, 0, 0]} />

          <Road position={[25, 0, 31.8]} scale={[1, 1, 0.2]} rotation={[0, Math.PI / 2, 0]} />
          <Road position={[25, 0, -31.8]} scale={[1, 1, 0.2]} rotation={[0, Math.PI / 2, 0]} />

          <Road position={[-25, 0, 31.8]} scale={[1, 1, 0.2]} rotation={[0, Math.PI / 2, 0]} />
          <Road position={[-25, 0, -31.8]} scale={[1, 1, 0.2]} rotation={[0, Math.PI / 2, 0]} />


          <HollowCircle position={[0, 0.8, 25]} jumpTo={[0, 3, 25]}/>
          <HollowCircle position={[0, 0.8, 14]} jumpTo={[0, 3, 14]}/>
          <HollowCircle position={[0, 0.8, 2]} jumpTo={[0, 3, 2]}/>

          <HollowCircle position={[-10, 1, 0]} jumpTo={[-10, 3, 0]}/>
          <HollowCircle position={[0, 1, 2]} jumpTo={[0, 3, 2]}/>
          <HollowCircle position={[0, 1, 2]} jumpTo={[0, 3, 2]}/>

          <WoodPlain position={[13, -0.1, 20]} scale={[0.1, 0.05, 0.2]} rotation={[0, 0, 0]}/>
          <Main_Sign position={[7, 0, 23]} scale={[1, 1, 1]} rotation={[0, -4.1, 0]}/>
          <PhysicsLabInfo position={[7, 4, 28]} rotation={[0, 3 * Math.PI / 2, 0]}/>
          <PhysicsLabImage position={[7, 4, 28]} />
          {/* <Lamps /> */}

        </Canvas>
      </div>
    </CameraProvider>
  );
};

export default Space;
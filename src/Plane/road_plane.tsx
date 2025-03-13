import React from "react"
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"
import { useEffect, useState } from "react"
import { GLTFLoader } from "three-stdlib"
import * as THREE from "three"

const Road: React.FC<{ scale: [number, number, number]; position: [number, number, number]; rotation: [number, number, number] }> = ({ scale, position, rotation }) => {
  const gltf = useLoader(GLTFLoader, "/planks/road1.glb");
  const [model, setModel] = useState<THREE.Object3D | null>(null);

  useEffect(() => {
    if (gltf.scene) {
      // Clone the GLTF scene to avoid conflicts
      const clonedScene = gltf.scene.clone()

      // Add unique ID and interaction behavior to the clone
      clonedScene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh
          mesh.userData.unique_id = "grass_block"
        }
      })

      setModel(clonedScene) // Store the cloned model in state
    }
  }, [gltf])

  return (
    <>
      {model && (
        <primitive object={model} scale={scale} position={position} rotation={rotation} />
      )}
    </>
  )
}

export default Road

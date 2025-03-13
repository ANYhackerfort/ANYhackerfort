import React, { createContext, useContext, useState } from "react";
import * as THREE from "three";

interface CameraContextType {
  position: THREE.Vector3;
  setCameraPosition: (newPosition: THREE.Vector3) => void;
}

const CameraContext = createContext<CameraContextType | undefined>(undefined);

export const CameraProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [position, setPosition] = useState(new THREE.Vector3(0, 3, 35)); // Default camera position

  const setCameraPosition = (newPosition: THREE.Vector3) => {
    setPosition(newPosition);
  };

  return (
    <CameraContext.Provider value={{ position, setCameraPosition }}>
      {children}
    </CameraContext.Provider>
  );
};

export const useCamera = () => {
  const context = useContext(CameraContext);
  if (!context) {
    throw new Error("useCamera must be used within a CameraProvider");
  }
  return context;
};

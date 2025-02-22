import React, { createContext, useContext, useState } from "react";

interface CameraPosition {
  x: number;
  y: number;
  z: number;
}

interface CameraState {
  currentPosition: CameraPosition;
  setPosition: (newPosition: CameraPosition) => void;
}

const CameraContext = createContext<CameraState | null>(null);

export const CameraProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State to track the current camera position
  const [currentPosition, setCurrentPosition] = useState<CameraPosition>({
    x: 0,
    y: 50,
    z: 80, // Default starting position
  });

  const setPosition = (newPosition: CameraPosition) => {
    setCurrentPosition(newPosition);
    console.log(`Camera moved to:`, newPosition);
  };

  return (
    <CameraContext.Provider value={{ currentPosition, setPosition }}>
      {children}
    </CameraContext.Provider>
  );
};

export const useCameraState = () => {
  const context = useContext(CameraContext);
  if (!context) {
    throw new Error("useCameraState must be used within a CameraProvider");
  }
  return context;
};

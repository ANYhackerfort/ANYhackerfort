import React, { createContext, useContext } from "react";

interface DjangoContextType {
  backendUrl: string;
  callFunction: (endpoint: string, payload?: object) => Promise<any>;
}

const DjangoContext = createContext<DjangoContextType | null>(null);

export const DjangoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const backendUrl = "http://localhost:8000/api"; // Change this to your backend URL

  const callFunction = async (endpoint: string, payload: object = {}) => {
    try {
      const response = await fetch(`${backendUrl}/${endpoint}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      return await response.json();
    } catch (error) {
      console.error("Django Function Call Error:", error);
      return null;
    }
  };

  return (
    <DjangoContext.Provider value={{ backendUrl, callFunction }}>
      {children}
    </DjangoContext.Provider>
  );
};

export const useDjango = () => {
  const context = useContext(DjangoContext);
  if (!context) {
    throw new Error("useDjango must be used within a DjangoProvider");
  }
  return context;
};

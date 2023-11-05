import React, { createContext, useState } from "react";

const ProgressContext = createContext();

const ProgressProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <ProgressContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </ProgressContext.Provider>
  );
};

export { ProgressContext, ProgressProvider };

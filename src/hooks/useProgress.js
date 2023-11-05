import { ProgressContext } from "@/context/ProgressContext";
import { useContext } from "react";

const useProgress = () => {
  const context = useContext(ProgressContext);

  if (!context)
    throw new Error("useProgress must be used within a ProgressContext");

  return context;
};

export { useProgress };

import { use } from "react";
import { BuilderProviderContext } from "../context/builder-provider";

const useBuilderProvider = () => {
  const context = use(BuilderProviderContext);

  if (!context) {
    throw new Error("useBuilderProvider must be used within a ProductProvider");
  }

  return context;
};

export default useBuilderProvider;
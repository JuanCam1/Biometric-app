import { createContext, useMemo, useState, type FC, type ReactNode } from "react";



interface BuilderProviderProps {
  children: ReactNode;
}

interface BuilderProviderState {
  countBuilder: number;
  changeCountBuilder: (value: number) => void;
}

export const BuilderProviderContext = createContext<BuilderProviderState | null>(null);

export const BuilderProvider: FC<BuilderProviderProps> = ({ children }) => {
  const [countBuilder, setCountBuilder] = useState(0);

  const changeCountBuilder = (value: number) => {
    setCountBuilder(value);
  }

  const values = useMemo(() => ({ countBuilder, changeCountBuilder }), [countBuilder]);

  return (
    <BuilderProviderContext value={values}>
      {children}
    </BuilderProviderContext>
  );
};
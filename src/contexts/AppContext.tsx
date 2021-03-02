import React, { createContext, useContext, useState } from "react";

export function createCustomContext<ContextType>() {
  const ctx = createContext<ContextType | undefined>(undefined);
  function useCustomContext() {
    const c = useContext(ctx);
    if (!c)
      throw new Error(
        "useCustomContext must be inside a Provider with a value"
      );
    return c;
  }
  return [useCustomContext, ctx.Provider] as const;
}

type AppContextType = {
  type: string;
  setType: (value: string) => void;
};
export const [useType, AppCtxProvider] = createCustomContext<AppContextType>();
type Props = {
  children: React.ReactNode;
};
const AppProvider = ({ children }: Props) => {
  const [type, setType] = useState("Trending");

  return <AppCtxProvider value={{ type, setType }}>{children}</AppCtxProvider>;
};

export { AppProvider };

import React, { createContext, useState } from "react";
import { LastUpdate, LastUpdateContextType } from "../types/lastUpdate";

//create context for lastUpdate
export const LastUpdateContext = createContext<LastUpdateContextType | null>(
  null
);

// Create functional component as context wrapper
export const LastUpdateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lastUpdate, setLastUpdate] = useState<LastUpdate>("Now");

  const handlerLastUpdate = (lastUpdateParam: LastUpdate) =>
    setLastUpdate(lastUpdateParam);

  return (
    <LastUpdateContext.Provider value={{ lastUpdate, handlerLastUpdate }}>
      {children}
    </LastUpdateContext.Provider>
  );
};

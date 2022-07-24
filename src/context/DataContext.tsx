import React, { createContext, SetStateAction, useState } from "react";
import { IBasicCommodity } from "types/commodity";

export type LastUpdateType = "Now" | string | undefined;

export interface DataContextType {
  dataCommodity: IBasicCommodity[];
  lastUpdate?: LastUpdateType;

  setLastUpdate: React.Dispatch<SetStateAction<string | undefined>>;
  setDataCommodity: React.Dispatch<SetStateAction<IBasicCommodity[]>>;
}

//create context for lastUpdate
export const DataContext = createContext<DataContextType | null>(null);

// Create functional component as context wrapper
export const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lastUpdate, setLastUpdate] = useState<string>();
  const [dataCommodity, setDataCommodity] = useState<IBasicCommodity[]>([]);

  return (
    <DataContext.Provider
      value={{ lastUpdate, setLastUpdate, dataCommodity, setDataCommodity }}
    >
      {children}
    </DataContext.Provider>
  );
};

export type LastUpdate = "Now" | string;

export interface LastUpdateContextType {
  lastUpdate: LastUpdate;
  handlerLastUpdate: (lastUpdate: LastUpdate) => void;
}

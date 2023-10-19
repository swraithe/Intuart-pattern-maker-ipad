import { createContext } from "react";
import useData from "./useData";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const dataState = useData();

  return (
    <DataContext.Provider value={dataState}>{children}</DataContext.Provider>
  );
};

import { useContext } from "react";
import { DataContext } from "./dataProvider";

const useDataContext = () => {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error("useChatsStore must be used inside ChatsProvider");
  }

  return context;
};

export default useDataContext;

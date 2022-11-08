import { createContext, useState, useContext } from "react";

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
    allUsers,
    setAllUsers
  };
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

const useAppState = () => {
  const context = useContext(AppStateContext);

  if (context === undefined) {
    throw new Error("useAppState must be used within AppStateContext");
  }

  return context;
};

export default useAppState;

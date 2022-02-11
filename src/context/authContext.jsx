import React, { useContext } from "react";

const Context = React.createContext();

export const useAuth = () => useContext(Context);

export const AuthProvider = (props) => {
  const testVal = 100;
  return <Context.Provider value={{ testVal }} {...props} />;
};

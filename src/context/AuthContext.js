import React, { createContext } from "react";
import useUser from "../hooks/useUser";

export const AuthProvider = createContext();
const AuthContext = ({ children }) => {
  const allContext = useUser();

  return (
    <AuthProvider.Provider value={allContext}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;

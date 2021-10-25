import React, { useEffect, useState } from "react";
import useFirebase from "../hooks/useFirebase";


export const AuthContext = React.createContext({});


export const AuthProvider = ({ children }) => {
    const allContext = useFirebase();

  return(
      <AuthContext.Provider value={allContext}>
          {children}
      </AuthContext.Provider>
  )
};

"use client";
import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext<boolean>(false);

export const UpdateAuthContext = createContext<() => void>(() => {});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);

  const updateAuth = () => setIsAuth((prev) => !prev);

  return (
    <AuthContext.Provider value={isAuth}>
      <UpdateAuthContext.Provider value={updateAuth}>
        {children}
      </UpdateAuthContext.Provider>
    </AuthContext.Provider>
  );
};

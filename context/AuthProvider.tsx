"use client";

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>(null);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuth");
    setIsAuth(auth === "true");
  }, []);


  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}
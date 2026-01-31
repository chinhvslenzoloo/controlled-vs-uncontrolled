import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const getInitialUser = () => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("userName");
      if (savedUser) return { userName: savedUser, isLoggedIn: true };
    }
    return { userName: "", isLoggedIn: false };
  };

  const [user, setUser] = useState(getInitialUser);

  const login = (name) => setUser({ userName: name, isLoggedIn: true });
  const logout = () => setUser({ userName: "", isLoggedIn: false });

  useEffect(() => {
    if (user.isLoggedIn) localStorage.setItem("userName", user.userName);
    else localStorage.removeItem("userName");
  }, [user]);

  return (
    <UserContext.Provider value={{ ...user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

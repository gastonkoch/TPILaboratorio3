import { useState, createContext } from "react";
import React from "react";
import PropType from "prop-types";

export const AuthenticationContext = createContext({});

const userValueString = localStorage.getItem("user");
const userValue = userValueString ? JSON.parse(userValueString) : null;

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(userValue);

  const handleLogin = (name) => {
    localStorage.setItem("user", JSON.stringify({ name }));
    setUser({ name });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthenticationContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
AuthenticationContextProvider.propTypes = {
  children: PropType.object,
};

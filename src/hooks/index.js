import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api-back";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@token");
    const user = localStorage.getItem("@user");

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }
    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const { data } = await api.post("/sessions", {
      email,
      password,
    });
    if (data) {
      const { token, user } = data;
      localStorage.setItem("@token", token);
      localStorage.setItem("@user", JSON.stringify(user));

      setData({ token, user });
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@token");
    localStorage.removeItem("@user");
    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Error on Auth context");
  }
  return context;
};

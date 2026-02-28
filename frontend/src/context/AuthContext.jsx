import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const register = async (name, email, password) => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/register`,
      {
        name,
        email,
        password,
      },
    );
    localStorage.setItem("user", JSON.stringify(data.data));
    setUser(data.data);
    return data;
  };

  const login = async (email, password) => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/login`,
      {
        email,
        password,
      },
    );
    localStorage.setItem("user", JSON.stringify(data.data));
    setUser(data.data);
    return data;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

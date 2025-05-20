import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Define auth context type
interface AuthContextType {
  user: string | null;
  token: string | null;
  login: (token: string, name: string) => void;
  logout: () => void;
}

// Create context to be used globally
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(sessionStorage.getItem("userName"));
  const [token, setToken] = useState<string | null>(sessionStorage.getItem("token"));
  const navigate = useNavigate();

  // Login function
  const login = (token: string, name: string) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userName", name);
    setUser(name);
    setToken(token);
  };

  // Logout function
  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userName");
    setUser(null);
    setToken(null);
    navigate("/"); 
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

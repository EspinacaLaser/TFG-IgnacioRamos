import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

/**
 * Interfaz del usuario autenticado.
 */
interface Usuario {
  cliente_id: number;
  nombre: string;
  email: string;
  // ...otros campos que quieras guardar
}

/**
 * Interfaz del contexto de autenticación.
 */
interface AuthContextType {
  usuario: Usuario | null;
  login: (usuario: Usuario) => void;
  logout: () => void;
}

/**
 * Contexto de autenticación.
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Proveedor de autenticación que envuelve la app.
 * Permite acceder al usuario y a las funciones de login/logout desde cualquier componente.
 */
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  // Mantener sesión tras recarga usando localStorage
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUsuario(JSON.parse(stored));
  }, []);

  const login = (user: Usuario) => {
    setUsuario(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Hook para acceder al contexto de autenticación.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
};
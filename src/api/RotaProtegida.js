import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AutRota } from "./Autenticador";

// PrivateRoute verifica a autenticação e redireciona conforme necessário.
export const PrivateRoute = ({ children }) => {
  const { estaAutenticado } = useContext(AutRota);
  const [isAuthenticated, setIsAuthenticated] = useState(estaAutenticado);

  useEffect(() => {
    setIsAuthenticated(estaAutenticado);
  }, [estaAutenticado]);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

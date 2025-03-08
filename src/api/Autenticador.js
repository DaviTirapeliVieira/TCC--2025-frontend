import React, { createContext, useState, useEffect } from "react";

// contexto de autenticação
const AutRota = createContext();

// verifica se o usuário está autenticado (logado)
const Autenticado = () => {
  return localStorage.getItem("tokenAut") !== null;
};

const AutenticadoInfo = ({ children }) => {
  // gerenciar a autenticação e o token
  const [estaAutenticado, setAutenticado] = useState(Autenticado());
  const [tokenAut, setTokenAut] = useState(localStorage.getItem("tokenAut"));

  // Função de login
  const login = (token) => {
    localStorage.setItem("tokenAut", token); // Salva o token no localStorage
    setTokenAut(token);
    setAutenticado(true);
  };

  // Função de logout
  const logout = () => {
    localStorage.removeItem("tokenAut"); // Remove o token do localStorage
    setTokenAut(null);
    setAutenticado(false);
  };

  // verifica a autenticacao quando o componente é montado
  useEffect(() => {
    setAutenticado(Autenticado()); // Atualiza o estado de autenticação com base no token
  }, []); // garante que seja feita apenas uma vez

  return (
    <AutRota.Provider value={{ estaAutenticado, tokenAut, login, logout }}>
      {children}
    </AutRota.Provider>
  );
};

export { AutRota, AutenticadoInfo };

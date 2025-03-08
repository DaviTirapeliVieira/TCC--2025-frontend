// Ajax do form Login

import axios from "axios";
const URL = "http://localhost:8000/api"; // muda a URL

export const loginService = async (email, senha) => {
  try {
    // requisição POST dos dados de login
    const response = await axios.post(`${URL}/login`, { email, senha });
    // Muda se for retorna outra merda
    return response.data;
  } catch (error) {
    // se essa desgraça não funcionar já sabe
    console.error("Erro ao tentar fazer login", error);
    throw error; // lança a merda do erro
  }
};
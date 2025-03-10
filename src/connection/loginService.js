// Ajax do form Login

import axios from "axios";
const URL = "http://localhost:8000/api"; // muda a URL

export const loginService = async (email, senha) => {
  try {
    const response = await axios.post(`${URL}/login`, { email, senha });
    return response.data;
  } catch (error) {
    console.error("Erro ao tentar fazer login", error);
    throw error;
  }
};
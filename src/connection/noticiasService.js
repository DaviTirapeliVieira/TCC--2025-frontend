// Ajax dos card de noticia

import axios from "axios";
const URL = "http://localhost:8000/api"; // muda a URL

export const NoticiasService = async () => {
  try {
    const resposta = await axios.get(`${URL}/noticias`);
    return resposta.data;
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
};

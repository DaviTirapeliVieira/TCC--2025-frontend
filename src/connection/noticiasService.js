import api from "./api";

export const NoticiasService = async () => {
  try {
    const response = await api.get("/noticias");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar notícias:", error?.response?.data || error.message);
    return [];
  }
};

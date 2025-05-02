import api from "./api";

export const buscarAvisos = async () => {
  try {
    const response = await api.get("/avisos");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar avisos:", error?.response?.data || error.message);
    return [];
  }
};

export const buscarEventos = async () => {
  try {
    const response = await api.get("/eventos");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar eventos:", error?.response?.data || error.message);
    return [];
  }
};

export const buscarNovidades = async () => {
  try {
    const response = await api.get("/novidades");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar novidades:", error?.response?.data || error.message);
    return [];
  }
};

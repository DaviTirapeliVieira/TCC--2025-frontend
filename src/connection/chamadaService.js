import api from "./api";

export const ChamadaService = async (presenca) => {
  try {
    const response = await api.post("/chamada", { presenca });
    if (response.data.success) {
      console.log("Presença salva com sucesso!");
    } else {
      console.warn("Erro ao salvar presença.");
    }
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar presença:", error?.response?.data || error.message);
    throw new Error("Não foi possível registrar a presença.");
  }
};

import api from "./api";

export const CadClasseService = async (classe) => {
  try {
    const response = await api.post("/cadastro-classe", { classe });
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar classe:", error?.response?.data || error.message);
    throw new Error("Não foi possível cadastrar a classe.");
  }
};

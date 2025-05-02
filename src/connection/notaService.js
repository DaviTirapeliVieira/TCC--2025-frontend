import api from "./api";

export const DadosAlunos = async () => {
  try {
    const response = await api.get("/nota");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar notas:", error?.response?.data || error.message);
    throw new Error("Não foi possível carregar as notas dos alunos.");
  }
};
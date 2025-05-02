import api from "./api";

export const CadAlunoService = async (aluno) => {
  try {
    const response = await api.post("/cadastro-aluno", { aluno });
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar aluno:", error?.response?.data || error.message);
    throw new Error("Não foi possível cadastrar o aluno.");
  }
};

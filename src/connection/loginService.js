import api from "./api";

export const loginService = async (email, senha) => {
  try {
    const response = await api.post("/login", { email, senha });
    return response.data;
  } catch (error) {
    console.error("Erro ao tentar fazer login:", error?.response?.data || error.message);
    throw new Error(
      error?.response?.data?.mensagem || "Falha ao fazer login. Verifique suas credenciais."
    );
  }
};

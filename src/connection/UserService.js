import api from "./api";

export const UserService = async () => {
  try {
    const response = await api.get("/user");
    return response.data;
  } catch (error) {
    console.error("Erro ao carregar dados do usuário:", error?.response?.data || error.message);
    throw new Error("Não foi possível carregar os dados do usuário.");
  }
};
import api from "./api";

export const ChatService = async (mensagem) => {
  try {
    const response = await api.post("#", { mensagem });
    return response.data.resposta;
  } catch (error) {
    console.error("Erro na requisição da IA:", error?.response?.data || error.message);
    return "Desculpe, ocorreu um erro ao tentar obter a resposta da IA.";
  }
};

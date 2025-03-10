// Ajax do Chat

import axios from 'axios';
const URL = "http://localhost:8000/api"; // muda a URL

// obter a resposta da IA
export const ChatService = async (mensagem) => {
  try {
    const response = await axios.post(`${URL}`, {
      mensagem,
    });
    
    return response.data.resposta; // Rezo para que o backend retorne
  } catch (error) {
    console.error('Erro na requisição:', error);
    return 'Desculpe, erro ao tentar obter a resposta da IA.';
  }
};

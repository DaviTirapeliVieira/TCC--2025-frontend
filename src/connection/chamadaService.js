// Ajax da chamada

import axios from "axios";
const URL = "http://localhost:8000/api"; // muda a URL

export const ChamadaService = async (presenca) => {
  try {
    const response = await axios.post(`${URL}/chamada`, { presenca });
    if (response.data.success) {
      alert("Presença salva com sucesso!");
    } else {
      alert("Erro ao salvar presença.");
    }

    return response.data; // retorna os dados após verificar a resposta

  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Houve um erro ao tentar salvar a presença.");
  };
}

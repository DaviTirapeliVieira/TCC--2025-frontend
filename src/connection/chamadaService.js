// Ajax da chamada

import axios from "axios";
const URL = "http://localhost:8000/api"; // muda a URL

const ChamadaService = async () => {
  try {
    const response = await axios.post(`${URL}/chamada`);
    if (response.data.success) {
      alert("Presença salva com sucesso!");
    } else {
      alert("Erro ao salvar presença.");
    }

    return response.data; // retorna os dados após verificar a resposta

  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Houve um erro ao tentar salvar a presença."); // alerta de erro
  };
}

export default ChamadaService;

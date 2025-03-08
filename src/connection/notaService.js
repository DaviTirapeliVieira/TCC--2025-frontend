// Ajax das notas

import axios from 'axios';
const URL = "http://localhost:8000/api"; // muda a URL


export const DadosAlunos = async () => {
    try {
        const response = await axios.get(`${URL}/nota`);
        return response.data;
    } catch(error) {
        console.error("Erro", error);
        throw error;
    }
};
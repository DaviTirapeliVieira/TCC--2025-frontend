// Ajax do navbar

import axios from "axios";
const URL = "http://localhost:8000/api"; // muda a URL

export const buscarAvisos = async () => {
    try {
        const resposta = await axios.get(`${URL}/avisos`);
        return resposta.data;
    } catch (error) {
        console.error("Erro ao buscar avisos:", error);
        return [];
    }
}

export const buscarEventos = async () => {
    try {
        const resposta = await axios.get(`${URL}/eventos`);
        return resposta.data;
    } catch (error) {
        console.error("Erro ao buscar eventos:", error);
        return [];
    }
}

export const buscarNovidades = async () => {
    try {
        const resposta = await axios.get(`${URL}/novidades`);
        return resposta.data;
    } catch (error) {
        console.error("Erro ao buscar novidades:", error);
        return [];
    }
}

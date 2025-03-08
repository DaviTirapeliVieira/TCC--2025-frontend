// Ajax dos dados do user

import axios from 'axios'
const URL = "http://localhost:8000/api"; // muda a URL

export const UserService = async () => {
    try {
        const response = await axios.get(`${URL}/user`);
        return response.data;
    } catch (error) {
        throw new Error("Erro ao carregar os dados do usuário");
    }
};
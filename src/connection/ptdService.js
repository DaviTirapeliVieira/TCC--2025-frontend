import api from "./api";

export const getDisciplinas = (UserId) => {
  return api.get(`/disciplinas?UserId=${UserId}`);
};

export const getCursos = (UserId) => {
  return api.get(`/cursos?UserId=${UserId}`);
};

export const getSeries = (UserId) => {
  return api.get(`/series?UserId=${UserId}`);
};

export const salvarPTD = (data) => {
  return api.post(`/ptds`, data);
};

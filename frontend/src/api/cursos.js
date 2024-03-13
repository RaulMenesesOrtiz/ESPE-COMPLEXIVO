import axios from "./axios";

export const getCursosRequest = async () => axios.get("/cursos");

export const createCursosRequest = async (curso) => axios.post("/cursos", curso);

export const updateCursosRequest = async (curso) =>
  axios.put(`/cursos/${curso._id}`, curso);

export const deleteCursosRequest = async (id) => axios.delete(`/cursos/${id}`);

export const getCursoRequest = async (id) => axios.get(`/cursos/${id}`);

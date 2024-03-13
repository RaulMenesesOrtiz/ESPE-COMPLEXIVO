import { createContext, useContext, useState } from "react";
import {
  createCursosRequest,
  deleteCursosRequest,
  getCursosRequest,
  getCursoRequest,
  updateCursosRequest,
} from "../api/cursos";

const CursoContext = createContext();

export const useCursos = () => {
  const context = useContext(CursoContext);
  if (!context) throw new Error("useCursos must be used within a CursoProvider");
  return context;
};

export function CursoProvider({ children }) {
  const [cursos, setCursos] = useState([]);

  const getCursos = async () => {
    try {
      const res = await getCursosRequest();
      setCursos(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCurso = async (id) => {
    try {
      const res = await deleteCursosRequest(id);
      if (res.status === 204) setCursos(cursos.filter((curso) => curso._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createCurso = async (curso) => {
    try {
      const res = await createCursosRequest(curso);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCurso = async (id) => {
    try {
      const res = await getCursoRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateCurso = async (id, curso) => {
    try {
      await updateCursosRequest(id, curso);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CursoContext.Provider
      value={{
        cursos,
        getCursos,
        deleteCurso,
        createCurso,
        getCurso,
        updateCurso,
      }}
    >
      {children}
    </CursoContext.Provider>
  );
}

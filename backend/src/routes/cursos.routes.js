import { Router } from "express";
import {
  createCurso,
  deleteCurso,
  getCursoById,
  getCursos,
  updateCurso,
} from "../controllers/curse.controllers.js";


const router = Router();

router.get("/cursos", getCursos);

router.post("/cursos", createCurso);

router.get("/cursos/:id", getCursoById);

router.put("/cursos/:id", updateCurso);

router.delete("/cursos/:id", deleteCurso);

export default router;

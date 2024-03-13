import { z } from "zod";

export const createCursoSchema = z.object({
  nombre: z.string({
    required_error: "Nombre is required",
  }),
  descripcion: z.string().optional(),
  fechaDiseno: z.string().datetime().optional(),
  profesores: z.string({
    required_error: "Profesores is required",
  }),
});

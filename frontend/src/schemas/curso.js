import { z } from "zod";

export const cursoSchema = z.object({
  nombre: z.string({
    required_error: "El nombre es obligatorio",
  }),
  descripcion: z.string({
    required_error: "La descripción es obligatoria",
  }),
  fechaDiseno: z.string({
    required_error: "La fecha de diseño es obligatoria",
  }),
});

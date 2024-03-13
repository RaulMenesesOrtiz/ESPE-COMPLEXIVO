import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Input, Label } from "../components/ui";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
import { useCursos } from "../context/cursosContext"; // Actualiza la importación del contexto de cursos


export function CursoFormPage() {
  const { createCurso, getCurso, updateCurso } = useCursos(); // Actualiza a la función de contexto de cursos
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateCurso(params.id, data); // Actualiza la función de actualización del curso
      } else {
        createCurso(data); // Actualiza la función de creación de curso
      }

      navigate("/cursos"); // Actualiza la redirección después de guardar
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadCurso = async () => {
      if (params.id) {
        const curso = await getCurso(params.id); // Actualiza la función para obtener el curso
        setValue("nombre", curso.nombre);
        setValue("descripcion", curso.descripcion);
        setValue("fechaDiseno", curso.fechaDiseno);
        setValue("profesores", curso.profesores); // Si necesitas cargar los profesores del curso
      }
    };
    loadCurso();
  }, []);

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="nombre">Nombre</Label>
        <Input
          type="text"
          name="nombre"
          placeholder="Nombre"
          {...register("nombre")}
          autoFocus
        />
        {errors.nombre && (
          <p className="text-red-500 text-xs italic">Por favor ingresa un nombre.</p>
        )}

        <Label htmlFor="descripcion">Descripción</Label>
        <Textarea
          name="descripcion"
          id="descripcion"
          rows="3"
          placeholder="Descripción"
          {...register("descripcion")}
        ></Textarea>

        <Label htmlFor="fechaDiseno">Fecha de Diseño</Label>
        <Input type="date" name="fechaDiseno" {...register("fechaDiseno")} />

        {/* Si necesitas agregar los profesores, aquí puedes hacerlo */}
        
        <Button>Guardar</Button>
      </form>
    </Card>
  );
}

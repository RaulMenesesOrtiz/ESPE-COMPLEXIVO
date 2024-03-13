import { useCursos } from "../../context/cursosContext";
import { Button, ButtonLink, Card } from "../ui";

export function CursoCard({ curso }) {
  const { deleteCurso } = useCursos();

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{curso.nombre}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deleteCurso(curso.id)}>Delete</Button>
          <ButtonLink to={`/cursos/${curso.id}`}>Edit</ButtonLink>
        </div>
      </header>
      <p className="text-slate-300">{curso.descripcion}</p>
      <p>Fecha de Diseño: {new Date(curso.fechaDiseno).toLocaleDateString()}</p>
      <p>Profesores: {curso.profesores.join(", ")}</p>
    </Card>
  );
}

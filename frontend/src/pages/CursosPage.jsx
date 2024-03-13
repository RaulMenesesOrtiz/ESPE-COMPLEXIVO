import { useEffect } from "react";
import { useCursos } from "../context/cursosContext"; // Actualiza la importación del contexto de cursos
import { CursoCard } from "../components/cursos/CursoCard"; // Actualiza la importación del componente de tarjeta de curso
import { ImFileEmpty } from "react-icons/im";

export function CursosPage() {
  const { cursos, getCursos } = useCursos(); // Actualiza la obtención de cursos y la función para obtener cursos del contexto

  useEffect(() => {
    getCursos(); // Actualiza la llamada para obtener cursos
  }, []);

  return (
    <>
      {cursos.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No hay cursos aún, por favor añade un nuevo curso
            </h1>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {cursos.map((curso) => (
          <CursoCard curso={curso} key={curso.id} /> // Asegúrate de que la clave sea única, podrías usar curso.id si está disponible
        ))}
      </div>
    </>
  );
}

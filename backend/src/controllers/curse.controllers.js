import Curso from "../models/curse.model.js";

// Obtener todos los cursos
export const getCursos = async (req, res) => {
  try {
    const cursos = await Curso.findAll(); // Consulta para seleccionar todos los cursos
    res.json(cursos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo curso
export const createCurso = async (req, res) => {
  try {
    const { id, nombre, descripcion, fechaDiseno, profesores } = req.body;
    const newCurso = new Curso({
      id,
      nombre,
      descripcion,
      fechaDiseno,
      profesores,
    });

    const cursoGuardado = await newCurso.save();
    res.json(cursoGuardado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar un curso
export const deleteCurso = async (req, res) => {
  try {
    const deletedCurso = await Curso.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!deletedCurso) {
      return res.status(404).json({ message: "Curso not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Actualizar un curso
export const updateCurso = async (req, res) => {
  try {
    const { nombre, descripcion, fechaDiseno, profesores } = req.body;
    const [updated] = await Curso.update(
      { nombre, descripcion, fechaDiseno, profesores },
      {
        where: { id: req.params.id }
      }
    );
    if (updated) {
      const updatedCurso = await Curso.findByPk(req.params.id);
      return res.json(updatedCurso);
    }
    throw new Error('Curso not found');
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Obtener un curso por ID
export const getCursoById = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (!curso) {
      return res.status(404).json({ message: "Curso not found" });
    }
    res.json(curso);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

import { BrowserRouter, Routes, Route } from "react-router-dom";


import { CursoFormPage } from "./pages/CursoFormPage";
import { CursosPage } from "./pages/CursosPage";
import { CursoProvider } from "./context/cursosContext";

function App() {
  return (
    <CursoProvider>

        <BrowserRouter>
          <main className="container content-container mx-auto px-10 md:px-0">
            <Routes>
                <Route path="/cursos" element={<CursosPage />} />
                <Route path="/add-curso" element={<CursoFormPage />} />
                <Route path="/cursos/:id" element={<CursoFormPage />} />
            </Routes>
          </main>
        </BrowserRouter>
        </CursoProvider>
  );
}

export default App;

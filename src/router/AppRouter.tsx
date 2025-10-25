import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contacto } from "../pages/Contacto";
import  Proyectos  from "../pages/Proyectos";
import { Certificaciones } from "../pages/Certificaciones";
export const AppRouter = () => {
  return (
    <Routes>
      {/* Página principal */}
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      {/* Contacto */}
      <Route path="/contacto" element={<Contacto />} />
      {/* Proyectos */}
      <Route path="/proyectos" element={<Proyectos />} />
      {/* Certificaciones */}
      <Route path="/certificaciones" element={<Certificaciones />} />

      {/* Redirección para rutas no encontradas */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

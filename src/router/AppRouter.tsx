import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contacto } from "../pages/Contacto";
import { Proyectos } from "../pages/Proyectos";
import { Certificaciones } from "../pages/Certificaciones";
export const AppRouter = () => {
  return (
    <Routes>
      {/* Página principal */}
      <Route path="/" element={<Home />} />
      {/* Contacto */}
      <Route path="/contacto" element={<Contacto />} />
      {/* Proyectos */}
      <Route path="/proyectos" element={<Proyectos />} />
      {/* Certificaciones */}
      <Route path="/certificaciones" element={<Certificaciones />} />


      {/* <Route path="*" element={<NotFoundPage />} /> */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

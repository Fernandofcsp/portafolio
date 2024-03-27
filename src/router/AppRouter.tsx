import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contacto } from "../pages/Contacto";
import { Proyectos } from "../pages/Proyectos";
import { UnityGame } from "../pages/UnityGame";
export const AppRouter = () => {
  return (
    <Routes>
      {/* Página principal */}
      <Route path="/" element={<Home />} />
      {/* Contacto */}
      <Route path="/contacto" element={<Contacto />} />
      {/* Proyectos */}
      <Route path="/proyectos" element={<Proyectos />} />

      <Route path="/unityGame" element={<UnityGame />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

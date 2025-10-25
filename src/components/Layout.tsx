import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Footer } from "./Footer";
interface IProps {
  children: JSX.Element;
}

const Layout = ({ children }: IProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsSmallScreen(e.matches);
    };

    handleMediaQueryChange(mediaQuery as any); // Establecer el estado inicial basado en el tamaño de la pantalla

    mediaQuery.addEventListener('change', handleMediaQueryChange); // Escuchar los cambios en el tamaño de la pantalla

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange); // Limpiar el listener al desmontar el componente
    };
  }, []);

  return (
    <div>
      <NavBar isSmallScreen={isSmallScreen} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

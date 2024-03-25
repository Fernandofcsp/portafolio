import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Footer } from "./Footer";
interface IProps {
  children: JSX.Element;
}

const Layout = ({ children }: IProps) => {
  const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(true);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (e: any) => {
      setIsNavBarOpen(!e.matches);
      setIsSmallScreen(e.matches);
    };

    handleMediaQueryChange(mediaQuery); // Establecer el estado inicial basado en el tamaño de la pantalla

    mediaQuery.addListener(handleMediaQueryChange); // Escuchar los cambios en el tamaño de la pantalla

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange); // Limpiar el listener al desmontar el componente
    };
  }, []);

  return (
    <div>
      <NavBar
        isNavBarOpen={isNavBarOpen}
        setIsNavBarOpen={setIsNavBarOpen}
        isSmallScreen={isSmallScreen}
      />
      <main >{children}</main>
      <Footer />
    </div>
    
  );
};

export default Layout;

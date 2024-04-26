import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Formacion } from "../components/Formacion";
import Social from "../components/Social";
import Sobre from "../components/Sobre";
import AreaDeSkills from "../components/AreaDeSkills";
import AreaDeHobbies from "../components/AreaDeHobbies";
import Layout from "../components/Layout";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Detectar si la URL tiene el fragmento #sobre-mi
    if (location.hash === "#sobre-mi") {
      // Encontrar el elemento con id="sobre-mi" y hacer scroll hasta él
      const sobreElement = document.getElementById("sobre-mi");
      if (sobreElement) {
        sobreElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Detectar si la URL tiene el fragmento #skills
    if (location.hash === "#skills") {
      // Encontrar el elemento con id="skills" y hacer scroll hasta él
      const skillsElement = document.getElementById("skills");
      if (skillsElement) {
        skillsElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (location.hash === "#hobbies") {
      // Encontrar el elemento con id="hobbies" y hacer scroll hasta él
      const hobbiesElement = document.getElementById("hobbies");
      if (hobbiesElement) {
        hobbiesElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (location.hash === "#formacion") {
      // Encontrar el elemento con id="formacion" y hacer scroll hasta él
      const formacionElement = document.getElementById("formacion");
      if (formacionElement) {
        formacionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <Layout>
      <div className="dark:bg-[#21242b] w-full relative bg-preto-05 overflow-hidden  ">
        <Social />
        <div id="sobre-mi">
          <Sobre />
        </div>
        <div id="formacion"></div>
        <Formacion />
        <div id="skills"></div>
        <AreaDeSkills />
        <div id="hobbies"></div>
        <AreaDeHobbies />
        
        
      </div>
    </Layout>
  );
};

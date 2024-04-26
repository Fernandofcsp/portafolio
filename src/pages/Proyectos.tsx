import Experiencia from "../components/Experiencia";
import Layout from "../components/Layout";
import encryptText from "../../public/assets/proyects/encryptText.png";
import guitarPage from "../../public/assets/proyects/guitarPage.png";
import unityGame from "../../public/assets/proyects/juegoPlataformas2.png";
import financeBond from "../../public/assets/proyects/financeBond.png";
import conversorMonedas from "../../public/assets/proyects/conversorMonedas.gif";

export const Proyectos = () => {
  const handleDivLoad = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Layout>
      <div
        onLoad={handleDivLoad}
        className="dark:bg-[#21242b] dark:text-white bg-preto-05 mt-10 self-stretch flex flex-col items-center justify-between p-8 box-border gap-[16px] max-w-full text-center text-3xl text-preto-100 font-raleway"
      >
        <h2 className="m-4 w-[248px] relative text-inherit font-bold font-inherit inline-block mq450:text-lg">
          Experiencia profesional
        </h2>
        <Experiencia
          infoCard={guitarPage}
          titleDescription="Pagina web de cursos"
          propWidth="auto"
          propHeight="500px"
          propAlignSelf="center" //stretch | center | flex-start | flex-end | baseline
          imagePosition="left" // right  | left
          repoLink="https://github.com/Fernandofcsp/guitarPage"
          demoLink="https://projectingsoftvicguitar.free.nf/"
        />
        <Experiencia
          infoCard={unityGame}
          titleDescription="Juego de plataformas en Unity"
          propWidth="auto"
          propHeight="500px"
          propAlignSelf="center" //stretch | center | flex-start | flex-end | baseline
          imagePosition="right" // right  | left
          repoLink="https://github.com/Fernandofcsp/juegoPlataformasUnity"
          demoLink="https://fernandofcsp.github.io/juegoPlataformasUnity/"
        />
        <Experiencia
          infoCard={encryptText}
          titleDescription="Encriptador de texto"
          propWidth="auto"
          propHeight="500px"
          propAlignSelf="center" //stretch | center | flex-start | flex-end | baseline
          imagePosition="left" // right  | left
          repoLink="https://github.com/Fernandofcsp/Text-Encryption"
          demoLink="https://fernandofcsp.github.io/Text-Encryption/"
        />
        <Experiencia
          infoCard={financeBond}
          titleDescription="ERP Finance Bond"
          propWidth="auto"
          propHeight="500px"
          propAlignSelf="center" //stretch | center | flex-start | flex-end | baseline
          imagePosition="right" // right  | left
          repoLink="https://github.com/Fernandofcsp/modular_front"
          demoLink="https://drive.google.com/file/d/1EMDIiTy39fNeLLnsh5yP9rUTBp0sHzV4/view?usp=drive_link"
        />
        <Experiencia
          infoCard={conversorMonedas}
          titleDescription="Conversor de divisas"
          propWidth="auto"
          propHeight="500px"
          propAlignSelf="center" //stretch | center | flex-start | flex-end | baseline
          imagePosition="left" // right  | left
          repoLink="https://github.com/Fernandofcsp/conversorMonedasAPI"
          demoLink="https://drive.google.com/file/d/19kxfFrkaLZy0aZPSvexqm0cSiywpJKbV/view?usp=drive_link"
        />
      </div>
    </Layout>
  );
};

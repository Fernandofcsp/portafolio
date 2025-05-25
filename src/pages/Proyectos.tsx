import Experiencia from "../components/Experiencia";
import Layout from "../components/Layout";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../translations/translations";
import encryptText from "../../public/assets/proyects/encryptText.png";
import guitarPage from "../../public/assets/proyects/guitarPage.png";
import unityGame from "../../public/assets/proyects/juegoPlataformas2.png";
import financeBond from "../../public/assets/proyects/financeBond.png";
import conversorMonedas from "../../public/assets/proyects/conversorMonedas.gif";
import literalura from "../../public/assets/proyects/literalura.png";
import forohub from "../../public/assets/proyects/forohub.png";
import checaTraspasos from "../../public/assets/proyects/checaTraspasos.png";
import verificadorPreciosB9 from "../../public/assets/proyects/verificadorPreciosB9.png";
const Proyectos: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as "en" | "es"];

  const handleDivLoad = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <div
        onLoad={handleDivLoad}
        className="dark:bg-[#21242b] dark:text-white bg-preto-05 mt-10 self-stretch flex flex-col items-center justify-between p-8 box-border gap-[16px] max-w-full text-center text-3xl text-preto-100 font-raleway"
      >
        <h2 className="m-4 w-[288px] relative text-inherit font-bold font-inherit inline-block mq450:text-lg">
          {t.projects.experiencia_profesional}
        </h2>
        <Experiencia
          infoCard={verificadorPreciosB9}
          titleDescription={t.projects.verificador_preciosB9}
          propWidth="auto"
          propHeight="500px"
          propAlignSelf="center"
          imagePosition="left"
          repoLink="https://github.com/Fernandofcsp/verificadorPreciosB9"
          demoLink="https://fernandofcsp.github.io/verificadorPreciosB9/"
        />
        <Experiencia
          infoCard={checaTraspasos}
          titleDescription={t.projects.verificador_traspasos}
          propWidth="auto"
          propHeight="500px"
          propAlignSelf="center"
          imagePosition="left"
          repoLink="https://github.com/Fernandofcsp/checaTraspasos"
          demoLink="https://fernandofcsp.github.io/checaTraspasos/"
        />
        <Experiencia
          infoCard={guitarPage}
          titleDescription={t.projects.pagina_web_cursos}
          propWidth="auto"
          propHeight="500px"
          propAlignSelf="center"
          imagePosition="left"
          repoLink="https://github.com/Fernandofcsp/guitarPage"
          demoLink="https://projectingsoftvicguitar.free.nf/"
        />
        <Experiencia
          infoCard={unityGame}
          titleDescription={t.projects.juego_plataformas_unity}
          propWidth="auto"
          propHeight="500px"
          propAlignSelf="center"
          imagePosition="right"
          repoLink="https://github.com/Fernandofcsp/juegoPlataformasUnity"
          demoLink="https://fernandofcsp.github.io/juegoPlataformasUnity/"
        />
        <Experiencia
          infoCard={encryptText}
          titleDescription={t.projects.encriptador_texto}
          propWidth="auto"
          propHeight="500px"
          propAlignSelf="center"
          imagePosition="left"
          repoLink="https://github.com/Fernandofcsp/Text-Encryption"
          demoLink="https://fernandofcsp.github.io/Text-Encryption/"
        />
        <Experiencia
          infoCard={financeBond}
          titleDescription={t.projects.erp_finance_bond}
          propWidth="auto"
          propHeight="500px"
          propAlignSelf="center"
          imagePosition="right"
          repoLink="https://github.com/Fernandofcsp/modular_front"
          demoLink="https://drive.google.com/file/d/1EMDIiTy39fNeLLnsh5yP9rUTBp0sHzV4/view?usp=drive_link"
        />
        <Experiencia
          infoCard={conversorMonedas}
          titleDescription={t.projects.conversor_divisas}
          propWidth="auto"
          propHeight="500px"
          propAlignSelf="center"
          imagePosition="left"
          repoLink="https://github.com/Fernandofcsp/conversorMonedasAPI"
          demoLink="https://drive.google.com/file/d/19kxfFrkaLZy0aZPSvexqm0cSiywpJKbV/view?usp=drive_link"
        />
        <Experiencia
          infoCard={literalura}
          titleDescription={t.projects.literalura}
          propWidth="auto"
          propHeight="500px"
          propAlignSelf="center"
          imagePosition="right"
          repoLink="https://github.com/Fernandofcsp/literalura"
          demoLink="https://drive.google.com/file/d/1Pb5Kb_gnG_cimbJn4HzBb-o5rn9lX0bj/view"
        />
        <Experiencia
          infoCard={forohub}
          titleDescription={t.projects.api_rest_forohub}
          propWidth="auto"
          propHeight="500px"
          propAlignSelf="center"
          imagePosition="left"
          repoLink="https://github.com/Fernandofcsp/forohub"
          demoLink="https://drive.google.com/file/d/103Fyq_TgCgPU1gdl-7cTw2v0R_JeFMBk/view"
        />
      </div>
    </Layout>
  );
};

export default Proyectos;

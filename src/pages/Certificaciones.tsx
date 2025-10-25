import { useEffect } from "react";
import Layout from "../components/Layout";
import DocumentCert from "../components/DocumentCert";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../translations/translations";
import introFrontEnd from "../../public/assets/certifications/IntroFront-End.png";
import Emprendimiento from "../../public/assets/certifications/Emprendimiento.png";
import desarrolloPersonal from "../../public/assets/certifications/DesarrolloPersonal.png";
import priProgra from "../../public/assets/certifications/PrincipianteProgramacion.png";
import designThinking from "../../public/assets/certifications/FT MX - Certificado.png";
import projectManagement from "../../public/assets/certifications/SkillsBuild_ProjectManagementFundamentals_Badge.png";
import javaPoo from "../../public/assets/certifications/JavaOrientadoaObjetos.png";
import javaSpringBoot from "../../public/assets/certifications/JavaSpringBoot.png";
import programaOne from "../../public/assets/certifications/ProgramaOne.png";

export const Certificaciones = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll instantáneo al cargar
  }, []);

  const { language } = useLanguage();
  const t = translations[language as "en" | "es"];
  return (
    <Layout>
      <div
        className="dark:bg-[#21242b] dark:text-white bg-preto-05 mt-10 self-stretch flex flex-col items-center justify-between p-8 box-border gap-[16px] max-w-full text-center text-3xl text-preto-100 font-raleway"
      >
        <h2 className="m-4 w-[248px] relative text-inherit font-bold font-inherit inline-block mq450:text-lg">
          {t.certifications.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <DocumentCert
            infoCard={programaOne}
            titleDescription={t.certifications.cert1}
            propWidth="auto"
            propHeight="500px"
            propAlignSelf="center" //stretch | center | flex-start | flex-end | baseline
            demoLink="https://app.aluracursos.com/program/certificate/f8ea90c1-91d9-47c3-b517-246f6043413a"
          />
          <DocumentCert
            infoCard={javaSpringBoot}
            titleDescription={t.certifications.cert2}
            propWidth="auto"
            propHeight="500px"
            propAlignSelf="center" //stretch | center | flex-start | flex-end | baseline
            demoLink="https://app.aluracursos.com/degree/certificate/6f35e53a-fdb4-48f6-bc04-b45c60e37e05"
          />
          <DocumentCert
            infoCard={javaPoo}
            titleDescription={t.certifications.cert3}
            propWidth="auto"
            propHeight="500px"
            propAlignSelf="center" //stretch | center | flex-start | flex-end | baseline
            demoLink="https://app.aluracursos.com/degree/certificate/6a4d5daf-826f-4531-a2a0-73a237d53378"
          />
          <DocumentCert
            infoCard={desarrolloPersonal}
            titleDescription={t.certifications.cert4}
            propWidth="auto"
            propHeight="500px"
            propAlignSelf="center" //stretch | center | flex-start | flex-end | baseline
            demoLink="https://app.aluracursos.com/degree/certificate/cd3f6909-07da-4417-a2ba-f902f8be6d60"
          />
          <DocumentCert
            infoCard={Emprendimiento}
            titleDescription={t.certifications.cert5}
            propWidth="auto"
            propHeight="500px"
            propAlignSelf="center" //stretch | center | flex-start | flex-end | baseline
            demoLink="https://app.aluracursos.com/degree/certificate/5175e919-db32-4a7d-b248-a07640520d7e"
          />
          <DocumentCert
            infoCard={designThinking}
            titleDescription={t.certifications.cert6}
            propWidth="auto"
            propHeight="500px"
            propAlignSelf="center" //stretch | center | flex-start | flex-end | baseline
            demoLink="https://drive.google.com/file/d/1x8XG7HujQNo7TILd7DXqKHOMmWsVM7QD/view?usp=sharing"
          />
          <DocumentCert
            infoCard={introFrontEnd}
            titleDescription={t.certifications.cert7}
            propWidth="auto"
            propHeight="500px"
            propAlignSelf="center" //stretch | center | flex-start | flex-end | baseline
            demoLink="https://coursera.org/verify/C78PJML8562M"
          />
          <DocumentCert
            infoCard={projectManagement}
            titleDescription={t.certifications.cert8}
            propWidth="auto"
            propHeight="500px"
            propAlignSelf="center" //stretch | center | flex-start | flex-end | baseline
            demoLink="https://drive.google.com/file/d/1Hnj0i2-btX8EwdXXF7B4gyXAbz43pmi9/view?usp=drive_link"
          />
          <DocumentCert
            infoCard={priProgra}
            titleDescription={t.certifications.cert9}
            propWidth="auto"
            propHeight="500px"
            propAlignSelf="center" //stretch | center | flex-start | flex-end | baseline
            demoLink="https://app.aluracursos.com/degree/certificate/0374d34f-14e7-4c15-89f6-341c7520e763"
          />
        </div>
      </div>
    </Layout>
  );
};

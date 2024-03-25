import Experiencia from "../components/Experiencia";
import Layout from "../components/Layout";
export const Proyectos = () => {

    return (
        <Layout>
        <div className="bg-preto-05 mt-10 self-stretch flex flex-col items-center justify-between p-8 box-border gap-[16px] max-w-full text-center text-3xl text-preto-100 font-raleway">
          <h2 className="m-4 w-[248px] relative text-inherit font-bold font-inherit inline-block mq450:text-lg">
            Experiencia profesional
          </h2>

          <Experiencia
            infoCard="/assets/proyects/encryptText.png"
            titleDescription="Encriptador de texto"
            propWidth="auto"
            propHeight="320px"
            propAlignSelf="center" //stretch | center | flex-start | flex-end | baseline
            imagePosition="left" // right  | left
            repoLink="https://github.com/Fernandofcsp/Text-Encryption"
            demoLink="https://fernandofcsp.github.io/Text-Encryption/"
          />
          <Experiencia
            infoCard="/assets/proyects/guitarPage.png"
            titleDescription="Pagina web de cursos"
            propWidth="auto"
            propHeight="320px"
            propAlignSelf="center" //stretch | center | flex-start | flex-end | baseline
            imagePosition="left" // right  | left
            repoLink="https://github.com/Fernandofcsp/guitarPage"
            demoLink="https://projectingsoftvicguitar.free.nf/"
          />
        </div>
        </Layout>
    );
};
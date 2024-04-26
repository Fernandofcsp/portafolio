import { FunctionComponent, useMemo, type CSSProperties } from "react";
import firma from "../../public/assets/images/firma.png";
import { TypeAnimation } from "react-type-animation";
export type SobreType = {
  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propPaddingRight?: CSSProperties["paddingRight"];
  propHeight?: CSSProperties["height"];
};

const Sobre: FunctionComponent<SobreType> = ({
  propPadding,
  propMinWidth,
  propWidth,
  propPaddingRight,
  propHeight,
}) => {
  const sobreStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const sobreMiStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      width: propWidth,
      paddingRight: propPaddingRight,
    };
  }, [propMinWidth, propWidth, propPaddingRight]);

  const loremIpsumDolorContainerStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <section
      className="dark:bg-gray-700 dark:text-white mt-10 self-stretch bg-azul-10 flex flex-col items-start justify-start p-8 gap-[16px] text-left text-3xl text-preto-100 font-raleway"
      style={sobreStyle}
    >
      <h3
        className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[94px] mq450:text-lg"
        style={sobreMiStyle}
      >
        Sobre mi
      </h3>
      <div
        className="mb-4 self-stretch h-30 relative text-sm inline-block"
        style={loremIpsumDolorContainerStyle}
      >
        <div className="self-stretch relative whitespace-pre-wrap mb-3">
          Soy ingeniero en informática del Centro Universitario de Ciencias
          Exactas e Ingenierías, actualmente estoy participando en el proyecto
          Oracle ONE en Alura Latam.
        </div>
        <p className="m-0 ">
          Me apasionan las áreas relacionadas con la administración de
          servidores, bases de datos, gestión de sistemas de información y
          desarrollo web, buscando aprovechar el conocimiento para desarrollar
          habilidades, experiencia y éxito como ingeniero informático.
        </p>
        <img
          className="dark:invert-0 grayscale w-[140px] h-[52px] relative bottom-0 object-cover mt-4"
          loading="lazy"
          
          alt=""
          src={firma}
        />
        <TypeAnimation
          className="italic mt-6 text-xl text-center "
          sequence={[
            "''Elige un trabajo que te guste y no tendrás que trabajar ni un día de tu vida.''\nConfucio (551a.c.-479a.c.) Filósofo chino.",
            2800,
            "",
            () => {
              return;
            },
          ]}
          wrapper="div"
          cursor={true}
          style={{
            whiteSpace: "pre-line",
            display: "block",
          }}
          repeat={Infinity}
        />
      </div>
    </section>
  );
};

export default Sobre;

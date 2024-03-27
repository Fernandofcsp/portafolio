import { FunctionComponent, useMemo, type CSSProperties } from "react";
import firma from "../../public/assets/images/firma.png";
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
      className="mt-10 self-stretch bg-azul-10 flex flex-col items-start justify-start p-8 gap-[16px] text-left text-3xl text-preto-100 font-raleway"
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
        <p className="m-0 ">
          Me apasionan las áreas relacionadas con la administración de
          servidores, bases de datos, gestión de sistemas de información y
          desarrollo web, buscando aprovechar el conocimiento para desarrollar
          habilidades, experiencia y éxito como ingeniero informático.
        </p>
        <img
          className="w-[140px] h-[52px] relative bottom-0 object-cover mt-4"
          loading="lazy"
          style={{ filter: "grayscale(100%)"}}
          alt=""
          src={firma}
        />
      </div>
    </section>
  );
};

export default Sobre;

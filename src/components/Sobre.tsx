import { FunctionComponent, useMemo, type CSSProperties } from "react";
import firma from "../../public/assets/images/firma.png";
import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../translations/translations";
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
  const { language } = useLanguage();
  const t = translations[language as 'en' | 'es'];
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
        {t.social.sobre.title}
      </h3>
      <div
        className="mb-4 self-stretch h-30 relative text-sm inline-block"
        style={loremIpsumDolorContainerStyle}
      >
        <div className="self-stretch relative whitespace-pre-wrap mb-3">
          {t.social.sobre.description}
        </div>
        <p className="m-0 ">
          {t.social.sobre.passion}
        </p>
        <img
          className="dark:invert-0 grayscale w-[140px] h-[52px] relative bottom-0 object-cover mt-4"
          loading="lazy"
          
          alt=""
          src={firma}
        />
        <TypeAnimation
          key={language}  // This key will force the component to re-render when the language changes
          className="italic mt-6 text-xl text-center"
          sequence={[
            t.social.sobre.quote,
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

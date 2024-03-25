import { FunctionComponent, useMemo, CSSProperties } from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

type ExperienciaProps = {
  infoCard?: string;
  titleDescription?: string;
  propWidth?: string;
  propHeight?: string;
  propAlignSelf?: CSSProperties["alignSelf"];
  imagePosition?: "left" | "right";
  repoLink?: string;
  demoLink?: string;
};

const Experiencia: FunctionComponent<ExperienciaProps> = ({
  infoCard,
  titleDescription,
  propHeight,
  propAlignSelf,
  propWidth,
  imagePosition = "left",
  repoLink,
  demoLink,
}) => {
  const experienciaStyle: CSSProperties = useMemo(() => {
    return {
      display: "flex",
      gap: "1rem",
      margin: "2rem",
      
      justifyContent: propAlignSelf,
    };
  }, [propAlignSelf]);

  const imagenStyle: CSSProperties = useMemo(() => {
    const maxHeight = "320px"; // Establecer la altura máxima deseada
    const height = propHeight && propHeight > maxHeight ? "auto" : "100%"; // Determinar la altura
    return {
      maxWidth: "100%",
      width: propWidth,
      maxHeight: maxHeight,
      height: height,
      objectFit: "contain",
      borderRadius: "10px",
      
    };
  }, [propWidth, propHeight]);

  const contenedorClases = useMemo(() => {
    return imagePosition === "left" ? "flex-row" : "flex-row-reverse";
  }, [imagePosition]);

  return (
    <div
      className={`mq750:flex-col  ${contenedorClases}`}
      style={experienciaStyle}
    >
      <img
        className="object-cover"
        loading="lazy"
        alt=""
        src={infoCard}
        style={imagenStyle}
      />
      <div className="flex flex-col items-start justify-center gap-4 md:w-1/2">
        <b className="relative">{titleDescription}</b>
        <div className="flex flex-row justify-start gap-4">
          <a
            href={repoLink}
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-md w-32 cursor-pointer py-3 px-4 bg-gray-800 flex items-center justify-center whitespace-nowrap hover:bg-gray-700">
              <div className="text-sm font-semibold font-raleway text-preto-branco text-left inline-block min-w-[64px]">
                Repositorio
              </div>
              <FaGithub
                color="white"
                className="h-4 w-6 relative overflow-hidden shrink-0"
              />
            </button>
          </a>
          <a
            href={demoLink}
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-md w-32 cursor-pointer py-3 px-4 bg-azul-100 flex items-center justify-center whitespace-nowrap hover:bg-dodgerblue-100">
              <div className="text-sm font-semibold font-raleway text-preto-branco text-left inline-block min-w-[64px]">
                Ver demo
              </div>
              <CgWebsite
                color="white"
                className="h-4 w-6 relative overflow-hidden shrink-0"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experiencia;

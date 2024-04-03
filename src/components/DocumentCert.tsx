import { FunctionComponent, useMemo, CSSProperties } from "react";
import { GrCertificate } from "react-icons/gr";

type DocumentCertProps = {
  infoCard?: string;
  titleDescription?: string;
  propWidth?: string;
  propHeight?: string;
  propAlignSelf?: CSSProperties["alignSelf"];
  demoLink?: string;
};

const DocumentCert: FunctionComponent<DocumentCertProps> = ({
  infoCard,
  titleDescription,
  propHeight,
  propAlignSelf,
  propWidth,
  demoLink,
}) => {
  const DocumentCertStyle: CSSProperties = useMemo(() => {
    return {
      display: "flex",
      flexWrap: "wrap",
      
      gap: "1rem",
      margin: "2rem",
      justifyContent: propAlignSelf,
    };
  }, [propAlignSelf]);

  const imagenStyle: CSSProperties = useMemo(() => {
    const maxHeight = "220px"; // Establecer la altura máxima deseada
    const height = propHeight && propHeight > maxHeight ? "auto" : "100%"; // Determinar la altura
    return {
      maxWidth: "100%",
      width: propWidth,
      maxHeight: maxHeight,
      height: height,
      objectFit: "contain",
      borderRadius: "10px",
      border: "2px solid #2d3748", // Borde de color negro
    };
  }, [propWidth, propHeight]);

  const titleContainerStyle: CSSProperties = useMemo(() => {
    return {
      maxWidth: "330px", // Establecer el mismo ancho máximo que la imagen
      
    };
  }, []);

  return (
    <div className="mq750:flex-col" style={DocumentCertStyle}>
      <div>
        <img
          className="object-cover"
          loading="lazy"
          alt=""
          src={infoCard}
          style={imagenStyle}
        />
        <div className="flex flex-col items-center justify-center mt-2" >
        <b className="relative text-sm" style={titleContainerStyle}>{titleDescription}</b>
        <div className="flex flex-row">
          <a
            href={demoLink}
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-md w-52 cursor-pointer mt-2 py-3 px-4 bg-gray-800 flex items-center justify-center whitespace-nowrap hover:bg-gray-700">
              <div className="text-sm font-semibold font-raleway mr-2 text-preto-branco text-left inline-block min-w-[10px]">
                Ver certificado
              </div>
              <GrCertificate
                color="white"
                className="h-4 w-6 relative overflow-hidden shrink-0"
              />
            </button>
          </a>
        </div>
      </div>
      </div>

      
    </div>
  );
};

export default DocumentCert;

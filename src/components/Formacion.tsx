import { useMemo, CSSProperties } from "react";
import cucei from "../../public/assets/images/cucei.png";
import one from "../../public/assets/images/ONE.png";

export const Formacion = () => {
  const formacionStyle: CSSProperties = useMemo(() => {
    return {
      display: "flex",
      justifyContent: "center",
      margin: "1.5rem 0",
    };
  }, []);

  const imagenStyle: CSSProperties = useMemo(() => {
    const maxHeight = "100px"; // Establecer la altura máxima deseada
    const height = maxHeight; // Determinar la altura

    return {
      maxWidth: "100%",
      width: "auto",
      maxHeight: maxHeight,
      height: height,
      objectFit: "contain",
      borderRadius: "10px",
      marginRight: "1rem",
    };
  }, []);

  return (
    <section className="dark:text-white flex flex-col  mt-10 self-stretch text-center text-3xl font-raleway">
      <div className="container mx-auto">
        <h2 className="m-8 relative text-inherit font-bold font-inherit inline-block ">
          Formación académica
        </h2>
        <div className={`mq750:flex-col `} style={formacionStyle}>
          <div className="mb-8 flex flex-col items-center justify-center">
            <a
              href="http://www.cucei.udg.mx/es/oferta-academica/licenciaturas/licenciatura-en-ingenieria-informatica"
              target="_blank"
              rel="noopener noreferrer"
              className="m-4 rounded-md cursor-pointer border-none py-8 px-16 bg-preto-branco flex items-center justify-center"
            >
              <img
                className="min-w-auto h-[100px]"
                alt="Logo CUCEI"
                src={cucei}
                style={imagenStyle}
              />
            </a>

            <b className="relative">Ingeniería en Informática</b>
            <div className="relative text-sm font-medium">2019 - CUCEI</div>
          </div>
          <div className="mb-8 flex flex-col items-center justify-center">
            <a
              href="https://www.oracle.com/mx/education/oracle-next-education/"
              target="_blank"
              rel="noopener noreferrer"
              className="m-4 rounded-md cursor-pointer border-none py-8 px-16 bg-preto-branco flex items-center justify-center"
            >
              <img
                className="min-w-[70px] h-[100px]"
                loading="lazy"
                alt="Logo ONE"
                src={one}
                style={imagenStyle}
              />
            </a>
            <b className="relative">ONE - Oracle Next Education</b>
            <div className="relative text-sm font-medium">2024 - Alura</div>
          </div>
        </div>
      </div>
    </section>
  );
};

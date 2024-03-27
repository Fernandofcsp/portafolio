import { FunctionComponent } from "react";
import profile from "../../public/assets/images/profile.png";
import toLink from "../../public/assets/icons/linkTo.svg";
const Social: FunctionComponent = () => {
  return (
    <section className=" mt-16 self-stretch flex flex-row flex-wrap  justify-start py-8 pr-[34px] pl-8 box-border gap-[32px] max-w-full text-left text-base text-preto-100 font-raleway mq450:gap-[16px]">
      <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full mq450:min-w-full">
        <h3 className="m-0 self-stretch relative text-33xl font-bold font-inherit mq450:text-lg">
          Mi nombre es Fernando Cesar Sandoval Padilla.
        </h3>
        <div className="self-stretch relative whitespace-pre-wrap">
          Soy ingeniero en informática del Centro Universitario de Ciencias
          Exactas e Ingenierías, actualmente estoy participando en el proyecto
          Oracle ONE en Alura Latam.
        </div>
        <div className="mt-4 w-[467px] flex flex-row items-start justify-start gap-[32px] max-w-full mq450:flex-wrap mq675:gap-[32px_16px]">
          <div className="h-6 flex flex-row items-center justify-start gap-[4px]">
            <div className="relative font-medium inline-block min-w-[50px]">
              <a
                href="https://github.com/Fernandofcsp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={toLink}
            />
          </div>
          <div className="h-6 flex flex-row items-center justify-start gap-[4px]">
            <div className="relative font-medium inline-block min-w-[64px]">
              <a
                href="https://www.linkedin.com/in/fernando-fcsp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={toLink}
            />
          </div>

          <div className="flex-1 flex flex-row items-center justify-start gap-[4px] min-w-[63px]">
            <div className="relative font-medium inline-block min-w-[90px]">
              <a
                href="https://drive.google.com/file/d/1BPP9BLeB2VMHU_xHguwK5CoJXZRDLQRM/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Currículum
              </a>
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={toLink}
            />
          </div>
        </div>
      </div>
      <img
        className="mq750:top-0 mq750:left-0  w-[220px] h-[220px] mq750:w-[150px] mq750:h-[150px] md:w-[150px] md:right-0 rounded-full"
        loading="lazy"
        alt=""
        src={profile}
      />
    </section>
  );
};

export default Social;

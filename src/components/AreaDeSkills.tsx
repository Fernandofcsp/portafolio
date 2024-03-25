import { FunctionComponent } from "react";
import { DiJavascript } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { BsFiletypePhp } from "react-icons/bs";
import { IoLogoNodejs } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const AreaDeSkills: FunctionComponent = () => {
  return (
    <section className="mb-4 mt-10 mr-4 ml-4 self-stretch relative text-center text-3xl font-raleway">
      <div className="container mx-auto">
        <h2 className="m-5 relative text-inherit font-bold font-inherit inline-block min-w-[94px] mq450:text-lg">
          Skills
        </h2>
        <div className="grid grid-cols-6 md:grid-cols-3 lg:grid-cols-6 mq750:grid-cols-3 mq450:grid-cols-2 ">
          <div className="m-2 rounded-md bg-preto-branco p-6 flex flex-col items-center justify-center">
            <TiHtml5 className="w-10 h-10 mb-2" />
            <b className="text-base font-raleway">HTML 5</b>
          </div>
          <div className="m-2 rounded-md bg-preto-branco p-6 flex flex-col items-center justify-center">
            <DiJavascript className="w-10 h-10 mb-2" />
            <b className="text-base font-raleway">Javascript</b>
          </div>
          <div className="m-2 rounded-md bg-preto-branco p-6 flex flex-col items-center justify-center">
            <BsFiletypePhp className="w-10 h-10 mb-2" />
            <b className="text-base font-raleway">PHP</b>
          </div>
          <div className="m-2 rounded-md bg-preto-branco p-6 flex flex-col items-center justify-center">
            <IoLogoNodejs className="w-10 h-10 mb-2" />
            <b className="text-base font-raleway">Node.js</b>
          </div>
          <div className="m-2 rounded-md bg-preto-branco p-6 flex flex-col items-center justify-center">
            <FaReact className="w-10 h-10 mb-2" />
            <b className="text-base font-raleway">React</b>
          </div>
          <div className="m-2 rounded-md bg-preto-branco p-6 flex flex-col items-center justify-center">
            <img
              className="w-[22px] h-[35.5px] relative overflow-hidden shrink-0"
              alt=""
              src="/cssfile-1.svg"
            />
            <b className="text-base font-raleway">CSS</b>
          </div>
          <div className="m-2 rounded-md bg-preto-branco p-6 flex flex-col items-center justify-center">
            <SiTypescript className="w-10 h-10 mb-2" />
            <b className="text-base font-raleway">Typescript</b>
          </div>
          <div className="m-2 rounded-md bg-preto-branco p-6 flex flex-col items-center justify-center">
            <FaPython className="w-10 h-10 mb-2" />
            <b className="text-base font-raleway">Python</b>
          </div>
          <div className="m-2 rounded-md bg-preto-branco p-6 flex flex-col items-center justify-center">
            <SiTailwindcss className="w-10 h-10 mb-2" />
            <b className="text-base font-raleway">Tailwind</b>
          </div>
          <div className="m-2 rounded-md bg-preto-branco p-6 flex flex-col items-center justify-center">
            <FaBootstrap className="w-10 h-10 mb-2" />
            <b className="text-base font-raleway">Bootstrap</b>
          </div>
          <div className="m-2 rounded-md bg-preto-branco p-6 flex flex-col items-center justify-center">
            <SiMysql className="w-10 h-10 mb-2" />
            <b className="text-base font-raleway">MySQL</b>
          </div>
          <div className="m-2 rounded-md bg-preto-branco p-6 flex flex-col items-center justify-center">
            <BiLogoPostgresql className="w-10 h-10 mb-2" />
            <b className="text-base font-raleway">PostgreSQL</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaDeSkills;

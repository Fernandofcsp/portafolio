import { FunctionComponent, useState } from "react";
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
import { BsFiletypeCss } from "react-icons/bs";

interface SkillProps {
  name: string;
  icon: JSX.Element;
}

const SkillCard: FunctionComponent<SkillProps> = ({ name, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="dark:text-white dark:bg-gray-700 m-2 rounded-md bg-preto-branco p-6 flex flex-col items-center justify-center min-h-20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-center mb-2">
        {icon}
        {isHovered && <span className="text-xs ml-2">{name}</span>}
      </div>
      
    </div>
  );
};

const AreaDeSkills: FunctionComponent = () => {
  const skills: SkillProps[] = [
    { name: "HTML 5", icon: <TiHtml5 className="w-10 h-10" /> },
    { name: "Javascript", icon: <DiJavascript className="w-10 h-10" /> },
    { name: "PHP", icon: <BsFiletypePhp className="w-10 h-10" /> },
    { name: "Node.js", icon: <IoLogoNodejs className="w-10 h-10" /> },
    { name: "React", icon: <FaReact className="w-10 h-10" /> },
    { name: "CSS", icon: <BsFiletypeCss className="w-10 h-10" /> },
    { name: "Typescript", icon: <SiTypescript className="w-10 h-10" /> },
    { name: "Python", icon: <FaPython className="w-10 h-10" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="w-10 h-10" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="w-10 h-10" /> },
    { name: "MySQL", icon: <SiMysql className="w-10 h-10" /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql className="w-10 h-10" /> },
  ];

  return (
    <section className="dark:text-white mb-4 mt-10 mr-4 ml-4 self-stretch relative text-center text-3xl font-raleway">
      <div className="container mx-auto">
        <h2 className="m-5 relative text-inherit font-bold font-inherit inline-block min-w-[94px] mq450:text-lg">
          Skills
        </h2>
        <div className="grid grid-cols-6 md:grid-cols-3 lg:grid-cols-6 mq750:grid-cols-3 mq450:grid-cols-2 ">
          {skills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreaDeSkills;

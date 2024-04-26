import { FunctionComponent, useState } from "react";
import { GiAutoRepair } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { TbGoGame } from "react-icons/tb";
import { FaHeadphones } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";

interface HobbyProps {
  name: string;
  icon: JSX.Element;
}

const HobbyCard: FunctionComponent<HobbyProps> = ({ name, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="dark:bg-gray-700 mb-8 m-2 rounded-md bg-gray-200 p-6 flex flex-col items-center justify-center min-h-20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-center mb-2" style={{ width: '40px', height: '40px' }}>
        {icon}
        
      </div>
      {isHovered && <span className="text-xs ml-2">{name}</span>}
      
    </div>
  );
};

const AreaDeHobbies: FunctionComponent = () => {
  const hobbies: HobbyProps[] = [
    { name: "Leer", icon: <FaBook className="w-8 h-8" /> },
    { name: "Jugar juegos de mesa", icon: <TbGoGame className="w-8 h-8" /> },
    { name: "Escuchar música", icon: <FaHeadphones className="w-8 h-8" /> },
    { name: "Ver series", icon: <FaTv className="w-8 h-8" /> },
    { name: "Reparar equipos de computo", icon: <GiAutoRepair className="w-8 h-8" /> },
    { name: "Tomar fotos", icon: <FaCamera className="w-8 h-8" /> },
  ];

  return (
    <section className="dark:text-white mb-4 mt-10 mr-4 ml-4 self-stretch relative text-center text-3xl font-raleway">
      <div className="container mx-auto">
        <h2 className="m-5 relative text-inherit font-bold font-inherit inline-block min-w-[94px] mq450:text-lg">
          Hobbies
        </h2>
        <div className="grid grid-cols-6 md:grid-cols-3 lg:grid-cols-6 mq750:grid-cols-3 mq450:grid-cols-2 gap-4">
          {hobbies.map((hobby, index) => (
            <HobbyCard key={index} name={hobby.name} icon={hobby.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreaDeHobbies;

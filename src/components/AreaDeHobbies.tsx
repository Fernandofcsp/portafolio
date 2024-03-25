import { FunctionComponent } from "react";
import { GiAutoRepair } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { TbGoGame } from "react-icons/tb";

const AreaDeHobbies: FunctionComponent = () => {
  return (
    <section className="mb-4 mt-10 mr-4 ml-4 self-stretch relative text-center text-3xl font-raleway">
      <div className="container mx-auto">
        <h2 className="m-5 relative text-inherit font-bold font-inherit inline-block min-w-[94px] mq450:text-lg">
          Hobbies
        </h2>
        <div className="grid grid-cols-6 md:grid-cols-3 lg:grid-cols-6 mq750:grid-cols-3 mq450:grid-cols-2 gap-4">
          <div className="m-2 rounded-md bg-gray-200 p-6 flex flex-col items-center justify-center">
            <FaBook className="w-8 h-8 mb-2" />
            <span className="text-lg font-bold">Leer</span>
          </div>
          <div className="m-2 rounded-md bg-gray-200 p-6 flex flex-col items-center justify-center">
            <TbGoGame className="w-8 h-8 mb-2" />
            <span className="text-lg font-bold">Jugar juegos de mesa</span>
          </div>
          <div className="m-2 rounded-md bg-gray-200 p-6 flex flex-col items-center justify-center">
            <img
              className="w-8 h-8 mb-2"
              src="/headphones-black-24dp-1.svg"
              alt="Icono de música"
            />
            <span className="text-lg font-bold">Escuchar música</span>
          </div>
          <div className="m-2 rounded-md bg-gray-200 p-6 flex flex-col items-center justify-center">
            <img
              className="w-8 h-8 mb-2"
              src="/tv-black-24dp-1.svg"
              alt="Icono de series"
            />
            <span className="text-lg font-bold">Ver series</span>
          </div>
          <div className="m-2 rounded-md bg-gray-200 p-6 flex flex-col items-center justify-center">
            <GiAutoRepair className="w-8 h-8 mb-2" />
            <span className="text-lg font-bold">
              Reparar equipos de computo
            </span>
          </div>
          <div className="m-2 rounded-md bg-gray-200 p-6 flex flex-col items-center justify-center">
            <img
              className="w-8 h-8 mb-2"
              src="/photo-camera-black-24dp-1.svg"
              alt="Icono de fotografía"
            />
            <span className="text-lg font-bold">Tomar fotos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaDeHobbies;

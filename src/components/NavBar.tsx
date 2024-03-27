import { NavLink } from "react-router-dom";
import menu from "../../public/assets/icons/menu.png";
import { useState } from "react";
import logo from "../../public/assets/icons/logoAutoAwesome.svg";
interface Props {
  isNavBarOpen: boolean;
  setIsNavBarOpen: (isOpen: boolean) => void;
  isSmallScreen: boolean;
}

const NavBar = ({ isSmallScreen }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md rounded-md">
      <div className="flex items-center w-full">
        {isSmallScreen && (
          <div className="w-full rounded-md h-14 bg-white text-preto-100 text-center">
            <div className="self-stretch flex flex-row items-center justify-between py-1 px-2">
              <div className="self-stretch flex flex-row items-center gap-[8px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src={logo}
                />
                <NavLink to="/Home" 
                className="flex flex-col items-start justify-start no-underline text-preto-100">
                  <b className="relative inline-block min-w-[102px] whitespace-nowrap">
                    Fernando Cesar Sandoval Padilla
                  </b>
                  <b className="relative whitespace-nowrap text-xs">
                    fernandocsp19@gmail.com
                  </b>
                </NavLink>
              </div>
              <div
                className="cursor-pointer hover:bg-gray-200 p-1 rounded"
                onClick={() => toggleMenu()}
              >
                <img className="w-8" src={menu} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`${
          isSmallScreen && isMenuOpen ? "block" : "hidden"
        } `}
      >
        <div className=" p-1 w-full rounded-md bg-white border-black text-preto-100 text-center">
        <NavLink
            to="/Home"
            className="hover:bg-gray-200 rounded-md text-preto-100 relative font-medium inline-block w-20 py-2 px-4"
            onClick={toggleMenu}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/proyectos"
            className="hover:bg-gray-200 rounded-md text-preto-100 relative font-medium inline-block w-20 py-2 px-4"
            onClick={toggleMenu}
          >
            Proyectos
          </NavLink>
          <NavLink
            to="/contacto"
            className="hover:bg-gray-200 rounded-md text-preto-100 relative font-medium inline-block w-20 py-2 px-4"
            onClick={toggleMenu}
          >
            Contacto
          </NavLink>
        </div>
      </div>

      {!isSmallScreen && (
        <div className="mb-4 self-stretch h-10 flex flex-row items-start justify-between py-2.5 px-8 box-border gap-[20px] text-left text-base bg-white text-preto-100 ">
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src={logo}
            />
            <NavLink to="/Home" 
                className="flex flex-col items-start justify-start no-underline text-preto-100">
                  <b className="relative inline-block min-w-[102px] whitespace-nowrap">
                    Fernando Cesar Sandoval Padilla
                  </b>
                  <b className="relative whitespace-nowrap text-xs">
                    fernandocsp19@gmail.com
                  </b>
                </NavLink>
          </div>
          <div className=" flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border max-w-full">
            <div className="   rounded-md bg-white border-black text-preto-100 text-center">
            <NavLink
            to="/Home"
            className="hover:bg-gray-200 rounded-md text-preto-100 relative font-medium inline-block w-16 py-2 px-4"
            onClick={toggleMenu}
          >
            Inicio
          </NavLink>
              <div className="hover:bg-gray-200 rounded-md text-preto-100 relative font-medium inline-block w-16 py-2 px-4">
              <NavLink to="/proyectos" className="text-preto-100">
                  Proyectos
                </NavLink>
              </div>
              <div className="hover:bg-gray-200 rounded-md text-preto-100 relative font-medium inline-block w-16 py-2 px-4">
                <NavLink to="/contacto" className="text-preto-100">
                  Contacto
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

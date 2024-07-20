import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ScrollToTopNavLink from "./ScrollToTopNavLink";
import menu from "../../public/assets/icons/menu.png";
import ButtonTheme from "./ButtonTheme";
import { useLanguage } from "../contexts/LanguageContext";
import translations from "../translations/translations";
import ButtonLanguage from "./ButttonLanguage";

interface Props {
  isSmallScreen: boolean;
}

const NavBar = ({ isSmallScreen }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const navTranslations =
    language === "en" ? translations.en.nav : translations.es.nav;
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#282c34] shadow-md rounded-xsm" ref={menuRef}>
      {isSmallScreen && (
        <div className="self-stretch h-10 flex flex-row items-start justify-between py-1 px-2">
          
            <ButtonTheme />
          
          <div className="absolute ml-10 dark:text-white flex flex-col items-start justify-start no-underline text-preto-100">
            <b className="relative inline-block min-w-[102px] whitespace-nowrap">
              Fernando Cesar Sandoval Padilla
            </b>
            <b className="relative whitespace-nowrap text-xs">
              fernandocsp19@gmail.com
            </b>
          </div>
          <div
            className="dark:invert cursor-pointer hover:bg-gray-200 p-1 rounded"
            onClick={toggleMenu}
          >
            <img className="w-8" src={menu} alt="" />
          </div>
        </div>
      )}

      <div className={`${isSmallScreen && isMenuOpen ? "block" : "hidden"}`}>
        <div className="dark:bg-[#282c34] p-1 w-full rounded-md bg-white border-black text-preto-100 text-center">
          <NavLink
            to="/Home"
            className="dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 rounded-md text-preto-100 relative font-medium inline-block w-20 py-2 px-4"
            onClick={toggleMenu}
          >
            {navTranslations.home}
          </NavLink>
          <NavLink
            to="/proyectos"
            className="dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 rounded-md text-preto-100 relative font-medium inline-block w-20 py-2 px-4"
            onClick={() => {
              toggleMenu();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {navTranslations.projects}
          </NavLink>
          <NavLink
            to="/certificaciones"
            className="dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 rounded-md text-preto-100 relative font-medium inline-block w-24 py-2 px-4"
            onClick={() => {
              toggleMenu();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {navTranslations.certifications}
          </NavLink>
          <NavLink
            to="/contacto"
            className="dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 rounded-md text-preto-100 relative font-medium inline-block w-20 py-2 px-4"
            onClick={() => {
              toggleMenu();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {navTranslations.contact}
          </NavLink>
          <ButtonLanguage />
        </div>
      </div>

      {!isSmallScreen && (
        <div className="mb-4 self-stretch h-10 flex flex-row items-start justify-between py-2.5 px-2 box-border">
          <ButtonTheme />
          <div className="absolute ml-10 dark:text-white flex flex-col items-start justify-start no-underline text-preto-100">
            <b className="relative inline-block min-w-[102px] whitespace-nowrap">
              Fernando Cesar Sandoval Padilla
            </b>
            <b className="relative whitespace-nowrap text-xs">
              fernandocsp19@gmail.com
            </b>
          </div>
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border max-w-full">
            <div className="rounded-md text-preto-100 text-center">
              <ButtonLanguage />
              <NavLink
                to="/Home"
                className="dark:text-white dark:hover:bg-gray-700 mr-1 hover:bg-gray-200 rounded-md text-preto-100 relative font-medium inline-block w-14 py-2 px-4"
                onClick={toggleMenu}
                style={{ textDecoration: "none" }}
              >
                {navTranslations.home}
              </NavLink>
              <div className="dark:text-white dark:hover:bg-gray-700 mr-1 hover:bg-gray-200 rounded-md text-preto-100 relative font-medium inline-block w-16 py-2 px-4">
                <ScrollToTopNavLink
                  to="/proyectos"
                  className="dark:text-white text-preto-100"
                  style={{ textDecoration: "none" }}
                >
                  {navTranslations.projects}
                </ScrollToTopNavLink>
              </div>
              <div className="dark:text-white dark:hover:bg-gray-700 mr-1 hover:bg-gray-200 rounded-md text-preto-100 relative font-medium inline-block w-18 py-2 px-4">
                <ScrollToTopNavLink
                  to="/certificaciones"
                  className="dark:text-white text-preto-100"
                  style={{ textDecoration: "none" }}
                >
                  {navTranslations.certifications}
                </ScrollToTopNavLink>
              </div>
              <button className="hover:bg-green-600 rounded-md relative font-medium inline-block w-24 py-2 px-4 bg-green-500">
                <ScrollToTopNavLink
                  to="/contacto"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  {navTranslations.contact}
                </ScrollToTopNavLink>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

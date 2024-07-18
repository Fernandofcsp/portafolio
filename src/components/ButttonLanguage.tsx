import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from "../translations/translations";
import { FaChevronDown } from 'react-icons/fa';

const ButtonLanguage: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language as 'en' | 'es'];
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('preferredLanguage');
    return storedLanguage ? storedLanguage : language;
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('preferredLanguage', currentLanguage);
    setLanguage(currentLanguage);
  }, [currentLanguage, setLanguage]);

  const toggleLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    setDropdownOpen(false);
  };

  const handleButtonClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  

  return (
    <div className="rounded-md relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={handleButtonClick}
        className="bg-white dark:text-white dark:bg-[#282c34] dark:hover:bg-gray-700 hover:bg-gray-200 cursor-pointer rounded-md relative font-medium inline-block w-20 py-2 px-4"
      >
        {currentLanguage.toUpperCase() + ' '}
        <FaChevronDown className="w-2 h-2 ml-1" />
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-4 w-auto shadow-lg rounded-md z-10">
         
          {currentLanguage !== 'en' && (
            <button
              onClick={() => toggleLanguage('en')}
              className="cursor-pointer shadow-md dark:bg-[#21242b] rounded-md block w-24 text-center px-4 py-2 text-sm text-preto-100 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {t.language.english}
            </button>
          )}
          {currentLanguage !== 'es' && (
            <button
              onClick={() => toggleLanguage('es')}
              className="cursor-pointer shadow-md dark:bg-[#21242b] rounded-md block w-24 text-center px-4 py-2 text-sm text-preto-100 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {t.language.spanish}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ButtonLanguage;

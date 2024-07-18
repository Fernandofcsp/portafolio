
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage(); // Uso del hook personalizado

    const changeLanguage = (newLanguage: string) => {
        setLanguage(newLanguage);
    };

    return (
        <div className="flex items-center justify-center space-x-4">
            <button
                className={`px-3 py-1 rounded ${
                    language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                }`}
                onClick={() => changeLanguage('en')}
            >
                English
            </button>
            <button
                className={`px-3 py-1 rounded ${
                    language === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                }`}
                onClick={() => changeLanguage('es')}
            >
                Español
            </button>
        </div>
    );
};

export default LanguageSelector;

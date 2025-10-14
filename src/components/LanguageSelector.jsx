import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'pt', name: 'PT', flag: '🇧🇷' },
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'es', name: 'ES', flag: '🇪🇸' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe size={18} className="text-yellow-400 hidden lg:block" />
      <div className="flex gap-1 sm:gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`px-2 py-1 rounded text-xs sm:text-sm font-medium transition-all ${
              i18n.language === lang.code
                ? 'bg-yellow-500 text-slate-950'
                : 'text-slate-400 hover:text-yellow-400'
            }`}
          >
            {lang.flag} <span className="hidden sm:inline">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;


import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: 'en' | 'hi' | 'ml'; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'hi', label: 'HI' },
    { code: 'ml', label: 'ML' },
  ];

  return (
    <div className="relative flex items-center bg-slate-100 dark:bg-xenora-800 rounded-full p-1 border border-slate-200 dark:border-white/10">
      <div className="flex items-center px-2">
        <Globe className="w-4 h-4 text-slate-500 dark:text-slate-400" />
      </div>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
            language === lang.code
              ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
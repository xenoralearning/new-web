import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from './translations';
import { TEAM_MEMBERS_DATA } from './teamData';

type Language = 'en' | 'hi' | 'ml';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const translatedContent = translations[language];
  const content = {
    ...translatedContent,
    teamPage: {
      ...translatedContent.teamPage,
      members: translatedContent.teamPage.members.map(member => {
        const memberData = TEAM_MEMBERS_DATA.find(m => m.id === member.id);
        return { ...member, ...memberData };
      })
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
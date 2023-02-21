import { createContext, useState } from 'react';
import { LanguageType } from '../interfaces/customTypes';

interface LanguageContextProviderProps {
  children: React.ReactElement;
}

interface LanguageContextProps {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'EN',
  setLanguage: () => {},
});

export function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<LanguageType>('EN');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;

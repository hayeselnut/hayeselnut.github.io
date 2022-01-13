import React from 'react';
import { Language } from '../types/languages';

import '../styles/language-type.css';

type Props = {
  language: Language
}

const scale = (language: Language) => {
  if (language.length >= 10) return 'scale-10';
  if (language.length >= 6) return 'scale-6';
  if (language.length >= 5) return 'scale-5';
  return '';
};

const LanguageType = ({ language }: Props) => {
  return (
    <div className={`language-rectangle ${language}`}>
      <span className="dot top left" />
      <span className="dot top right" />
      <span className="dot bottom left" />
      <span className="dot bottom right" />

      <span className={`language-text ${scale(language)}`}>
        {language}
      </span>
    </div>

  );
};

export default LanguageType;

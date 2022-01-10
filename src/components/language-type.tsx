import React from 'react';
import { Language } from '../types/languages';

import '../styles/language-type.css';

type Props = {
  language: Language
}

const LanguageType = ({ language }: Props) => {
  return (
    <div className={`language-pill ${language}`}>
      <span className={`language-text spacing-${Math.min(language.length, 10)}`}>
        {language}
      </span>
    </div>
  );
};

export default LanguageType;

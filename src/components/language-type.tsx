import React from 'react';
import { Language } from '../types/languages';

import '../styles/language-type.css';

type Props = {
  language: Language
}

const LanguageType = ({ language }: Props) => {
  return (
    <div className={`language-rectangle ${language}`}>
      <span className="dot top left" />
      <span className="dot top right" />
      <span className="dot bottom left" />
      <span className="dot bottom right" />

      <span className={`language-text`}>
        {language}
      </span>
    </div>

  );
};

export default LanguageType;

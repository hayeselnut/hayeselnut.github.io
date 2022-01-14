import React from 'react';
import styled from '@emotion/styled';
import { Technology } from '../types/technology-type';

import '../styles/technology-type.css';

type Props = {
  technology: Technology
}

const TypeRectangle = styled('div')`
  border-radius: 1px;
  outline: 1px solid #586060;

  width: 48px;
  height: 16px;
  margin: 2px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const TypeText = styled('span')(({ technology }: Props) => ({
  'fontFamily': `'Super Smash TV', ${technology}, sans-serif`,
  'textTransform': 'uppercase',
  'color': 'white',
  'textShadow': '1px 1px 0 darkgrey',
  'fontSize': '16px',
  'transform': 'scale(0.85, 1)',
  ' -webkit-transform': 'scale(0.85, 1)',
  '-moz-transform': 'scale(0.85, 1)',
  '-o-transform': 'scale(0.85, 1)',
}));

const scale = (technology: Technology) => {
  if (technology.length >= 9) return 'scale-9';
  if (technology.length >= 6) return 'scale-6';
  if (technology.length >= 5) return 'scale-5';
  return '';
};

const TechnologyType = ({ technology }: Props) => {
  return (
    <div className={`technology-rectangle ${technology}`}>
      <span className="dot top left" />
      <span className="dot top right" />
      <span className="dot bottom left" />
      <span className="dot bottom right" />

      <span className={`technology-text ${scale(technology)}`}>
        {technology}
      </span>
      {/* <TypeText technology={technology}>{technology}</TypeText> */}
    </div>
  );
};

export default TechnologyType;

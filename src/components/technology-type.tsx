import React from 'react';
import styled from '@emotion/styled';
import { Technology } from '../types/technology-type';

import '../styles/technology-type.css';
import { lighten, darken } from '@mui/material';

type Props = {
  technology: Technology
}

type ColorDivProps = {
  color: string
}

const Rectangle = styled('div')`
  display: grid;
  grid-template-columns: 1px 22px 22px 1px;
  grid-template-rows: 1px 6px 6px 1px;

  margin: 2px;
  outline: 1px solid #586060;
  border-radius: 1px;

  position: relative;
  cursor: pointer;
`;

const NormalColor = styled('div')(({ color }: ColorDivProps) => ({
  background: color,
}));

const LightenColor = styled('div')(({ color }: ColorDivProps) => ({
  background: lighten(color, 0.5),
}));

const DarkenColor = styled('div')(({ color }: ColorDivProps) => ({
  background: darken(color, 0.25),
}));

const Dot = styled('span')`
  height: 1px;
  width: 1px;

  background-color: rgb(0, 0, 0, 0.2);
  display: inline-block;

  position: absolute;
`;

const TextContainer = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center
`;

const Text = styled('span')(({ technology }: Props) => {
  const scaleFactor = technology.length <= 5
    ? 1
    : technology.length <= 6
      ? 0.9
      : technology.length <= 8
        ? 0.7
        : 0.6;

  return {
    'fontFamily': '\'Super Smash TV\', sans-serif',
    'textTransform': 'uppercase',
    'color': 'white',
    'textShadow': '1px 1px 0 #707878',
    'fontSize': '14px',
    'transform': `scale(${scaleFactor}, 1)`,
    ' -webkit-transform': `scale(${scaleFactor}, 1)`,
    '-moz-transform': `scale(${scaleFactor}, 1)`,
    '-o-transform': `scale(${scaleFactor}, 1)`,
  };
});

const scale = (technology: Technology) => {
  if (technology.length >= 9) return 'scale-9';
  if (technology.length >= 6) return 'scale-6';
  if (technology.length >= 5) return 'scale-5';
  return '';
};

type TechnologyColors = {
  [key in Technology]: string[]
}

const colors: TechnologyColors = {
  'c': ['#5c6bc0', '#5c6bc0', '#283593', '#283593'],
  'c++': ['#659AD2', '#659AD2', '#004482', '#004482'],
  'c#': ['#9a4993', '#9a4993', '#6a1577', '#6a1577'],
  'python': ['#4B8BBE', '#4B8BBE', '#FFD43B', '#FFD43B'],
  'java': ['#f89820', '#f89820', '#5382a1', '#5382a1'],
  'kotlin': ['#F6891F', '#F6891F', '#B75EA4', '#B75EA4'],
  'html': ['#f06529', '#f06529', '#f06529', '#f06529'],
  'css': ['#2965f1', '#2965f1', '#2965f1', '#2965f1'],
  'javascript': ['#f0db4f', '#f0db4f', '#f0db4f', '#f0db4f'],
  'typescript': ['#007acc', '#007acc', '#007acc', '#007acc'],
  'react': ['#61DBFB', '#61DBFB', '#61DBFB', '#61DBFB'],
  'vue': ['#41B883', '#41B883', '#41B883', '#41B883'],

  'fire': ['#E94F20', '#E94F20', '#E94F20', '#E94F20'],
  'grass': ['#85C550', '#85C550', '#85C550', '#85C550'],
  'water': ['#6898F8', '#6898F8', '#6898F8', '#6898F8'],
  'electric': ['#FAC84E', '#FAC84E', '#FAC84E', '#FAC84E'],
  'fighting': ['#8B4934', '#8B4934', '#8B4934', '#8B4934'],
  'normal': ['#b8b8a8', '#b8b8a8', '#b8b8a8', '#b8b8a8'],
  'bug': ['#B2C13A', '#B2C13A', '#B2C13A', '#B2C13A'],

  'terraform': ['#844FBA', '#844FBA', '#844FBA', '#844FBA'],
  'aws': ['#FF9900', '#FF9900', '#232F3E', '#232F3E'],
  'gcp': ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'],
  'azure': ['#008AD7', '#008AD7', '#008AD7', '#008AD7'],
};

const TechnologyType = ({ technology }: Props) => {
  return (
  // <div className={`technology-rectangle ${technology}`}>
  // <span className="dot top left" />
  // <span className="dot top right" />
  // <span className="dot bottom left" />
  // <span className="dot bottom right" />

  //   <span className={`technology-text ${scale(technology)}`}>
  //     {technology}
  //   </span>
  //   {/* <TypeText technology={technology}>{technology}</TypeText> */}
  // </div>

    <Rectangle>
      <NormalColor color='#f8f8f8' />
      <LightenColor color={colors[technology][0]} />
      <LightenColor color={colors[technology][1]} />
      <NormalColor color={colors[technology][1]} />

      <LightenColor color={colors[technology][0]} />
      <NormalColor color={colors[technology][0]} />
      <NormalColor color={colors[technology][1]} />
      <DarkenColor color={colors[technology][1]} />

      <LightenColor color={colors[technology][2]} />
      <NormalColor color={colors[technology][2]} />
      <NormalColor color={colors[technology][3]} />
      <DarkenColor color={colors[technology][3]} />

      <NormalColor color={colors[technology][2]} />
      <DarkenColor color={colors[technology][2]} />
      <DarkenColor color={colors[technology][3]} />
      <NormalColor color='#586060' />

      <Dot style={{ top: '2px', left: '2px' }} />
      <Dot style={{ top: '2px', right: '2px' }} />
      <Dot style={{ bottom: '2px', left: '2px' }} />
      <Dot style={{ bottom: '2px', right: '2px' }} />

      <TextContainer>
        <Text technology={technology}>
          {technology}
        </Text>
      </TextContainer>
    </Rectangle>
  );
};

export default TechnologyType;

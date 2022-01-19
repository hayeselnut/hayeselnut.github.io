import React from 'react';
import styled from '@emotion/styled';
import { lighten, darken } from '@mui/material';
import { Technology } from '../types/technology-type';
import { FC } from 'react';

const Rectangle = styled.div`
  display: grid;
  grid-template-columns: 1rem 22rem 22rem 1rem;
  grid-template-rows: 1rem 6rem 6rem 1rem;
  width: 46rem;
  height: 14rem;

  margin: 1.5rem;
  box-shadow:
    1rem 0rem var(--pokemon-dark-grey),
    -1rem 0rem var(--pokemon-dark-grey),
    0rem 1rem var(--pokemon-dark-grey),
    0rem -1rem var(--pokemon-dark-grey);

  position: relative;
  cursor: pointer;
`;

const NormalColor: FC<{color: string}> = styled.div(({ color }) => ({ background: color }));
const LightenColor: FC<{color: string}> = styled.div(({ color }) => ({ background: lighten(color, 0.5) }));
const DarkenColor: FC<{color: string}> = styled.div(({ color }) => ({ background: darken(color, 0.25) }));

const Dot = styled.span`
  height: 1rem;
  width: 1rem;

  background-color: rgb(0, 0, 0, 0.2);
  display: inline-block;

  position: absolute;
`;

const TextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;

const Text: FC<{technology: Technology}> = styled.span(({ technology }) => {
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
    'textShadow': '1rem 1rem 0 var(--pokemon-grey)',
    'fontSize': '14rem',
    'transform': `scale(${scaleFactor}, 1)`,
    ' -webkit-transform': `scale(${scaleFactor}, 1)`,
    '-moz-transform': `scale(${scaleFactor}, 1)`,
    '-o-transform': `scale(${scaleFactor}, 1)`,
  };
});

type TechnologyColors = { [key in Technology]: string[] }
const colors: TechnologyColors = {
  'c': ['#5c6bc0', '#5c6bc0', '#283593', '#283593'],
  'c++': ['#659AD2', '#659AD2', '#004482', '#004482'],
  'c#': ['#9a4993', '#9a4993', '#6a1577', '#6a1577'],
  'python': ['#4B8BBE', '#4B8BBE', '#FFD43B', '#FFD43B'],

  'java': ['#f89820', '#f89820', '#5382a1', '#5382a1'],
  'kotlin': ['#F6891F', '#F6891F', '#B75EA4', '#B75EA4'],
  'spring boot': ['#6db33f', '#6db33f', '#6db33f', '#6db33f'],

  'swift': ['#F05138', '#F05138', '#F05138', '#F05138'],

  'html': ['#f06529', '#f06529', '#f06529', '#f06529'],
  'css': ['#2965f1', '#2965f1', '#2965f1', '#2965f1'],
  'javascript': ['#f0db4f', '#f0db4f', '#f0db4f', '#f0db4f'],
  'typescript': ['#007acc', '#007acc', '#007acc', '#007acc'],
  'react': ['#61DBFB', '#61DBFB', '#61DBFB', '#61DBFB'],
  'vue': ['#41B883', '#41B883', '#41B883', '#41B883'],
  'apps script': ['#F4B400', '#0F9D58', '#DB4437', '#4285F4'],

  'sql': ['#336791', '#336791', '#336791', '#336791'],
  'bash': ['#4DA825', '#4DA825', '#283037', '#283037'],
  'perl': ['#004365', '#004365', '#004365', '#004365'],

  'haskell': ['#5e5086', '#5e5086', '#453a62', '#453a62'],
  'rust': ['#f74c00', '#f74c00', '#f74c00', '#f74c00'],
  'go': ['#00ADD8', '#00ADD8', '#00ADD8', '#00ADD8'],

  'aws': ['#FF9900', '#FF9900', '#232F3E', '#232F3E'],
  'gcp': ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'],
  'azure': ['#008AD7', '#008AD7', '#008AD7', '#008AD7'],
  'terraform': ['#844FBA', '#844FBA', '#844FBA', '#844FBA'],

  'docker': ['#0db7ed', '#0db7ed', '#0db7ed', '#0db7ed'],
  'kubernetes': ['#326ce5', '#326ce5', '#326ce5', '#326ce5'],
  'heroku': ['#430098', '#430098', '#430098', '#430098'],
};

const TechnologyType: FC<{technology: Technology}> = ({ technology }) => (
  <Rectangle>
    <NormalColor color='var(--pokemon-white)' />
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
    <NormalColor color='var(--pokemon-dark-grey)' />

    <Dot style={{ top: '2rem', left: '2rem' }} />
    <Dot style={{ top: '2rem', right: '2rem' }} />
    <Dot style={{ bottom: '2rem', left: '2rem' }} />
    <Dot style={{ bottom: '2rem', right: '2rem' }} />

    <TextContainer>
      <Text technology={technology}>
        {technology}
      </Text>
    </TextContainer>
  </Rectangle>
);

export default TechnologyType;

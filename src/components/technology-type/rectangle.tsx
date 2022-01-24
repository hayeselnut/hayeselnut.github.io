import React, { FC } from 'react';
import styled from '@emotion/styled';
import { lighten, darken } from '@mui/material';
import { Technology, TechnologyName } from '../../types/technology';

const Rectangle: FC<{small: boolean}> = styled.div(({ small }) => ({
  display: 'grid',
  gridTemplateColumns: `1rem ${small ? '14rem 14rem' : '22rem 22rem'} 1rem`,
  gridTemplateRows: `1rem ${small ? '4rem 4rem' : '6rem 6rem'} 1rem`,
  width: small ? '30rem' : '46rem',
  height: small ? '10rem' : '14rem',
  margin: '1.5rem',
  boxShadow: `
    1rem 0rem var(--dark-grey),
    -1rem 0rem var(--dark-grey),
    0rem 1rem var(--dark-grey),
    0rem -1rem var(--dark-grey)`,
  position: 'relative',
  cursor: 'pointer',
}));

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

const Text: FC<{name: TechnologyName, small: boolean}> = styled.span(({ name, small }) => {
  const scaleFactor = name.length <= 5
    ? 1
    : name.length <= 6
      ? 0.9
      : name.length <= 8
        ? 0.7
        : 0.6;

  return {
    'fontFamily': '\'Super Smash TV\', sans-serif',
    'textTransform': 'uppercase',
    'color': 'white',
    'textShadow': '1rem 1rem 0 var(--grey)',
    'fontSize': small ? '9rem' : '14rem',
    'transform': `scale(${scaleFactor}, 1)`,
    ' -webkit-transform': `scale(${scaleFactor}, 1)`,
    '-moz-transform': `scale(${scaleFactor}, 1)`,
    '-o-transform': `scale(${scaleFactor}, 1)`,
  };
});

const TechnologyType: FC<{technology: Technology, small?: boolean}> = ({ technology, small = false }) => (
  <Rectangle small={small}>
    <NormalColor color='var(--white)' />
    <LightenColor color={technology.colors[0]} />
    <LightenColor color={technology.colors[1]} />
    <NormalColor color={technology.colors[1]} />

    <LightenColor color={technology.colors[0]} />
    <NormalColor color={technology.colors[0]} />
    <NormalColor color={technology.colors[1]} />
    <DarkenColor color={technology.colors[1]} />

    <LightenColor color={technology.colors[2]} />
    <NormalColor color={technology.colors[2]} />
    <NormalColor color={technology.colors[3]} />
    <DarkenColor color={technology.colors[3]} />

    <NormalColor color={technology.colors[2]} />
    <DarkenColor color={technology.colors[2]} />
    <DarkenColor color={technology.colors[3]} />
    <NormalColor color='var(--dark-grey)' />

    <Dot style={{ top: '2rem', left: '2rem' }} />
    <Dot style={{ top: '2rem', right: '2rem' }} />
    <Dot style={{ bottom: '2rem', left: '2rem' }} />
    <Dot style={{ bottom: '2rem', right: '2rem' }} />

    <TextContainer>
      <Text name={technology.name} small={small}>
        {technology.name}
      </Text>
    </TextContainer>
  </Rectangle>
);

export default TechnologyType;

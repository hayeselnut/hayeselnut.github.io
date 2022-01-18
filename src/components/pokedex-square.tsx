import React, { FC } from 'react';
import styled from '@emotion/styled';

const Square: FC<{selected: boolean}> = styled('div')(({ selected }) => ({
  'width': '37rem',
  'height': '37rem',
  'cursor': 'pointer',
  ...(
    selected
      ? { outline: '3rem solid var(--pokemon-red)', zIndex: 100 }
      : { '&:hover': { outline: '3rem solid var(--pokemon-light-red)' } }
  ),
}));

type Project = {
  name: string,
  category: string,
  img: string,
}

const PokedexSquare: FC<{id: number, project: Project, selected: boolean}> = ({ id, project, selected }) => (
  <Square selected={selected}>
    <span style={{ fontFamily: 'pokedex', fontSize: '8rem' }}>
      {String(id).padStart(3, '0')}
    </span>
  </Square>
);

export default PokedexSquare;

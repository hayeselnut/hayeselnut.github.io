import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Project } from '../types/project';

const Square: FC<{selected: boolean}> = styled('div')(({ selected }) => ({
  'width': '37rem',
  'height': '37rem',
  'cursor': 'pointer',
  'font-family': 'deltarune',
  'font-size': '12rem',
  'box-sizing': 'border-box',
  'padding': '3rem',
  ...(
    selected
      ? { outline: '3rem solid var(--pokemon-red)', zIndex: 100 }
      : { '&:hover': { outline: '3rem solid var(--pokemon-light-red)' } }
  ),
}));

const PokedexSquare: FC<{id: number, project: Project, selected: boolean}> = ({ id, project, selected }) => (
  <Square selected={selected}>
    <span style={{ color: 'var(--pokemon-grid-grey)' }}>
      {String(id).padStart(3, '0')}
    </span>
  </Square>
);

export default PokedexSquare;

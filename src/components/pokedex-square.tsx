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
  'padding': '2rem',
  ...(
    selected
      ? {
        outline: '3rem solid var(--pokemon-red)',
        color: 'var(--pokemon-grey)',
      }
      : {
        'color': 'var(--pokemon-grid-grey)',
        '&:hover': { outline: '3rem solid var(--pokemon-light-red)' },
      }
  ),
}));

const Id = styled('span')``;

const PokedexSquare: FC<{project: Project, selected: boolean}>
= ({ project, selected }) => (
  <Square selected={selected}>
    <Id>{String(project.id).padStart(3, '0')}</Id>
    <img src={project.img} width="50%" style={{ opacity: project.participation ? 1 : 0.3 }} />
  </Square>
);

export default PokedexSquare;

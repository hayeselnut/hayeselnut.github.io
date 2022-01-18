import React, { FC, MouseEventHandler } from 'react';
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
  'color': 'var(--pokemon-grid-grey)',
  ...(
    selected
      ? {
        outline: '3rem solid var(--pokemon-red)',
        zIndex: 100,
        color: 'var(--pokemon-grey)',
      }
      : { '&:hover': { outline: '3rem solid var(--pokemon-light-red)' } }
  ),
}));

const PokedexSquare: FC<{project: Project, selected: boolean}>
= ({ project, selected }) => (
  <Square selected={selected}>
    <span>
      {String(project.id).padStart(3, '0')}
    </span>
    <img src={project.img} width="100%" />
  </Square>
);

export default PokedexSquare;

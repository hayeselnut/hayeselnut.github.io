import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Project } from '../types/project';

const Square: FC<{selected: boolean, project: Project}> = styled.div(({ selected, project }) => ({
  'width': '37rem',
  'height': '37rem',
  'cursor': 'pointer',
  'font-family': 'deltarune',
  'font-size': '12rem',
  'box-sizing': 'border-box',
  // 'padding': '1rem',
  'background-image': `url(${project.img})`,
  'background-repeat': 'no-repeat',
  'background-size': '60%',
  'background-position': '50% 80%',
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

const Id = styled('span')`
  // border: 1px solid black;
  float: right;
`;

const PokedexSquare: FC<{project: Project, selected: boolean}> = ({ project, selected }) => (
  <Square selected={selected} project={project}>
    <Id>{String(project.id).padStart(3, '0')}</Id>
    {/* <img src={project.img} width="50%" style={{ opacity: project.participation ? 1 : 0.3 }} /> */}
  </Square>
);

export default PokedexSquare;

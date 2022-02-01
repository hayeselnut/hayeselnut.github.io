import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Project } from '../types/project';

const Square: FC<{selected: boolean}> = styled.div(({ selected }) => ({
  width: '37rem',
  height: '37rem',
  cursor: 'pointer',
  fontFamily: 'deltarune',
  fontSize: '12rem',
  boxSizing: 'border-box',

  display: 'grid',
  gridTemplateRows: '1fr 2fr',
  paddingBottom: '3rem',

  ...(
    selected
      ? {
        outline: '3rem solid var(--red)',
        color: 'var(--grey)',
      }
      : {
        'color': 'var(--light-grey)',
        '&:hover': { outline: '3rem solid var(--light-red)' },
      }
  ),
}));

const Id = styled.span`
  display: flex;
  justify-content: flex-end;
`;

const Sprite: FC<{project: Project}> = styled.div(({ project }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: project.participation ? 1 : 0.4,
}));

const PokedexSquare: FC<{project: Project, selected: boolean}> = ({ project, selected }) => (
  <Square selected={selected}>
    <Id>{String(project.id).padStart(3, '0')}</Id>
    <Sprite project={project}>
      <img src={project.sprite} style={{ imageRendering: 'pixelated', height: '20rem' }} />
    </Sprite>
  </Square>
);

export default PokedexSquare;

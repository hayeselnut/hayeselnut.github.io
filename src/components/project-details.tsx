
import React, { FC } from 'react';
import styled from '@emotion/styled';
import TitleCard from '../components/title-card';
import TextFrame from '../components/text-frame';
import LinkSquare from '../components/link-square';
import TechnologyType from './technology-type';
import { Project } from '../types/project';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 130rem 35rem auto;
  grid-template-rows: 36rem 80rem auto;
  gap: 5rem;
`;

const ProjectImgContainer = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 2;

  padding: 20rem;
`;

const ProjectImg = styled.img`
  height: 100%;
  width: 100%;
  image-rendering: pixelated;
`;

const TitleCardContainer = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 4;
`;

const ExternalLinkContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
`;

const StackContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 3 / 4;

  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const TextFrameContainer = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / 4;
`;

const ProjectDetails: FC<{project: Project}> = ({ project }) => (
  <Grid>
    <ProjectImgContainer>
      <ProjectImg src={project.img} />
    </ProjectImgContainer>

    <TitleCardContainer>
      <TitleCard id={project.id} name={project.name} category={project.category} />
    </TitleCardContainer>

    <ExternalLinkContainer>
      <LinkSquare href={project.link} />
    </ExternalLinkContainer>

    <StackContainer>
      {project.stack.map((technology) => <TechnologyType key={technology} name={technology} />)}
    </StackContainer>

    <TextFrameContainer>
      <TextFrame project={project} />
    </TextFrameContainer>
  </Grid>
);

export default ProjectDetails;

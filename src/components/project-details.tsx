
import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import TitleCard from '../components/title-card';
import TextFrame from '../components/text-frame';
import LinkSquare from '../components/link-square';
import TechnologyType from './technology-type';
import { Project } from '../types/project';
import LandscapeContext from '../contexts/landscape-context';

const LandscapeContainer = styled.div`
  display: grid;
  grid-template-columns: 130rem 35rem auto;
  grid-template-rows: 36rem 80rem auto;
  gap: 5rem;
`;

const PortraitContainer = styled.div`
  width: 120rem;
`;

const ProjectImgContainer = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 2;

  padding: 20rem;
`;

const ProjectImg = styled.img`
  height: 100%;
  // width: 100%;
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

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const StackContainer = styled(Stack)`
  grid-row: 2 / 3;
  grid-column: 3 / 4;
`;

const TextFrameContainer = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / 4;
`;

const CombinedTitleLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 10rem;
  margin-bottom: 5rem;
`;

const ProjectDetails: FC<{project: Project}> = ({ project }) => {
  const landscape = useContext(LandscapeContext);

  return landscape ? (
    <LandscapeContainer>
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
    </LandscapeContainer>
  ) : (
    <PortraitContainer>
      <CombinedTitleLinkContainer>
        <LinkSquare href={project.link} />
        <TitleCard id={project.id} name={project.name} category={project.category} />
      </CombinedTitleLinkContainer>

      <div style={{ height: '75rem', margin: '15rem', display: 'flex', justifyContent: 'center' }}>
        <ProjectImg src={project.img} />
      </div>

      <Stack style={{ height: '35rem' }}>
        {project.stack.map((technology) => <TechnologyType key={technology} name={technology} />)}
      </Stack>

      <TextFrame project={project} />
    </PortraitContainer>
  );
};

export default ProjectDetails;

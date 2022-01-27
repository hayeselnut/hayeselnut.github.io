
import React, { FC } from 'react';
import styled from '@emotion/styled';
import TitleCard from '../components/title-card';
import TextFrame from '../components/text-frame';
import LinkSquare from '../components/link-square';
import TechnologyType from './technology-type';
import { Project } from '../types/project';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 130rem auto auto;
  grid-template-rows: auto 80rem auto;
  gap: 5rem;
`;

const ProjectImgContainer = styled.div`
  // border: 1rem solid red;
  grid-row: 1 / 3;
  grid-column: 1 / 2;
`;

const TitleCardContainer = styled.div`
  // border: 1rem solid red;
  grid-row: 1 / 2;
  grid-column: 2 / 4;
`;

const ExternalLinkContainer = styled.div`
  // border: 1rem solid red;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
`;

const StackContainer = styled.div`
  // border: 1rem solid red;
  grid-row: 2 / 3;
  grid-column: 3 / 4;

  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const TextFrameContainer = styled.div`
  // border: 1rem solid red;
  grid-row: 3 / 4;
  grid-column: 1 / 4;
`;

const ProjectDetails: FC<{project: Project}> = ({ project }) => (
  <Grid>
    <ProjectImgContainer>
      <img src={project.img} style={{ imageRendering: 'pixelated' }} />
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
      <TextFrame content={project.description} />
    </TextFrameContainer>
  </Grid>
  // <div style={{ border: '0rem solid red', width: '100%', display: 'flex',
  //   flexDirection: 'column', position: 'relative' }}
  // >
  //   <div style={{ position: 'absolute', top: 0, right: 0, display: 'flex', alignItems: 'flex-end',
  //     flexDirection: 'column',
  //   }}
  //   >
  //
  //     <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '6rem', maxWidth: '70%',
  //       justifyContent: 'flex-end' }}
  //     >
  //
  //     </div>
  //   </div>
  //
  //   <div style={{ flexGrow: 1 }} />
  //
  // </div>

);

export default ProjectDetails;

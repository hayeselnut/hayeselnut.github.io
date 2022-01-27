
import React, { FC } from 'react';
import TitleCard from '../components/title-card';
import TechnologyType from './technology-type';
import TextFrame from '../components/text-frame';
import LinkSquare from '../components/link-square';
import { Project } from '../types/project';

const ProjectDetails: FC<{project: Project}> = ({ project }) => (
  <div style={{ border: '0rem solid red', width: '100%', display: 'flex',
    flexDirection: 'column', position: 'relative' }}
  >
    <LinkSquare href="asdf" />
    <div style={{ position: 'absolute', top: 0, right: 0, display: 'flex', alignItems: 'flex-end',
      flexDirection: 'column',
    }}
    >
      <TitleCard id={project.id} name={project.name} category={project.category} />
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '6rem', maxWidth: '70%',
        justifyContent: 'flex-end' }}
      >
        {project.stack.map((technology) =>
          <TechnologyType key={technology} name={technology} />,
        )}
      </div>
    </div>
    <img
      src={project.img}
      height='200rem'
      width="200rem"
      style={{ marginRight: '150rem', imageRendering: 'pixelated' }}
    />
    <div style={{ flexGrow: 1 }} />
    <TextFrame content={project.description} />
  </div>

);

export default ProjectDetails;

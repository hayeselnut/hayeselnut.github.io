import React, { useContext } from 'react';
import { ShowcaseContext } from '../App';
import { ProjectSlug } from '../types/project-slugs';

import '../styles/pokeball.css';

type Props = {
  slug: ProjectSlug
  img: string,
  link: string,
}

const ProjectCard = ({ slug, img, link }: Props) => {
  const { projectSlug, setProjectSlug } = useContext(ShowcaseContext);

  const handleClick = () => {
    setProjectSlug(projectSlug === slug ? 'hayes' : slug);
  };

  return (
    <div className={`pokeball ${projectSlug === slug && 'pokeball-open'}`} onClick={handleClick}>
      <div className='pokeball-lid'></div>
      <img src={img} className='project-logo' />
      <div className='pokeball-base'></div>
    </div>
  );
};

export default ProjectCard;

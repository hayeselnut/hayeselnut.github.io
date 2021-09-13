import React, { useContext, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { ShowcaseContext } from '../App';
import { ProjectSlug } from '../types/project-slugs';

type Props = {
  slug: ProjectSlug
  title: string,
  img: string,
  link: string,
}

const ProjectCard = ({ slug, title, img, link }: Props) => {
  const { setProjectSlug } = useContext(ShowcaseContext);

  const handleMouseEnter = () => {
    setProjectSlug(slug);
  };

  const handleMouseLeave = () => {
    setProjectSlug('hayes');
  };

  return (
    <Grid.Column>
      <a href={link} target='_blank' rel="noreferrer" className='project-card-link'>
        <div
          className='project-card'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={img} className='project-logo' />
          <b>{title}</b>
        </div>
      </a>
    </Grid.Column>
  );
};

// ProjectCard.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default ProjectCard;

import React, { useContext, useState } from 'react';
import { Grid, Image, SemanticSIZES } from 'semantic-ui-react';
import { ShowcaseContext } from '../App';

type Props = {
  title: string,
  subtitle: string,
  slug: string,
  img: string,
  link: string,
}

const ProjectCard = ({ title, subtitle, slug, img, link }: Props) => {
  const { showcase, setShowcase } = useContext(ShowcaseContext);

  const handleMouseEnter = () => {
    setShowcase(title);
  };

  const handleMouseLeave = () => {
    setShowcase('hayes');
  };

  return (
    <Grid.Column>
      <a href={link} target='_blank' rel="noreferrer" className='project-card-link'>
        <div
          className='project-card'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={img}
            // centered
            className='project-logo'
          />
          <p><b>{title}</b></p>
          <p>{subtitle}</p>
        </div>
      </a>
    </Grid.Column>
  );
};

// ProjectCard.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default ProjectCard;

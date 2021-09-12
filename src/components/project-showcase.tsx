import React, { useContext } from 'react';
import { Header } from 'semantic-ui-react';

import { ShowcaseContext } from '../App';

type Props = {
  title: string,
  slug: string,
  img: string,
}

const ProjectShowcase = () => {
  const { showcase, setShowcase } = useContext(ShowcaseContext);

  return (
    <>
      <Header as='h1' content='Hayeselnut' />
      <Header as='h2' content='Software Engineer' />
      <Header as='h2' content={showcase} />
    </>
  );
};

// ProjectCard.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default ProjectShowcase;

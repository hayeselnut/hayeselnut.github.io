import React, { useContext } from 'react';
import { ShowcaseContext } from '../App';

import HayesShowcase from './showcases/hayes-showcase';
import DeduplicatifyShowcase from './showcases/deduplicatify-showcase';
import DewohShowcase from './showcases/dewoh-showcase';
import NYTSWShowcase from './showcases/nytsw-showcase';
import CirclesShowcase from './showcases/circles-showcase';
import GTSDBShowcase from './showcases/gtsdb-showcase';

// To add a project create a Swhocase component and insert into grid as ProjectCard
const ProjectShowcase = () => {
  const { projectSlug } = useContext(ShowcaseContext);

  switch (projectSlug) {
  case 'deduplicatify':
    return <DeduplicatifyShowcase />;
  case 'dewoh':
    return <DewohShowcase />;
  case 'nytsw':
    return <NYTSWShowcase />;
  case 'circles':
    return <CirclesShowcase />;
  case 'gtsdb':
    return <GTSDBShowcase />;
  default:
    return <HayesShowcase />;
  }
};

export default ProjectShowcase;

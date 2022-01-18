import React, { useState } from 'react';

import '../styles/pokeball.css';

type Props = {
  img: string,
  link: string,
}

const ProjectCard = ({ img, link }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={`pokeball`} onClick={handleClick}>
      <div className='pokeball-lid'></div>
      <img src={img} className='project-logo' />
      <div className='pokeball-base'></div>
    </div>
  );
};

export default ProjectCard;

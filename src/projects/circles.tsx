import React from 'react';
import { Project } from '../types/project';
import CirclesLogo from '../assets/projects/circles.svg';
import CirclesSprite from '../assets/projects/circles.png';

export const Circles: Project = {
  id: 0,
  name: 'Circles',
  category: 'UNSW Degree Planner',
  participation: true,
  stack: ['html', 'css', 'javascript', 'react'],
  color: '#39B54A',
  img: CirclesLogo,
  sprite: CirclesSprite,
  description: [
    <>
      A visual UNSW degree planner, where courses and their prerequites are
      shown on a flowchart, kinda like a Minecraft Achievements page.
    </>,
    <>
      Students can then use the auto timetable feature to plan which courses
      they will take per term, taking into account prerequisites, degree
      requirements and term availability.
    </>,
    <>
      This was my group{'\''}s entry for the CSESoc Personal Project Competition
      2020, winning the People{'\''}s Choice vote!
    </>,
    <>
      We were also featured in a podcast where we talked about our process from
      design to implementation.
    </>,
    <>
      <iframe
        src="https://open.spotify.com/embed/episode/1Rc5zmmAJYl8LyxC80q11U"
        width="600"
        height="100"
        frameBorder="0"
        allow="encrypted-media"
        // className='podcast'
        // onLoad={handleLoad}
        // style={{ opacity: podcastLoading ? 0 : 1 }}
      />
    </>,
  ],
};

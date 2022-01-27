import React from 'react';
import { Project } from '../types/project';
import StatsWatcherLogo from '../assets/projects/nytsw.svg';
import StatsWatcherSprite from '../assets/projects/nytsw.png';

export const StatsWatcher: Project = {
  id: 0,
  name: 'Stats Watcher',
  category: 'NYT Mini Crossword',
  participation: true,
  stack: ['html', 'css', 'javascript', 'react'],
  color: '#4083FB',
  img: StatsWatcherLogo,
  sprite: StatsWatcherSprite,
  link: 'https://hayeselnut.github.io/nytimes-stats-watcher/',
  description: [
    <>
      The <a href='https://www.nytimes.com/crosswords/game/mini' target='_blank' rel="noreferrer">Mini Crossword</a> by
      the New York Times is a fun daily puzzle my friends play everyday.
    </>,
    <>
      There{'\''}s an inbuilt statistics page but you can only see yourself.
    </>,
    <>
      Oh, and it{'\''}s also a premium feature 🤑🤑.
    </>,
    <>
      I wanted to track my friend{'\''}s progress over time so I made a
      dashboard by scraping the daily leaderboard and storing everyone{'\''}s
      results and time.
    </>,
    <>
      I only managed to finish the frontend though since the NYT{'\''}s bot detection
      was too stronk 😢
    </>,
  ],
};

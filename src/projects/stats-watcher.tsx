import React from 'react';
import { Project } from '../types/project';
import StatsWatcherLogo from '../assets/projects/stats-watcher/stats-watcher-logo.svg';
import StatsWatcherSprite from '../assets/projects/stats-watcher/stats-watcher-sprite.png';

export const StatsWatcher: Project = {
  id: 0,
  name: 'Stats Watcher',
  category: 'NYT Mini Crossword',
  participation: true,
  stack: ['html', 'css', 'javascript', 'react', 'firebase'],
  color: '#4083FB',
  img: StatsWatcherLogo,
  sprite: StatsWatcherSprite,
  link: 'https://hayeselnut.github.io/nytimes-stats-watcher/',
  description: [
    <span key={0}>
      The <a href='https://www.nytimes.com/crosswords/game/mini' target='_blank' rel="noreferrer">Mini Crossword</a> by
      the New York Times is a fun daily puzzle my friends play everyday.
    </span>,
    <span key={1}>
      There{'\''}s an inbuilt statistics page but you can only see yourself.
    </span>,
    <span key={2}>
      Oh, and it{'\''}s also a premium feature 🤑🤑.
    </span>,
    <span key={3}>
      I wanted to track my friend{'\''}s progress over time so I made a
      dashboard by scraping the daily leaderboard and storing everyone{'\''}s
      results and time.
    </span>,
    <span key={4}>
      I only managed to finish the frontend though since the NYT{'\''}s bot detection
      was too stronk 😢
    </span>,
  ],
};

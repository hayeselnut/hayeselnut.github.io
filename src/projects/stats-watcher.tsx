import React from 'react';
import { Project } from '../types/project';
import StatsWatcherLogo from '../assets/projects/nytsw.svg';

export const StatsWatcher: Project = {
  id: 5,
  name: 'Stats Watcher',
  category: 'NYT Mini Crossword',
  participation: true,
  stack: ['html', 'css', 'javascript', 'react'],
  color: '#4083FB',
  img: StatsWatcherLogo,
  description: [
    <>
      The Mini Crossword by the New York Times is a fun daily puzzle my friends play everyday. There{'\''}s an
      inbuilt statistics page but it is only for yourself and a premium feature. I wanted to track
      everyone{'\''}s progress over time so I made a dashboard by scraping the daily leaderboard
      and storing everyone{'\''}s results and time.
    </>,
    <>
      TWO GOALS:
      <ul>
        <li>
          completely emulate the theming as if it was an official{' '}
          <a href='https://www.nytimes.com/crosswords/game/mini' target='_blank' rel="noreferrer">NYT page</a>.
        </li>
        <li>
          automate the page by deploying a daily scraper (was blocked by strong antibot system, however)
        </li>
      </ul>
    </>,
  ],
};

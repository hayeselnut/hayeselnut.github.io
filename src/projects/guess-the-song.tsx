import React from 'react';
import { Project } from '../types/project';
import GuessTheSongLogo from '../assets/projects/gtsdb.png';

export const GuessTheSong: Project = {
  id: 0,
  name: 'Guess the Song',
  category: 'Discord Bot',
  participation: true,
  stack: ['html', 'css', 'typescript', 'react', 'heroku'],
  color: '#FC4E56',
  img: GuessTheSongLogo,
  description: [
    <>
      A Discord bot that hosts a song guessing competition
    </>,
  ],
};

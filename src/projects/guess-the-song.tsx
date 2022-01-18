import React from 'react';
import { Project } from '../types/project';
import GuessTheSongLogo from '../assets/gtsdb.svg';

export const GuessTheSong: Project = {
  name: 'Guess the Song',
  category: 'Discord bot',
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

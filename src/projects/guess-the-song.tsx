import React from 'react';
import { Project } from '../types/project';
import GuessTheSongLogo from '../assets/projects/guess-the-song/guess-the-song-logo.svg';
import GuessTheSongSprite from '../assets/projects/guess-the-song/guess-the-song-sprite.png';

export const GuessTheSong: Project = {
  id: 0,
  name: 'Guess the Song',
  category: 'Discord Bot',
  participation: true,
  stack: ['html', 'css', 'typescript', 'react', 'heroku', 'firebase'],
  color: '#FC4E56',
  img: GuessTheSongLogo,
  sprite: GuessTheSongSprite,
  link: 'https://hayeselnut.github.io/guess-the-song-discord-bot/',
  description: [
    <span key={0}>
      One of the best road trip games is shuffling a playlist and guessing the
      song.
    </span>,
    <span key={1}>
      But then lockdown came... like 3 times aha. So no roadtrips for me 🤡
    </span>,
    <span key={2}>
      I made a Discord bot that hosts song guessing competitions so that we
      could keep playing at home. It takes any Spotify playlist and has its
      own score leaderboard!
    </span>,
    <span key={3}>
      I submitted it as my individual entry for the CSESoc Personal Project
      Competition 2021, which won First place and the People{'\''}s Choice vote!
    </span>,
  ],
};

import React from 'react';
import { Project } from '../types/project';
import DeduplicatifyLogo from '../assets/projects/deduplicatify/deduplicatify-logo.svg';
import DeduplicatifySprite from '../assets/projects/deduplicatify/deduplicatify-sprite.png';

export const Deduplicatify: Project = {
  id: 0,
  name: 'Deduplicatify',
  category: 'Spotify',
  participation: true,
  stack: ['html', 'css', 'javascript'],
  color: '#1ED760',
  img: DeduplicatifyLogo,
  sprite: DeduplicatifySprite,
  link: 'https://hayeselnut.github.io/deduplicatify/',
  description: [
    <>
      One of my pet peeves is adding a song to my Spotify playlist to find that
      the same song from a different album has already been added :(((
    </>,
    <>
      Ahem... looking at you Justin Beiber deluxe albums...
    </>,
    <>
      This is a web app to detect duplicate or similar songs in a Spotify playlist.
    </>,
    <>
      Similar songs are songs with the same name and artist but in different
      albums.
    </>,
    <>
      Live versions are also considered similar because who wants to hear
      a crowd cheering?
    </>,
    <>
      To fit the vibe I also imitated Spotify{'\''}s styling!
    </>,
  ],
};

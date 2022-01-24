import React from 'react';
import { Project } from '../types/project';
import DeduplicatifyLogo from '../assets/projects/deduplicatify_green.svg';

export const Deduplicatify: Project = {
  id: 0,
  name: 'Deduplicatify',
  category: 'Spotify',
  participation: true,
  stack: ['html', 'css', 'javascript'],
  color: '#1ED760',
  img: DeduplicatifyLogo,
  description: [
    <>
      A web app to detect duplicate or similar songs in a Spotify playlist.
      Similar songs include same song name and artist but different albums, as
      well as remix, live and cover versions.
    </>,
    <>
      To fit the vibe I also imitated Spotify{'\''}s styling!
    </>,
  ],
};

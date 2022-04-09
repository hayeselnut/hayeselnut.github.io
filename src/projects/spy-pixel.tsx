import React from 'react';
import { Project } from '../types/project';
import SpyPixelLogo from '../assets/projects/spy-pixel/spy-pixel-logo.png';
import SpyPixelSprite from '../assets/projects/spy-pixel/spy-pixel-sprite.png';

export const SpyPixel: Project = {
  id: 0,
  name: 'Spy Pixel',
  category: 'Email Security',
  participation: true,
  stack: ['html', 'css', 'javascript', 'react', 'firebase'],
  color: '#ffffff',
  img: SpyPixelLogo,
  sprite: SpyPixelSprite,
  link: 'https://spy-pixel.netlify.app/',
  description: [
    <span key={0}>
      Ever wondered how emails can track whether you{'\''}ve read them or not?
    </span>,
    <span key={1}>
      It{'\''}s thanks to a small 1x1 transparent pixel that{'\''}s embedded in
      the HTML content.
    </span>,
    <span key={2}>
      When the email is loaded, a request is sent to a server for the image, and
      that request is logged.
    </span>,
    <span key={3}>
      I made my own to prove how simple it is, and just how scary these spy
      pixels can be!
    </span>,
  ],
};

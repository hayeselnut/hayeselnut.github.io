import React, { FC } from 'react';
import { Technology, TechnologyName } from '../types/technology';
import Rectangle from './rectangle';

const technologies: {[key in TechnologyName as key]: Technology} = {
  'c': {
    name: 'c',
    colors: ['#5c6bc0', '#5c6bc0', '#283593', '#283593'],
    link: 'https://www.iso.org/standard/74528.html',
  },
  'c++': {
    name: 'c++',
    colors: ['#659AD2', '#659AD2', '#004482', '#004482'],
    link: 'https://isocpp.org/',
  },
  'c#': {
    name: 'c#',
    colors: ['#9a4993', '#9a4993', '#6a1577', '#6a1577'],
    link: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
  },
  'python': {
    name: 'python',
    colors: ['#4B8BBE', '#4B8BBE', '#FFD43B', '#FFD43B'],
    link: 'https://www.python.org/',
  },
  'java': {
    name: 'java',
    colors: ['#f89820', '#f89820', '#5382a1', '#5382a1'],
    link: 'https://www.java.com/en/',
  },
  'kotlin': {
    name: 'kotlin',
    colors: ['#F6891F', '#F6891F', '#B75EA4', '#B75EA4'],
    link: 'https://kotlinlang.org/',
  },
  'spring boot': {
    name: 'spring boot',
    colors: ['#6db33f', '#6db33f', '#6db33f', '#6db33f'],
    link: 'https://spring.io/projects/spring-boot',
  },
  'swift': {
    name: 'swift',
    colors: ['#F05138', '#F05138', '#F05138', '#F05138'],
    link: 'https://developer.apple.com/swift/',
  },
  'html': {
    name: 'html',
    colors: ['#f06529', '#f06529', '#f06529', '#f06529'],
    link: 'https://html.spec.whatwg.org/',
  },
  'css': {
    name: 'css',
    colors: ['#2965f1', '#2965f1', '#2965f1', '#2965f1'],
    link: 'https://www.w3.org/TR/CSS/',
  },
  'javascript': {
    name: 'javascript',
    colors: ['#f0db4f', '#f0db4f', '#f0db4f', '#f0db4f'],
    link: 'https://www.javascript.com/',
  },
  'typescript': {
    name: 'typescript',
    colors: ['#007acc', '#007acc', '#007acc', '#007acc'],
    link: 'https://www.typescriptlang.org/',
  },
  'react': {
    name: 'react',
    colors: ['#61DBFB', '#61DBFB', '#61DBFB', '#61DBFB'],
    link: 'https://reactjs.org/',
  },
  'vue': {
    name: 'vue',
    colors: ['#41B883', '#41B883', '#41B883', '#41B883'],
    link: 'https://vuejs.org/',
  },
  'apps script': {
    name: 'apps script',
    colors: ['#F4B400', '#0F9D58', '#DB4437', '#4285F4'],
    link: 'https://developers.google.com/apps-script',
  },
  'sql': {
    name: 'sql',
    colors: ['#336791', '#336791', '#336791', '#336791'],
    link: 'https://en.wikipedia.org/wiki/SQL',
  },
  'bash': {
    name: 'bash',
    colors: ['#4DA825', '#4DA825', '#283037', '#283037'],
    link: 'https://www.gnu.org/software/bash/',
  },
  'perl': {
    name: 'perl',
    colors: ['#004365', '#004365', '#004365', '#004365'],
    link: 'https://www.perl.org/',
  },
  'haskell': {
    name: 'haskell',
    colors: ['#5e5086', '#5e5086', '#453a62', '#453a62'],
    link: 'https://www.haskell.org/',
  },
  'rust': {
    name: 'rust',
    colors: ['#f74c00', '#f74c00', '#f74c00', '#f74c00'],
    link: 'https://www.rust-lang.org/',
  },
  'go': {
    name: 'go',
    colors: ['#00ADD8', '#00ADD8', '#00ADD8', '#00ADD8'],
    link: 'https://go.dev/',
  },
  'aws': {
    name: 'aws',
    colors: ['#FF9900', '#FF9900', '#232F3E', '#232F3E'],
    link: 'https://aws.amazon.com/',
  },
  'gcp': {
    name: 'gcp',
    colors: ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'],
    link: 'https://cloud.google.com/',
  },
  'azure': {
    name: 'azure',
    colors: ['#008AD7', '#008AD7', '#008AD7', '#008AD7'],
    link: 'https://azure.microsoft.com/',
  },
  'terraform': {
    name: 'terraform',
    colors: ['#844FBA', '#844FBA', '#844FBA', '#844FBA'],
    link: 'https://www.terraform.io/',
  },
  'docker': {
    name: 'docker',
    colors: ['#0db7ed', '#0db7ed', '#0db7ed', '#0db7ed'],
    link: 'https://www.docker.com/',
  },
  'kubernetes': {
    name: 'kubernetes',
    colors: ['#326ce5', '#326ce5', '#326ce5', '#326ce5'],
    link: 'https://kubernetes.io/',
  },
  'heroku': {
    name: 'heroku',
    colors: ['#430098', '#430098', '#430098', '#430098'],
    link: 'https://www.heroku.com/',
  },
  'firebase': {
    name: 'firebase',
    colors: ['#FFCA28', '#FFCA28', '#F57C00', '#F57C00'],
    link: 'https://firebase.google.com/',
  },
  'mongodb': {
    name: 'mongodb',
    colors: ['#4DB33D', '#4DB33D', '#3FA037', '#3FA037'],
    link: 'https://www.mongodb.com/',
  },
  'druid': {
    name: 'druid',
    colors: ['#29f1fb', '#29f1fb', '#29f1fb', '#29f1fb'],
    link: 'https://druid.apache.org/',
  },
};

const TechnologyType: FC<{name: TechnologyName, small?: boolean}> = ({ name, small = false }) => (
  <Rectangle technology={technologies[name]} small={small} />
);

export default TechnologyType;

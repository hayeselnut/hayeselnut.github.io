import { Deduplicatify } from './deduplicatify';
import { Dewoh } from './dewoh';
import { Circles } from './circles';
import { CSESocCircles } from './csesoc-circles';
import { StatsWatcher } from './stats-watcher';
import { Glojects } from './glojects';
import { GuessTheSong } from './guess-the-song';
import { CSElectives } from './cselectives';
import { Chaos } from './chaos';
import { SocAnnouncer } from './soc-announcer';

const projectsOrder = [
  Deduplicatify,
  Dewoh,
  Circles,
  CSESocCircles,
  StatsWatcher,
  Glojects,
  GuessTheSong,
  CSElectives,
  Chaos,
  SocAnnouncer,
];

export const projects = projectsOrder.reduce((a, project, index) => ({
  ...a,
  [project.name]: {
    ...project,
    id: index + 1,
  },
}), {});


import { Deduplicatify } from './deduplicatify';
import { Dewoh } from './dewoh';
import { Circles } from './circles';
import { CSESocCircles } from './csesoc-circles';
import { StatsWatcher } from './stats-watcher';
import { GuessTheSong } from './guess-the-song';
import { CSElectives } from './cselectives';
import { Chaos } from './chaos';
import { Project, ProjectName } from '../types/project';

const projectsOrder = [
  Deduplicatify,
  Dewoh,
  Circles,
  CSESocCircles,
  StatsWatcher,
  GuessTheSong,
  CSElectives,
  Chaos,
  // SocAnnouncer,
];

export const projects: {[key in ProjectName as key]: Project} = projectsOrder.reduce((a, proj, idx) => ({
  ...a,
  [proj.name]: {
    ...proj,
    id: idx + 1,
  },
}), {} as {[key in ProjectName as key]: Project});


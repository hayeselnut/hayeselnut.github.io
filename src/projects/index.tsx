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
import { Project, ProjectName } from '../types/project';

export const projects: {[key in ProjectName]: Project} = {
  'Deduplicatify': Deduplicatify,
  'Dewoh': Dewoh,
  'Circles': Circles,
  'CSESoc Circles': CSESocCircles,
  'Stats Watcher': StatsWatcher,
  'Glojects': Glojects,
  'Guess the Song': GuessTheSong,
  'CSElectives': CSElectives,
  'Chaos': Chaos,
  'soc-announcer': SocAnnouncer,
};


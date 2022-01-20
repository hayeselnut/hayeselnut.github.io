import { Experience, ExperienceName } from '../types/experience';
import { Atlassian } from './atlassian';
import { WiseTechGlobal } from './wisetech';

export const experiences: {[key in ExperienceName]: Experience} = {
  'Atlassian': Atlassian,
  'WiseTech Global': WiseTechGlobal,
};


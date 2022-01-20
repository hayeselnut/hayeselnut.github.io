import { Experience, ExperienceName } from '../types/experience';
import { Atlassian } from './atlassian';
import { WiseTechGlobal } from './wisetech';
import { CSESoc } from './csesoc';

export const experiences: {[key in ExperienceName]: Experience} = {
  'CSESoc': CSESoc,
  'Atlassian': Atlassian,
  'WiseTech Global': WiseTechGlobal,
};


import { Atlassian } from './atlassian';
import { WiseTechGlobal } from './wisetech';
import { CSESoc } from './csesoc';
import { Experience, ExperienceName } from '../types/experience';

const experiencesOrder = [
  CSESoc,
  Atlassian,
  WiseTechGlobal,
];

export const experiences: {[key in ExperienceName as key]: Experience} = experiencesOrder.reduce((a, exp, idx) => ({
  ...a,
  [exp.name]: {
    ...exp,
    id: idx + 1,
  },
}), {} as {[key in ExperienceName as key]: Experience});

import { Atlassian } from './atlassian';
import { WiseTechGlobal } from './wisetech';
import { CSESocStudexDirector } from './csesoc-studex-director';
import { JaneStreetIntern } from './jane-street-intern';
import { Experience, ExperienceName } from '../types/experience';
import { CSESocSecretary } from './csesoc-secretary';
import { JaneStreetFullTime } from './jane-street-full-time';

const experiencesOrder = [
  Atlassian,
  CSESocStudexDirector,
  CSESocSecretary,
  WiseTechGlobal,
  JaneStreetIntern,
  JaneStreetFullTime,
];

export const experiences: {[key in ExperienceName as key]: Experience} = experiencesOrder.reduce((a, exp, idx) => ({
  ...a,
  [exp.id]: {
    ...exp,
    pos: idx + 1,
  },
}), {} as {[key in ExperienceName as key]: Experience});

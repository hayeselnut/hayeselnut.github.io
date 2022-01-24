import { Atlassian } from './atlassian';
import { WiseTechGlobal } from './wisetech';
import { CSESoc } from './csesoc';

const experiencesOrder = [
  CSESoc,
  Atlassian,
  WiseTechGlobal,
];

export const experiences = experiencesOrder.reduce((a, experience, index) => ({
  ...a,
  [experience.name]: {
    ...experience,
    id: index + 1,
  },
}), {});

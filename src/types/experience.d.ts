import { TechnologyName } from './technology';

export type Experience = {
  id: ExperienceName;
  name: string;
  role: string;
  startDate: Date;
  endDate: Date | null;
  stack: TechnologyName[];
  color: string;
  logo: string;
  badge: string;
  description: JSX.Element;
};

export type ExperienceName =
  | 'atlassian'
  | 'wisetech'
  | 'csesoc-studex-director'
  | 'csesoc-secretary'
  | 'jane-street-intern'
  | 'jane-street-full-time';

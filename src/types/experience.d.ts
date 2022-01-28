import { TechnologyName } from './technology';

export type Experience = {
    id: number,
    name: ExperienceName,
    position: string,
    startDate: Date,
    endDate: Date | null,
    stack: TechnologyName[],
    color: string,
    logo: string,
    badge: string,
    description: JSX.Element,
}

export type ExperienceName = 'Atlassian'
                            | 'WiseTech Global'
                            | 'CSE Society UNSW';

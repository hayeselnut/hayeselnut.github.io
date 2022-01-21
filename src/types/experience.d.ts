import { Technology } from './technology-type';

export type Experience = {
    name: ExperienceName,
    position: string,
    startDate: Date,
    endDate: Date | null,
    stack: Technology[],
    color: string,
    logo: string,
    badge: string,
    description: JSX.Element,
}

export type ExperienceName = 'Atlassian'
                            | 'WiseTech Global'
                            | 'CSESoc';

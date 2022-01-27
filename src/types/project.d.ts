import { TechnologyName } from './technology';

export type Project = {
    id: number,
    name: ProjectName,
    category: string,
    participation: boolean,
    stack: TechnologyName[],
    color: string,
    img: string,
    sprite: string,
    description: JSX.Element[],
}

export type ProjectName = 'Deduplicatify'
                        | 'Dewoh'
                        | 'Circles'
                        | 'CSESoc Circles'
                        | 'Stats Watcher'
                        | 'Glojects'
                        | 'Guess the Song'
                        | 'CSElectives'
                        | 'Chaos'
                        | 'soc-announcer'

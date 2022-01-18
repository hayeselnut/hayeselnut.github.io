import { Technology } from './technology-type';

export type Project = {
    name: ProjectName,
    category: string,
    participation: boolean,
    stack: Technology[],
    color: string,
    img: string,
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

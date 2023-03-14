export type Technology = {
    name: TechnologyName,
    colors: TechnologyColors,
    link: string,
};

export type TechnologyColors = [string, string, string, string];

export type TechnologyName = 'c'
                            | 'c++'
                            | 'c#'
                            | 'python'

                            | 'java'
                            | 'kotlin'
                            | 'spring boot'

                            | 'swift'

                            | 'html'
                            | 'css'
                            | 'javascript'
                            | 'typescript'
                            | 'react'
                            | 'vue'
                            | 'apps script'

                            | 'bash'
                            | 'perl'

                            | 'haskell'
                            | 'ocaml'

                            | 'rust'
                            | 'go'

                            | 'aws'
                            | 'gcp'
                            | 'azure'
                            | 'terraform'

                            | 'docker'
                            | 'kubernetes'
                            | 'heroku'

                            | 'sql'
                            | 'firebase'
                            | 'mongodb'
                            | 'druid';

// TODO: jira, confluence, git, office

export interface ChecksType {
  id: string
  text: string
}

export interface CheckListType {
  id: string
  title?: string
  checks?: ChecksType[]
}

export const CardOnEachPage = 5

export const CheckListData: CheckListType[] = [
  {
    id: '1',
    title: 'mark1',
    checks: [
      {
        id: '1a',
        text: 'Have make all p0 features.',
      },
      {
        id: '1b',
        text: 'Deployed on GitHub using Github Desktop/CLI.',
      },
      {
        id: '1c',
        text: 'Hosted on netlify/vercel using github/CLI.',
      },
    ],
  },
  {
    id: '2',
    title: 'mark2',
    checks: [
      {
        id: '2a',
        text: 'Have make all p0 features.',
      },
      {
        id: '2b',
        text: 'Have make all p0 features.',
      },
      {
        id: '2c',
        text: 'Deployed on GitHub using Github Desktop/CLI.',
      },
      {
        id: '2d',
        text: 'Hosted on netlify/vercel using github/CLI.',
      },
    ],
  },
  {
    id: '3',
    title: 'mark3',
    checks: [
      {
        id: '3a',
        text: 'Have make all p0 features.',
      },
      {
        id: '3b',
        text: 'Deployed on GitHub using Github Desktop/CLI.',
      },
      {
        id: '3c',
        text: 'Hosted on netlify/vercel using github/CLI.',
      },
    ],
  },
  {
    id: '4',
    title: 'mark4',
    checks: [
      {
        id: '4a',
        text: 'Have make all p0 features.',
      },
      {
        id: '4b',
        text: 'Deployed on GitHub using Github Desktop/CLI.',
      },
      {
        id: '4c',
        text: 'Hosted on netlify/vercel using github/CLI.',
      },
    ],
  },
  {
    id: '5',
    title: 'mark5',
    checks: [
      {
        id: '5a',
        text: 'Have make all p0 features.',
      },
      {
        id: '5b',
        text: 'Have make all p0 features.',
      },
      {
        id: '5c',
        text: 'Deployed on GitHub using Github Desktop/CLI.',
      },
      {
        id: '5d',
        text: 'Hosted on netlify/vercel using github/CLI.',
      },
    ],
  },
  {
    id: '6',
    title: 'mark6',
    checks: [
      {
        id: '6a',
        text: 'Have make all p0 features.',
      },
      {
        id: '6b',
        text: 'Deployed on GitHub using Github Desktop/CLI.',
      },
      {
        id: '6c',
        text: 'Hosted on netlify/vercel using github/CLI.',
      },
    ],
  },
]

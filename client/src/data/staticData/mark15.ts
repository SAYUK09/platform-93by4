import { v4 as uuid } from 'uuid'

export interface ChecksType {
  id: string
  text: string
}

export interface CheckListType {
  id: string
  title?: string
  checks?: ChecksType[]
}

export const CardOnEachPage = 4

export const CheckListData: CheckListType[] = [
  {
    id: uuid(),
    title: 'mark1',
    checks: [
      {
        id: uuid(),
        text: 'Have make all p0 features.',
      },
      {
        id: uuid(),
        text: 'Deployed on GitHub using Github Desktop/CLI.',
      },
      {
        id: uuid(),
        text: 'Hosted on netlify/vercel using github/CLI.',
      },
    ],
  },
  {
    id: uuid(),
    title: 'mark2',
    checks: [
      {
        id: uuid(),
        text: 'Have make all p0 features.',
      },
      {
        id: uuid(),
        text: 'Have make all p0 features.',
      },
      {
        id: uuid(),
        text: 'Deployed on GitHub using Github Desktop/CLI.',
      },
      {
        id: uuid(),
        text: 'Hosted on netlify/vercel using github/CLI.',
      },
    ],
  },
  {
    id: uuid(),
    title: 'mark3',
    checks: [
      {
        id: uuid(),
        text: 'Have make all p0 features.',
      },
      {
        id: uuid(),
        text: 'Deployed on GitHub using Github Desktop/CLI.',
      },
      {
        id: uuid(),
        text: 'Hosted on netlify/vercel using github/CLI.',
      },
    ],
  },
  {
    id: uuid(),
    title: 'mark4',
    checks: [
      {
        id: uuid(),
        text: 'Have make all p0 features.',
      },
      {
        id: uuid(),
        text: 'Deployed on GitHub using Github Desktop/CLI.',
      },
      {
        id: uuid(),
        text: 'Hosted on netlify/vercel using github/CLI.',
      },
    ],
  },
  {
    id: uuid(),
    title: 'mark5',
    checks: [
      {
        id: uuid(),
        text: 'Have make all p0 features.',
      },
      {
        id: uuid(),
        text: 'Have make all p0 features.',
      },
      {
        id: uuid(),
        text: 'Deployed on GitHub using Github Desktop/CLI.',
      },
      {
        id: uuid(),
        text: 'Hosted on netlify/vercel using github/CLI.',
      },
    ],
  },
  {
    id: uuid(),
    title: 'mark6',
    checks: [
      {
        id: uuid(),
        text: 'Have make all p0 features.',
      },
      {
        id: uuid(),
        text: 'Deployed on GitHub using Github Desktop/CLI.',
      },
      {
        id: uuid(),
        text: 'Hosted on netlify/vercel using github/CLI.',
      },
    ],
  },
]

import { v4 as uuid } from 'uuid'
// status will come from server

export const addmissionStagesData = [
  {
    id: uuid(),
    title: 'Submit your levelZero Portfolio',
    subTitle: 'Current status: submitted',
    link: '/submission/questions',
    status: 'submitted',
  },
  {
    id: uuid(),
    title: 'Give your Interview',
    subTitle: 'Current status: not submitted',
    link: '/',
    status: 'locked',
  },
  {
    id: uuid(),
    title: 'Secure your seat',
    subTitle: 'Current status: not submitted',
    link: '/',
    status: 'locked',
  },
]

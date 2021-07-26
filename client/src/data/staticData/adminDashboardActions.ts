import { v4 as uuid } from 'uuid'

export const adminDashboardActions = [
  {
    id: uuid(),
    title: 'Have you read the review guide',
    link: '/dashboard/review-portfolios',
  },
  {
    id: uuid(),
    title: 'I want to review more portfolios',
    link: '/admin/review-portfolios',
  },
]

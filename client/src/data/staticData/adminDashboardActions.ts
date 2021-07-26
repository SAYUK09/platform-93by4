import { v4 as uuid } from 'uuid';

export const adminDashboardActions = [
  {
    id: uuid(),
    title: 'I am ready to review portfolio',
    link: '/dashboard/review-portfolios',
  },
  {
    id: uuid(),
    title: 'Enough for today, will review tomorrow',
    link: '/',
  },
  
];

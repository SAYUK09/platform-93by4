// status will come from server

export type StatusType = {
  status: string
  level: number
  statusText: string
  statusDescription: string
}

export const statusData:StatusType = {
  status: 'interview_done_passed',
  level: 1, // control the locks
  statusText: 'Portfolio Not Submitted', // show your header
  statusDescription: 'Click on step 1 and submit your portfolio for review.',
}

// data for the step cards

export type StepType = {
  content: string
  link: string
  level: number
}

export const steps: StepType[] = [
  {
    content: 'Submit your portfolio',
    link: '/submission/questions',
    level: 1,
  },
  {
    content: 'Interview',
    link: '/interview',
    level: 2,
  },
  {
    content: 'Payment',
    link: '/payment',
    level: 3,
  },
]

export const submissionSting = 'Submission in Neog camp is a 3 step process : '

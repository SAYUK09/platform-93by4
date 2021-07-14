// status will come from server

export type StatusType = {
  status: string
  level: number
  statusText: string
  statusDescription: string
  color?: string
}

export const data: StatusType[] = [
  {
    status: 'portfolio_not_submitted',
    level: 1, // control the locks
    statusText: 'Portfolio Not Submitted', // show your header
    statusDescription:
      'Please submit your portfolio for review : Click on Step 1',
  },
  {
    status: 'under review',
    level: 1, // control the locks
    statusText: 'Portfolio Under Review', // show your header
    statusDescription: 'Your portfolio is under review.Wait for results. ',
  },
  {
    status: 'portfolio_needs_revision',
    color: 'red',
    level: 1, // control the locks
    statusText: 'Portfolio Needs Revison', // show your header
    statusDescription: 'Click on this and check the review feedback.',
  },
  {
    status: 'portfolio_passed_interview_to_be_scheduled',
    level: 2, // control the locks
    statusText: 'Portfolio Accepted', // show your header
    statusDescription:
      'Hurray !! Interview step unlocked for you . Click on Step 2',
  },
  // {
  //   status: 'interview_scheduled',
  //   level: 2, // control the locks
  //   statusText: 'Interview Sheduled', // show your header
  //   statusDescription: 'Click on step 1 and submit your portfolio for review.',
  // },
  // {
  //   status: 'interview_done_passed',
  //   level: 3, // control the locks
  //   statusText: 'Interview Passed', // show your header
  //   statusDescription: 'Click on step 1 and submit your portfolio for review.',
  // },
  // {
  //   status: 'interview_done_failed',
  //   level: 1, // control the locks
  //   statusText: 'Interview Failed', // show your header
  //   statusDescription: 'Click on step 1 and submit your portfolio for review.',
  // },
  // {
  //   status: 'payment_completed',
  //   level: 3, // control the locks
  //   statusText: 'Payment Completed', // show your header
  //   statusDescription: 'Click on step 1 and submit your portfolio for review.',
  // },
  // {
  //   status: 'enrollment_done',
  //   level: 3, // control the locks
  //   statusText: 'Enrolled in NeoG . Yaay !!', // show your header
  //   statusDescription: 'Click on step 1 and submit your portfolio for review.',
  // },
]
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
    content: 'Give your Interview',
    link: '/interview',
    level: 2,
  },
  {
    content: 'Secure your seat',
    link: '/payment',
    level: 3,
  },
]

export const submissionSting = 'Submission in neoG Camp is a 3-step process:'

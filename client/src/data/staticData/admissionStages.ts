// statusData will come from server

export const statusData =  {
  status: "interview_done_passed",
  level: 1, // control the locks
  statusText: "Portfolio Not Submitted", // show your header
  statusDescription: "Click on step 1 and submit your portfolio for review.",
}


// data for the step cards 

export const steps = [
  {
    content: "Submit your portfolio",
    link: "/portfolio",
    level: 1,
  },
  {
    content: "Interview",
    link: "/interview",
    level: 2,
  },
  {
    content: "Payment",
    link: "/payment",
    level: 3,
  },
];

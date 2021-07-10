export interface ChecksType {
  id: string
  text: string
}

export interface CheckListType {
  id: string
  markNumber?: string
  title?: string
  checks?: ChecksType[]
}

export const CardOnEachPage = 5

export const CheckListData: CheckListType[] = [
  {
    id: '1',
    markNumber: 'markOne',
    title: 'Do you know me? CLI App',
    checks: [
      {
        id: '1a',
        text: 'Take Username as input.',
      },
      {
        id: '1b',
        text: 'Should have atleast 5 questions.',
      },
      {
        id: '1c',
        text: 'Display Score',
      },
    ],
  },
  {
    id: '2',
    markNumber: 'markTwo',
    title: 'Quiz CLI App',
    checks: [
      {
        id: '2a',
        text: 'Features Implemented in markOne',
      },
      {
        id: '2b',
        text: 'Use CHALK to make it more Impressive',
      },
      {
        id: '2c',
        text: 'Implement Highest Score feature. Hint: Use array data structure and sorting',
      },
    ],
  },
  {
    id: '3',
    markNumber: 'markThree',
    title: 'Hosting your website with Github + Netlify Integration',
    checks: [
      {
        id: '3a',
        text: 'Push source code of your apps on Github with good commit messages.',
      },
      {
        id: '3b',
        text: 'Have a README file and include details of project.',
      },
      {
        id: '3c',
        text: 'Host your website on Netlify.',
      },
    ],
  },
  {
    id: '4',
    markNumber: 'markFour',
    title: 'Portfolio Website',
    checks: [
      {
        id: '4a',
        text: 'Have a home page with your Intro, Projects and Blogs section with call to action button for those pages.',
      },
      {
        id: '4b',
        text: 'Have a Projects page with all your apps listed in it with call to action buttons for live links and source code.',
      },
    ],
  },
  {
    id: '5',
    markNumber: 'markFive',
    title: 'Adding Blogs in Portfolio Website',
    checks: [
      {
        id: '5a',
        text: 'Add a Blogs page and list atleast 2 blogs in it with call to action button for blog link.',
      },
      {
        id: '5b',
        text: 'Create a dummy blog with atleast 150 words or link real blogs published by you on Hashnode, Dev.to etc.',
      },
    ],
  },
  {
    id: '6',
    markNumber: 'markSix',
    title: 'Minions Speak App',
    checks: [
      {
        id: '6a',
        text: 'Use Minion Fun translation API (https://funtranslations.com/minion) for web app.',
      },
      {
        id: '6b',
        text: 'Create the app with your own design.',
      },
    ],
  },
  {
    id: '7',
    markNumber: 'markSeven',
    title: 'Fun Translation App',
    checks: [
      {
        id: '7a',
        text: 'Use Fun translation API (https://funtranslations.com/) for web app.',
      },
      {
        id: '7b',
        text: 'Create the app with your own design.',
      },
    ],
  },
  {
    id: '8',
    markNumber: 'markEight',
    title: 'Know your Emoji',
    checks: [
      {
        id: '8a',
        text: 'Have atleast 10 emojis.',
      },
      {
        id: '8b',
        text: 'Display the name on emoji on click.',
      },
      {
        id: '8c',
        text: 'Display the name of emoji on input in search box.',
      },
      {
        id: '8d',
        text: 'Display a message for emoji not found.',
      },
    ],
  },
  {
    id: '9',
    markNumber: 'markNine',
    title: 'Books Suggestion',
    checks: [
      {
        id: '9a',
        text: 'Have atleast 3 genres for the topic you select.',
      },
      {
        id: '9b',
        text: 'Have atleast 2 books in each category.',
      },
      {
        id: '9c',
        text: 'Add Description and ratings for each book.',
      },
      {
        id: '9d',
        text: 'Make it your own app by using your own design.',
      },
    ],
  },
  {
    id: '10',
    markNumber: 'markTen',
    title: 'Cash Register Manager',
    checks: [
      {
        id: '10a',
        text: 'Your program has currencies of Rs. 1, 5, 10, 20, 100, 500, 2000.',
      },
      {
        id: '10b',
        text: 'Your user enters a bill amount say Rs. 243.',
      },
      {
        id: '10c',
        text: 'Your user then enters a cash given say Rs. 2000.',
      },
      {
        id: '10d',
        text: 'Now, help the user by telling how can he/she return the change to the customer with minimum number of notes?',
      },
    ],
  },
  {
    id: '11',
    markNumber: 'markEleven',
    title: 'Lucky Birthday Number',
    checks: [
      {
        id: '11a',
        text: "Take user's complete birthday",
      },
      {
        id: '11b',
        text: 'Take his/her lucky number.',
      },
      {
        id: '11c',
        text: 'Find out if sum of digits of birthday is divisible by the lucky number.',
      },
      {
        id: '11d',
        text: 'Show the result to user with some graphics.',
      },
      {
        id: '11e',
        text: "Create this as a website, put a privacy notice. Say that you're not storing data.",
      },
    ],
  },
  {
    id: '12',
    markNumber: 'markTwelve',
    title: 'Do you know your triangles?',
    checks: [
      {
        id: '12a',
        text: 'Ask user to input three angles and you say whether user has entered angles which could make a triangle. Hint: sum of angles in triangle is 180.',
      },
      {
        id: '12b',
        text: 'Show three angles to the user and ask if this triangle is an obtuse triangle, right triangle or acute triangle.',
      },
      {
        id: '12c',
        text: 'Show two angles to the user and ask what would be the third angle?',
      },
      {
        id: '12d',
        text: 'Similar quiz on Isosceles, Equilateral.',
      },
      {
        id: '12e',
        text: 'Ask user to enter two legs and you tell them the hypotenuse.',
      },
      {
        id: '12f',
        text: 'Calculator for area of triangle',
      },
    ],
  },
  {
    id: '13',
    markNumber: 'markThirteen',
    title: 'Palindrome Birthday',
    checks: [
      {
        id: '13a',
        text: "Take your user's birthday",
      },
      {
        id: '13b',
        text: 'Tell whether user was born on a palindrome day or not.',
      },
      {
        id: '13c',
        text: 'You can put dates in MM/DD/YYYY format, DD/MM/YYYY, MM/DD/YY format etc. to check if they have any chance.',
      },
      {
        id: '13d',
        text: 'If not, then tell them what is the nearest date from their birthdate which is a palindrome date and by how many days they missed it.',
      },
    ],
  },
  {
    id: '14',
    markNumber: 'markFourteen',
    title: 'Profit and loss calculator',
    checks: [
      {
        id: '14a',
        text: "Take user's stock price for one stock when he bought it",
      },
      {
        id: '14b',
        text: 'Take the quantity of stocks',
      },
      {
        id: '14c',
        text: "Take today's stock price for that stock",
      },
      {
        id: '14d',
        text: 'Tell the user how much profit or loss he/she is making',
      },
      {
        id: '14e',
        text: 'Tell them the percentage of profit or loss',
      },
    ],
  },
  {
    id: '15',
    markNumber: 'markFifteen',
    title: 'Blog and Social Media',
    checks: [
      {
        id: '15a',
        text: 'Write atleast 2 blogs',
      },
      {
        id: '15b',
        text: 'Each blog should have atleast 200 words.',
      },
      {
        id: '15c',
        text: 'Add your social media links to your portfolio website.',
      },
    ],
  },
]

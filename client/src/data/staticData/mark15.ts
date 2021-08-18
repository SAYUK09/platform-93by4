export interface ChecksType {
  id: string
  text: string
}

export interface CheckListType {
  id: string
  title?: string
  projectName?: string
  checks?: ChecksType[]
}

export const CardOnEachPage = 5

export const CheckListData: CheckListType[] = [
  {
    id: '1',
    title: 'markOne',
    projectName: 'Do you know me? CLI Quiz App',
    checks: [
      {
        id: '1a',
        text: 'The quiz can be "Do you know me" or a similar CLI QUIZ on any other topic too. Take Username as input.',
      },
      {
        id: '1b',
        text: 'Have at least 5 questions.',
      },
      {
        id: '1c',
        text: 'Display the final score to the user',
      },
    ],
  },
  {
    id: '2',
    title: 'markTwo',
    projectName: 'Fandom quiz. CLI Fandom Quiz App',
    checks: [
      {
        id: '2a',
        text: "Make a quiz on anything you're passionate about, similar to markOne.",
      },
      {
        id: '2b',
        text: 'Take Username as input.',
      },
      {
        id: '2c',
        text: 'Have at least 5 questions.',
      },
      {
        id: '2d',
        text: 'Display the final score to the user',
      },
    ],
  },
  {
    id: '3',
    title: 'markThree',
    projectName: 'Hosting your website with Github + Netlify Integration',
    checks: [
      {
        id: '3a',
        text: 'Create a different repository for every different project and push the changes.',
      },
      {
        id: '3b',
        text: 'Push source code of your apps on Github with good commit messages.',
      },
      {
        id: '3c',
        text: 'Have a README file and include details of project.',
      },
      {
        id: '3d',
        text: 'Update your hosted Repl URL on GitHub.',
      },
    ],
  },
  {
    id: '4',
    title: 'markFour',
    projectName: 'Portfolio Website',
    checks: [
      {
        id: '4a',
        text: 'Have a home page with your Introduction, Projects, and Blogs section with call to action buttons for those pages.',
      },
      {
        id: '4b',
        text: 'Have a Projects page with all your apps listed in it with the call to action buttons for live links and source code.',
      },
      {
        id: '4c',
        text: 'Host your portfolio on Netlify / vercel like platforms as shown in the live Youtube video taught by Tanay.',
      },
      {
        id: '4d',
        text: 'It is mandatory to put all your projects, blogs and social media handles majorly Twitter, LinkedIn in your portfolio.',
      },
    ],
  },
  {
    id: '5',
    title: 'markFive',
    projectName: 'Adding Blogs in Portfolio Website',
    checks: [
      {
        id: '5a',
        text: 'Have a Blog listing page as taught in the Youtube lecture video for example: (https://adarshbalika.netlify.app/blogs.html).',
      },
      {
        id: '5b',
        text: 'Your blog listing page should list down all your blogs with either link to your Hashnode, dev.to etc. blogs or your blog reading pages, with a call-to-action button for READ MORE.',
      },
    ],
  },
  {
    id: '6',
    title: 'markSix',
    projectName: 'Minions Speak App',
    checks: [
      {
        id: '6a',
        text: 'Make the same app as made by Tanay in live video in VanillaJS. Use Minion Fun translation API (https://funtranslations.com/minion) for the web app.',
      },
      {
        id: '6b',
        text: "The app should take in input and translate the input into Minion's language.",
      },
      {
        id: '6c',
        text: 'Create the app with your own design.',
      },
    ],
  },
  {
    id: '7',
    title: 'markSeven',
    projectName: 'Fun Translation App',
    checks: [
      {
        id: '7a',
        text: 'Use Fun translation API (https://funtranslations.com/) and create another fun translation app in VanillaJS.',
      },
      {
        id: '7b',
        text: 'All the features implemented in markSix should also be present in this app.',
      },
      {
        id: '7c',
        text: 'The app should take in input and translate the input into the respective chosen language.',
      },
      {
        id: '7d',
        text: 'Create the app with your own design.',
      },
    ],
  },
  {
    id: '8',
    title: 'markEight',
    projectName: 'Know your Emoji',
    checks: [
      {
        id: '8a',
        text: 'Make emoji interpreter using React as we made in the live Youtube session.',
      },
      {
        id: '8b',
        text: 'Change & customize it by yourself.',
      },
      {
        id: '8c',
        text: 'Have atleast 10 emojis.',
      },
      {
        id: '8d',
        text: 'Display the name on emoji on click.',
      },
      {
        id: '8e',
        text: 'Display the name of emoji on input in search box.',
      },
      {
        id: '8f',
        text: 'Display a message for emoji not found.',
      },
    ],
  },
  {
    id: '9',
    title: 'markNine',
    projectName: 'Recommendation app',
    checks: [
      {
        id: '9a',
        text: 'This app should be similar to Goodbooks recommendation using React showed by Tanay in a Youtube video.',
      },
      {
        id: '9b',
        text: "You can choose to have different genres of something you're interested in: Music, Food, Travel, etc.",
      },
      {
        id: '9c',
        text: 'List categories for the chosen genres for your recommendation app.',
      },
      {
        id: '9d',
        text: 'When the user clicks on one category, display a list of items in that category with its details.',
      },
      {
        id: '9e',
        text: 'Have at least 3 items in each category.',
      },
      {
        id: '9f',
        text: 'Add Description and ratings for each item.',
      },
      {
        id: '9g',
        text: 'Create the app with your design.',
      },
    ],
  },
  {
    id: '10',
    title: 'markTen',
    projectName: 'Cash Register Manager',
    checks: [
      {
        id: '10a',
        text: 'You should build a cash register manager in VanillaJS or React.',
      },
      {
        id: '10b',
        text: 'Your app should have currencies of Rs. 1, 5, 10, 20, 100, 500, 2000.',
      },
      {
        id: '10c',
        text: 'Have an input field for the user aka cashier to enter a bill amount.',
      },
      {
        id: '10d',
        text: 'Have an input field for the user aka cashier to enter the cash given by the customer.',
      },
      {
        id: '10e',
        text: 'The app should tell the cashier/user the amount to be returned in change to the customer with the minimum number of notes.',
      },
    ],
  },
  {
    id: '11',
    title: 'markEleven',
    projectName: 'Is your Birthday Lucky?',
    checks: [
      {
        id: '11a',
        text: 'You should build a "Is your birthday lucky" app in VanillaJS or React.',
      },
      {
        id: '11b',
        text: "Have an input field to take the user's complete birth date.",
      },
      {
        id: '11c',
        text: "Have an input field for the user's to enter their lucky number.",
      },
      {
        id: '11d',
        text: 'Your app should calculate if the sum of digits of birthdate is divisible by the lucky number.',
      },
      {
        id: '11e',
        text: 'Show the output if the birthdate is lucky or not to the user depending on the calculated results.',
      },
    ],
  },
  {
    id: '12',
    title: 'markTwelve',
    projectName: 'Do you know your triangles?',
    checks: [
      {
        id: '12a',
        text: 'You should build a "Do you know triangles?" app in VanillaJS or React.',
      },
      {
        id: '12b',
        text: 'Your app should contain the 4 features mentioned below:',
      },
      {
        id: '12c',
        text: '1. Quiz on triangles- Make a Quiz on triangles and calculate the score of the user.',
      },
      {
        id: '12d',
        text: '2. Calculate the length of the hypotenuse- Have two input fields for base value & height value, calculate the hypotenuse of the triangle, and show the output to the user.',
      },
      {
        id: '12e',
        text: "3. Calculate the area of the triangle- Make a calculator which calculates the area of a triangle using the user's input and shows the output to the user.",
      },
      {
        id: '12f',
        text: '4. Check whether angles form a triangle - Have three input fields to take three angles from the user and calculate whether the angles entered by the user form a triangle or not and show the respective output to the user.',
      },
    ],
  },
  {
    id: '13',
    title: 'markThirteen',
    projectName: 'Palindrome Birthday',
    checks: [
      {
        id: '13a',
        text: 'You should build a "Is your birthday a palindrome?" app in VanillaJS or React.',
      },
      {
        id: '13b',
        text: "Have an input field to take the user's complete birth date.",
      },
      {
        id: '13c',
        text: 'You must use one of these formats to put dates eg: MM/DD/YYYY, DD/MM/YYYY, MM/DD/YY, etc. Having atleast one date-format out of these is mandatory, adding extra date formats is a bonus (optional). Make sure to check whether the date can be a palindrome date or not',
      },
      {
        id: '13d',
        text: 'Show the output whether the user was born on a palindrome date or not.',
      },
    ],
  },
  {
    id: '14',
    title: 'markFourteen',
    projectName: 'Profit and loss calculator (stocks)',
    checks: [
      {
        id: '14a',
        text: 'You should build a Profit or Loss calculator app in VanillaJS or React.',
      },
      {
        id: '14b',
        text: 'Have an input field to take the price of one stock when the user bought it.',
      },
      {
        id: '14c',
        text: 'Have an input field to take the quantity of the stocks.',
      },
      {
        id: '14d',
        text: 'Have an input field to take the current price per stock.',
      },
      {
        id: '14e',
        text: 'Show the total profit or loss made by the user in percentage and absolute value.',
      },
    ],
  },
  {
    id: '15',
    title: 'markFifteen',
    projectName: 'Blog and Social Media',
    checks: [
      {
        id: '15a',
        text: "Write at least 2 blogs, minimum of 200 words, and host them on your portfolio's blog page section. The blog could be technical or non-technical.",
      },
      {
        id: '15b',
        text: 'Have a mandatory LinkedIn profile and add it to your portfolio.',
      },
      {
        id: '15c',
        text: 'Make sure your blogs are not copied or plagiarised.',
      },
    ],
  },
  {
    id: '16',
    title: 'Final checks',
    projectName: 'Mandatory checks for all projects',
    checks: [
      {
        id: '16a',
        text: "You should have both: a. The project's Github source-code link. b. The live project link of the projects in your portfolio.",
      },
      {
        id: '16b',
        text: 'Make sure all the links are live and working.',
      },
      {
        id: '16c',
        text: 'You should not copy any project or blog which will reduce your chances of getting a mark15 and you might be blacklisted from the admission process if you are aiming to apply for level one.',
      },
      {
        id: '16d',
        text: 'I understand that if any of tasks are incomplete or invalid, I will be asked to resubmit my portfolio. The resubmission would be treated as a new submission and your submission number will be updated.',
      },
    ],
  },
]

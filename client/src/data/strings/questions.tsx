import { Text } from '@chakra-ui/react'
import { v4 as uuid } from 'uuid'
import { theme } from '../../themes'

export const QuestionData = [
  {
    id: uuid(),
    title: 'Have You completed levelZero?',
    subTitle: (
      <>
        if not,{' '}
        <a href={`https://handbook.neog.camp/guide/home`}>
          <Text color={theme.colors.brand['500']} display={'inline'}>
            here&apos;s the link
          </Text>
        </a>{' '}
        to the guide.
      </>
    ),
    link: '/',
  },
  {
    id: uuid(),
    title: 'Do you know about mark15?',
    subTitle: (
      <>
        if not,{' '}
        <a href={`https://handbook.neog.camp/guide/home`}>
          <Text color={theme.colors.brand['500']} display={'inline'}>
            here&apos;s the info{' '}
          </Text>
        </a>
        on it.
      </>
    ),
    link: '/',
  },
  {
    id: uuid(),
    title: 'Ready to submit your Portfolio?',
    subTitle: (
      <>
        Go to the mark15 checklist and see if you&apos;ve everything in place to{' '}
        <span>submit your portfolio</span>
      </>
    ),
    link: '/submission/checklist',
  },
]

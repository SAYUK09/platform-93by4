import { Text } from '@chakra-ui/react'
import { v4 as uuid } from 'uuid'
import { theme } from '../../themes'

export const QuestionData = [
  {
    id: uuid(),
    title: 'Have you completed levelZero?',
    subTitle: (
      <>
        If not,{' '}
        <a target="_blank" href={`https://handbook.neog.camp/guide/home`}>
          <Text color={theme.colors.brand['500']} display={'inline'}>
            here&apos;s the link
          </Text>
        </a>{' '}
        to the guide.
      </>
    ),
    link: 'https://handbook.neog.camp/guide/home',
  },
  {
    id: uuid(),
    title: 'Do you know about mark15?',
    subTitle: (
      <>
        If not,{' '}
        <a target="_blank" href={`https://neog.camp/qualifier/point-system`}>
          <Text color={theme.colors.brand['500']} display={'inline'}>
            here&apos;s the link{' '}
          </Text>
        </a>
        to the mark15 guide.
      </>
    ),
    link: 'https://neog.camp/qualifier/point-system',
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

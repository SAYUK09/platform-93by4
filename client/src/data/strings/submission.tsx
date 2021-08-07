import { Text, Link } from '@chakra-ui/react'
import { theme } from '../../themes'

export const SubmissionData = {
  heading: 'Congrats, your portfolio is ready to submit!',
  text: 'Submit your portfolio for review:',
}

export const ResubmissionData = {
  heading: 'Kudos! Are you ready to re-submit?',
  discription: (
    <>
      Please check the feedback provided by the reviewer and re-submit your
      complete portfolio. We would encourage you to go through{' '}
      <Text color={theme.colors.brand['500']} d="inline">
        {' '}
        <Link href="https://neog.camp/qualifier/point-system" isExternal>
          mark15 guide
        </Link>
      </Text>{' '}
      once more too.{' '}
    </>
  ),
  title: 'You did a great job, but missed a few things.',
  subTitle:
    'Your portfolio needs revision and resubmission. Here are a few pointers and feedback:',
}

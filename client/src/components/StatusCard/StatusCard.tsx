import React from 'react'
import { Flex, Heading, Spacer, Text, Image } from '@chakra-ui/react'
import DashboardImage from '../../images/dashboard-girl.svg'
import { theme } from '../../themes'
import StatusIllustration from './StatusIllustration'

export function StatusCard({ status, bgColor, step, submissionNo }: any) {
  return (
    <Flex
      bgColor={bgColor}
      p={8}
      borderRadius={9.5}
      flexDir={['column-reverse', 'column-reverse', 'row']}
    >
      <Flex
        flexDir="column"
        justifyContent="center"
        width={['100%', '100%', '60%']}
      >
        <a
          href={
            status.status == 'portfolio_needs_revision' ? '/resubmission' : ''
          }
        >
          {' '}
          <Heading
            fontSize={['xl', '2xl', '3xl']}
            color={theme.colors.brand['500']}
          >
            {' '}
            Current Status :{' '}
            <Heading
              fontSize={['xl', '2xl', '3xl']}
              as="span"
              color={status?.color == 'red' ? '#F13C3C' : theme.colors.white}
            >
              {' ' + status.statusText}
              <br />
            </Heading>
          </Heading>
        </a>

        <Text
          fontSize="lg"
          fontWeight="500"
          color={theme.colors.white}
          py={2}
          pt={4}
        >
          {status.statusDescription} <br />
          {submissionNo !== null &&
            status.status == 'under review' &&
            'Submission Number : #' + submissionNo}
        </Text>
      </Flex>
      <Spacer />
      <Flex justifyContent="center" margin={['2rem', ' 1rem', '0rem']}>
        <StatusIllustration />
      </Flex>
    </Flex>
  )
}

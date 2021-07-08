import React from 'react'
import { Flex, Box, Heading } from '@chakra-ui/react'
import { LockIcon, ExternalLinkSvg } from '..'
import { theme } from '../../themes'
import Link from 'next/link'
import { StepType, StatusType } from '../../data/staticData/admissionStages'

type StepcardProps = {
  bgColor: string
  step: StepType
  status: StatusType
  index: number
}

export function StepCard({ bgColor, step, status, index }: StepcardProps) {
  return (
    <Flex
      flexDir={'row'}
      alignItems="center"
      justifyContent="space-between"
      bgColor={bgColor}
      borderRadius={9.5}
      px={[6, 8, 8]}
      py={[4, 6, 6]}
      mb={[2, 3, 3]}
    >
      <Box m={2}>
        <LockIcon index={index} locked={status.level < step.level} />
      </Box>
      <Heading
        as="h3"
        fontSize={['sm', 'md', 'lg']}
        flex="auto"
        color={theme.colors.gray['100']}
      >
        {step.content}
      </Heading>

      {status.level == step.level ? (
        status.status == 'portfolio_under_review' ? (
          <a>{<ExternalLinkSvg color={theme.colors.black['700']} />}</a>
        ) : status.status == 'portfolio_needs_revision' ? (
          <Link href="/resubmission">
            <a>{<ExternalLinkSvg color={theme.colors.black['100']} />}</a>
          </Link>
        ) : (
          <Link href={step.link}>
            <a>{<ExternalLinkSvg color={theme.colors.black['100']} />}</a>
          </Link>
        )
      ) : (
        <a>{<ExternalLinkSvg color={theme.colors.black['700']} />}</a>
      )}
    </Flex>
  )
}

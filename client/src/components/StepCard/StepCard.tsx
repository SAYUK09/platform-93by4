import React from 'react'
import { Flex, Box, Heading, chakra } from '@chakra-ui/react'
import { LockIcon, ExternalLinkSvg } from '..'
import { theme } from '../../themes'
import Link from 'next/link'
import { StepType, StatusType } from '../../data/staticData/admissionStages'
import { HiArrowCircleRight } from 'react-icons/hi'

type StepcardProps = {
  bgColor: string
  step: StepType
  status: StatusType
  index: number
}

export function StepCard({ bgColor, step, status, index }: StepcardProps) {
  let portfolioSubmissionstatus = 'Not Started'
  if (status.status == 'portfolio_not_submitted') {
    portfolioSubmissionstatus = 'Not Started'
  } else if (
    status.status == 'under review' ||
    status.status == 'portfolio_needs_revision'
  ) {
    portfolioSubmissionstatus = 'In Progress'
  } else {
    portfolioSubmissionstatus = 'Completed'
  }
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
        width="100%"
        d="flex"
        flexDirection={['column', 'inherit']}
      >
        {step.content}{' '}
        <chakra.span
          color={theme.colors.black[500]}
          paddingLeft={['0', '20px']}
        >
          {step.content == 'Submit your portfolio' &&
            `( ${portfolioSubmissionstatus} )`}{' '}
        </chakra.span>
      </Heading>

      {status.level == step.level ? (
        status.status == 'portfolio_under_review' ? (
          <a>{<ExternalLinkSvg color={theme.colors.black['700']} />}</a>
        ) : status.status == 'portfolio_needs_revision' ? (
          <Link href="/resubmission">
            <a>
              {
                <HiArrowCircleRight
                  color={theme.colors.black['100']}
                  style={{ height: '30px', width: '30px' }}
                />
              }
            </a>
          </Link>
        ) : (
          <Link href={step.link}>
            <a>
              {
                <HiArrowCircleRight
                  color={theme.colors.black['100']}
                  style={{ height: '30px', width: '30px' }}
                />
              }
            </a>
          </Link>
        )
      ) : (
        <a>
          {
            <HiArrowCircleRight
              color={theme.colors.black['700']}
              style={{ height: '30px', width: '30px' }}
            />
          }
        </a>
      )}
    </Flex>
  )
}

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
  console.log('Linkkkkkkk', step.link)
  return (
    <Flex
      flexDir={['column', 'column', 'row']}
      alignItems="center"
      justifyContent="space-between"
      bgColor={bgColor}
      borderRadius={5}
      px={8}
      py={4}
      mb={3}
    >
      <Box m={2}>
        <LockIcon index={index} locked={status.level < step.level} />
      </Box>
      <Heading as="h3" size="md" flex="auto" color={theme.colors.gray['100']}>
        {step.content}
      </Heading>

      {status.level == step.level ? (
        <Link href={step.link}>
          <a>{<ExternalLinkSvg color={theme.colors.black['300']} />}</a>
        </Link>
      ) : (
        <Link href={step.link}>
          <a>{<ExternalLinkSvg color={theme.colors.black['500']} />}</a>
        </Link>
      )}
    </Flex>
  )
}

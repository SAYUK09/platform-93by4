import React from 'react'
import { Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import Image from 'next/image'
import DashboardImage from '../../images/dashboard-girl.svg'
import { theme } from '../../themes'
export function StatusCard({ status, bgColor, step }: any) {
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
              color={
                status?.color == 'red' ? '#F13C3C' : theme.colors.brand['500']
              }
            >
              {' ' + status.statusText}
            </Heading>
          </Heading>
        </a>

        <Text
          fontSize="xl"
          fontWeight="500"
          color={theme.colors.white}
          py={2}
          pt={4}
        >
          {status.statusDescription}
        </Text>
      </Flex>
      <Spacer />
      <Flex justifyContent="center" margin={['2rem', ' 1rem', '0rem']}>
        <Image src={DashboardImage} />
      </Flex>
    </Flex>
  )
}

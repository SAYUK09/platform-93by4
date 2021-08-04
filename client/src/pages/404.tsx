import React from 'react'

import Link from 'next/link'
import Head from 'next/head'
import { Heading, Box, Flex, Text, Image } from '@chakra-ui/react'
import { Navbar } from '../components'

const Error = () => {
  return (
    <div>
      <Head>
        <title>404 | neoG.camp</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Flex
        backgroundColor="blackAlpha.900"
        align="center"
        justify={{ base: 'center' }}
        direction={{ base: 'column', md: 'column', sm: 'column' }}
        minH="100vh"
      >
        <Box padding="2rem">
          <Image src={'/svgs/notFound.svg'} alt={`user-pic`} />
        </Box>

        <Box margin={'2rem'}>
          <Heading as="h3" size="lg" color="whiteAlpha.900">
            Oops! The page you’re trying to reach doesn’t exist.
          </Heading>

          <Link href="/">
            <Text color="blue.300" textDecoration="underline" cursor="pointer">
              Click here to go back home
            </Text>
          </Link>
        </Box>
      </Flex>
    </div>
  )
}

export default Error
